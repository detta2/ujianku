/* SFX jawaban: bunyi "benar" dan "salah" via Web Audio API (tanpa file audio).
   Dipicu di lockRankedAnswer (mode ranked, jawaban langsung dinilai).
   Pengaturan mute tersimpan di localStorage "sipintar_sfx_muted". */
(function () {
  var LS_KEY = "sipintar_sfx_muted";
  var ctx = null, master = null;
  var muted = false;
  try { muted = localStorage.getItem(LS_KEY) === "1"; } catch (e) {}

  function ac() {
    if (!ctx) {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
      master = ctx.createGain();
      master.gain.value = 0.5;
      master.connect(ctx.destination);
    }
    if (ctx.state === "suspended") ctx.resume().catch(function () {});
    return ctx;
  }

  /* satu nada: freq (Hz), mulai dlm detik dari sekarang, durasi, tipe, volume */
  function tone(freq, delay, dur, type, vol) {
    var c = ac();
    if (!c) return;
    var t0 = c.currentTime + delay;
    var o = c.createOscillator(), g = c.createGain();
    o.type = type || "triangle";
    o.frequency.setValueAtTime(freq, t0);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol || 0.25, t0 + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g); g.connect(master);
    o.start(t0); o.stop(t0 + dur + 0.05);
  }

  function correct() {
    if (muted) return;
    // arpeggio ceria C6-E6-G6
    tone(1046.5, 0, 0.12, "triangle", 0.28);
    tone(1318.5, 0.08, 0.12, "triangle", 0.28);
    tone(1568.0, 0.16, 0.22, "triangle", 0.3);
  }
  function wrong() {
    if (muted) return;
    // turun lembut, tidak kasar (ramah anak)
    tone(233.1, 0, 0.2, "triangle", 0.22);
    tone(174.6, 0.16, 0.3, "triangle", 0.22);
  }

  function setMuted(m) {
    muted = !!m;
    try { localStorage.setItem(LS_KEY, muted ? "1" : "0"); } catch (e) {}
    updateRow();
  }
  function updateRow() {
    var row = document.getElementById("set-sfx");
    if (row) {
      var ico = row.querySelector(".set-ico");
      if (ico) ico.textContent = muted ? "🔕" : "🔔";
      var st = document.getElementById("set-sfx-state");
      if (st) st.textContent = muted ? "OFF" : "ON";
      row.setAttribute("aria-label", muted ? "Nyalakan efek suara" : "Matikan efek suara");
    }
  }

  // buka AudioContext setelah gestur pertama (aturan autoplay browser)
  function unlock() { ac(); }
  document.addEventListener("pointerdown", unlock);
  document.addEventListener("keydown", unlock);
  document.addEventListener("DOMContentLoaded", function () {
    updateRow();
    var row = document.getElementById("set-sfx");
    if (row) row.addEventListener("click", function (e) {
      e.stopPropagation();
      unlock();
      setMuted(!muted);
    });
  });

  window.Sfx = { correct: correct, wrong: wrong, setMuted: setMuted,
    muted: function () { return muted; } };
})();
