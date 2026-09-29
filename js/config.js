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
    mascot: "dino", mascotName: "Dino", friend: "Main bareng Dino, belajar jadi petualangan.",
    banks: [
      { id: "sd-matematika", subject: "Matematika" },
      { id: "sd-ipa", subject: "IPA" },
      { id: "sd-bahasa-indonesia", subject: "Bahasa Indonesia" },
      { id: "sd-bahasa-inggris", subject: "Bahasa Inggris" },
    ],
  },
  {
    level: "SMP", tagline: "Kelas 7–9", color: "#2563eb",
    mascot: "robot", mascotName: "Robo", friend: "Robo siap membantumu naik level.",
    banks: [
      { id: "smp-matematika", subject: "Matematika" },
      { id: "smp-ipa", subject: "IPA" },
      { id: "smp-bahasa-indonesia", subject: "Bahasa Indonesia" },
      { id: "smp-bahasa-inggris", subject: "Bahasa Inggris" },
    ],
  },
  {
    level: "SMA", tagline: "Kelas 10–12", color: "#ea580c",
    mascot: "rocket", mascotName: "Roki", friend: "Roki siap melesat ke ujian bersamamu.",
    banks: [
      { id: "sma-matematika", subject: "Matematika" },
      { id: "sma-fisika", subject: "Fisika" },
      { id: "sma-kimia", subject: "Kimia" },
      { id: "sma-biologi", subject: "Biologi" },
      { id: "sma-bahasa-indonesia", subject: "Bahasa Indonesia" },
      { id: "sma-bahasa-inggris", subject: "Bahasa Inggris" },
    ],
  },
  {
    level: "Kuliah", tagline: "Tingkat sarjana", color: "#7c3aed",
    mascot: "owl", mascotName: "Ollie", friend: "Ollie, si burung hantu paling pinter.",
    banks: [
      { id: "kuliah-matematika-dasar", subject: "Matematika Dasar" },
      { id: "kuliah-fisika-dasar", subject: "Fisika Dasar" },
    ],
  },
];
