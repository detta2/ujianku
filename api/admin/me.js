/* GET /api/admin/me — cek apakah user ini admin (tanpa butuh KV) */
var lib = require("../../lib/apilib");

module.exports = async function (req, res) {
  try {
    var u = await lib.requireUser(req);
    return lib.send(res, 200, {
      ok: true, admin: lib.isAdminEmail(u.email), name: u.name, email: u.email,
    });
  } catch (e) { return lib.handleErr(res, e); }
};
