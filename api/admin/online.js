/* GET /api/admin/online — jumlah pemain online (heartbeat ≤45 dtk terakhir).
   Khusus admin. */
var lib = require("../../lib/apilib");

module.exports = async function (req, res) {
  try {
    await lib.requireAdmin(req);
    var n = 0, cursor = "0";
    do {
      var r = await lib.kvcmd("SCAN", cursor, "MATCH", "presence:*", "COUNT", "500");
      cursor = String(r[0]);
      var keys = r[1] || [];
      n += keys.length;
    } while (cursor !== "0" && n < 100000);
    return lib.send(res, 200, { ok: true, online: n });
  } catch (e) { return lib.handleErr(res, e); }
};
