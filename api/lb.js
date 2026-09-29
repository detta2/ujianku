/* GET /api/lb?level=SD — leaderboard global (top 50), tanpa auth */
var lib = require("../lib/apilib");

module.exports = async function (req, res) {
  try {
    var level = String((req.query && req.query.level) || "").toUpperCase();
    if (lib.LEVELS.indexOf(level) < 0) throw lib.bad("Divisi tidak valid");
    var rows = await lib.kvcmd("ZREVRANGE", "z:lb:" + level, "0", "49", "WITHSCORES");
    var subs = [];
    for (var i = 0; i + 1 < rows.length; i += 2) subs.push(rows[i]);
    if (!subs.length) return lib.send(res, 200, { ok: true, rows: [] });
    var cmds = [];
    subs.forEach(function (s) {
      cmds.push(["HGETALL", "p:" + s]);
      cmds.push(["HGETALL", "rk:" + level + ":" + s]);
    });
    var out = await lib.kvpipe(cmds);
    var list = [];
    subs.forEach(function (s, i) {
      var p = lib.hgetallToObj(out[i * 2]);
      var r = lib.hgetallToObj(out[i * 2 + 1]);
      if (String(p.banned) === "1") return;
      list.push({
        name: p.name || "Pemain",
        pic: p.pic || "",
        points: lib.num(r.points, 0),
        matches: lib.num(r.matches, 0),
        best: lib.num(r.best, 0),
      });
    });
    return lib.send(res, 200, { ok: true, rows: list });
  } catch (e) { return lib.handleErr(res, e); }
};
