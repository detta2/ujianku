/* GET /api/admin/players?q=&limit= — daftar pemain + total semua divisi */
var lib = require("../../lib/apilib");

module.exports = async function (req, res) {
  try {
    await lib.requireAdmin(req);
    var q = String((req.query && req.query.q) || "").toLowerCase();
    var limit = Math.min(Math.max(parseInt((req.query && req.query.limit) || "150", 10) || 150, 1), 300);
    var subs = await lib.kvcmd("SMEMBERS", "players");
    subs = subs.slice(0, 300);
    var cmds = [];
    subs.forEach(function (s) {
      cmds.push(["HGETALL", "p:" + s]);
      lib.LEVELS.forEach(function (lv) { cmds.push(["HGETALL", "rk:" + lv + ":" + s]); });
    });
    var out = await lib.kvpipe(cmds);
    var per = 1 + lib.LEVELS.length;
    var rows = [];
    subs.forEach(function (s, i) {
      var p = lib.hgetallToObj(out[i * per]);
      var totals = {}, tp = 0, tm = 0;
      lib.LEVELS.forEach(function (lv, k) {
        var r = lib.hgetallToObj(out[i * per + 1 + k]);
        var pts = lib.num(r.points, 0), mt = lib.num(r.matches, 0);
        totals[lv] = { points: pts, matches: mt, best: lib.num(r.best, 0) };
        tp += pts; tm += mt;
      });
      var row = {
        sub: s,
        name: p.name || "Pemain", email: p.email || "", pic: p.pic || "",
        banned: String(p.banned) === "1",
        seen: lib.num(p.seen, 0),
        totals: totals, totalPoints: tp, totalMatches: tm,
      };
      if (q && (row.name.toLowerCase().indexOf(q) < 0 && row.email.toLowerCase().indexOf(q) < 0)) return;
      rows.push(row);
    });
    rows.sort(function (a, b) { return b.totalPoints - a.totalPoints; });
    return lib.send(res, 200, { ok: true, rows: rows.slice(0, limit), count: rows.length });
  } catch (e) { return lib.handleErr(res, e); }
};
