/* POST /api/presence — heartbeat: tandai klien ini sedang online (TTL 45 dtk).
   Publik tanpa auth; body { cid: "<id acak dari localStorage>" }. */
var lib = require("./lib/apilib");

module.exports = async function (req, res) {
  try {
    if (req.method !== "POST") return lib.send(res, 200, { ok: true });
    var b = await lib.readBody(req);
    var cid = String((b && b.cid) || "").replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 64);
    if (!cid) throw lib.bad("cid kosong");
    await lib.kvcmd("SET", "presence:" + cid, "1", "EX", "45");
    return lib.send(res, 200, { ok: true });
  } catch (e) { return lib.handleErr(res, e); }
};
