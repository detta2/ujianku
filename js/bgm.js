/* SiPintar BGM — 2 track: chill (menu + latihan) & ranked (mode ranked, 15 dtk/soal).
   Vanilla JS, tanpa dependensi. Musik mulai setelah gestur pertama user
   (aturan autoplay browser), volume pelan, ada tombol mute yg diingat. */
(function () {
  "use strict";

  var TRACKS = {
    chill: "audio/bgm-chill.mp3",
    ranked: "audio/bgm-ranked.mp3"
  };
  var VOL = 0.32;          // volume pelan biar nggak ganggu
  var FADE_MS = 700;
  var LS_KEY = "sipintar_bgm_muted";

  var muted = false, current = null, pending = null;
  var unlocked = false, audio = null, fadeTimer = null;
  try { muted = localStorage.getItem(LS_KEY) === "1"; } catch (e) {}

  function el() {
    if (!audio) {
      audio = new Audio();
      audio.loop = true;
      audio.preload = "none";
      audio.volume = 0;
    }
    return audio;
  }

  function fadeTo(target, cb) {
    var a = el();
    if (fadeTimer) { clearInterval(fadeTimer); fadeTimer = null; }
    if (a.volume === target) { if (cb) cb(); return; }
    var step = (target - a.volume) / (FADE_MS / 50);
    fadeTimer = setInterval(function () {
      var v = a.volume + step;
      var done = (step > 0 && v >= target) || (step < 0 && v <= target);
      a.volume = done ? target : v;
      if (done) {
        clearInterval(fadeTimer); fadeTimer = null;
        if (cb) cb();
      }
    }, 50);
  }

  function startNow(mode) {
    var a = el();
    var src = TRACKS[mode];
    if (!src) return;
    if (a.getAttribute("src") !== src) {
      try { a.pause(); } catch (e) {}
      a.src = src;
      try { a.load(); } catch (e) {}
    }
    var p = null;
    try { p = a.play(); } catch (e) { /* autoplay kepending, tunggu gestur */ }
    if (p && typeof p.catch === "function") p.catch(function () {});
    fadeTo(VOL);
  }

  function play(mode) {
    pending = null;
    if (muted) { current = mode; return; }
    if (!unlocked) { pending = mode; current = mode; return; }
    if (current === mode && audio && !audio.paused) return;
    current = mode;
    if (audio && !audio.paused) {
      fadeTo(0, function () { startNow(mode); });
    } else {
      startNow(mode);
    }
  }

  function stop() {
    pending = null;
    current = null;
    if (audio && !audio.paused) {
      var a = audio;
      fadeTo(0, function () { try { a.pause(); } catch (e) {} });
    }
  }

  function updateBtn() {
    var b = document.getElementById("bgm-toggle");
    if (!b) return;
    b.textContent = muted ? "🔇" : "🔊";
    b.classList.toggle("off", muted);
    b.setAttribute("aria-label", muted ? "Nyalakan musik" : "Matikan musik");
    b.setAttribute("aria-pressed", muted ? "true" : "false");
  }

  function setMuted(m) {
    muted = !!m;
    try { localStorage.setItem(LS_KEY, muted ? "1" : "0"); } catch (e) {}
    updateBtn();
    if (muted) {
      stop();
    } else if (unlocked) {
      play(current || "chill");
    } else {
      pending = current || "chill";
    }
  }

  function unlock() {
    if (unlocked) return;
    unlocked = true;
    if (!muted && pending) play(pending);
  }

  document.addEventListener("pointerdown", unlock);
  document.addEventListener("keydown", unlock);
  document.addEventListener("DOMContentLoaded", function () {
    updateBtn();
    var b = document.getElementById("bgm-toggle");
    if (b) b.addEventListener("click", function (e) {
      e.stopPropagation();
      unlock();
      setMuted(!muted);
    });
  });

  window.Bgm = {
    play: play,
    stop: stop,
    setMuted: setMuted,
    toggle: function () { setMuted(!muted); },
    isMuted: function () { return muted; }
  };
})();
