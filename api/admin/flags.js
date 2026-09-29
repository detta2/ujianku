/* GET /api/admin/flags — daftar match mencurigakan (50 terbaru) */
var lib = require("../../lib/apilib");

module.exports = async function (req, res) {
  try {
    await lib.requireAdmin(req);
    var items = await lib.kvcmd("LRANGE", "flags", "0", "49");
    var rows = (items || []).map(function (s) {
      try { return JSON.parse(s); } catch (e) { return null; }
    }).filter(Boolean);
    return lib.send(res, 200, { ok: true, rows: rows });
  } catch (e) { return lib.handleErr(res, e); }
};
