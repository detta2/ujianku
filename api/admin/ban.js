/* POST /api/admin/ban — { sub, banned: true/false } */
var lib = require("../../lib/apilib");

module.exports = async function (req, res) {
  if (req.method !== "POST") return lib.send(res, 405, { ok: false, error: "POST saja" });
  try {
    await lib.requireAdmin(req);
    var body = await lib.readBody(req);
    var sub = String(body.sub || "");
    if (!sub) throw lib.bad("sub kosong");
    var banned = !!body.banned;
    if (banned) {
      var cmds = [["SADD", "bans", sub], ["HSET", "p:" + sub, "banned", "1"]];
      lib.LEVELS.forEach(function (lv) { cmds.push(["ZREM", "z:lb:" + lv, sub]); });
      await lib.kvpipe(cmds);
    } else {
      await lib.kvpipe([["SREM", "bans", sub], ["HSET", "p:" + sub, "banned", "0"]]);
      /* kembalikan ke leaderboard sesuai poin tersimpan */
      var back = lib.LEVELS.map(function (lv) { return ["HGETALL", "rk:" + lv + ":" + sub]; });
      var out = await lib.kvpipe(back);
      var re = [];
      lib.LEVELS.forEach(function (lv, i) {
        var pts = lib.num(lib.hgetallToObj(out[i]).points, 0);
        if (pts > 0) re.push(["ZADD", "z:lb:" + lv, String(pts), sub]);
      });
      if (re.length) await lib.kvpipe(re);
    }
    return lib.send(res, 200, { ok: true, banned: banned });
  } catch (e) { return lib.handleErr(res, e); }
};
