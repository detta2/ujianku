/* Shared helpers untuk API SiPintar (Vercel serverless, Node.js).
 * Storage : Redis via REST (KV_REST_API_URL + KV_REST_API_TOKEN, Upstash)
 *        atau via TCP (REDIS_URL / KV_URL, node-redis). Dipilih otomatis.
 * Auth pemain : Google ID token (header Authorization: Bearer <id_token>)
 * Auth admin  : email terdaftar di env ADMIN_EMAILS (dipisah koma)
 */
var CLIENT_ID = "255111005069-o4h5v2k3sg4pjhnmvigdt3difnv42a39.apps.googleusercontent.com";
var LEVELS = ["SD", "SMP", "SMA", "Kuliah"];

function restCfg() {
  return { url: process.env.KV_REST_API_URL, token: process.env.KV_REST_API_TOKEN };
}
function tcpUrl() {
  return process.env.REDIS_URL || process.env.KV_URL || process.env.KV_REDIS_URL || "";
}
function kvReady() {
  var c = restCfg();
  return !!((c.url && c.token) || tcpUrl());
}
function noKvErr() {
  var e = new Error("Database belum disambung");
  e.code = "NO_KV";
  return e;
}

/* ---------- transport REST (Upstash) ---------- */
async function restCmd(args) {
  var c = restCfg();
  var r = await fetch(c.url, {
    method: "POST",
    headers: { Authorization: "Bearer " + c.token, "Content-Type": "application/json" },
    body: JSON.stringify(args),
  });
  if (!r.ok) throw new Error("KV http " + r.status);
  var j = await r.json();
  if (j && j.error) throw new Error(String(j.error));
  return j.result;
}
async function restPipe(cmds) {
  var c = restCfg();
  var r = await fetch(c.url + "/pipeline", {
    method: "POST",
    headers: { Authorization: "Bearer " + c.token, "Content-Type": "application/json" },
    body: JSON.stringify(cmds),
  });
  if (!r.ok) throw new Error("KV http " + r.status);
  var j = await r.json();
  return j.map(function (x) { return x && x.error ? null : x.result; });
}

/* ---------- transport TCP (node-redis, singleton malas) ---------- */
var _tcpClient = null, _tcpConnecting = null;
function getTcpClient() {
  if (_tcpClient && _tcpClient.isOpen) return Promise.resolve(_tcpClient);
  if (_tcpConnecting) return _tcpConnecting;
  var url = tcpUrl();
  if (!url) return Promise.reject(noKvErr());
  var redis;
  try { redis = require("redis"); }
  catch (e) { return Promise.reject(new Error("Paket redis belum terinstal")); }
  _tcpConnecting = (async function () {
    var client = redis.createClient({ url: url, socket: { connectTimeout: 2500 } });
    client.on("error", function () { /* ditangani per-perintah */ });
    await client.connect();
    _tcpClient = client;
    _tcpConnecting = null;
    return client;
  })();
  _tcpConnecting.catch(function () { _tcpConnecting = null; _tcpClient = null; });
  return _tcpConnecting;
}
/* Jalankan satu perintah Redis via TCP, hasil disamakan bentuknya dgn REST. */
async function tcpCmd(args) {
  var client = await getTcpClient();
  var cmd = String(args[0]).toUpperCase();
  var a = args.slice(1);
  switch (cmd) {
    case "HSET": {
      var obj = {};
      for (var i = 1; i + 1 < a.length; i += 2) obj[a[i]] = String(a[i + 1]);
      return client.hSet(a[0], obj);
    }
    case "HGETALL": {
      var h = await client.hGetAll(a[0]);
      var flat = [];
      Object.keys(h).forEach(function (k) { flat.push(k, h[k]); });
      return flat;
    }
    case "HINCRBY": return String(await client.hIncrBy(a[0], a[1], parseInt(a[2], 10)));
    case "SADD": return client.sAdd(a[0], a[1]);
    case "SREM": return client.sRem(a[0], a[1]);
    case "SISMEMBER": return (await client.sIsMember(a[0], a[1])) ? 1 : 0;
    case "SMEMBERS": return client.sMembers(a[0]);
    case "ZADD": return client.zAdd(a[0], { score: parseFloat(a[1]), value: a[2] });
    case "ZINCRBY": return String(await client.zIncrBy(a[0], parseFloat(a[1]), a[2]));
    case "ZREM": return client.zRem(a[0], a[1]);
    case "ZREVRANGE": {
      var withScores = a[3] === "WITHSCORES";
      if (withScores) {
        var rows = await client.zRangeWithScores(a[0], 0, 49, { REV: true });
        var flat2 = [];
        rows.forEach(function (r) { flat2.push(r.value, String(r.score)); });
        return flat2;
      }
      return client.zRange(a[0], 0, 49, { REV: true });
    }
    case "ZREVRANK": return client.zRevRank(a[0], a[1]);
    case "ZCARD": return client.zCard(a[0]);
    case "INCR": return client.incr(a[0]);
    case "EXPIRE": return client.expire(a[0], parseInt(a[1], 10));
    case "LPUSH": return client.lPush(a[0], a[1]);
    case "LTRIM": return client.lTrim(a[0], parseInt(a[1], 10), parseInt(a[2], 10));
    case "LRANGE": return client.lRange(a[0], 0, 49);
    default: throw new Error("Perintah tak dikenal: " + cmd);
  }
}

/* ---------- API perintah (dipilih otomatis) ---------- */
function useRest() {
  var c = restCfg();
  return !!(c.url && c.token);
}
async function kvcmd() {
  var args = Array.prototype.slice.call(arguments);
  if (useRest()) return restCmd(args);
  if (tcpUrl()) return tcpCmd(args);
  throw noKvErr();
}
async function kvpipe(cmds) {
  if (useRest()) return restPipe(cmds);
  if (tcpUrl()) {
    var out = [];
    for (var i = 0; i < cmds.length; i++) out.push(await tcpCmd(cmds[i]));
    return out;
  }
  throw noKvErr();
}

function hgetallToObj(arr) {
  var o = {};
  if (Array.isArray(arr)) for (var i = 0; i + 1 < arr.length; i += 2) o[arr[i]] = arr[i + 1];
  else if (arr && typeof arr === "object") Object.keys(arr).forEach(function (k) { o[k] = arr[k]; });
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
  if (e && e.code === "NO_KV") return send(res, 503, { ok: false, error: "Database belum disambung. Buat Redis di dashboard Vercel dulu." });
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
