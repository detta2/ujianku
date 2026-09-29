/* Heartbeat presence: lapor "saya online" ke server tiap 15 detik.
   Hanya saat tab sedang terlihat; kalau tab disembunyikan/ditutup,
   key Redis kedaluwarsa sendiri (TTL 45 dtk) sehingga tak dihitung. */
(function () {
  var LS = "sipintar_cid", EVERY = 15000, URL = "/api/presence";
  function cid() {
    try {
      var c = localStorage.getItem(LS);
      if (!c) {
        c = "c" + Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
        try { localStorage.setItem(LS, c); } catch (e) {}
      }
      return c;
    } catch (e) { return null; }
  }
  var id = cid();
  function beat() {
    if (!id || document.visibilityState !== "visible") return;
    try {
      fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cid: id }),
        keepalive: true,
      }).catch(function () {});
    } catch (e) {}
  }
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") beat();
  });
  beat();
  setInterval(beat, EVERY);
})();
