/* GET /api/ranked/me — total ranked milik sendiri (4 divisi) + status banned */
var lib = require("../../lib/apilib");

module.exports = async function (req, res) {
  try {
    var u = await lib.requireUser(req);
    var cmds = lib.LEVELS.map(function (lv) { return ["HGETALL", "rk:" + lv + ":" + u.sub]; });
    cmds.push(["SISMEMBER", "bans", u.sub]);
    var out = await lib.kvpipe(cmds);
    var data = {};
    lib.LEVELS.forEach(function (lv, i) {
      var o = lib.hgetallToObj(out[i]);
      data[lv] = {
        points: lib.num(o.points, 0), matches: lib.num(o.matches, 0), best: lib.num(o.best, 0),
        rating: Math.max(0, Math.floor(lib.num(o.rating, 0))),
      };
    });
    return lib.send(res, 200, { ok: true, totals: data, banned: out[4] === 1 });
  } catch (e) { return lib.handleErr(res, e); }
};
