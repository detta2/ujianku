/* POST /api/admin/grant — kasih hadiah poin. { sub, level, points, reason } */
var lib = require("../../lib/apilib");

module.exports = async function (req, res) {
  if (req.method !== "POST") return lib.send(res, 405, { ok: false, error: "POST saja" });
  try {
    var admin = await lib.requireAdmin(req);
    var body = await lib.readBody(req);
    var sub = String(body.sub || "");
    var level = String(body.level || "").toUpperCase();
    var points = Math.floor(lib.num(body.points, 0));
    var reason = String(body.reason || "").slice(0, 140);
    if (!sub) throw lib.bad("sub kosong");
    if (lib.LEVELS.indexOf(level) < 0) throw lib.bad("Divisi tidak valid");
    if (!(points >= 1 && points <= 10000)) throw lib.bad("Poin 1–10000");
    var now = Date.now();
    var out = await lib.kvpipe([
      ["HINCRBY", "rk:" + level + ":" + sub, "points", String(points)],
      ["HINCRBY", "rk:" + level + ":" + sub, "matches", "0"],
      ["HSET", "p:" + sub, "seen", String(now)],
      ["SADD", "players", sub],
    ]);
    var newPoints = lib.num(out[0], 0);
    var banned = await lib.kvcmd("SISMEMBER", "bans", sub);
    if (!banned) await lib.kvcmd("ZADD", "z:lb:" + level, String(newPoints), sub);
    await lib.kvcmd("LPUSH", "prizes:" + sub, JSON.stringify({
      level: level, points: points, reason: reason, by: admin.email, at: now,
    }));
    await lib.kvcmd("LTRIM", "prizes:" + sub, 0, 99);
    return lib.send(res, 200, { ok: true, points: newPoints });
  } catch (e) { return lib.handleErr(res, e); }
};
