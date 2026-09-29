/* Shared helpers untuk API SiPintar (Vercel serverless, Node.js).
 * Storage : Vercel KV via REST  (env: KV_REST_API_URL, KV_REST_API_TOKEN)
 * Auth pemain : Google ID token (header Authorization: Bearer <id_token>)
 * Auth admin  : email terdaftar di env ADMIN_EMAILS (dipisah koma)
 */
var CLIENT_ID = "255111005069-o4h5v2k3sg4pjhnmvigdt3difnv42a39.apps.googleusercontent.com";
var LEVELS = ["SD", "SMP", "SMA", "Kuliah"];

function kvReady() {
  return !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

/* Satu perintah KV. Contoh: kvcmd("HGETALL", "p:123") */
async function kvcmd() {
  var url = process.env.KV_REST_API_URL;
  var token = process.env.KV_REST_API_TOKEN;
  if (!url || !token) { var e = new Error("Database belum disambung"); e.code = "NO_KV"; throw e; }
  var args = Array.prototype.slice.call(arguments);
  var r = await fetch(url, {
    method: "POST",
    headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" },
    body: JSON.stringify(args),
  });
  if (!r.ok) { var e2 = new Error("KV http " + r.status); e2.code = "KV_HTTP"; throw e2; }
  var j = await r.json();
  if (j && j.error) { var e3 = new Error(String(j.error)); e3.code = "KV_ERR"; throw e3; }
  return j.result;
}

/* Banyak perintah sekaligus. cmds = [["GET","a"],["HSET","b","f","v"],...]
 * Balikan: array of result (null bila perintahnya error). */
async function kvpipe(cmds) {
  var url = process.env.KV_REST_API_URL;
  var token = process.env.KV_REST_API_TOKEN;
  if (!url || !token) { var e = new Error("Database belum disambung"); e.code = "NO_KV"; throw e; }
  var r = await fetch(url + "/pipeline", {
    method: "POST",
    headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" },
    body: JSON.stringify(cmds),
  });
  if (!r.ok) throw new Error("KV http " + r.status);
  var j = await r.json();
  return j.map(function (x) { return x && x.error ? null : x.result; });
}

function hgetallToObj(arr) {
  var o = {};
  if (Array.isArray(arr)) for (var i = 0; i + 1 < arr.length; i += 2) o[arr[i]] = arr[i + 1];
  return o;
}
function num(v, d) {
  var n = parseFloat(v);
  return isFinite(n) ? n : (d === undefined ? 0 : d);
}

/* Verifikasi Google ID token via tokeninfo (tanpa secret). */
async function verifyIdToken(idToken) {
  if (!idToken) return null;
  try {
    var r = await fetch("https://oauth2.googleapis.com/tokeninfo?id_token=" + encodeURIComponent(idToken));
    if (!r.ok) return null;
    var j = await r.json();
    if (!j || j.aud !== CLIENT_ID) return null;
    if (j.exp && num(j.exp) * 1000 < Date.now()) return null;
    if (!j.sub) return null;
    return { sub: j.sub, email: j.email || "", name: j.name || "Pemain", picture: j.picture || "" };
  } catch (e) { return null; }
}
function bearerToken(req) {
  var h = req.headers.authorization || req.headers.Authorization || "";
  var m = /^Bearer\s+(.+)$/i.exec(h);
  return m ? m[1] : null;
}
function isAdminEmail(email) {
  if (!email) return false;
  var list = String(process.env.ADMIN_EMAILS || "").split(",")
    .map(function (s) { return s.trim().toLowerCase(); }).filter(Boolean);
  return list.indexOf(String(email).toLowerCase()) >= 0;
}
async function requireUser(req) {
  var u = await verifyIdToken(bearerToken(req));
  if (!u) { var e = new Error("Login Google dulu"); e.code = "UNAUTH"; throw e; }
  return u;
}
async function requireAdmin(req) {
  var u = await requireUser(req);
  if (!isAdminEmail(u.email)) { var e = new Error("Bukan admin"); e.code = "FORBIDDEN"; throw e; }
  return u;
}
function send(res, code, obj) {
  res.statusCode = code;
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(obj));
}
function readBody(req) {
  return new Promise(function (resolve, reject) {
    var data = "";
    req.on("data", function (c) {
      data += c;
      if (data.length > 200000) { reject(new Error("Body kebesaran")); try { req.destroy(); } catch (e) {} }
    });
    req.on("end", function () {
      if (!data) return resolve({});
      try { resolve(JSON.parse(data)); } catch (e) { reject(bad("Body bukan JSON")); }
    });
    req.on("error", reject);
  });
}
function bad(msg) { var e = new Error(msg); e.code = "BAD"; return e; }
function handleErr(res, e) {
  if (e && e.code === "NO_KV") return send(res, 503, { ok: false, error: "Database belum disambung. Buat KV di dashboard Vercel dulu." });
  if (e && e.code === "UNAUTH") return send(res, 401, { ok: false, error: e.message });
  if (e && e.code === "FORBIDDEN") return send(res, 403, { ok: false, error: e.message });
  if (e && e.code === "BAD") return send(res, 400, { ok: false, error: e.message });
  if (e && e.code === "BANNED") return send(res, 403, { ok: false, error: "Akun kamu dibanned.", banned: true });
  console.error(e);
  return send(res, 500, { ok: false, error: "Server error" });
}

module.exports = {
  CLIENT_ID: CLIENT_ID, LEVELS: LEVELS,
  kvReady: kvReady, kvcmd: kvcmd, kvpipe: kvpipe,
  hgetallToObj: hgetallToObj, num: num,
  verifyIdToken: verifyIdToken, bearerToken: bearerToken,
  isAdminEmail: isAdminEmail, requireUser: requireUser, requireAdmin: requireAdmin,
  send: send, readBody: readBody, bad: bad, handleErr: handleErr,
};
