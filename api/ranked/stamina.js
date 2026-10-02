/* Stamina ranked SiPintar — biar nggak terlalu adiktif.
 * GET  /api/ranked/stamina -> { ok, stamina, maxStamina, costPerMatch, refillMs, nextRefillInMs }
 * POST /api/ranked/stamina -> pakai stamina untuk mulai 1 match ranked (cost 2).
 *   200 { ok, stamina, ... } | 429 { ok:false, error, stamina, nextRefillInMs }
 * Aturan: maks 30, refill +1 tiap 15 menit, 1 match = 2 stamina.
 * Disimpan server-side di hash p:<sub> (field stamina, staminaTs) biar nggak bisa diakalin.
 */
var lib = require("../../lib/apilib");
var MAX = 30;
var REFILL_MS = 15 * 60 * 1000;
var COST = 2;

/* Hitung stamina terkini dari data tersimpan (termasuk refill berbasis waktu). */
function compute(cur, now) {
  var st = Math.floor(lib.num(cur.stamina, MAX));
  var ts = Math.floor(lib.num(cur.staminaTs, 0));
  if (!ts) { st = MAX; ts = now; }
  if (st > MAX) st = MAX;
  if (st < 0) st = 0;
  if (st < MAX && ts > 0 && now > ts) {
    var gained = Math.floor((now - ts) / REFILL_MS);
    if (gained > 0) {
      st = Math.min(MAX, st + gained);
      ts = ts + gained * REFILL_MS;
      if (st >= MAX) ts = now;
    }
  }
  var nextIn = st >= MAX ? 0 : Math.max(0, REFILL_MS - (now - ts));
  return { stamina: st, ts: ts, nextRefillInMs: nextIn };
}
function info(c) {
  return {
    ok: true, stamina: c.stamina, maxStamina: MAX,
    costPerMatch: COST, refillMs: REFILL_MS, nextRefillInMs: c.nextRefillInMs,
  };
}

module.exports = async function (req, res) {
  try {
    var u = await lib.requireUser(req);
    if (await lib.kvcmd("SISMEMBER", "bans", u.sub)) {
      var be = new Error("banned"); be.code = "BANNED"; throw be;
    }
    var now = Date.now();
    var cur = lib.hgetallToObj(await lib.kvcmd("HGETALL", "p:" + u.sub));
    var c = compute(cur, now);

    if (req.method === "GET") {
      await lib.kvcmd("HSET", "p:" + u.sub, "stamina", String(c.stamina), "staminaTs", String(c.ts));
      var gi = info(c);
      if (lib.isAdminEmail(u.email)) { gi.stamina = MAX; gi.adminBypass = true; }
      return lib.send(res, 200, gi);
    }
    if (req.method !== "POST") return lib.send(res, 405, { ok: false, error: "GET/POST saja" });

    /* Admin bypass: pemilik nggak kena limit stamina */
    if (lib.isAdminEmail(u.email)) {
      var ca = info(compute({ stamina: MAX, staminaTs: now }, now));
      ca.stamina = MAX; ca.adminBypass = true;
      return lib.send(res, 200, ca);
    }

    /* POST: pakai stamina untuk 1 match. HINCRBY atomik; kalau minus, kembalikan & tolak. */
    await lib.kvcmd("HSET", "p:" + u.sub, "stamina", String(c.stamina), "staminaTs", String(c.ts));
    if (c.stamina < COST) {
      var i = info(c); i.ok = false;
      i.error = "⚡ Stamina habis! Istirahat dulu ya.";
      return lib.send(res, 429, i);
    }
    var left = parseInt(await lib.kvcmd("HINCRBY", "p:" + u.sub, "stamina", -COST), 10);
    if (left < 0) {
      await lib.kvcmd("HINCRBY", "p:" + u.sub, "stamina", COST);
      var c2 = compute(lib.hgetallToObj(await lib.kvcmd("HGETALL", "p:" + u.sub)), Date.now());
      var i2 = info(c2); i2.ok = false;
      i2.error = "⚡ Stamina habis! Istirahat dulu ya.";
      return lib.send(res, 429, i2);
    }
    var done = info(compute({ stamina: left, staminaTs: c.ts }, now));
    done.stamina = left;
    return lib.send(res, 200, done);
  } catch (e) { return lib.handleErr(res, e); }
};
/* diekspos untuk unit test lokal */
module.exports._compute = compute;
module.exports._consts = { MAX: MAX, REFILL_MS: REFILL_MS, COST: COST };
