/* SiPintar config.
 * LEADERBOARD_API: kosongkan ("") untuk mode lokal (skor tersimpan di perangkat).
 * Isi dengan URL backend bila sudah deploy api/leaderboard.py di VPS,
 * contoh: "https://api.contohmu.id"  (HARUS https bila web diakses via https)
 */
window.APP_CONFIG = {
  LEADERBOARD_API: "",
  // Google OAuth Client ID (dari Google Cloud Console).
  // Kosongkan = tombol login Google disembunyikan, hanya mode tamu.
  GOOGLE_CLIENT_ID: "255111005069-o4h5v2k3sg4pjhnmvigdt3difnv42a39.apps.googleusercontent.com",
};

/* Katalog: jenjang -> daftar bank soal (id = key di window.QBANK) */
window.CATALOG = [
  {
    level: "SD", tagline: "Kelas 4–6", color: "#16a34a",
    division: "Divisi 1", divisionMedal: "🥉 Perunggu",
    mascot: "sd", mascotName: "Kiki", friend: "Kiki, pelatih andalanmu di Divisi 1!",
    banks: [
      { id: "sd-matematika", subject: "Matematika" },
      { id: "sd-ipa", subject: "IPA" },
      { id: "sd-ips", subject: "IPS" },
      { id: "sd-bahasa-indonesia", subject: "Bahasa Indonesia" },
      { id: "sd-bahasa-inggris", subject: "Bahasa Inggris" },
      { id: "sd-ppkn", subject: "PPKn" },
      { id: "sd-pai", subject: "Pendidikan Agama" },
      { id: "sd-pjok", subject: "PJOK" },
      { id: "sd-seni", subject: "Seni" },
    ],
  },
  {
    level: "SMP", tagline: "Kelas 7–9", color: "#2563eb",
    division: "Divisi 2", divisionMedal: "🥈 Perak",
    mascot: "smp", mascotName: "Koko", friend: "Koko siap mengantaramu naik podium!",
    banks: [
      { id: "smp-matematika", subject: "Matematika" },
      { id: "smp-ipa", subject: "IPA" },
      { id: "smp-ips", subject: "IPS" },
      { id: "smp-bahasa-indonesia", subject: "Bahasa Indonesia" },
      { id: "smp-bahasa-inggris", subject: "Bahasa Inggris" },
      { id: "smp-ppkn", subject: "PPKn" },
      { id: "smp-pai", subject: "Pendidikan Agama" },
      { id: "smp-informatika", subject: "Informatika" },
      { id: "smp-prakarya", subject: "Prakarya" },
      { id: "smp-pjok", subject: "PJOK" },
      { id: "smp-seni", subject: "Seni" },
    ],
  },
  {
    level: "SMA", tagline: "Kelas 10–12", color: "#ea580c",
    division: "Divisi 3", divisionMedal: "🥇 Emas",
    mascot: "sma", mascotName: "Kaka", friend: "Kaka siap berjuang merebut emas bersamamu!",
    banks: [
      { id: "sma-matematika", subject: "Matematika" },
      { id: "sma-fisika", subject: "Fisika" },
      { id: "sma-kimia", subject: "Kimia" },
      { id: "sma-biologi", subject: "Biologi" },
      { id: "sma-ekonomi", subject: "Ekonomi" },
      { id: "sma-geografi", subject: "Geografi" },
      { id: "sma-sosiologi", subject: "Sosiologi" },
      { id: "sma-sejarah", subject: "Sejarah" },
      { id: "sma-bahasa-indonesia", subject: "Bahasa Indonesia" },
      { id: "sma-bahasa-inggris", subject: "Bahasa Inggris" },
      { id: "sma-ppkn", subject: "PPKn" },
      { id: "sma-informatika", subject: "Informatika" },
    ],
  },
  {
    level: "Kuliah", tagline: "Tingkat sarjana", color: "#7c3aed",
    division: "Divisi 4", divisionMedal: "🏆 Champion",
    mascot: "kuliah", mascotName: "Prof. Kwek", friend: "Prof. Kwek, sang juara bertahan!",
    banks: [
      { id: "kuliah-matematika-dasar", subject: "Matematika Dasar" },
      { id: "kuliah-fisika-dasar", subject: "Fisika Dasar" },
      { id: "kuliah-kimia-dasar", subject: "Kimia Dasar" },
      { id: "kuliah-statistika", subject: "Statistika" },
      { id: "kuliah-ekonomi", subject: "Pengantar Ekonomi" },
      { id: "kuliah-akuntansi", subject: "Akuntansi Dasar" },
      { id: "kuliah-inggris", subject: "Bahasa Inggris Akademik" },
      { id: "kuliah-pengetahuan-umum", subject: "Pengetahuan Umum" },
      { id: "kuliah-logika", subject: "Logika & Teka-teki" },
    ],
  },
];
