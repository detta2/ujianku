# SiPintar

Website latihan ujian online — SD, SMP, SMA, Kuliah. Pilih jenjang → pelajaran →
kerjakan soal dengan timer → dapat nilai otomatis → lihat kunci jawaban +
pembahasan cara menyelesaikannya → adu skor di leaderboard.

100% gratis, tanpa API berbayar. Frontend statis (bisa di Vercel), backend
leaderboard opsional (1 file Python, jalan di VPS).

## Struktur

```
index.html            halaman utama (semua layar)
css/style.css         styling
js/config.js          katalog jenjang & URL API leaderboard
js/app.js             logika aplikasi
data/*.js             bank soal (16 file: sd/smp/sma/kuliah × pelajaran)
api/leaderboard.py    backend leaderboard (Python stdlib only)
```

## Format bank soal

Tiap file `data/<id>.js`:

```js
window.QBANK = window.QBANK || {};
window.QBANK["sd-matematika"] = {
  level: "SD", subject: "Matematika", duration: 900, // detik
  questions: [
    { q: "Soal ... $rumus$ ...",
      options: ["A", "B", "C", "D"],
      answer: 1,                       // index 0-based
      solution: "Langkah 1...\nLangkah 2..." },
  ]
};
```

Rumus pakai `$...$` (KaTeX). Daftarkan bank baru di `js/config.js` → `CATALOG`,
lalu tambah `<script src="data/...">` di `index.html`.

## Leaderboard

- **Mode lokal (default):** skor tersimpan di localStorage perangkat.
  `LEADERBOARD_API` di `js/config.js` dikosongkan.
- **Mode online (antar-pemain):** deploy backend lalu isi URL-nya di
  `js/config.js`, contoh: `LEADERBOARD_API: "https://api.domainmu.id"`.
  WAJIB https kalau web diakses via https (mixed content diblokir browser).

### Deploy backend di VPS

```bash
# di VPS:
mkdir -p ~/ujianku-api && cd ~/ujianku-api
# salin file api/leaderboard.py ke sini, lalu:
export GOOGLE_CLIENT_ID="xxx.apps.googleusercontent.com"  # dari Google Cloud Console
nohup python3 leaderboard.py 8765 > lb.log 2>&1 &
curl localhost:8765/health   # {"ok": true}
```

- Butuh diakses publik via https: arahkan subdomain (mis. `api.domainmu.id`)
  ke VPS, pasang reverse proxy (nginx/caddy) + sertifikat TLS.
- Data: SQLite `leaderboard.db` di direktori yang sama (otomatis dibuat).
- Anti-spam bawaan: maks 30 submit per nama per bank per hari.
- Bila `id_token` Google disertakan, backend memverifikasinya ke Google
  (butuh `GOOGLE_CLIENT_ID` di env). Token palsu/kedaluwarsa → 401.

## Login Google & profil pemain

Pemain bisa masuk dengan akun Google (tombol "Sign in with Google").
Setelah login, tiap pemain punya **profil sendiri**: foto + nama, statistik
(jumlah ujian, rata-rata nilai, nilai terbaik), dan riwayat 100 ujian terakhir.
Skor yang dikirim ke leaderboard online terverifikasi via token Google,
jadi tidak bisa ngaku-ngaku pakai nama orang lain.

Yang perlu disiapkan (gratis, sekali saja):

1. Buka [Google Cloud Console](https://console.cloud.google.com/) → buat project
   baru (atau pakai yang sudah ada).
2. **APIs & Services → OAuth consent screen** → pilih *External* → isi nama
   aplikasi (mis. "UjianKu") → Save.
3. **APIs & Services → Credentials → Create Credentials → OAuth client ID** →
   tipe *Web application*.
4. Di **Authorized JavaScript origins**, tambahkan:
   - URL production web ini (mis. `https://ujianku-xxx.vercel.app`)
   - `http://localhost:8933` (untuk testing lokal)
5. Copy **Client ID** (format `xxx.apps.googleusercontent.com`).
6. Tempel ke `js/config.js` → `GOOGLE_CLIENT_ID`, dan ke env `GOOGLE_CLIENT_ID`
   di VPS backend. Push ulang.

Tanpa Client ID, tombol Google otomatis disembunyikan dan pemain tetap bisa
main sebagai **tamu** (isi nama manual).

## Deploy frontend (Vercel)

Push repo ini ke GitHub, import di Vercel sebagai static site.
Tidak ada build step.
