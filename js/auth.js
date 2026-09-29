/* UjianKu auth — Login Google (GIS) + profil & riwayat lokal. */
(function () {
  "use strict";

  var USER_KEY = "ujianku_user";
  var TOKEN_KEY = "ujianku_id_token"; // sessionStorage (ID token kedaluwarsa ±1 jam)

  function decodeJwt(token) {
    var parts = (token || "").split(".");
    if (parts.length !== 3) return null;
    try {
      var b64 = parts[1].replace(/-/g, "+").replace(/_/g, "/");
      // atob butuh padding kelipatan 4
      while (b64.length % 4) b64 += "=";
      return JSON.parse(atob(b64));
    } catch (e) { return null; }
  }

  function toast(msg) {
    var t = document.getElementById("toast");
    if (!t) return;
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(t._h);
    t._h = setTimeout(function () { t.classList.remove("show"); }, 2200);
  }

  var Auth = {
    user: function () {
      try { return JSON.parse(localStorage.getItem(USER_KEY) || "null"); }
      catch (e) { return null; }
    },
    idToken: function () {
      try { return sessionStorage.getItem(TOKEN_KEY); } catch (e) { return null; }
    },
    setUser: function (profile, idToken) {
      try {
        localStorage.setItem(USER_KEY, JSON.stringify(profile));
        if (idToken) sessionStorage.setItem(TOKEN_KEY, idToken);
      } catch (e) {}
      if (window.App && window.App.onAuthChanged) window.App.onAuthChanged();
    },
    logout: function () {
      try {
        localStorage.removeItem(USER_KEY);
        sessionStorage.removeItem(TOKEN_KEY);
      } catch (e) {}
      try {
        if (window.google && google.accounts && google.accounts.id) {
          google.accounts.id.disableAutoSelect();
        }
      } catch (e) {}
      if (window.App && window.App.onAuthChanged) window.App.onAuthChanged();
    },

    /* Render tombol "Sign in with Google" ke elemen #elId */
    initGoogleButton: function (elId) {
      var cid = (window.APP_CONFIG || {}).GOOGLE_CLIENT_ID || "";
      var el = document.getElementById(elId);
      if (!el) return;
      if (!cid) {
        el.innerHTML = '<div class="notice">Login Google belum dikonfigurasi admin. Kamu tetap bisa lanjut sebagai tamu di bawah.</div>';
        return;
      }
      var tries = 0;
      var timer = setInterval(function () {
        tries++;
        if (window.google && google.accounts && google.accounts.id) {
          clearInterval(timer);
          try {
            google.accounts.id.initialize({ client_id: cid, callback: Auth._onCredential });
            google.accounts.id.renderButton(el, {
              theme: "outline", size: "large", text: "signin_with",
              shape: "pill", width: 300,
            });
          } catch (e) {
            el.innerHTML = '<div class="notice">Gagal memuat tombol Google.</div>';
          }
        } else if (tries > 60) {
          clearInterval(timer);
          el.innerHTML = '<div class="notice">Gagal memuat Google. Periksa koneksi internet lalu muat ulang.</div>';
        }
      }, 200);
    },

    _onCredential: function (resp) {
      var payload = decodeJwt(resp && resp.credential);
      if (!payload || !payload.sub) {
        toast("Login Google gagal, coba lagi ya");
        return;
      }
      Auth.setUser({
        sub: payload.sub,
        name: payload.name || "Peserta",
        email: payload.email || "",
        picture: payload.picture || "",
      }, resp.credential);
      toast("Halo, " + (payload.name || "Peserta") + "!");
    },

    /* ---------- riwayat & statistik profil ---------- */
    historyKey: function () {
      var u = Auth.user();
      return u ? "ujianku_history_" + u.sub : null;
    },
    addAttempt: function (a) {
      var k = Auth.historyKey();
      if (!k) return;
      var h = Auth.getHistory();
      h.unshift(a);
      try { localStorage.setItem(k, JSON.stringify(h.slice(0, 100))); } catch (e) {}
    },
    getHistory: function () {
      var k = Auth.historyKey();
      if (!k) return [];
      try {
        var h = JSON.parse(localStorage.getItem(k) || "[]");
        return Array.isArray(h) ? h : [];
      } catch (e) { return []; }
    },
    stats: function () {
      var h = Auth.getHistory();
      if (!h.length) return { count: 0, avg: 0, best: 0 };
      var sum = 0, best = 0, i;
      for (i = 0; i < h.length; i++) {
        sum += h[i].score || 0;
        if (h[i].score > best) best = h[i].score;
      }
      return { count: h.length, avg: Math.round(sum / h.length), best: best };
    },
  };

  window.Auth = Auth;
})();
