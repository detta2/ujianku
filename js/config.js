/* UjianKu config.
 * LEADERBOARD_API: kosongkan ("") untuk mode lokal (skor tersimpan di perangkat).
 * Isi dengan URL backend bila sudah deploy api/leaderboard.py di VPS,
 * contoh: "https://api.contohmu.id"  (HARUS https bila web diakses via https)
 */
window.APP_CONFIG = {
  LEADERBOARD_API: "",
};

/* Katalog: jenjang -> daftar bank soal (id = key di window.QBANK) */
window.CATALOG = [
  {
    level: "SD", tagline: "Kelas 4–6", color: "#059669",
    banks: [
      { id: "sd-matematika", subject: "Matematika" },
      { id: "sd-ipa", subject: "IPA" },
      { id: "sd-bahasa-indonesia", subject: "Bahasa Indonesia" },
      { id: "sd-bahasa-inggris", subject: "Bahasa Inggris" },
    ],
  },
  {
    level: "SMP", tagline: "Kelas 7–9", color: "#1d4ed8",
    banks: [
      { id: "smp-matematika", subject: "Matematika" },
      { id: "smp-ipa", subject: "IPA" },
      { id: "smp-bahasa-indonesia", subject: "Bahasa Indonesia" },
      { id: "smp-bahasa-inggris", subject: "Bahasa Inggris" },
    ],
  },
  {
    level: "SMA", tagline: "Kelas 10–12", color: "#7c3aed",
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
    level: "Kuliah", tagline: "Tingkat sarjana", color: "#d97706",
    banks: [
      { id: "kuliah-matematika-dasar", subject: "Matematika Dasar" },
      { id: "kuliah-fisika-dasar", subject: "Fisika Dasar" },
    ],
  },
];
