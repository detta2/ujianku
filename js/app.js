/* SiPintar app logic — vanilla JS, no build step. */
(function () {
  "use strict";

  var $ = function (id) { return document.getElementById(id); };
  var screens = ["home", "subjects", "login", "start", "quiz", "result", "review", "profile", "leaderboard"];
  var state = {
    level: null, bankId: null, bank: null,
    qi: 0, answers: [], startTime: 0, timeLeft: 0, timerId: null,
    result: null, lbLevel: null, lbSubject: null,
  };

  /* ---------- helpers ---------- */
  function go(name) {
    state.screen = name;
    screens.forEach(function (s) { $("screen-" + s).classList.toggle("active", s === name); });
    if (name === "home") applyTheme(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  document.querySelectorAll("[data-go]").forEach(function (el) {
    el.addEventListener("click", function () {
      var t = el.getAttribute("data-go");
      if (t === "leaderboard") initLeaderboard();
      go(t);
    });
  });

  var toastTimer = null;
  function toast(msg) {
    var t = $("toast");
    t.textContent = msg;
    t.classList.remove("hidden");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.add("hidden"); }, 2600);
  }

  function renderMath(root) {
    try {
      if (window.renderMathInElement) {
        renderMathInElement(root, {
          delimiters: [{ left: "$", right: "$", display: false }],
          throwOnError: false,
        });
      }
    } catch (e) { /* tampilkan teks mentah */ }
  }

  function fmtTime(sec) {
    sec = Math.max(0, Math.floor(sec));
    var m = Math.floor(sec / 60), s = sec % 60;
    return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
  }
  function fmtDur(sec) {
    var m = Math.floor(sec / 60), s = Math.round(sec % 60);
    return m > 0 ? m + " mnt " + s + " dtk" : s + " dtk";
  }
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function catOf(level) {
    return window.CATALOG.filter(function (c) { return c.level === level; })[0] || null;
  }
  /* tema warna + maskot per jenjang; level null = netral */
  function applyTheme(level) {
    var b = document.body;
    if (level) { b.setAttribute("data-level", level); }
    else { b.removeAttribute("data-level"); }
    ["screen-subjects", "screen-start", "screen-quiz", "screen-result"].forEach(function (id) {
      var el = $(id);
      ["theme-SD", "theme-SMP", "theme-SMA", "theme-Kuliah"].forEach(function (t) { el.classList.remove(t); });
      if (level) el.classList.add("theme-" + level);
    });
  }
  function setMascot(useId, cat) {
    var u = $(useId);
    if (u && cat) u.setAttribute("href", "#m-" + cat.mascot);
  }
  var BUDDY_LINES = ["Gas!", "Kejar emas!", "Fokus, juara!", "Sikat!", "Dikit lagi!", "Kamu bisa!", "Jangan kasih kendor!"];
  function buddyCheer(hop) {
    var t = $("buddy-text");
    if (t) t.textContent = pick(BUDDY_LINES);
    var m = $("quiz-buddy");
    if (m && hop !== false) {
      m.classList.remove("mx-happy");
      void m.offsetWidth;
      m.classList.add("mx-happy");
    }
  }
  function countUp(el, to) {
    var t0 = null;
    function step(ts) {
      if (!t0) t0 = ts;
      var p = Math.min(1, (ts - t0) / 900);
      el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  function confetti(container, n) {
    var colors = ["#1d4ed8", "#f5b301", "#ffd93b", "#ffffff", "#93c5fd", "#0b2a6b"];
    n = n || 60;
    for (var i = 0; i < n; i++) {
      var p = document.createElement("div");
      p.className = "confetti-piece";
      p.style.left = Math.random() * 100 + "%";
      p.style.setProperty("--dx", (Math.random() * 160 - 80) + "px");
      p.style.setProperty("--rot", (Math.random() * 720 - 360) + "deg");
      p.style.setProperty("--dur", (2 + Math.random() * 1.6) + "s");
      p.style.animationDelay = (Math.random() * 0.7) + "s";
      p.style.background = colors[i % colors.length];
      container.appendChild(p);
      (function (el) { setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 4500); })(p);
    }
  }

  function bankById(id) {
    return (window.QBANK && window.QBANK[id]) || null;
  }
  function catalogBank(level, subject) {
    var out = null;
    window.CATALOG.forEach(function (c) {
      if (c.level !== level) return;
      c.banks.forEach(function (b) { if (b.subject === subject) out = b; });
    });
    return out;
  }

  /* ---------- home: level cards ---------- */
  function renderLevels() {
    var grid = $("level-grid");
    grid.innerHTML = "";
    window.CATALOG.forEach(function (c) {
      var ready = c.banks.filter(function (b) { return bankById(b.id); }).length;
      var btn = document.createElement("button");
      btn.className = "level-card theme-" + c.level;
      btn.innerHTML =
        '<span class="division-badge">' + esc(c.division) + ' · ' + esc(c.divisionMedal) + '</span>' +
        '<span class="level-mascot-name">si ' + esc(c.mascotName) + '</span>' +
        '<span class="mascot mx-bounce"><svg><use href="#m-' + c.mascot + '"/></svg></span>' +
        "<h3>" + esc(c.level) + "</h3>" +
        "<p>" + esc(c.friend) + "</p>" +
        "<p>" + ready + "/" + c.banks.length + " pelajaran</p>" +
        '<span class="go">Bertanding →</span>';
      btn.addEventListener("click", function () { openSubjects(c.level); });
      grid.appendChild(btn);
    });
  }

  /* ---------- subjects ---------- */
  var SUB_ICONS = {
    "Matematika": "🔢", "IPA": "🔬", "Fisika": "⚛️", "Kimia": "🧪", "Biologi": "🧬",
    "Bahasa Indonesia": "📝", "Bahasa Inggris": "🔤",
    "Matematika Dasar": "🔢", "Fisika Dasar": "⚛️",
  };
  function openSubjects(level) {
    state.level = level;
    applyTheme(level);
    var cat = catOf(level);
    setMascot("subjects-mascot-use", cat);
    $("subjects-title").textContent = "Pelajaran " + level;
    $("subjects-sub").textContent = cat.tagline + " — " + cat.mascotName + " jadi pelatihmu di arena.";
    var grid = $("subject-grid");
    grid.innerHTML = "";
    cat.banks.forEach(function (b) {
      var bank = bankById(b.id);
      var btn = document.createElement("button");
      btn.className = "subject-card";
      btn.disabled = !bank;
      btn.innerHTML =
        '<span class="sub-ico">' + (SUB_ICONS[b.subject] || "📚") + "</span>" +
        "<h3>" + esc(b.subject) + "</h3>" +
        (bank
          ? "<p>" + sessionCount(bank) + " soal acak · " + fmtDur(sessionDur(bank)) + "</p>" +
            '<span class="meta">Mulai bertanding →</span>'
          : "<p>Segera hadir</p>");
      if (bank) btn.addEventListener("click", function () { requireAuth(b.id); });
      grid.appendChild(btn);
    });
    go("subjects");
  }

  /* ---------- auth: nama & identitas pemain ---------- */
  function displayName() {
    var u = window.Auth && Auth.user();
    if (u) return (u.name || "Peserta").slice(0, 20);
    return (localStorage.getItem("ujianku_guest") || "Tamu").slice(0, 20);
  }
  function isIdentified() {
    return !!(window.Auth && (Auth.user() || localStorage.getItem("ujianku_guest")));
  }
  function requireAuth(bankId) {
    if (isIdentified()) { openStart(bankId); return; }
    state.pendingBank = bankId;
    go("login");
  }
  function renderIdentity() {
    var box = $("start-identity");
    box.innerHTML = "";
    var u = window.Auth && Auth.user();
    var chip = document.createElement("div");
    chip.className = "id-chip";
    if (u && u.picture) {
      var img = document.createElement("img");
      img.className = "avatar";
      img.alt = "";
      img.src = u.picture;
      img.onerror = function () { this.style.display = "none"; };
      chip.appendChild(img);
    }
    var sp = document.createElement("span");
    sp.textContent = displayName() + (u ? "" : " (tamu)");
    chip.appendChild(sp);
    var ch = document.createElement("button");
    ch.className = "linklike";
    ch.textContent = "ganti";
    ch.addEventListener("click", function () {
      state.pendingBank = state.bankId;
      go("login");
    });
    chip.appendChild(ch);
    box.appendChild(chip);
  }
  function onAuthChanged() {
    updateAuthUI();
    if (state.screen === "profile" && !(window.Auth && Auth.user())) go("home");
    if (state.pendingBank && isIdentified()) {
      var b = state.pendingBank;
      state.pendingBank = null;
      openStart(b);
      return;
    }
    // sudah login tapi masih di layar login (mis. masuk via tombol "Masuk") -> ke beranda
    if (state.screen === "login" && isIdentified()) go("home");
  }
  function updateAuthUI() {
    var area = $("auth-area");
    if (!area) return;
    area.innerHTML = "";
    var u = window.Auth && Auth.user();
    if (u) {
      var b = document.createElement("button");
      b.className = "avatar-btn";
      b.setAttribute("aria-label", "Profil saya");
      var img = document.createElement("img");
      img.className = "avatar";
      img.alt = "";
      img.src = u.picture || "";
      img.onerror = function () { this.style.display = "none"; };
      b.appendChild(img);
      var nm = document.createElement("span");
      nm.className = "avatar-name";
      nm.textContent = (u.name || "Saya").split(" ")[0];
      b.appendChild(nm);
      b.addEventListener("click", function () { renderProfile(); go("profile"); });
      area.appendChild(b);
    } else {
      var l = document.createElement("button");
      l.className = "navbtn";
      l.textContent = "Masuk";
      l.addEventListener("click", function () { state.pendingBank = null; go("login"); });
      area.appendChild(l);
    }
  }
  function renderProfile() {
    var u = window.Auth && Auth.user();
    if (!u) { go("login"); return; }
    var av = $("profile-avatar");
    av.src = u.picture || "";
    av.style.display = u.picture ? "" : "none";
    $("profile-name").textContent = u.name || "Peserta";
    $("profile-email").textContent = u.email || "";
    var s = Auth.stats();
    $("pf-count").textContent = s.count;
    $("pf-avg").textContent = s.avg;
    $("pf-best").textContent = s.best;
    var box = $("profile-history");
    box.innerHTML = "";
    var h = Auth.getHistory();
    if (!h.length) {
      var e = document.createElement("div");
      e.className = "empty";
      e.textContent = "Belum ada riwayat ujian. Yuk mulai satu!";
      box.appendChild(e);
      return;
    }
    h.forEach(function (a) {
      var d = document.createElement("div");
      d.className = "hist-item";
      var left = document.createElement("div");
      var t = document.createElement("div");
      t.className = "hist-title";
      t.textContent = a.subject + " · " + a.level;
      var dt = document.createElement("div");
      dt.className = "hist-date";
      try {
        dt.textContent = new Date(a.ts).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" }) +
          " · " + a.correct + "/" + a.total + " benar";
      } catch (err) { dt.textContent = a.correct + "/" + a.total + " benar"; }
      left.appendChild(t);
      left.appendChild(dt);
      var sc = document.createElement("div");
      sc.className = "hist-score " + (a.score >= 75 ? "good" : a.score >= 60 ? "mid" : "low");
      sc.textContent = a.score;
      d.appendChild(left);
      d.appendChild(sc);
      box.appendChild(d);
    });
  }

  /* ---------- start ---------- */
  function openStart(bankId) {
    state.bankId = bankId;
    state.bank = bankById(bankId);
    var b = state.bank;
    applyTheme(b.level);
    var cat = catOf(b.level);
    setMascot("start-mascot-use", cat);
    $("start-speech").textContent = cat
      ? pick(["Gas, rebut medali emas!", "Siap bertanding?", "Fokus, juara!", "Kita menang bareng, ya!"])
      : "Gas, rebut medali emas!";
    $("start-kicker").textContent = b.level + " · " + b.subject;
    $("start-title").textContent = "Siap bertanding?";
    $("start-meta").innerHTML =
      '<span class="pill">' + sessionCount(b) + " soal acak</span>" +
      '<span class="pill">' + fmtDur(sessionDur(b)) + "</span>" +
      '<span class="pill">dari ' + b.questions.length + " bank soal</span>";
    renderIdentity();
    go("start");
  }

  $("btn-start-quiz").addEventListener("click", function () {
    if (!isIdentified()) { requireAuth(state.bankId); return; }
    startQuiz(displayName());
  });

  /* ---------- quiz ---------- */
  var SESSION_Q = 15; // soal per sesi, diacak dari bank biar tiap main beda
  function shuffleArr(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function sessionCount(bank) { return Math.min(SESSION_Q, bank.questions.length); }
  function sessionDur(bank) {
    return Math.round(bank.duration * sessionCount(bank) / bank.questions.length);
  }
  // acak urutan soal + acak urutan opsi (jawaban ikut dipetakan ulang)
  function buildSession(bank) {
    var qs = bank.questions.map(function (q) {
      var idx = q.options.map(function (_, i) { return i; });
      shuffleArr(idx);
      return {
        q: q.q,
        options: idx.map(function (i) { return q.options[i]; }),
        answer: idx.indexOf(q.answer),
        solution: q.solution
      };
    });
    shuffleArr(qs);
    return qs.slice(0, sessionCount(bank));
  }
  function startQuiz(name) {
    state.player = name;
    state.qs = buildSession(state.bank);
    state.qi = 0;
    state.answers = state.qs.map(function () { return -1; });
    state.timeLeft = sessionDur(state.bank);
    state.startTime = Date.now();
    applyTheme(state.bank.level);
    setMascot("quiz-buddy-use", catOf(state.bank.level));
    buddyCheer(false);
    $("quiz-bank-label").textContent = state.bank.level + " · " + state.bank.subject;
    renderQuestion();
    updateTimerUI();
    clearInterval(state.timerId);
    state.timerId = setInterval(function () {
      state.timeLeft -= 1;
      updateTimerUI();
      if (state.timeLeft <= 0) { finishQuiz(true); }
    }, 1000);
    go("quiz");
  }

  function updateTimerUI() {
    $("timer-text").textContent = fmtTime(state.timeLeft);
    var pct = (state.timeLeft / state.bank.duration) * 100;
    var fill = $("timer-fill");
    fill.style.width = pct + "%";
    var low = state.timeLeft <= 60;
    fill.classList.toggle("low", low);
    $("timer-text").classList.toggle("low", low);
  }

  function renderQuestion() {
    var q = state.qs[state.qi];
    $("q-num").textContent = "Soal " + (state.qi + 1) + " dari " + state.qs.length;
    $("q-text").textContent = q.q;
    $("quiz-progress").textContent =
      state.answers.filter(function (a) { return a >= 0; }).length + "/" + state.qs.length + " terjawab";
    var box = $("q-opts");
    box.innerHTML = "";
    var letters = ["A", "B", "C", "D", "E"];
    q.options.forEach(function (opt, i) {
      var b = document.createElement("button");
      b.className = "opt" + (state.answers[state.qi] === i ? " selected" : "");
      var span = document.createElement("span");
      span.className = "opt-text";
      span.textContent = opt;
      b.innerHTML = '<span class="letter">' + letters[i] + "</span>";
      b.appendChild(span);
      b.addEventListener("click", function () {
        state.answers[state.qi] = i;
        buddyCheer(true);
        renderQuestion();
      });
      box.appendChild(b);
    });
    renderMath($("screen-quiz"));
    $("btn-prev").disabled = state.qi === 0;
    $("btn-prev").style.opacity = state.qi === 0 ? 0.4 : 1;
    $("btn-next").style.display = state.qi === state.qs.length - 1 ? "none" : "";
  }

  $("btn-prev").addEventListener("click", function () {
    if (state.qi > 0) { state.qi--; renderQuestion(); }
  });
  $("btn-next").addEventListener("click", function () {
    if (state.qi < state.qs.length - 1) { state.qi++; renderQuestion(); }
  });
  $("btn-quiz-menu").addEventListener("click", function () {
    renderQMap();
    $("q-map").classList.remove("hidden");
  });
  $("btn-qmap-close").addEventListener("click", function () {
    $("q-map").classList.add("hidden");
  });

  function renderQMap() {
    var g = $("qmap-grid");
    g.innerHTML = "";
    state.qs.forEach(function (q, i) {
      var d = document.createElement("button");
      d.className = "qdot" +
        (state.answers[i] >= 0 ? " done" : "") +
        (i === state.qi ? " current" : "");
      d.textContent = i + 1;
      d.addEventListener("click", function () {
        state.qi = i;
        $("q-map").classList.add("hidden");
        renderQuestion();
      });
      g.appendChild(d);
    });
  }

  $("btn-submit").addEventListener("click", function () {
    var un = state.answers.filter(function (a) { return a < 0; }).length;
    $("modal-title").textContent = "Kumpulkan jawaban?";
    $("modal-text").textContent = un > 0
      ? "Masih ada " + un + " soal belum dijawab. Yakin kumpulkan sekarang?"
      : "Semua soal sudah dijawab. Kumpulkan?";
    $("modal-ok").onclick = function () { $("modal").classList.add("hidden"); finishQuiz(false); };
    $("modal").classList.remove("hidden");
  });
  $("modal-cancel").addEventListener("click", function () {
    $("modal").classList.add("hidden");
  });

  function finishQuiz(timeUp) {
    clearInterval(state.timerId);
    var qs = state.qs;
    var correct = 0;
    qs.forEach(function (q, i) { if (state.answers[i] === q.answer) correct++; });
    var score = Math.round((correct / qs.length) * 100);
    var used = Math.round((Date.now() - state.startTime) / 1000);
    state.result = { correct: correct, total: qs.length, score: score, used: used, timeUp: timeUp };
    if (window.Auth) {
      var u = Auth.user();
      if (u) Auth.addAttempt({
        bankId: state.bankId, level: state.bank.level, subject: state.bank.subject,
        score: score, correct: correct, total: qs.length, ts: Date.now(),
      });
    }
    saveScore(state.result);
    showResult();
  }

  /* ---------- result ---------- */
  function showResult() {
    var r = state.result;
    var cat = catOf(state.bank.level);
    setMascot("result-mascot-use", cat);
    var mn = cat ? cat.mascotName : "temanmu";
    $("result-kicker").textContent =
      state.bank.level + " · " + state.bank.subject + (r.timeUp ? " · waktu habis" : "");
    // medali: emas / perak / perunggu
    var medal = r.score >= 85 ? { name: "MEDALI EMAS", c: "#ffd93b", d: "#f5b301", sub: "Luar biasa, juara!" } :
                r.score >= 65 ? { name: "MEDALI PERAK", c: "#eef2f9", d: "#aebdd6", sub: "Keren, dikit lagi emas!" } :
                r.score >= 40 ? { name: "MEDALI PERUNGGU", c: "#f6c9a0", d: "#cd7f32", sub: "Bagus, terus naik!" } : null;
    var med = $("result-medal");
    med.style.setProperty("--medal", medal ? medal.c : "#e3ebfb");
    med.style.setProperty("--medal-deep", medal ? medal.d : "#c9d6ef");
    med.classList.remove("mx-medal-pop");
    void med.offsetWidth;
    med.classList.add("mx-medal-pop");
    $("result-medal-label").innerHTML = medal
      ? medal.name + '<span class="sub">' + medal.sub + "</span>"
      : 'BELUM DAPAT MEDALI<span class="sub">Ayo coba lagi, ' + esc(mn) + " yakin kamu bisa!</span>";
    // maskot: joget kalau bagus
    var m = $("result-mascot");
    m.classList.remove("mx-dance", "mx-bounce");
    if (r.score >= 65) { m.classList.add("mx-dance"); } else { m.classList.add("mx-bounce"); }
    // angka count-up + ring
    var scoreEl = $("result-score");
    countUp(scoreEl, r.score);
    requestAnimationFrame(function () {
      $("ring-fg").style.strokeDashoffset = 326.7 * (1 - r.score / 100);
    });
    setTimeout(function () {
      $("ring-fg").style.strokeDashoffset = 326.7 * (1 - r.score / 100);
    }, 60);
    $("result-stats").innerHTML =
      '<div class="stat good"><b>' + r.correct + "</b><span>Benar</span></div>" +
      '<div class="stat bad"><b>' + (r.total - r.correct) + "</b><span>Salah</span></div>" +
      '<div class="stat"><b>' + fmtDur(r.used) + "</b><span>Waktu</span></div>";
    var msg = r.score >= 85 ? "Emas! " + mn + " bangga banget sama kamu." :
              r.score >= 65 ? "Perak! Dikit lagi emas." :
              r.score >= 40 ? "Perunggu! Terus latihan biar naik kelas." :
              "Belum beruntung — " + mn + " temenin latihan lagi.";
    $("lb-note").textContent = msg + " Skormu " + (LB.online ? "masuk leaderboard online." : "tersimpan di leaderboard perangkat ini.");
    go("result");
    if (r.score >= 60) confetti($("result-card"), 70);
  }

  $("btn-review").addEventListener("click", function () { renderReview(); go("review"); });
  $("btn-review-back").addEventListener("click", function () { go("result"); });
  $("btn-retry").addEventListener("click", function () { startQuiz(state.player); });

  function renderReview() {
    var qs = state.qs;
    $("review-sub").textContent =
      state.bank.level + " · " + state.bank.subject + " — " + state.result.correct + "/" + state.result.total + " benar.";
    var list = $("review-list");
    list.innerHTML = "";
    var letters = ["A", "B", "C", "D", "E"];
    qs.forEach(function (q, i) {
      var mine = state.answers[i], key = q.answer;
      var ok = mine === key;
      var div = document.createElement("div");
      div.className = "rev-item";
      div.innerHTML =
        '<p class="rev-q">' + (i + 1) + ". " + esc(q.q) + "</p>" +
        '<div class="rev-ans">' +
          '<div class="row"><span class="badge ' + (ok ? "ok" : "no") + '">' + (ok ? "Benar" : "Salah") + "</span>" +
          "<span>Jawabanmu: <b>" + (mine >= 0 ? letters[mine] + ". " + esc(q.options[mine]) : "<i>tidak dijawab</i>") + "</b></span></div>" +
          (ok ? "" : '<div class="row"><span class="badge key">Kunci</span><span><b>' + letters[key] + ". " + esc(q.options[key]) + "</b></span></div>") +
        "</div>" +
        '<div class="rev-sol"><div class="sol-title">Cara menyelesaikan</div><div>' + esc(q.solution).replace(/\n/g, "<br>") + "</div></div>";
      list.appendChild(div);
    });
    renderMath(list);
  }

  /* ---------- leaderboard ---------- */
  var LB = { online: false, api: "" };

  function lbKey(bankId) { return "ujianku_lb_" + bankId; }

  function localScores(bankId) {
    try { return JSON.parse(localStorage.getItem(lbKey(bankId)) || "[]"); }
    catch (e) { return []; }
  }
  function localSave(bankId, entry) {
    var arr = localScores(bankId);
    arr.push(entry);
    arr.sort(function (a, b) { return b.score - a.score || a.used - b.used; });
    arr = arr.slice(0, 50);
    localStorage.setItem(lbKey(bankId), JSON.stringify(arr));
  }

  function apiGet(bankId) {
    return fetch(LB.api + "/api/scores?bank=" + encodeURIComponent(bankId) + "&limit=20")
      .then(function (r) { if (!r.ok) throw 0; return r.json(); });
  }
  function apiPost(entry) {
    return fetch(LB.api + "/api/score", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(entry),
    }).then(function (r) {
      if (r.status === 401 && entry.id_token) {
        // token Google kedaluwarsa -> kirim ulang sebagai tamu
        var retry = {};
        Object.keys(entry).forEach(function (k) { if (k !== "id_token") retry[k] = entry[k]; });
        return fetch(LB.api + "/api/score", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(retry),
        }).then(function (r2) { if (!r2.ok) throw 0; });
      }
      if (!r.ok) throw 0;
    });
  }

  function saveScore(r) {
    var entry = {
      bank: state.bankId, name: state.player,
      score: r.score, correct: r.correct, total: r.total,
      used: r.used, date: new Date().toISOString().slice(0, 10),
    };
    if (window.Auth) {
      var t = Auth.idToken();
      if (t) entry.id_token = t;
    }
    if (LB.online) {
      apiPost(entry).catch(function () {
        LB.online = false;
        localSave(state.bankId, entry);
        toast("Server leaderboard tidak terjangkau — skor disimpan lokal.");
      });
    } else {
      localSave(state.bankId, entry);
    }
  }

  function initLeaderboard() {
    var api = (window.APP_CONFIG && window.APP_CONFIG.LEADERBOARD_API || "").replace(/\/$/, "");
    LB.api = api;
    var lvSel = $("lb-level"), subSel = $("lb-subject");
    lvSel.innerHTML = ""; subSel.innerHTML = "";
    window.CATALOG.forEach(function (c) {
      var o = document.createElement("option");
      o.value = c.level; o.textContent = c.level;
      lvSel.appendChild(o);
    });
    if (!state.lbLevel) state.lbLevel = state.level || window.CATALOG[0].level;
    lvSel.value = state.lbLevel;
    fillLbSubjects();
    lvSel.onchange = function () { state.lbLevel = lvSel.value; state.lbSubject = null; fillLbSubjects(); };
    subSel.onchange = function () { state.lbSubject = subSel.value; loadLb(); };
    if (api) {
      // uji koneksi: ambil skor bank pertama
      var first = window.CATALOG[0].banks[0].id;
      apiGet(first).then(function () { LB.online = true; loadLb(); }, function () { LB.online = false; loadLb(); });
    } else {
      LB.online = false;
      loadLb();
    }
    $("lb-source").textContent = api
      ? "Mode online — bersaing dengan semua pemain."
      : "Mode lokal — skor tersimpan di perangkat ini. Deploy backend buat leaderboard antar-pemain.";
  }

  function fillLbSubjects() {
    var subSel = $("lb-subject");
    subSel.innerHTML = "";
    var cat = window.CATALOG.filter(function (c) { return c.level === state.lbLevel; })[0];
    cat.banks.forEach(function (b) {
      var o = document.createElement("option");
      o.value = b.id; o.textContent = b.subject;
      subSel.appendChild(o);
    });
    if (!state.lbSubject || !cat.banks.some(function (b) { return b.id === state.lbSubject; })) {
      state.lbSubject = cat.banks[0].id;
    }
    subSel.value = state.lbSubject;
    loadLb();
  }

  function loadLb() {
    var bankId = state.lbSubject;
    var render = function (rows) {
      var tb = $("lb-body");
      tb.innerHTML = "";
      $("lb-empty").classList.toggle("hidden", rows.length > 0);
      var me = displayName();
      rows.slice(0, 20).forEach(function (r, i) {
        var tr = document.createElement("tr");
        if (r.name === me) tr.className = "me";
        tr.innerHTML =
          '<td class="rank">' + (i + 1) + "</td>" +
          "<td>" + esc(r.name) + "</td>" +
          '<td class="score">' + r.score + "</td>" +
          "<td>" + r.correct + "/" + r.total + "</td>" +
          "<td>" + fmtDur(r.used) + "</td>";
        tb.appendChild(tr);
      });
    };
    if (LB.online) {
      apiGet(bankId).then(render, function () {
        LB.online = false;
        render(localScores(bankId));
      });
    } else {
      render(localScores(bankId));
    }
  }

  /* ---------- init ---------- */
  function renderMarquee() {
    var names = [];
    (window.CATALOG || []).forEach(function (c) {
      c.banks.forEach(function (b) { names.push(b.subject); });
    });
    var track = $("marquee-track");
    if (!track || !names.length) return;
    var html = names.map(function (n) { return '<span class="mq-chip">📚 ' + esc(n) + "</span>"; }).join("");
    track.innerHTML = html + html; /* duplikat biar loop mulus */
  }

  renderLevels();
  renderMarquee();
  if (window.Auth) {
    updateAuthUI();
    Auth.initGoogleButton("gbtn");
    window.App = { onAuthChanged: onAuthChanged };
  }
  $("btn-guest").addEventListener("click", function () {
    var g = $("guest-name").value.trim().slice(0, 20);
    if (!g) { toast("Isi nama dulu ya."); $("guest-name").focus(); return; }
    if (window.Auth && Auth.user()) Auth.logout();
    localStorage.setItem("ujianku_guest", g);
    onAuthChanged();
  });
  $("btn-logout").addEventListener("click", function () {
    localStorage.removeItem("ujianku_guest");
    if (window.Auth) Auth.logout();
    else onAuthChanged();
  });
})();
