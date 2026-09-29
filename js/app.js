/* SiPintar app logic — vanilla JS, no build step. */
(function () {
  "use strict";

  var $ = function (id) { return document.getElementById(id); };
  var screens = ["home", "ranked", "subjects", "login", "start", "quiz", "result", "review", "profile", "leaderboard", "badges"];
  var state = {
    level: null, bankId: null, bank: null,
    mode: "normal", rankedLevel: null,
    qi: 0, answers: [], startTime: 0, timeLeft: 0, timerId: null,
    qTimeLeft: 0, qLock: false, qPoints: 0,
    result: null, lbLevel: null, lbSubject: null, lbMode: null,
  };

  /* ---------- helpers ---------- */
  function go(name) {
    state.screen = name;
    screens.forEach(function (s) { $("screen-" + s).classList.toggle("active", s === name); });
    if (name === "home") applyTheme(null);
    if (name === "badges") renderBadges();
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
  /* SD = bahasa anak yang baik & lembut; SMP ke atas = bahasa Gen Z */
  var GENZ_CHEER = ["Gas bestie!", "Slay!", "W banget!", "Sat set beres!", "Era juara!", "Valid no debat!"];
  var GENZ_MISS = ["Yah, miss!", "Gapapa, comeback!", "Kurang w dikit!", "Waduh, next!"];
  var GENZ_TIMEOUT = ["⏰ Waktunya abis bestie!", "Telat dikit, sat set lagi!"];
  var GENZ_START = ["Gas, rebut emasnya bestie!", "Siap slay hari ini?", "Fokus, era juara dimulai!"];
  var GENZ_RANKED_START = ["Ranked = perang kilat, gas!", "Sat set 30 soal, bestie!", "Kejar #1!"];
  var BUDDY_LINES = {
    "SD": ["Ayo, kamu hebat!", "Semangat ya!", "Wah, pintar sekali!", "Pelan-pelan, pasti bisa!", "Coba lagi yuk!", "Kamu anak pintar!"],
    "SMP": GENZ_CHEER, "SMA": GENZ_CHEER, "Kuliah": GENZ_CHEER
  };
  var BUDDY_MISS = {
    "SD": ["Ups, belum tepat!", "Nggak apa-apa, coba lagi!", "Ayo, semangat lagi!"],
    "SMP": GENZ_MISS, "SMA": GENZ_MISS, "Kuliah": GENZ_MISS
  };
  var BUDDY_TIMEOUT = {
    "SD": ["Waktunya habis, nggak apa-apa!", "Yuk, lebih cepat dikit!"],
    "SMP": GENZ_TIMEOUT, "SMA": GENZ_TIMEOUT, "Kuliah": GENZ_TIMEOUT
  };
  var START_LINES = {
    "SD": ["Ayo, kamu pasti bisa!", "Kita belajar sambil main, ya!", "Semangat, anak pintar!"],
    "SMP": GENZ_START, "SMA": GENZ_START, "Kuliah": GENZ_START
  };
  var RANKED_START_LINES = {
    "SD": ["Ayo kumpulkan poin bareng!", "Main cepat tapi teliti ya!", "Kejar peringkat 1!"],
    "SMP": GENZ_RANKED_START, "SMA": GENZ_RANKED_START, "Kuliah": GENZ_RANKED_START
  };
  function linesFor(map, level) { return map[level] || map["SMP"]; }
  function currentLevel() {
    if (state.mode === "ranked") return state.rankedLevel;
    return state.bank ? state.bank.level : null;
  }
  function buddyCheer(hop) {
    var t = $("buddy-text");
    if (t) t.textContent = pick(linesFor(BUDDY_LINES, currentLevel()));
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
  /* bank soal dimuat malas: file data/<id>.js diambil saat dibutuhkan,
     biar halaman awal tetap ringan walau total ribuan soal */
  var bankPromises = {};
  function loadBank(id) {
    if (window.QBANK && window.QBANK[id]) return Promise.resolve(window.QBANK[id]);
    if (!bankPromises[id]) {
      bankPromises[id] = new Promise(function (res, rej) {
        var s = document.createElement("script");
        s.src = "data/" + id + ".js";
        s.onload = function () { res(window.QBANK[id] || null); };
        s.onerror = function () { rej(new Error("gagal memuat " + id)); };
        document.head.appendChild(s);
      });
    }
    return bankPromises[id];
  }
  function ensureLevel(level) {
    var cat = catOf(level);
    return Promise.all(cat.banks.map(function (b) { return loadBank(b.id); }));
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
      var btn = document.createElement("button");
      btn.className = "level-card theme-" + c.level;
      btn.innerHTML =
        '<span class="division-badge">' + esc(c.division) + ' · ' + esc(c.divisionMedal) + '</span>' +
        '<span class="level-mascot-name">si ' + esc(c.mascotName) + '</span>' +
        '<span class="mascot mx-bounce"><svg><use href="#m-' + c.mascot + '"/></svg></span>' +
        "<h3>" + esc(c.level) + "</h3>" +
        "<p>" + esc(c.friend) + "</p>" +
        "<p>" + c.banks.length + " pelajaran</p>" +
        '<span class="go">Bertanding →</span>';
      btn.addEventListener("click", function () { openSubjects(c.level); });
      grid.appendChild(btn);
    });
  }

  /* ---------- subjects ---------- */
  var SUB_ICONS = {
    "Matematika": "🔢", "IPA": "🔬", "IPS": "🌏", "Fisika": "⚛️", "Kimia": "🧪", "Biologi": "🧬",
    "Bahasa Indonesia": "📝", "Bahasa Inggris": "🔤", "PPKn": "🏛️", "Pendidikan Agama": "🕌",
    "PJOK": "⚽", "Seni": "🎨", "Koding & AI": "🤖", "Informatika": "💻", "Prakarya": "🛠️",
    "Ekonomi": "💰", "Geografi": "🗺️", "Sosiologi": "👥", "Sejarah": "📜",
    "Matematika Dasar": "🔢", "Fisika Dasar": "⚛️", "Kimia Dasar": "🧪", "Statistika": "📊",
    "Pengantar Ekonomi": "💹", "Akuntansi Dasar": "🧾", "Bahasa Inggris Akademik": "🎓",
    "Pengetahuan Umum": "🌟", "Logika & Teka-teki": "🧩",
  };
  function openSubjects(level) {
    state.level = level;
    applyTheme(level);
    var cat = catOf(level);
    setMascot("subjects-mascot-use", cat);
    $("subjects-title").textContent = "Pelajaran " + level;
    $("subjects-sub").textContent = cat.tagline + " — " + cat.mascotName + " jadi pelatihmu di arena.";
    var grid = $("subject-grid");
    grid.innerHTML = '<p class="loading-note">⏳ Memuat soal...</p>';
    go("subjects");
    ensureLevel(level).then(function () { renderSubjectCards(cat); }, function () {
      grid.innerHTML = '<p class="loading-note">Gagal memuat soal. Cek koneksi lalu coba lagi.</p>';
    });
  }
  function renderSubjectCards(cat) {
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
    loadBank(bankId).then(function () {
      if (isIdentified()) { openStart(bankId); return; }
      state.pendingBank = bankId;
      go("login");
    }, function () {
      toast("Gagal memuat soal. Cek koneksi lalu coba lagi.");
    });
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
      if (state.mode === "ranked") { state.pendingRanked = state.rankedLevel; state.pendingBank = null; }
      else { state.pendingBank = state.bankId; state.pendingRanked = null; }
      go("login");
    });
    chip.appendChild(ch);
    box.appendChild(chip);
  }
  function onAuthChanged() {
    updateAuthUI();
    if (state.screen === "profile" && !(window.Auth && Auth.user())) go("home");
    if (state.pendingRanked && isIdentified()) {
      var rl = state.pendingRanked;
      state.pendingRanked = null;
      openRankedStart(rl);
      return;
    }
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

  /* ---------- ranked ---------- */
  function rankedTotals(level) {
    try { return JSON.parse(localStorage.getItem("ujianku_ranked_" + level) || '{"points":0,"matches":0,"best":0}'); }
    catch (e) { return { points: 0, matches: 0, best: 0 }; }
  }
  function saveRankedTotals(level, t) {
    try { localStorage.setItem("ujianku_ranked_" + level, JSON.stringify(t)); } catch (e) {}
  }
  function rankedLbKey(level) { return "ujianku_ranked_lb_" + level; }
  function rankedLb(level) {
    try { return JSON.parse(localStorage.getItem(rankedLbKey(level)) || "[]"); }
    catch (e) { return []; }
  }
  function renderRankedLevels() {
    var grid = $("ranked-grid");
    grid.innerHTML = "";
    window.CATALOG.forEach(function (c) {
      var t = rankedTotals(c.level);
      var btn = document.createElement("button");
      btn.className = "level-card theme-" + c.level;
      btn.innerHTML =
        '<span class="division-badge">⚔️ Ranked · ' + esc(c.divisionMedal) + '</span>' +
        '<span class="level-mascot-name">si ' + esc(c.mascotName) + '</span>' +
        '<span class="mascot mx-bounce"><svg><use href="#m-' + c.mascot + '"/></svg></span>' +
        "<h3>" + esc(c.level) + "</h3>" +
        "<p>30 soal acak · 15 dtk/soal</p>" +
        (t.points > 0
          ? "<p>⭐ " + t.points + " poin · " + t.matches + " match</p>"
          : "<p>Belum ada poin — mulai dari sini!</p>") +
        '<span class="go">Mulai Ranked →</span>';
      btn.addEventListener("click", function () { requireRankedAuth(c.level); });
      grid.appendChild(btn);
    });
  }
  function requireRankedAuth(level) {
    ensureLevel(level).then(function () {
      if (isIdentified()) { openRankedStart(level); return; }
      state.pendingRanked = level;
      state.pendingBank = null;
      go("login");
    }, function () {
      toast("Gagal memuat soal. Cek koneksi lalu coba lagi.");
    });
  }
  function openRankedStart(level) {
    state.mode = "ranked";
    state.rankedLevel = level;
    state.bankId = null;
    state.bank = null;
    applyTheme(level);
    var cat = catOf(level);
    setMascot("start-mascot-use", cat);
    $("start-speech").textContent = pick(linesFor(RANKED_START_LINES, level));
    $("start-kicker").textContent = "⚔️ MODE RANKED · " + level;
    $("start-title").textContent = "Siap naik peringkat?";
    var t = rankedTotals(level);
    $("start-meta").innerHTML =
      '<span class="pill">' + RANKED_Q + " soal acak</span>" +
      '<span class="pill">⏱ ' + RANKED_SEC + " detik/soal</span>" +
      '<span class="pill">dari ' + cat.banks.length + " pelajaran</span>" +
      (t.points > 0 ? '<span class="pill">⭐ ' + t.points + " poin terkumpul</span>" : "");
    var back = document.querySelector("#screen-start .backlink");
    back.setAttribute("data-go", "ranked");
    back.textContent = "← Ganti divisi";
    $("btn-start-quiz").textContent = "⚔️ Mulai Ranked";
    renderIdentity();
    go("start");
  }

  function startRankedQuiz(name) {
    state.mode = "ranked";
    state.player = name;
    state.qs = buildRankedSession(state.rankedLevel);
    state.qi = 0;
    state.answers = state.qs.map(function () { return -1; });
    state.qPoints = 0;
    state.qLock = false;
    state.startTime = Date.now();
    applyTheme(state.rankedLevel);
    setMascot("quiz-buddy-use", catOf(state.rankedLevel));
    buddyCheer(false);
    $("quiz-bank-label").textContent = "⚔️ RANKED · " + state.rankedLevel;
    $("btn-prev").style.display = "none";
    $("btn-next").style.display = "none";
    $("btn-submit").style.display = "none";
    $("btn-quiz-menu").style.display = "none";
    renderRankedQuestion();
    go("quiz");
  }
  function updateRankedTimerUI() {
    var s = Math.max(0, state.qTimeLeft);
    $("timer-text").textContent = "0:" + (s < 10 ? "0" : "") + s;
    $("timer-fill").style.width = (s / RANKED_SEC) * 100 + "%";
    var low = s <= 5;
    $("timer-fill").classList.toggle("low", low);
    $("timer-text").classList.toggle("low", low);
  }
  function renderRankedQuestion() {
    var q = state.qs[state.qi];
    state.qLock = false;
    state.qTimeLeft = RANKED_SEC;
    var sub = q.subject
      ? ' <span class="q-subject">' + (SUB_ICONS[q.subject] || "📚") + " " + esc(q.subject) + "</span>"
      : "";
    $("q-num").innerHTML = "Soal " + (state.qi + 1) + " dari " + state.qs.length + sub;
    $("q-text").textContent = q.q;
    $("quiz-progress").textContent = "⭐ " + state.qPoints + " poin";
    var box = $("q-opts");
    box.innerHTML = "";
    var letters = ["A", "B", "C", "D", "E"];
    q.options.forEach(function (opt, i) {
      var b = document.createElement("button");
      b.className = "opt";
      b.innerHTML = '<span class="letter">' + letters[i] + "</span>";
      var span = document.createElement("span");
      span.className = "opt-text";
      span.textContent = opt;
      b.appendChild(span);
      b.addEventListener("click", function () { lockRankedAnswer(i); });
      box.appendChild(b);
    });
    renderMath($("screen-quiz"));
    updateRankedTimerUI();
    clearInterval(state.timerId);
    state.timerId = setInterval(function () {
      state.qTimeLeft -= 1;
      updateRankedTimerUI();
      if (state.qTimeLeft <= 0) { lockRankedAnswer(-1); }
    }, 1000);
  }
  function lockRankedAnswer(i) {
    if (state.qLock) return;
    state.qLock = true;
    clearInterval(state.timerId);
    var q = state.qs[state.qi];
    state.answers[state.qi] = i;
    var ok = i === q.answer;
    if (ok) {
      var bonus = Math.ceil(RANKED_BONUS * Math.max(0, state.qTimeLeft) / RANKED_SEC);
      state.qPoints += RANKED_BASE + bonus;
      buddyCheer(true);
    } else {
      var bt = $("buddy-text");
      if (bt) bt.textContent = i < 0
        ? pick(linesFor(BUDDY_TIMEOUT, currentLevel()))
        : pick(linesFor(BUDDY_MISS, currentLevel()));
    }
    var btns = $("q-opts").querySelectorAll(".opt");
    btns.forEach(function (b, bi) {
      b.disabled = true;
      // kalau waktu habis (i < 0): jangan bocorkan kunci jawaban, soal langsung hangus
      if (i >= 0) {
        if (bi === q.answer) b.classList.add("correct");
        else if (bi === i) b.classList.add("wrong");
      }
    });
    $("quiz-progress").textContent = "⭐ " + state.qPoints + " poin";
    setTimeout(nextRanked, 800);
  }
  function nextRanked() {
    if (state.qi < state.qs.length - 1) {
      state.qi++;
      renderRankedQuestion();
    } else {
      finishRanked();
    }
  }
  function finishRanked() {
    clearInterval(state.timerId);
    var qs = state.qs;
    var correct = 0;
    qs.forEach(function (q, i) { if (state.answers[i] === q.answer) correct++; });
    var used = Math.round((Date.now() - state.startTime) / 1000);
    var pts = state.qPoints;
    state.result = { correct: correct, total: qs.length, points: pts, used: used, ranked: true };
    // akumulasi poin pemain
    var t = rankedTotals(state.rankedLevel);
    t.points += pts;
    t.matches += 1;
    if (pts > t.best) t.best = pts;
    saveRankedTotals(state.rankedLevel, t);
    // papan peringkat ranked per divisi (total poin akumulasi)
    var arr = rankedLb(state.rankedLevel);
    var me = null;
    arr.forEach(function (e) { if (e.name === state.player) me = e; });
    if (!me) { me = { name: state.player, points: 0, matches: 0, best: 0 }; arr.push(me); }
    me.points += pts;
    me.matches += 1;
    if (pts > me.best) me.best = pts;
    arr.sort(function (a, b) { return b.points - a.points || b.best - a.best; });
    arr = arr.slice(0, 50);
    try { localStorage.setItem(rankedLbKey(state.rankedLevel), JSON.stringify(arr)); } catch (e) {}
    var rank = 0;
    arr.forEach(function (e, i) { if (e.name === state.player && rank === 0) rank = i + 1; });
    state.result.rank = rank;
    state.result.totalPlayers = arr.length;
    state.result.allPoints = t.points;
    var freshR = recordProgress({
      xp: pts, ranked: true, correct: correct, total: qs.length,
      bankId: catOf(state.rankedLevel).banks.map(function (b) { return b.id; })
    });
    showResult();
    if (freshR.length) showBadgeModal(freshR);
  }
  function showRankedResult() {
    var r = state.result;
    var level = state.rankedLevel;
    var cat = catOf(level);
    setMascot("result-mascot-use", cat);
    var maxPts = RANKED_Q * (RANKED_BASE + RANKED_BONUS);
    $("result-kicker").textContent = "⚔️ RANKED · " + level;
    var tier = r.points >= 350 ? { name: "👑 CALON JUARA", sub: "Peringkat 1 makin dekat, bestie!" } :
               r.points >= 250 ? { name: "🔥 MENYALA!", sub: "Terus gas ke puncak!" } :
               r.points >= 150 ? { name: "💪 GAS TERUS", sub: "Poin terus diakumulasi!" } :
                                 { name: "🎯 PEMANASAN", sub: "Main lagi, kumpulin poin!" };
    var med = $("result-medal");
    med.style.setProperty("--medal", "#ffd93b");
    med.style.setProperty("--medal-deep", "#f5b301");
    med.classList.remove("mx-medal-pop");
    void med.offsetWidth;
    med.classList.add("mx-medal-pop");
    $("result-medal-label").innerHTML = tier.name + '<span class="sub">' + tier.sub + "</span>";
    var m = $("result-mascot");
    m.classList.remove("mx-dance", "mx-bounce");
    m.classList.add(r.points >= 250 ? "mx-dance" : "mx-bounce");
    countUp($("result-score"), r.points);
    $("result-score-max").textContent = "/ " + maxPts;
    var frac = r.points / maxPts;
    requestAnimationFrame(function () {
      $("ring-fg").style.strokeDashoffset = 326.7 * (1 - frac);
    });
    setTimeout(function () {
      $("ring-fg").style.strokeDashoffset = 326.7 * (1 - frac);
    }, 60);
    $("result-stats").innerHTML =
      '<div class="stat good"><b>' + r.correct + "</b><span>Benar</span></div>" +
      '<div class="stat bad"><b>' + (r.total - r.correct) + '</b><span>Salah</span></div>' +
      '<div class="stat"><b>+' + r.points + "</b><span>Poin</span></div>";
    $("lb-note").textContent = "Total poin rankedmu: " + r.allPoints +
      " — peringkat #" + r.rank + " dari " + r.totalPlayers + " pemain di Divisi " + level + ".";
    go("result");
    if (r.points >= 200) confetti($("result-card"), 70);
  }

  /* ---------- lencana & level ---------- */
  var LEVELS = [
    { xp: 0, name: "Pemula 🌱" },
    { xp: 500, name: "Petarung ⚔️" },
    { xp: 1500, name: "Ksatria 🛡️" },
    { xp: 3000, name: "Master 🎖️" },
    { xp: 6000, name: "Legenda 👑" }
  ];
  function loadProgress() {
    try {
      var p = JSON.parse(localStorage.getItem("ujianku_progress") || "{}");
      return {
        xp: p.xp || 0, badges: p.badges || {}, days: p.days || [],
        subjects: p.subjects || [], matches: p.matches || 0,
        rankedMatches: p.rankedMatches || 0, golds: p.golds || 0,
        perfects: p.perfects || 0, ranked25: p.ranked25 || 0
      };
    } catch (e) {
      return { xp: 0, badges: {}, days: [], subjects: [], matches: 0, rankedMatches: 0, golds: 0, perfects: 0, ranked25: 0 };
    }
  }
  function saveProgress(p) {
    try { localStorage.setItem("ujianku_progress", JSON.stringify(p)); } catch (e) {}
  }
  function todayStr() {
    var d = new Date();
    return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
  }
  function dayStreak(days) {
    var set = {};
    days.forEach(function (d) { set[d] = 1; });
    var d = new Date();
    var key = function (dt) { return dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate(); };
    if (!set[key(d)]) d.setDate(d.getDate() - 1);
    var s = 0;
    while (set[key(d)]) { s++; d.setDate(d.getDate() - 1); }
    return s;
  }
  function buildBadgeCtx() {
    var me = displayName();
    var total = 0, champ = false;
    (window.CATALOG || []).forEach(function (c) {
      total += rankedTotals(c.level).points;
      var arr = rankedLb(c.level);
      if (arr.length && arr[0].name === me) champ = true;
    });
    return { totalRanked: total, champion: champ };
  }
  var BADGES = [
    { id: "first", icon: "🌱", name: "Langkah Pertama", desc: "Selesaikan 1 kuis",
      test: function (p) { return p.matches >= 1; },
      prog: function (p) { return Math.min(p.matches, 1) + "/1"; } },
    { id: "streak3", icon: "🔥", name: "Semangat Membara", desc: "Main 3 hari beruntun",
      test: function (p) { return dayStreak(p.days) >= 3; },
      prog: function (p) { return Math.min(dayStreak(p.days), 3) + "/3 hari"; } },
    { id: "streak7", icon: "⚡", name: "Kilat 7 Hari", desc: "Main 7 hari beruntun",
      test: function (p) { return dayStreak(p.days) >= 7; },
      prog: function (p) { return Math.min(dayStreak(p.days), 7) + "/7 hari"; } },
    { id: "perfect", icon: "🎯", name: "Penembak Jitu", desc: "Semua benar di mode normal",
      test: function (p) { return p.perfects > 0; },
      prog: function () { return "jawab 15/15 benar"; } },
    { id: "gold", icon: "🥇", name: "Pemburu Emas", desc: "Raih medali emas (nilai ≥ 85)",
      test: function (p) { return p.golds > 0; },
      prog: function () { return "nilai 85+"; } },
    { id: "explorer", icon: "📚", name: "Petualang", desc: "Mainkan 10 pelajaran berbeda",
      test: function (p) { return p.subjects.length >= 10; },
      prog: function (p) { return Math.min(p.subjects.length, 10) + "/10 pelajaran"; } },
    { id: "ranked10", icon: "⚔️", name: "Petarung Ranked", desc: "Main 10 match ranked",
      test: function (p) { return p.rankedMatches >= 10; },
      prog: function (p) { return Math.min(p.rankedMatches, 10) + "/10 match"; } },
    { id: "ranked25", icon: "👑", name: "Dewa Ranked", desc: "25+ benar dalam 1 match ranked",
      test: function (p) { return p.ranked25 > 0; },
      prog: function () { return "25+/30 benar"; } },
    { id: "collector", icon: "⭐", name: "Kolektor 1000", desc: "Kumpulkan 1000 poin ranked",
      test: function (p, ctx) { return ctx.totalRanked >= 1000; },
      prog: function (p, ctx) { return Math.min(ctx.totalRanked, 1000) + "/1000 poin"; } },
    { id: "champion", icon: "🏆", name: "Juara Sejati", desc: "Peringkat #1 ranked di sebuah divisi",
      test: function (p, ctx) { return ctx.champion; },
      prog: function () { return "jadi #1 di divisi"; } }
  ];
  function recordProgress(opts) {
    var p = loadProgress();
    p.matches += 1;
    p.xp += opts.xp || 0;
    var t = todayStr();
    if (p.days.indexOf(t) < 0) p.days.push(t);
    var ids = opts.bankId ? (Array.isArray(opts.bankId) ? opts.bankId : [opts.bankId]) : [];
    ids.forEach(function (id) { if (p.subjects.indexOf(id) < 0) p.subjects.push(id); });
    if (!opts.ranked) {
      if (opts.correct === opts.total && opts.total > 0) p.perfects += 1;
      if (opts.score >= 85) p.golds += 1;
    } else {
      p.rankedMatches += 1;
      if (opts.correct >= 25) p.ranked25 += 1;
    }
    var ctx = buildBadgeCtx();
    var fresh = [];
    BADGES.forEach(function (b) {
      if (!p.badges[b.id] && b.test(p, ctx)) { p.badges[b.id] = Date.now(); fresh.push(b); }
    });
    saveProgress(p);
    return fresh;
  }
  function showBadgeModal(fresh) {
    $("modal-title").textContent = "🎖️ Lencana Baru!";
    $("modal-text").innerHTML = fresh.map(function (b) {
      return b.icon + " <b>" + esc(b.name) + "</b> — " + esc(b.desc);
    }).join("<br>");
    $("modal-ok").textContent = "Keren!";
    $("modal-ok").onclick = function () {
      $("modal").classList.add("hidden");
      $("modal-ok").textContent = "OK";
    };
    $("modal-cancel").style.display = "none";
    $("modal").classList.remove("hidden");
    confetti($("modal").querySelector(".modal-card"), 40);
  }
  function levelOf(xp) {
    var cur = LEVELS[0];
    LEVELS.forEach(function (l) { if (xp >= l.xp) cur = l; });
    return cur;
  }
  function nextLevel(xp) {
    for (var i = 0; i < LEVELS.length; i++) if (LEVELS[i].xp > xp) return LEVELS[i];
    return null;
  }
  function fmtBadgeDate(ts) {
    try { return "didapat " + new Date(ts).toLocaleDateString("id-ID", { day: "numeric", month: "short" }); }
    catch (e) { return ""; }
  }
  function renderBadges() {
    var p = loadProgress();
    var lvl = levelOf(p.xp);
    var nx = nextLevel(p.xp);
    $("badge-level-name").textContent = lvl.name;
    $("badge-level-xp").textContent = p.xp + " XP";
    if (nx) {
      $("badge-xp-fill").style.width = ((p.xp - lvl.xp) / (nx.xp - lvl.xp)) * 100 + "%";
      $("badge-level-next").textContent = (nx.xp - p.xp) + " XP lagi ke " + nx.name;
    } else {
      $("badge-xp-fill").style.width = "100%";
      $("badge-level-next").textContent = "Level maksimal! Kamu legenda!";
    }
    var ctx = buildBadgeCtx();
    var grid = $("badge-grid");
    grid.innerHTML = "";
    BADGES.forEach(function (b) {
      var got = p.badges[b.id];
      var div = document.createElement("div");
      div.className = "badge-card" + (got ? " got" : "");
      div.innerHTML =
        '<span class="badge-icon">' + b.icon + "</span>" +
        "<b>" + esc(b.name) + "</b>" +
        "<p>" + esc(b.desc) + "</p>" +
        (got
          ? '<span class="badge-date">' + esc(fmtBadgeDate(got)) + "</span>"
          : '<span class="badge-prog">' + esc(b.prog(p, ctx)) + '</span><span class="badge-lock">🔒 terkunci</span>');
      grid.appendChild(div);
    });
  }

  /* ---------- start ---------- */
  function openStart(bankId) {
    state.bankId = bankId;
    state.bank = bankById(bankId);
    state.mode = "normal";
    var back = document.querySelector("#screen-start .backlink");
    back.setAttribute("data-go", "subjects");
    back.textContent = "← Ganti pelajaran";
    $("btn-start-quiz").textContent = "Masuk Arena";
    var b = state.bank;
    applyTheme(b.level);
    var cat = catOf(b.level);
    setMascot("start-mascot-use", cat);
    $("start-speech").textContent = pick(linesFor(START_LINES, b.level));
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
    if (state.mode === "ranked") {
      if (!isIdentified()) { requireRankedAuth(state.rankedLevel); return; }
      startRankedQuiz(displayName());
      return;
    }
    if (!isIdentified()) { requireAuth(state.bankId); return; }
    startQuiz(displayName());
  });

  /* ---------- quiz ---------- */
  var SESSION_Q = 15; // soal per sesi, diacak dari bank biar tiap main beda
  var SEC_PER_Q = 30; // 30 detik per soal
  var RANKED_Q = 30;    // soal per match ranked (acak dari semua pelajaran divisi)
  var RANKED_SEC = 15;  // detik per soal di ranked
  var RANKED_BASE = 10; // poin dasar jawaban benar
  var RANKED_BONUS = 5; // bonus kecepatan maksimal per soal
  function shuffleArr(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function sessionCount(bank) { return Math.min(SESSION_Q, bank.questions.length); }
  function sessionDur(bank) {
    return sessionCount(bank) * SEC_PER_Q;
  }
  // acak urutan opsi satu soal (jawaban ikut dipetakan ulang)
  function shuffleQuestion(q, subject) {
    var idx = q.options.map(function (_, i) { return i; });
    shuffleArr(idx);
    return {
      q: q.q,
      options: idx.map(function (i) { return q.options[i]; }),
      answer: idx.indexOf(q.answer),
      solution: q.solution,
      subject: subject || null
    };
  }
  // acak urutan soal + acak urutan opsi
  function buildSession(bank) {
    var qs = bank.questions.map(function (q) { return shuffleQuestion(q); });
    shuffleArr(qs);
    return qs.slice(0, sessionCount(bank));
  }
  // ranked: campur semua soal dari semua pelajaran dalam satu divisi
  function buildRankedSession(level) {
    var pool = [];
    catOf(level).banks.forEach(function (b) {
      var bank = bankById(b.id);
      if (!bank) return;
      bank.questions.forEach(function (q) { pool.push(shuffleQuestion(q, b.subject)); });
    });
    shuffleArr(pool);
    return pool.slice(0, Math.min(RANKED_Q, pool.length));
  }
  function startQuiz(name) {
    state.mode = "normal";
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
    $("btn-prev").style.display = "";
    $("btn-next").style.display = "";
    $("btn-submit").style.display = "";
    $("btn-quiz-menu").style.display = "";
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
    $("modal-ok").textContent = "OK";
    $("modal-cancel").style.display = "";
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
    var rq = state.result;
    var freshQ = recordProgress({
      xp: rq.correct * 10, bankId: state.bankId, ranked: false,
      correct: rq.correct, total: rq.total, score: rq.score
    });
    showResult();
    if (freshQ.length) showBadgeModal(freshQ);
  }

  /* ---------- result ---------- */
  function showResult() {
    var r = state.result;
    if (r.ranked) { showRankedResult(); return; }
    $("result-score-max").textContent = "/ 100";
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
  $("btn-retry").addEventListener("click", function () {
    if (state.mode === "ranked") startRankedQuiz(state.player);
    else startQuiz(state.player);
  });

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
        '<p class="rev-q">' + (i + 1) + ". " +
        (q.subject ? '<span class="q-subject">' + (SUB_ICONS[q.subject] || "📚") + " " + esc(q.subject) + "</span> " : "") +
        esc(q.q) + "</p>" +
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
    if (!state.lbMode) state.lbMode = "normal";
    var tabs = document.querySelectorAll("#lb-tabs .lb-tab");
    tabs.forEach(function (tb) {
      tb.classList.toggle("active", state.lbMode === tb.getAttribute("data-lbmode"));
      tb.onclick = function () {
        state.lbMode = tb.getAttribute("data-lbmode");
        initLeaderboard();
      };
    });
    var headRow = document.querySelector("#screen-leaderboard thead tr");
    var subLabel = subSel.closest("label");
    lvSel.onchange = function () {
      state.lbLevel = lvSel.value; state.lbSubject = null;
      if (state.lbMode === "ranked") loadRankedLb(); else fillLbSubjects();
    };
    subSel.onchange = function () { state.lbSubject = subSel.value; loadLb(); };
    if (state.lbMode === "ranked") {
      LB.online = false;
      subLabel.style.display = "none";
      headRow.innerHTML = "<th>#</th><th>Nama</th><th>Total Poin</th><th>Main</th><th>Terbaik</th>";
      loadRankedLb();
      $("lb-source").textContent = "⚔️ Papan peringkat Ranked — total poin akumulasi per divisi, tersimpan di perangkat ini.";
      return;
    }
    subLabel.style.display = "";
    headRow.innerHTML = "<th>#</th><th>Nama</th><th>Skor</th><th>Benar</th><th>Waktu</th>";
    fillLbSubjects();
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

  function loadRankedLb() {
    var rows = rankedLb(state.lbLevel);
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
        '<td class="score">' + r.points + "</td>" +
        "<td>" + r.matches + "×</td>" +
        "<td>+" + r.best + "</td>";
      tb.appendChild(tr);
    });
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
  $("hero-ranked").addEventListener("click", function () {
    renderRankedLevels();
    go("ranked");
  });
  /* pra-muat semua bank di latar belakang (berurutan, biar ringan),
     jadi pas user buka pelajaran soalnya sudah siap */
  setTimeout(function () {
    var ids = [];
    (window.CATALOG || []).forEach(function (c) {
      c.banks.forEach(function (b) { ids.push(b.id); });
    });
    ids.reduce(function (p, id) {
      return p.then(function () { return loadBank(id).catch(function () {}); });
    }, Promise.resolve());
  }, 1500);
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
