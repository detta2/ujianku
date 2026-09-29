/* POST /api/ranked/submit — kirim hasil match ranked.
 * Body: { level, points, correct, total, durationMs, migrate? }
 * migrate = { SD:{points,matches,best}, ... } (sekali saja, dari localStorage)
 */
var lib = require("../../lib/apilib");

module.exports = async function (req, res) {
  if (req.method !== "POST") return lib.send(res, 405, { ok: false, error: "POST saja" });
  try {
    var u = await lib.requireUser(req);
    var body = await lib.readBody(req);
    var level = String(body.level || "").toUpperCase();
    if (lib.LEVELS.indexOf(level) < 0) throw lib.bad("Divisi tidak valid");
    var points = Math.floor(lib.num(body.points, -1));
    var correct = Math.floor(lib.num(body.correct, -1));
    var durationMs = Math.floor(lib.num(body.durationMs, 0));

    /* --- anti-cheat: sanity checks --- */
    if (!(correct >= 0 && correct <= 30)) throw lib.bad("correct tidak valid");
    if (!(points >= 0 && points <= 450)) throw lib.bad("points tidak valid");
    if (points < correct * 10 || points > correct * 15) throw lib.bad("points tidak konsisten");
    /* tiap soal ada jeda auto-lanjut 800ms -> 30 soal minimal ~24 detik */
    if (!(durationMs >= 20000 && durationMs <= 3600000)) throw lib.bad("durasi tidak valid");

    if (await lib.kvcmd("SISMEMBER", "bans", u.sub)) {
      var be = new Error("banned"); be.code = "BANNED"; throw be;
    }

    /* rate limit: 30 submit / jam / pemain */
    var bucket = Math.floor(Date.now() / 3600000);
    var rlKey = "rl:" + u.sub + ":" + bucket;
    var n = await lib.kvcmd("INCR", rlKey);
    if (n === 1) await lib.kvcmd("EXPIRE", rlKey, 3700);
    if (n > 30) throw lib.bad("Kebanyakan main, istirahat dulu ☕");

    /* flag mencurigakan (tetap diterima, masuk daftar review admin) */
    var flagged = [];
    if (durationMs < 60000) flagged.push("durasi " + Math.round(durationMs / 1000) + " dtk (<60)");
    if (points >= 430) flagged.push("poin " + points + " (nyaris sempurna)");

    var now = Date.now();
    var out = await lib.kvpipe([
      ["HSET", "p:" + u.sub, "name", u.name || "", "email", u.email || "", "pic", u.picture || "", "seen", String(now)],
      ["SADD", "players", u.sub],
      ["HGETALL", "rk:" + level + ":" + u.sub],
    ]);
    var cur = lib.hgetallToObj(out[2]);
    var curPoints = lib.num(cur.points, 0);
    var curMatches = lib.num(cur.matches, 0);
    var curBest = lib.num(cur.best, 0);

    var addPoints = points, addMatches = 1, newBest = Math.max(curBest, points);
    /* migrasi sekali: total lokal (HP) digabung hanya bila server masih kosong */
    var migrated = false;
    if (body.migrate && curMatches === 0 && curPoints === 0) {
      var mg = body.migrate[level] || {};
      addPoints += Math.min(Math.floor(lib.num(mg.points, 0)), 20000);
      addMatches += Math.min(Math.floor(lib.num(mg.matches, 0)), 500);
      newBest = Math.max(newBest, Math.min(Math.floor(lib.num(mg.best, 0)), 450));
      migrated = true;
    }
    var newPoints = curPoints + addPoints;
    var newMatches = curMatches + addMatches;

    await lib.kvpipe([
      ["HSET", "rk:" + level + ":" + u.sub,
        "points", String(newPoints), "matches", String(newMatches), "best", String(newBest)],
      ["ZADD", "z:lb:" + level, String(newPoints), u.sub],
    ]);
    if (flagged.length) {
      await lib.kvcmd("LPUSH", "flags", JSON.stringify({
        sub: u.sub, name: u.name, level: level, points: points,
        correct: correct, durationMs: durationMs, reasons: flagged, at: now,
      }));
      await lib.kvcmd("LTRIM", "flags", 0, 199);
    }
    var rankInfo = await lib.kvpipe([
      ["ZREVRANK", "z:lb:" + level, u.sub],
      ["ZCARD", "z:lb:" + level],
    ]);
    return lib.send(res, 200, {
      ok: true,
      points: newPoints, matches: newMatches, best: newBest,
      rank: rankInfo[0] == null ? null : rankInfo[0] + 1,
      totalPlayers: rankInfo[1] || 0,
      migrated: migrated,
    });
  } catch (e) { return lib.handleErr(res, e); }
};
