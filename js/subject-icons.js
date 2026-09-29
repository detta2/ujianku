/* Ikon stiker garis tebal untuk kartu pelajaran (Opsi 1).
   Setiap ikon: SVG 24x24, class a = fill primer, b = fill sekunder, c = garis detail.
   Warna per pelajaran via --c1/--c2. */
(function () {
  var P = {
    "Matematika": { c1: "#ffd93b", c2: "#ffffff",
      svg: '<rect class="a" x="5" y="2.5" width="14" height="19" rx="3"/><rect class="b" x="8" y="6" width="8" height="4" rx="1"/><circle class="b" cx="9.2" cy="14" r="1.2"/><circle class="b" cx="12" cy="14" r="1.2"/><circle class="b" cx="14.8" cy="14" r="1.2"/><circle class="b" cx="9.2" cy="17.6" r="1.2"/><circle class="b" cx="12" cy="17.6" r="1.2"/><circle class="b" cx="14.8" cy="17.6" r="1.2"/>' },
    "IPA": { c1: "#7dd3fc", c2: "#ffffff",
      svg: '<path class="a" d="M10 2.5h4M10.8 2.5V9l-5.2 9.2A2.4 2.4 0 0 0 7.7 21.5h8.6a2.4 2.4 0 0 0 2.1-3.3L13.2 9V2.5"/><circle class="b" cx="10.5" cy="16" r="1.3"/><circle class="b" cx="13.8" cy="18" r="1"/><path class="c" d="M9 13.5h6"/>' },
    "IPS": { c1: "#86efac", c2: "#ffffff",
      svg: '<circle class="a" cx="12" cy="12" r="9"/><ellipse class="c" cx="12" cy="12" rx="4.2" ry="9"/><path class="c" d="M3 12h18M4.6 7.5h14.8M4.6 16.5h14.8"/>' },
    "Bahasa Indonesia": { c1: "#fda4af", c2: "#ffffff",
      svg: '<path class="a" d="M14.8 4.2l5 5L8.5 20.5l-5.7 1 1-5.7z"/><path class="c" d="M13.2 5.8l5 5"/><path class="b" d="M8.5 20.5l-5.7 1 1-5.7 4.7 4.7z"/>' },
    "Bahasa Inggris": { c1: "#c4b5fd", c2: "#ffffff",
      svg: '<path class="a" d="M3.5 4.5h17v10.5H9.8l-4.5 4v-4H3.5z"/><text class="t" x="12" y="13.5" text-anchor="middle" font-size="8" font-weight="800">Aa</text>' },
    "PPKn": { c1: "#ffffff", c2: "#ef4444",
      svg: '<path class="c" d="M6 2.5v19"/><path class="b" d="M6 3.5h11a1 1 0 0 1 1 1v3H6z"/><path class="a" d="M6 7.5h11a1 1 0 0 1 1 1v3H6z"/>' },
    "Pendidikan Agama": { c1: "#5eead4", c2: "#fde68a",
      svg: '<path class="a" d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z"/><path class="b" d="M17.5 4.5l.9 1.9 2 .3-1.5 1.4.4 2-1.8-1-1.8 1 .4-2-1.5-1.4 2-.3z"/>' },
    "PJOK": { c1: "#ffffff", c2: "#0b2a6b",
      svg: '<circle class="a" cx="12" cy="12" r="9"/><path class="b" d="M12 8.2l3.4 2.5-1.3 4h-4.2l-1.3-4z"/><path class="c" d="M12 8.2V4.8M15.4 10.7l3.3-1.1M14.1 14.7l2.1 2.8M9.9 14.7l-2.1 2.8M8.6 10.7L5.3 9.6"/>' },
    "Seni": { c1: "#f9a8d4", c2: "#ffffff",
      svg: '<path class="a" d="M12 3a9 9 0 1 0 .1 18c1.4 0 2.1-.9 1.6-2.1-.5-1.2.3-2.4 1.6-2.4h1.9a3.8 3.8 0 0 0 3.8-3.8C21 7.4 16.9 3 12 3z"/><circle class="b" cx="8" cy="9.5" r="1.4"/><circle class="b" cx="12" cy="7.5" r="1.4"/><circle class="b" cx="16" cy="9.5" r="1.4"/>' },
    "Informatika": { c1: "#93c5fd", c2: "#ffffff",
      svg: '<rect class="a" x="4" y="3.5" width="16" height="11" rx="2"/><path class="c" d="M7 11l2-2 2 2 3-3"/><path class="a" d="M2.5 18.5h19"/>' },
    "Prakarya": { c1: "#fdba74", c2: "#ffffff",
      svg: '<rect class="a" x="3" y="4.5" width="10" height="6" rx="2"/><rect class="b" x="11" y="6" width="3.2" height="14.5" rx="1.6"/>' },
    "Fisika": { c1: "#c4b5fd", c2: "#fde68a",
      svg: '<ellipse class="c" cx="12" cy="12" rx="9" ry="3.6"/><ellipse class="c" cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)"/><ellipse class="c" cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)"/><circle class="b" cx="12" cy="12" r="1.8"/>' },
    "Kimia": { c1: "#7dd3fc", c2: "#ffffff",
      svg: '<path class="a" d="M9.5 3h5v6.2l4.3 8.6a2.3 2.3 0 0 1-2 3.4H7.2a2.3 2.3 0 0 1-2-3.4L9.5 9.2z"/><path class="c" d="M7.3 14.5h9.4"/><circle class="b" cx="10.8" cy="17.3" r="1.2"/><circle class="b" cx="13.6" cy="18.2" r="0.9"/>' },
    "Biologi": { c1: "#86efac", c2: "#ffffff",
      svg: '<path class="c" d="M8 3c0 5 8 5 8 9s-8 4-8 9"/><path class="c" d="M16 3c0 5-8 5-8 9s8 4 8 9"/><path class="c" d="M9.6 7.3h4.8M9.6 12h4.8M9.6 16.7h4.8"/>' },
    "Ekonomi": { c1: "#fde68a", c2: "#f59e0b",
      svg: '<ellipse class="a" cx="12" cy="6.5" rx="6.5" ry="3"/><path class="a" d="M5.5 6.5v5c0 1.7 2.9 3 6.5 3s6.5-1.3 6.5-3v-5"/><path class="c" d="M5.5 11.5v5c0 1.7 2.9 3 6.5 3s6.5-1.3 6.5-3v-5"/>' },
    "Geografi": { c1: "#86efac", c2: "#7dd3fc",
      svg: '<path class="a" d="M9 4L3.5 6v14L9 18l6 2 5.5-2V4L15 6z"/><path class="c" d="M9 4v14M15 6v14"/>' },
    "Sosiologi": { c1: "#fda4af", c2: "#c4b5fd",
      svg: '<circle class="b" cx="9" cy="8" r="3"/><path class="a" d="M3.5 19.5c0-3.2 2.5-5.2 5.5-5.2s5.5 2 5.5 5.2"/><circle class="b" cx="16.8" cy="9" r="2.4"/><path class="c" d="M15.8 14.6c2.7.3 4.7 2.2 4.7 4.9"/>' },
    "Sejarah": { c1: "#e7c873", c2: "#ffffff",
      svg: '<path class="a" d="M6.5 3.5h11M6.5 20.5h11M8 3.5v3.8l4 4.7 4-4.7V3.5M8 20.5v-3.8l4-4.7 4 4.7v3.8"/>' },
    "Statistika": { c1: "#93c5fd", c2: "#fde68a",
      svg: '<path class="c" d="M4 4v16h16"/><rect class="a" x="7" y="12.5" width="3.4" height="5.5" rx="1"/><rect class="b" x="11.6" y="9" width="3.4" height="9" rx="1"/><rect class="a" x="16.2" y="5.5" width="3.4" height="12.5" rx="1"/>' },
    "Akuntansi Dasar": { c1: "#fca5a5", c2: "#ffffff",
      svg: '<rect class="a" x="5" y="3" width="14" height="18" rx="2"/><path class="c" d="M9.5 3v18"/><path class="c" d="M13 8.5h3.5M13 12.5h3.5M13 16.5h3.5"/>' },
    "Pengetahuan Umum": { c1: "#fde68a", c2: "#ffffff",
      svg: '<path class="a" d="M12 3a6.5 6.5 0 0 1 3.7 11.8c-.8.6-1.2 1.3-1.2 2.2H9.5c0-.9-.4-1.6-1.2-2.2A6.5 6.5 0 0 1 12 3z"/><path class="b" d="M10 19.5h4M10.8 21.5h2.4"/>' },
    "Logika & Teka-teki": { c1: "#c4b5fd", c2: "#ffffff",
      svg: '<circle class="a" cx="12" cy="12" r="3.4"/><path class="c" d="M12 2.8v2.6M12 18.6v2.6M2.8 12h2.6M18.6 12h2.6M5.5 5.5l1.9 1.9M16.6 16.6l1.9 1.9M18.5 5.5l-1.9 1.9M7.4 16.6l-1.9 1.9"/>' }
  };
  /* alias: pelajaran turunan pakai ikon induknya */
  P["Matematika Dasar"] = P["Matematika"];
  P["Fisika Dasar"] = P["Fisika"];
  P["Kimia Dasar"] = P["Kimia"];
  P["Pengantar Ekonomi"] = P["Ekonomi"];
  P["Bahasa Inggris Akademik"] = P["Bahasa Inggris"];
  P["__default"] = { c1: "#dbe7ff", c2: "#ffffff",
    svg: '<path class="a" d="M12 6c-2-1.5-4.5-2-8-2v14c3.5 0 6 .5 8 2 2-1.5 4.5-2 8-2V4c-3.5 0-6 .5-8 2z"/><path class="c" d="M12 6v14"/>' };

  window.subjectIcon = function (name) {
    var d = P[name] || P["__default"];
    return '<svg viewBox="0 0 24 24" style="--c1:' + d.c1 + ';--c2:' + d.c2 + '" aria-hidden="true">' + d.svg + '</svg>';
  };
})();
