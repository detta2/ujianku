window.QBANK = window.QBANK || {};
window.QBANK["kuliah-kimia-dasar"] = {
  level: "Kuliah", subject: "Kimia Dasar", duration: 900,
  questions: [
    { q: "Massa molar NaCl adalah ... (Ar Na = 23, Cl = 35,5)", options: ["23 g/mol", "58,5 g/mol", "35,5 g/mol", "81,5 g/mol"], answer: 1, solution: "1. Mr(NaCl) = Ar(Na) + Ar(Cl) = 23 + 35,5 = 58,5. 2. Massa molar = 58,5 g/mol. Kesalahan umum: hanya mengambil Ar salah satu unsur saja (23 atau 35,5), atau menjumlahkan Na dua kali sehingga dapat 81,5." },
    { q: "Jumlah mol yang terdapat dalam 36 gram H₂O adalah ... (Mr H₂O = 18)", options: ["18 mol", "1 mol", "2 mol", "0,5 mol"], answer: 2, solution: "1. Gunakan rumus n = m/Mr. 2. n = 36/18 = 2 mol. Kesalahan umum: membalik rumus menjadi n = Mr/m sehingga dapat 0,5 mol, atau lupa membagi sama sekali." },
    { q: "Koefisien yang tepat untuk menyetarakan reaksi H₂ + O₂ → H₂O adalah ...", options: ["2, 1, 2", "1, 1, 1", "1, 2, 2", "2, 2, 1"], answer: 0, solution: "1. Jumlah atom H di kiri 2 dan O di kiri 2, maka reaksi menjadi 2H₂ + O₂ → 2H₂O. 2. Cek: H kiri 4 = kanan 4, O kiri 2 = kanan 2. Kesalahan umum: membiarkan koefisien 1, 1, 1 sehingga atom O tidak setara (2 vs 1)." },
    { q: "Sebanyak 4 mol H₂ direaksikan dengan 1,5 mol O₂ menurut reaksi 2H₂ + O₂ → 2H₂O. Jumlah H₂O yang terbentuk adalah ...", options: ["4 mol", "2 mol", "1,5 mol", "3 mol"], answer: 3, solution: "1. Bandingkan mol/koefisien: H₂ = 4/2 = 2; O₂ = 1,5/1 = 1,5. 2. Nilai terkecil adalah O₂, jadi O₂ pereaksi pembatas. 3. H₂O terbentuk = 2 × 1,5 = 3 mol. Kesalahan umum: mengira pereaksi dengan mol terbesar (H₂) sebagai pembatas, atau langsung mengalikan mol H₂ tanpa cek stoikiometri." },
    { q: "Hasil teoretis suatu reaksi adalah 25 gram, sedangkan hasil yang diperoleh di laboratorium 20 gram. Persen hasil reaksi tersebut adalah ...", options: ["125%", "80%", "75%", "20%"], answer: 1, solution: "1. % hasil = (hasil aktual / hasil teoretis) × 100%. 2. (20/25) × 100% = 80%. Kesalahan umum: membalik pembilang dan penyebut (25/20) sehingga dapat 125% — persen hasil tidak mungkin melebihi 100%." },
    { q: "Molaritas larutan yang dibuat dari 1,5 mol NaCl dalam 500 mL larutan adalah ...", options: ["0,75 M", "1,5 M", "3 M", "6 M"], answer: 2, solution: "1. Ubah volume ke liter: 500 mL = 0,5 L. 2. M = n/V = 1,5/0,5 = 3 M. Kesalahan umum: lupa mengonversi mL ke L sehingga menghitung 1,5/500, atau mengira molaritas sama dengan jumlah mol." },
    { q: "Massa CO₂ yang dihasilkan dari pembakaran sempurna 8 gram CH₄ adalah ... (Ar C = 12, H = 1, O = 16)", options: ["22 g", "44 g", "11 g", "8 g"], answer: 0, solution: "1. Reaksi: CH₄ + 2O₂ → CO₂ + 2H₂O. 2. n(CH₄) = 8/16 = 0,5 mol, maka n(CO₂) = 0,5 mol. 3. m(CO₂) = 0,5 × 44 = 22 g. Kesalahan umum: memakai Mr CH₄ (16) sebagai massa CO₂, atau lupa bahwa perbandingan mol CH₄ : CO₂ = 1 : 1." },
    { q: "Suatu senyawa mengandung 40% C, 6,7% H, dan 53,3% O. Rumus empiris senyawa tersebut adalah ... (Ar C = 12, H = 1, O = 16)", options: ["CHO", "C₂H₄O₂", "C₃H₆O₃", "CH₂O"], answer: 3, solution: "1. Mol relatif: C = 40/12 = 3,33; H = 6,7/1 = 6,7; O = 53,3/16 = 3,33. 2. Bagi dengan angka terkecil (3,33): C : H : O = 1 : 2 : 1. 3. Rumus empiris = CH₂O. Kesalahan umum: lupa membagi semua nilai dengan angka terkecil sehingga perbandingan tidak sederhana." },
    { q: "Konfigurasi elektron atom Fe (nomor atom 26) yang benar adalah ...", options: ["[Ar] 3d⁸", "[Ar] 4s² 3d⁴", "[Ar] 3d⁶ 4s²", "[Ar] 3d⁵ 4s¹ 4p²"], answer: 2, solution: "1. Susun 26 elektron mengikuti aturan Aufbau: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶. 2. Ditulis ringkas: [Ar] 3d⁶ 4s². Kesalahan umum: mengisi subkulit 3d sebelum 4s penuh, atau salah menghitung total elektron." },
    { q: "Jumlah elektron valensi atom belerang, S (nomor atom 16) adalah ...", options: ["6", "2", "8", "16"], answer: 0, solution: "1. Konfigurasi S: 2, 8, 6 (kulit K, L, M). 2. Elektron valensi = elektron pada kulit terluar = 6. Kesalahan umum: menganggap seluruh 16 elektron sebagai elektron valensi." },
    { q: "Letak unsur Mg (nomor atom 12) dalam sistem periodik adalah ...", options: ["Golongan IA, periode 2", "Golongan IIIA, periode 3", "Golongan IIA, periode 2", "Golongan IIA, periode 3"], answer: 3, solution: "1. Konfigurasi Mg: 2, 8, 2. 2. Elektron valensi 2 → golongan IIA; jumlah kulit 3 → periode 3. Kesalahan umum: tertukar antara nomor golongan (ditentukan elektron valensi) dan periode (ditentukan jumlah kulit)." },
    { q: "Di antara unsur-unsur berikut, yang memiliki energi ionisasi pertama terbesar adalah ...", options: ["Li", "Na", "He", "Ne"], answer: 2, solution: "1. Energi ionisasi bertambah ke kanan dan ke atas dalam sistem periodik. 2. He berada paling kanan-atas (golongan VIIIA, periode 1) dengan elektron terikat paling kuat, sehingga energi ionisasinya terbesar. Kesalahan umum: mengira unsur yang paling besar ukurannya paling sulit melepas elektron — justru sebaliknya." },
    { q: "Di antara unsur Na, Mg, Al, dan S, yang memiliki jari-jari atom terbesar adalah ...", options: ["S", "Na", "Mg", "Al"], answer: 1, solution: "1. Keempatnya satu periode (periode 3). 2. Dalam satu periode, jari-jari atom mengecil dari kiri ke kanan karena muatan inti efektif bertambah. 3. Na paling kiri → jari-jari terbesar. Kesalahan umum: mengira makin ke kanan jari-jari makin besar karena jumlah elektron bertambah." },
    { q: "Pasangan atom berikut yang merupakan isotop adalah ...", options: ["¹²C dan ¹⁴C", "¹²C dan ¹²N", "¹H dan ²He", "¹⁶O dan ³²S"], answer: 0, solution: "1. Isotop = atom berproton sama (unsur sama) tetapi neutron berbeda. 2. ¹²C dan ¹⁴C sama-sama karbon (6 proton), hanya nomor massanya beda. Kesalahan umum: mengira nomor massa yang sama berarti isotop, padahal isotop ditentukan oleh nomor atom yang sama." },
    { q: "Subkulit yang ditempati elektron dengan bilangan kuantum n = 3 dan l = 1 adalah ...", options: ["3s", "3d", "4s", "3p"], answer: 3, solution: "1. l = 0 → s, l = 1 → p, l = 2 → d. 2. n = 3 dan l = 1 berarti subkulit 3p. Kesalahan umum: mengira l = 1 berarti subkulit d, atau mencampuradukkan n dengan nomor subkulit." },
    { q: "Senyawa berikut yang berikatan ionik adalah ...", options: ["H₂", "MgO", "Cl₂", "CH₄"], answer: 1, solution: "1. Ikatan ionik terbentuk antara logam dan nonlogam melalui serah terima elektron. 2. Mg (logam) + O (nonlogam) → MgO berikatan ionik; H₂, Cl₂, CH₄ adalah ikatan kovalen. Kesalahan umum: mengira semua senyawa yang terdiri dari dua unsur pasti berikatan ionik." },
    { q: "Di antara molekul berikut, yang paling polar adalah ...", options: ["H₂", "HCl", "HBr", "HF"], answer: 3, solution: "1. Kepolaran ditentukan oleh selisih keelektronegatifan. 2. F adalah unsur paling elektronegatif, sehingga selisih keelektronegatifan H–F paling besar → HF paling polar. Kesalahan umum: mengira molekul yang paling besar (HBr) pasti paling polar." },
    { q: "Gaya antarmolekul yang dominan pada air (H₂O) adalah ...", options: ["Gaya London", "Gaya dipol-dipol", "Ikatan hidrogen", "Ikatan ion"], answer: 2, solution: "1. H₂O memiliki atom H yang terikat langsung pada atom O yang sangat elektronegatif. 2. Kondisi ini memungkinkan terbentuknya ikatan hidrogen, gaya antarmolekul terkuat di antara pilihan. Kesalahan umum: mengira semua gaya antarmolekul sama kuat, atau menyebut ikatan hidrogen sebagai ikatan kimia dalam molekul." },
    { q: "Bentuk molekul NH₃ menurut teori VSEPR adalah ...", options: ["Piramida trigonal", "Linear", "Segitiga datar", "Tetrahedral"], answer: 0, solution: "1. N memiliki 3 pasangan elektron ikatan dan 1 pasangan elektron bebas (PEB). 2. Total 4 domain elektron dengan 1 PEB → bentuk piramida trigonal. Kesalahan umum: lupa memperhitungkan pasangan elektron bebas sehingga menjawab tetrahedral atau segitiga datar." },
    { q: "Molekul berikut yang mengandung ikatan kovalen rangkap dua adalah ...", options: ["H₂", "CO₂", "N₂", "CH₄"], answer: 1, solution: "1. CO₂ memiliki struktur O=C=O, yaitu dua ikatan rangkap dua C=O. 2. H₂ dan CH₄ berikatan tunggal, N₂ berikatan rangkap tiga. Kesalahan umum: mengira N₂ yang berikatan rangkap tiga sebagai contoh ikatan rangkap dua." },
    { q: "Gaya dispersi London terdapat pada ...", options: ["Hanya molekul nonpolar", "Hanya molekul polar", "Semua molekul", "Hanya senyawa ion"], answer: 2, solution: "1. Gaya London timbul dari dipol sesaat akibat pergerakan elektron. 2. Karena semua molekul memiliki elektron yang bergerak, gaya London ada pada semua molekul. Kesalahan umum: mengira gaya London hanya milik molekul nonpolar." },
    { q: "Di antara senyawa berikut, yang memiliki titik didih tertinggi adalah ...", options: ["CH₄", "NH₃", "HF", "H₂O"], answer: 3, solution: "1. H₂O, HF, dan NH₃ semuanya berikatan hidrogen, tetapi H₂O dapat membentuk ikatan hidrogen paling banyak (2 donor H dan 2 akseptor). 2. Akibatnya H₂O (100 °C) memiliki titik didih tertinggi. Kesalahan umum: mengira massa molekul terbesar selalu berarti titik didih tertinggi." },
    { q: "Suatu reaksi dikatakan eksoterm jika ...", options: ["ΔH > 0", "ΔH < 0", "ΔH = 0", "Tidak ada perpindahan kalor"], answer: 1, solution: "1. Eksoterm = reaksi melepaskan kalor ke lingkungan, entalpi produk lebih kecil dari reaktan. 2. Maka ΔH = H_produk − H_reaktan berharga negatif. Kesalahan umum: tertukar antara eksoterm (ΔH negatif, melepas kalor) dan endoterm (ΔH positif, menyerap kalor)." },
    { q: "Diketahui: C + O₂ → CO₂ ΔH = −394 kJ/mol; CO + ½O₂ → CO₂ ΔH = −283 kJ/mol. Berdasarkan Hukum Hess, ΔH untuk reaksi C + ½O₂ → CO adalah ...", options: ["−111 kJ/mol", "−677 kJ/mol", "+111 kJ/mol", "−394 kJ/mol"], answer: 0, solution: "1. Balik reaksi kedua: CO₂ → CO + ½O₂, ΔH = +283 kJ/mol. 2. Jumlahkan dengan reaksi pertama: (C + O₂ → CO₂) + (CO₂ → CO + ½O₂) menghasilkan C + ½O₂ → CO. 3. ΔH = −394 + 283 = −111 kJ/mol. Kesalahan umum: lupa membalik tanda ΔH ketika reaksi dibalik, sehingga mendapat −677 kJ/mol." },
    { q: "Kalor yang diperlukan untuk menaikkan suhu 200 gram air sebesar 10 °C adalah ... (c air = 4,18 J/g°C)", options: ["4,18 kJ", "41,8 kJ", "8,36 kJ", "836 kJ"], answer: 2, solution: "1. Gunakan q = m × c × ΔT. 2. q = 200 × 4,18 × 10 = 8360 J = 8,36 kJ. Kesalahan umum: lupa mengonversi joule ke kilojoule sehingga menjawab 8360, atau salah memasukkan massa." },
    { q: "Pada reaksi endoterm, yang terjadi adalah ...", options: ["Sistem melepaskan kalor ke lingkungan", "ΔH berharga negatif", "Suhu sistem selalu naik", "Sistem menyerap kalor dari lingkungan"], answer: 3, solution: "1. Endoterm = reaksi membutuhkan/menyerap kalor agar dapat berlangsung, entalpi produk lebih besar dari reaktan (ΔH > 0). 2. Kalor mengalir dari lingkungan ke sistem. Kesalahan umum: mengira endoterm berarti suhu sistem naik, padahal lingkunganlah yang menjadi dingin." },
    { q: "Jika ΔH pembakaran etanol (C₂H₅OH) adalah −1367 kJ/mol, kalor yang dilepas pada pembakaran 2 mol etanol adalah ...", options: ["−683,5 kJ", "−2734 kJ", "−1367 kJ", "+2734 kJ"], answer: 1, solution: "1. ΔH molar dikalikan jumlah mol yang bereaksi. 2. q = 2 × (−1367) = −2734 kJ (tanda negatif = kalor dilepas). Kesalahan umum: lupa mengalikan dengan jumlah mol sehingga menjawab −1367 kJ, atau salah memberi tanda positif." },
    { q: "Entalpi pembentukan standar (ΔHf°) unsur dalam bentuknya yang paling stabil adalah ...", options: ["1 kJ/mol", "−1 kJ/mol", "0 kJ/mol", "Tidak terdefinisi"], answer: 2, solution: "1. ΔHf° didefinisikan sebagai perubahan entalpi pembentukan 1 mol senyawa dari unsur-unsurnya. 2. Untuk unsur bebas dalam bentuk paling stabil (misal O₂, C grafit), tidak ada perubahan sehingga ΔHf° = 0. Kesalahan umum: mengira semua zat memiliki ΔHf° nol, padahal hanya unsur bebas bentuk stabil." },
    { q: "Tetapan kesetimbangan Kc untuk reaksi 2SO₂(g) + O₂(g) ⇌ 2SO₃(g) adalah ...", options: ["$K_c = \\\\frac{[SO_3]^2}{[SO_2]^2[O_2]}$", "$K_c = \\\\frac{[SO_2]^2[O_2]}{[SO_3]^2}$", "$K_c = \\\\frac{[SO_3]}{[SO_2][O_2]}$", "$K_c = [SO_3]^2 + [SO_2]^2[O_2]$"], answer: 0, solution: "1. Kc = (konsentrasi produk berpangkat koefisien) / (konsentrasi reaktan berpangkat koefisien). 2. Kc = [SO₃]² / ([SO₂]²[O₂]). Kesalahan umum: lupa memangkatkan konsentrasi dengan koefisien reaksi, atau membalik produk dan reaktan." },
    { q: "Reaksi N₂ + 3H₂ ⇌ 2NH₃ memiliki ΔH = −92 kJ/mol. Jika suhu sistem dinaikkan, kesetimbangan akan bergeser ke arah ...", options: ["Kanan, membentuk lebih banyak NH₃", "Tidak bergeser karena Kc tetap", "Katalis menjadi tidak aktif", "Kiri, membentuk lebih banyak N₂ dan H₂"], answer: 3, solution: "1. Reaksi ke kanan bersifat eksoterm (melepas kalor). 2. Menurut Le Chatelier, menaikkan suhu menggeser kesetimbangan ke arah reaksi endoterm, yaitu ke kiri (reaktan). Kesalahan umum: mengira menaikkan suhu selalu memperbanyak produk." },
    { q: "Untuk reaksi 2NO₂(g) ⇌ N₂O₄(g), jika tekanan sistem diperbesar maka kesetimbangan bergeser ke ...", options: ["Kiri karena mol gas bertambah", "Kanan karena jumlah mol gas lebih sedikit", "Tidak bergeser karena jumlah atom sama", "Kiri karena volume mengecil"], answer: 1, solution: "1. Jumlah mol gas: kiri = 2, kanan = 1. 2. Menurut Le Chatelier, tekanan diperbesar menggeser kesetimbangan ke arah jumlah mol gas lebih kecil, yaitu ke kanan (N₂O₄). Kesalahan umum: mengira tekanan mendorong ke arah mol gas yang lebih besar." },
    { q: "Pengaruh penambahan katalis pada reaksi kesetimbangan adalah ...", options: ["Menggeser kesetimbangan ke arah produk", "Mengubah nilai tetapan kesetimbangan K", "Mempercepat tercapainya kesetimbangan", "Menambah jumlah produk yang terbentuk"], answer: 2, solution: "1. Katalis menurunkan energi aktivasi reaksi maju dan reaksi balik sama besar. 2. Akibatnya kesetimbangan tercapai lebih cepat, tetapi posisi kesetimbangan dan nilai K tidak berubah. Kesalahan umum: mengira katalis menambah jumlah produk — katalis tidak mengubah hasil akhir." },
    { q: "Hubungan Kp dan Kc untuk reaksi N₂(g) + 3H₂(g) ⇌ 2NH₃(g) adalah ...", options: ["$K_p = K_c(RT)^2$", "$K_p = K_c(RT)^{-2}$", "$K_p = K_c(RT)^4$", "$K_p = K_c$"], answer: 1, solution: "1. Gunakan Kp = Kc(RT)^Δn dengan Δn = mol gas produk − mol gas reaktan. 2. Δn = 2 − 4 = −2, sehingga Kp = Kc(RT)⁻². Kesalahan umum: menghitung Δn terbalik (reaktan − produk) sehingga mendapat pangkat +2." },
    { q: "Pada suatu saat hasil bagi reaksi Qc lebih kecil dari Kc (Qc < Kc). Agar mencapai kesetimbangan, reaksi akan ...", options: ["Bergeser ke kanan membentuk produk", "Bergeser ke kiri membentuk reaktan", "Tetap karena sudah setimbang", "Berhenti total"], answer: 0, solution: "1. Qc < Kc berarti konsentrasi produk masih kurang dari kondisi setimbang. 2. Reaksi bergeser ke kanan (ke arah produk) hingga Qc = Kc. Kesalahan umum: menghafal arah tanpa memahami bahwa sistem selalu bergerak menuju nilai K." },
    { q: "pH larutan HCl 0,01 M adalah ...", options: ["1", "4", "2", "12"], answer: 2, solution: "1. HCl adalah asam kuat bervalensi 1 yang terionisasi sempurna: [H⁺] = 0,01 M = 10⁻² M. 2. pH = −log[H⁺] = −log(10⁻²) = 2. Kesalahan umum: menjawab pH = 0,01, padahal pH adalah negatif logaritma konsentrasi, bukan konsentrasinya." },
    { q: "pH larutan H₂SO₄ 0,05 M adalah ... (asam kuat)", options: ["1,3", "1", "2", "0,7"], answer: 1, solution: "1. H₂SO₄ adalah asam diprotik kuat: tiap 1 molekul menghasilkan 2 ion H⁺. 2. [H⁺] = 2 × 0,05 = 0,1 M = 10⁻¹ M. 3. pH = −log(10⁻¹) = 1. Kesalahan umum: lupa mengalikan dengan valensi asam (2) sehingga menghitung [H⁺] = 0,05 dan mendapat pH ≈ 1,3." },
    { q: "pH larutan NaOH 0,001 M adalah ...", options: ["11", "3", "8", "13"], answer: 0, solution: "1. NaOH basa kuat: [OH⁻] = 0,001 M = 10⁻³ M. 2. pOH = −log(10⁻³) = 3. 3. pH = 14 − pOH = 11. Kesalahan umum: berhenti di pOH = 3 dan menjawab pH = 3 — untuk basa harus dikonversi dulu dengan pH + pOH = 14." },
    { q: "pH larutan CH₃COOH 0,1 M dengan Ka = 1,0 × 10⁻⁵ adalah ...", options: ["1", "5", "2", "3"], answer: 3, solution: "1. Asam lemah terionisasi sebagian: [H⁺] = √(Ka × M). 2. [H⁺] = √(10⁻⁵ × 0,1) = √(10⁻⁶) = 10⁻³ M. 3. pH = 3. Kesalahan umum: menganggap asam lemah terionisasi sempurna seperti asam kuat sehingga menjawab pH = 1." },
    { q: "Campuran berikut yang merupakan larutan penyangga (buffer) adalah ...", options: ["HCl + NaCl", "NaOH + HCl", "CH₃COOH + CH₃COONa", "H₂SO₄ + Na₂SO₄"], answer: 2, solution: "1. Larutan penyangga terdiri dari asam lemah + basa konjugasinya (atau basa lemah + asam konjugasinya). 2. CH₃COOH (asam lemah) + CH₃COONa (garamnya, sumber basa konjugasi CH₃COO⁻) memenuhi syarat. Kesalahan umum: mengira campuran asam kuat + basa kuat menghasilkan penyangga, padahal itu hanya netralisasi." },
    { q: "Menurut teori asam-basa Brønsted-Lowry, basa didefinisikan sebagai zat yang ...", options: ["Mendonorkan proton (H⁺)", "Menerima proton (H⁺)", "Mendonorkan pasangan elektron", "Mendonorkan ion OH⁻ dalam air"], answer: 1, solution: "1. Brønsted-Lowry: asam = donor proton, basa = akseptor (penerima) proton. 2. Contoh: NH₃ + H⁺ → NH₄⁺, NH₃ bertindak sebagai basa. Kesalahan umum: tertukar dengan definisi asam, atau mencampuradukkan dengan definisi basa Arrhenius (penghasil OH⁻) dan Lewis (donor pasangan elektron)." },
    { q: "Bilangan oksidasi atom S dalam H₂SO₄ adalah ...", options: ["+4", "+6", "−2", "+2"], answer: 1, solution: "1. Aturan: biloks H = +1, O = −2, total molekul netral = 0. 2. 2(+1) + x + 4(−2) = 0 → 2 + x − 8 = 0 → x = +6. Kesalahan umum: lupa bahwa H dan O memiliki biloks tetap sehingga salah menetapkan biloks S." },
    { q: "Bilangan oksidasi atom Cr dalam K₂Cr₂O₇ adalah ...", options: ["+3", "+7", "+12", "+6"], answer: 3, solution: "1. Biloks K = +1, O = −2, total = 0. 2. 2(+1) + 2x + 7(−2) = 0 → 2 + 2x − 14 = 0 → 2x = 12 → x = +6. Kesalahan umum: mengira biloks Cr sama dengan jumlah atom O (7), atau lupa mengalikan dengan jumlah atom Cr." },
    { q: "Dalam suatu reaksi redoks, oksidator adalah zat yang ...", options: ["Mengalami reduksi (biloks turun)", "Mengalami oksidasi (biloks naik)", "Bilangan oksidasinya naik", "Melepaskan elektron"], answer: 0, solution: "1. Oksidator = zat pengoksidasi, artinya ia mengoksidasi zat lain. 2. Agar bisa mengoksidasi, ia sendiri harus mengalami reduksi: menangkap elektron sehingga biloksnya turun. Kesalahan umum: mengira oksidator adalah zat yang mengalami oksidasi karena namanya mirip." },
    { q: "Pada sel volta (sel galvani), anoda merupakan ...", options: ["Katoda yang bermuatan negatif", "Tempat reduksi yang bermuatan positif", "Tempat oksidasi yang bermuatan negatif", "Tempat oksidasi yang bermuatan positif"], answer: 2, solution: "1. Anoda = elektroda tempat reaksi oksidasi (melepas elektron). 2. Pada sel volta, elektron mengalir keluar dari anoda menuju katoda, sehingga anoda bermuatan negatif. Kesalahan umum: tertukar dengan sel elektrolisis — pada sel volta anoda negatif, pada elektrolisis anoda positif." },
    { q: "Diketahui E°(Cu²⁺/Cu) = +0,34 V dan E°(Zn²⁺/Zn) = −0,76 V. Potensial sel volta Zn|Zn²⁺||Cu²⁺|Cu adalah ...", options: ["0,42 V", "1,10 V", "−1,10 V", "0,76 V"], answer: 1, solution: "1. Katoda = potensial lebih besar (Cu²⁺/Cu), anoda = Zn²⁺/Zn. 2. E°sel = E°katoda − E°anoda = (+0,34) − (−0,76) = 1,10 V. Kesalahan umum: langsung menjumlahkan kedua potensial (0,34 + (−0,76) = −0,42) tanpa memperhatikan rumus pengurangan." },
    { q: "Pada reaksi Zn + 2HCl → ZnCl₂ + H₂, zat yang bertindak sebagai reduktor adalah ...", options: ["HCl", "H₂", "Cl⁻", "Zn"], answer: 3, solution: "1. Biloks Zn berubah dari 0 menjadi +2 (naik = oksidasi). 2. Zat yang mengalami oksidasi disebut reduktor, jadi reduktornya adalah Zn. Kesalahan umum: menunjuk H₂ sebagai reduktor karena 'mengalami reduksi' — justru yang mengalami reduksi (H⁺ → H₂) adalah oksidatornya, yaitu HCl." },
    { q: "Gugus fungsi yang dimiliki oleh senyawa alkohol adalah ...", options: ["−OH", "−COOH", "−CHO", "−NH₂"], answer: 0, solution: "1. Alkohol ditandai oleh gugus hidroksil −OH yang terikat pada atom C. 2. −COOH adalah asam karboksilat, −CHO aldehida, −NH₂ amina. Kesalahan umum: tertukar antara alkohol (−OH) dan asam karboksilat (−COOH)." },
    { q: "Rumus umum senyawa alkana adalah ...", options: ["CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙH₂ₙ₊₂", "CₙHₙ"], answer: 2, solution: "1. Alkana adalah hidrokarbon jenuh (semua ikatan tunggal). 2. Rumus umumnya CₙH₂ₙ₊₂, contoh: CH₄, C₂H₆, C₃H₈. Kesalahan umum: memakai rumus alkena (CₙH₂ₙ) untuk alkana." },
    { q: "Senyawa berikut yang memiliki ikatan rangkap tiga adalah ...", options: ["Etana", "Etuna", "Etena", "Benzena"], answer: 1, solution: "1. Akhiran -una menandakan alkuna, yaitu hidrokarbon dengan ikatan rangkap tiga. 2. Etuna (asetilena, C₂H₂) memiliki ikatan rangkap tiga C≡C. Kesalahan umum: tertukar antara etena (rangkap dua) dan etuna (rangkap tiga)." },
    { q: "Senyawa yang merupakan isomer dari n-butana adalah ...", options: ["n-pentana", "1-butena", "Siklobutana", "2-metilpropana"], answer: 3, solution: "1. Isomer = rumus molekul sama (C₄H₁₀) tetapi struktur berbeda. 2. 2-metilpropana (isobutana) memiliki rumus molekul C₄H₁₀ dengan struktur bercabang — isomer dari n-butana. Kesalahan umum: mengira isomer harus memiliki rumus molekul yang berbeda, padahal isomer justru berumus molekul sama." },
// ===== STOIKIOMETRI: konsep mol & Mr (8 soal) =====
  { q: "Jumlah partikel yang terdapat dalam 0,5 mol gas CO₂ adalah ...", options: ["6,02×10²³", "3,01×10²³", "1,204×10²⁴", "1,505×10²³"], answer: 1, solution: "1. Satu mol zat mengandung $6,02 \\times 10^{23}$ partikel (bilangan Avogadro). 2. Jumlah partikel = $0,5 \\times 6,02 \\times 10^{23} = 3,01 \\times 10^{23}$. 3. Kesalahan umum: menjawab $6,02 \\times 10^{23}$ karena lupa mengalikan dengan jumlah mol, atau salah membagi sehingga dapat $1,204 \\times 10^{24}$." },
  { q: "Massa 3 mol CaCO₃ adalah ... ($A_r$: Ca = 40, C = 12, O = 16)", options: ["150 g", "100 g", "300 g", "600 g"], answer: 2, solution: "1. $M_r$ CaCO₃ = 40 + 12 + 3(16) = 100. 2. Massa = mol × $M_r$ = 3 × 100 = 300 g. 3. Kesalahan umum: memakai massa molar sebagai massa total (100 g) tanpa mengalikan jumlah mol." },
  { q: "Jumlah mol yang terkandung dalam 9,03×10²³ molekul O₂ adalah ...", options: ["1,5 mol", "0,15 mol", "15 mol", "3 mol"], answer: 0, solution: "1. Gunakan $n = N / N_A$ dengan $N_A = 6,02 \\times 10^{23}$. 2. $n = 9,03 \\times 10^{23} / 6,02 \\times 10^{23} = 1,5$ mol. 3. Kesalahan umum: membalik rumus menjadi $n = N_A / N$ sehingga mendapat angka yang sangat kecil, atau salah menempatkan koma desimal." },
  { q: "Massa molekul relatif ($M_r$) Mg(OH)₂ adalah ... ($A_r$: Mg = 24, O = 16, H = 1)", options: ["41", "75", "34", "58"], answer: 3, solution: "1. $M_r$ Mg(OH)₂ = 24 + 2(16 + 1) = 24 + 34 = 58. 2. Kesalahan umum: lupa mengalikan gugus OH dengan indeks 2 di luar kurung sehingga hanya menghitung Mg + O + H = 41, atau menghitung Mg(OH)₂ sebagai Mg + 2O + H = 57 lalu salah hitung." },
  { q: "Jumlah mol dalam 40 gram NaOH adalah ... ($A_r$: Na = 23, O = 16, H = 1)", options: ["0,5 mol", "2 mol", "1 mol", "4 mol"], answer: 2, solution: "1. $M_r$ NaOH = 23 + 16 + 1 = 40. 2. $n = m / M_r$ = 40/40 = 1 mol. 3. Kesalahan umum: membalik rumus menjadi $n = M_r / m$ atau mengira 40 gram berarti 40 mol karena angkanya sama." },
  { q: "Jumlah atom oksigen yang terdapat dalam 2 mol CO₂ adalah ...", options: ["6,02×10²³", "2,408×10²⁴", "1,204×10²⁴", "4,816×10²⁴"], answer: 1, solution: "1. Setiap molekul CO₂ mengandung 2 atom O, jadi 2 mol CO₂ mengandung 4 mol atom O. 2. Jumlah atom = $4 \\times 6,02 \\times 10^{23} = 2,408 \\times 10^{24}$. 3. Kesalahan umum: lupa mengalikan dengan indeks O (2) sehingga menjawab $1,204 \\times 10^{24}$ (hanya jumlah molekulnya)." },
  { q: "Massa 1,5 mol gas NH₃ adalah ... ($A_r$: N = 14, H = 1)", options: ["25,5 g", "17 g", "34 g", "51 g"], answer: 0, solution: "1. $M_r$ NH₃ = 14 + 3(1) = 17. 2. Massa = 1,5 × 17 = 25,5 g. 3. Kesalahan umum: menjawab 17 g (massa 1 mol) karena tidak mengalikan dengan 1,5, atau salah menjumlahkan $M_r$ menjadi 15." },
  { q: "Jumlah molekul dalam 88 gram CO₂ adalah ... ($A_r$: C = 12, O = 16)", options: ["6,02×10²³", "3,01×10²³", "2,408×10²⁴", "1,204×10²⁴"], answer: 3, solution: "1. $M_r$ CO₂ = 12 + 2(16) = 44, maka $n$ = 88/44 = 2 mol. 2. Jumlah molekul = $2 \\times 6,02 \\times 10^{23} = 1,204 \\times 10^{24}$. 3. Kesalahan umum: langsung mengalikan massa (88) dengan bilangan Avogadro tanpa mengubah ke mol terlebih dahulu." },
  // ===== STOIKIOMETRI: reaksi setara & koefisien (6 soal) =====
  { q: "Koefisien yang tepat untuk menyetarakan reaksi CaCO₃ + HCl → CaCl₂ + H₂O + CO₂ secara berurutan adalah ...", options: ["1, 1, 1, 1, 1", "2, 2, 1, 1, 1", "1, 2, 1, 1, 1", "1, 2, 2, 1, 1"], answer: 2, solution: "1. Setarakan Cl dan H yang berjumlah 2 di kanan: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂. 2. Cek: Ca 1 = 1, C 1 = 1, O 3 = 3, H 2 = 2, Cl 2 = 2 — sudah setara. 3. Kesalahan umum: membiarkan koefisien HCl = 1 sehingga atom Cl dan H tidak setara." },
  { q: "Koefisien reaksi pembakaran sempurna etana: C₂H₆ + O₂ → CO₂ + H₂O, secara berurutan adalah ...", options: ["1, 3, 2, 3", "2, 7, 4, 6", "2, 3, 4, 6", "1, 7, 2, 3"], answer: 1, solution: "1. Setarakan C (2 CO₂), lalu H (3 H₂O): C₂H₆ + O₂ → 2CO₂ + 3H₂O. 2. O di kanan = 4 + 3 = 7, jadi koefisien O₂ = 7/2; kalikan semua dengan 2: 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O. 3. Kesalahan umum: memakai koefisien pecahan 7/2 sebagai jawaban akhir — koefisien reaksi harus bilangan bulat terkecil." },
  { q: "Koefisien yang tepat untuk reaksi Na + Cl₂ → NaCl secara berurutan adalah ...", options: ["2, 1, 1", "2, 1, 2", "1, 1, 2", "1, 2, 2"], answer: 1, solution: "1. Atom Cl di kiri berjumlah 2, maka NaCl di kanan harus berkoefisien 2: Na + Cl₂ → 2NaCl. 2. Akibatnya Na di kiri juga berkoefisien 2: 2Na + Cl₂ → 2NaCl. 3. Kesalahan umum: hanya menyetarakan Cl tanpa menyetarakan Na, sehingga menjawab 1, 1, 2." },
  { q: "Koefisien reaksi pembentukan aluminium oksida: Al + O₂ → Al₂O₃, secara berurutan adalah ...", options: ["2, 3, 2", "4, 3, 2", "3, 2, 2", "4, 2, 3"], answer: 1, solution: "1. Al₂O₃ mengandung 2 Al dan 3 O; samakan dengan kelipatan terkecil: 4Al + 3O₂ → 2Al₂O₃. 2. Cek: Al 4 = 4, O 6 = 6. 3. Kesalahan umum: menjawab 2, 3, 2 karena lupa bahwa O₂ adalah molekul diatomik sehingga jumlah atom O di kiri harus genap." },
  { q: "Koefisien reaksi reduksi bijih besi: Fe₂O₃ + CO → Fe + CO₂, secara berurutan adalah ...", options: ["1, 2, 2, 2", "1, 3, 2, 3", "2, 3, 4, 3", "1, 3, 3, 2"], answer: 1, solution: "1. Setarakan Fe: Fe₂O₃ + CO → 2Fe + CO₂. 2. O di kiri = 3 (dari Fe₂O₃), maka butuh total 3 CO₂ di kanan → Fe₂O₃ + 3CO → 2Fe + 3CO₂; cek C: 3 = 3, O: 6 = 6. 3. Kesalahan umum: hanya menyetarakan Fe dan C tetapi mengabaikan jumlah atom O di kedua ruas." },
  { q: "Koefisien reaksi netralisasi: H₃PO₄ + NaOH → Na₃PO₄ + H₂O, secara berurutan adalah ...", options: ["1, 2, 1, 2", "3, 1, 1, 3", "1, 3, 1, 3", "1, 3, 3, 1"], answer: 2, solution: "1. Na₃PO₄ mengandung 3 Na, maka NaOH berkoefisien 3: H₃PO₄ + 3NaOH → Na₃PO₄ + H₂O. 2. H di kiri = 3 + 3 = 6, maka H₂O berkoefisien 3; cek O: 4 + 3 = 7 = 4 + 3. 3. Kesalahan umum: menjawab 1, 3, 1, 1 karena lupa bahwa total atom H di kiri ada 6, bukan 3." },
  // ===== STOIKIOMETRI: mol gas & volume molar (5 soal) =====
  { q: "Volume yang ditempati 2 mol gas ideal pada keadaan STP (0 °C, 1 atm) adalah ...", options: ["22,4 L", "2,24 L", "44,8 L", "11,2 L"], answer: 2, solution: "1. Pada STP, 1 mol gas ideal menempati volume 22,4 L. 2. Volume = 2 × 22,4 L = 44,8 L. 3. Kesalahan umum: menjawab 22,4 L karena lupa mengalikan dengan jumlah mol, atau memakai 24 L (itu volume molar pada keadaan kamar/RTP, bukan STP)." },
  { q: "Volume 3,2 gram gas CH₄ pada keadaan STP adalah ... ($A_r$: C = 12, H = 1)", options: ["2,24 L", "4,48 L", "22,4 L", "1,12 L"], answer: 1, solution: "1. $M_r$ CH₄ = 16, maka $n$ = 3,2/16 = 0,2 mol. 2. Volume STP = $n \\times 22,4$ = 0,2 × 22,4 = 4,48 L. 3. Kesalahan umum: langsung mengalikan massa (3,2) dengan 22,4 tanpa mengubah massa menjadi mol terlebih dahulu." },
  { q: "Massa gas O₂ yang menempati volume 11,2 L pada keadaan STP adalah ... ($A_r$: O = 16)", options: ["8 g", "32 g", "16 g", "64 g"], answer: 2, solution: "1. $n$ = V/22,4 = 11,2/22,4 = 0,5 mol. 2. $M_r$ O₂ = 32, maka massa = 0,5 × 32 = 16 g. 3. Kesalahan umum: memakai $A_r$ O (16) sebagai massa molar gas oksigen, padahal gas oksigen berbentuk molekul O₂ dengan $M_r$ = 32." },
  { q: "Jumlah mol gas N₂ yang menempati volume 5,6 L pada keadaan STP adalah ...", options: ["0,5 mol", "1 mol", "0,25 mol", "2,5 mol"], answer: 2, solution: "1. Pada STP berlaku $n = V / 22,4$. 2. $n$ = 5,6/22,4 = 0,25 mol. 3. Kesalahan umum: membalik rumus menjadi $n$ = 22,4 × V, atau mengira setiap 5,6 L selalu berarti 0,5 mol." },
  { q: "Sebanyak 25 gram CaCO₃ direaksikan dengan HCl berlebih: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂. Volume gas CO₂ yang dihasilkan pada STP adalah ... ($A_r$: Ca = 40, C = 12, O = 16)", options: ["2,8 L", "11,2 L", "5,6 L", "22,4 L"], answer: 2, solution: "1. $n$ CaCO₃ = 25/100 = 0,25 mol; perbandingan CaCO₃ : CO₂ = 1 : 1, maka $n$ CO₂ = 0,25 mol. 2. Volume STP = 0,25 × 22,4 = 5,6 L. 3. Kesalahan umum: lupa memakai perbandingan koefisien reaksi (di sini kebetulan 1 : 1) atau menghitung volume dari massa CaCO₃ langsung tanpa lewat mol." },
  // ===== STOIKIOMETRI: kadar/persen massa & rumus empiris (6 soal) =====
  { q: "Persen massa kalsium dalam CaCO₃ adalah ... ($A_r$: Ca = 40, C = 12, O = 16)", options: ["12%", "48%", "40%", "60%"], answer: 2, solution: "1. $M_r$ CaCO₃ = 100; massa Ca dalam 1 mol = 40. 2. % Ca = (40/100) × 100% = 40%. 3. Kesalahan umum: menghitung persen massa C atau O karena salah memilih unsur, atau memakai $A_r$ Ca = 20 (itu nomor atom, bukan massa atom relatif)." },
  { q: "Persen massa hidrogen dalam H₂O adalah ... ($A_r$: H = 1, O = 16)", options: ["5,6%", "88,9%", "11,1%", "50%"], answer: 2, solution: "1. $M_r$ H₂O = 18; massa H dalam 1 mol = 2 × 1 = 2. 2. % H = (2/18) × 100% = 11,1%. 3. Kesalahan umum: hanya menghitung 1 atom H (1/18 = 5,6%) karena lupa mengalikan dengan indeks H = 2." },
  { q: "Suatu senyawa mengandung 27,3% C dan 72,7% O. Rumus empiris senyawa tersebut adalah ... ($A_r$: C = 12, O = 16)", options: ["CO", "CO₂", "C₂O", "C₂O₃"], answer: 1, solution: "1. Mol relatif: C = 27,3/12 = 2,275; O = 72,7/16 = 4,54. 2. Bagi dengan angka terkecil (2,275): C : O = 1 : 2. 3. Rumus empiris = CO₂. Kesalahan umum: tidak membagi dengan angka terkecil sehingga perbandingan terlihat rumit dan salah menyederhanakannya." },
  { q: "Suatu senyawa mengandung 52,2% C, 13,0% H, dan 34,8% O. Rumus empiris senyawa tersebut adalah ... ($A_r$: C = 12, H = 1, O = 16)", options: ["CH₃O", "C₂H₄O", "C₂H₆O", "CH₂O"], answer: 2, solution: "1. Mol relatif: C = 52,2/12 = 4,35; H = 13,0/1 = 13,0; O = 34,8/16 = 2,175. 2. Bagi dengan angka terkecil (2,175): C : H : O = 2 : 6 : 1. 3. Rumus empiris = C₂H₆O. Kesalahan umum: membulatkan 5,98 menjadi 5 sehingga mendapat C₂H₅O yang salah." },
  { q: "Rumus empiris suatu senyawa adalah CH₂O. Jika $M_r$ senyawa tersebut 180, rumus molekulnya adalah ... ($A_r$: C = 12, H = 1, O = 16)", options: ["C₃H₆O₃", "C₂H₄O₂", "CH₂O", "C₆H₁₂O₆"], answer: 3, solution: "1. $M_r$ rumus empiris CH₂O = 12 + 2 + 16 = 30. 2. Kelipatan $n$ = 180/30 = 6, maka rumus molekul = (CH₂O)₆ = C₆H₁₂O₆. 3. Kesalahan umum: menjawab CH₂O (rumus empirisnya) tanpa mengalikan dengan kelipatan $n$." },
  { q: "Sebanyak 20 gram sampel bijih besi mengandung 12 gram besi murni. Kadar besi dalam bijih tersebut adalah ...", options: ["40%", "50%", "80%", "60%"], answer: 3, solution: "1. Kadar = (massa komponen / massa sampel) × 100%. 2. Kadar Fe = (12/20) × 100% = 60%. 3. Kesalahan umum: memakai massa pengotor (20 − 12 = 8 g) sebagai pembilang sehingga mendapat 40%." },
  // ===== STOIKIOMETRI: pereaksi pembatas (5 soal) =====
  { q: "Sebanyak 2 mol Zn direaksikan dengan 2 mol HCl menurut reaksi Zn + 2HCl → ZnCl₂ + H₂. Pereaksi pembatasnya adalah ...", options: ["Zn", "HCl", "ZnCl₂", "H₂"], answer: 1, solution: "1. Bandingkan mol/koefisien: Zn = 2/1 = 2; HCl = 2/2 = 1. 2. Nilai terkecil adalah HCl, jadi HCl habis lebih dulu dan menjadi pereaksi pembatas. 3. Kesalahan umum: mengira pereaksi pembatas adalah yang massanya atau molnya paling besar, padahal harus dibandingkan mol dibagi koefisiennya." },
  { q: "Sebanyak 10 gram CaCO₃ direaksikan dengan 3,65 gram HCl menurut reaksi CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂. Massa CO₂ yang terbentuk adalah ... ($A_r$: Ca = 40, C = 12, O = 16, H = 1, Cl = 35,5)", options: ["4,4 g", "2,2 g", "1,1 g", "8,8 g"], answer: 1, solution: "1. $n$ CaCO₃ = 10/100 = 0,1 mol; $n$ HCl = 3,65/36,5 = 0,1 mol. 2. mol/koefisien: CaCO₃ = 0,1/1 = 0,1; HCl = 0,1/2 = 0,05 → HCl pereaksi pembatas. 3. $n$ CO₂ = $n$ HCl/2 = 0,05 mol; massa = 0,05 × 44 = 2,2 g. Kesalahan umum: menghitung dari CaCO₃ (0,1 mol → 4,4 g) tanpa memeriksa pereaksi pembatas." },
  { q: "Sebanyak 8 gram CH₄ dibakar dengan 48 gram O₂ menurut reaksi CH₄ + 2O₂ → CO₂ + 2H₂O. Massa CO₂ yang dihasilkan adalah ... ($A_r$: C = 12, H = 1, O = 16)", options: ["11 g", "44 g", "22 g", "33 g"], answer: 2, solution: "1. $n$ CH₄ = 8/16 = 0,5 mol; $n$ O₂ = 48/32 = 1,5 mol. 2. mol/koefisien: CH₄ = 0,5/1 = 0,5; O₂ = 1,5/2 = 0,75 → CH₄ pereaksi pembatas. 3. $n$ CO₂ = 0,5 mol; massa = 0,5 × 44 = 22 g. Kesalahan umum: mengira O₂ pembatas karena massanya (48 g) paling besar — yang dibandingkan adalah mol per koefisien, bukan massa." },
  { q: "Sebanyak 4 mol N₂ direaksikan dengan 6 mol H₂ menurut reaksi N₂ + 3H₂ → 2NH₃. Jumlah NH₃ yang terbentuk adalah ...", options: ["2 mol", "8 mol", "4 mol", "6 mol"], answer: 2, solution: "1. mol/koefisien: N₂ = 4/1 = 4; H₂ = 6/3 = 2 → H₂ pereaksi pembatas. 2. $n$ NH₃ = (2/3) × 6 = 4 mol. 3. Kesalahan umum: menghitung dari N₂ (molnya lebih besar) sehingga mendapat 8 mol, atau lupa mengalikan perbandingan koefisien 2/3." },
  { q: "Sebanyak 13 gram Zn direaksikan dengan 7,3 gram HCl menurut reaksi Zn + 2HCl → ZnCl₂ + H₂. Jumlah H₂ yang terbentuk adalah ... ($A_r$: Zn = 65, H = 1, Cl = 35,5)", options: ["0,2 mol", "0,1 mol", "0,4 mol", "0,05 mol"], answer: 1, solution: "1. $n$ Zn = 13/65 = 0,2 mol; $n$ HCl = 7,3/36,5 = 0,2 mol. 2. mol/koefisien: Zn = 0,2/1 = 0,2; HCl = 0,2/2 = 0,1 → HCl pereaksi pembatas. 3. $n$ H₂ = 0,1/2 × 1 = 0,1 mol (perbandingan HCl : H₂ = 2 : 1). Kesalahan umum: mengambil mol Zn (0,2) sebagai dasar perhitungan tanpa mengecek pereaksi pembatas." },
  // ===== STRUKTUR ATOM: partikel subatom & nomor atom/massa (5 soal) =====
  { q: "Suatu atom netral X memiliki nomor atom 17 dan nomor massa 35. Jumlah neutron atom tersebut adalah ...", options: ["17", "52", "35", "18"], answer: 3, solution: "1. Nomor massa = jumlah proton + jumlah neutron. 2. Jumlah neutron = 35 − 17 = 18. 3. Kesalahan umum: menjawab 35 (itu nomor massanya, bukan jumlah neutron) atau 17 (itu jumlah proton)." },
  { q: "Ion Ca²⁺ berasal dari atom Ca bernomor atom 20. Jumlah elektron yang dimiliki ion Ca²⁺ adalah ...", options: ["20", "22", "18", "16"], answer: 2, solution: "1. Atom Ca netral memiliki 20 elektron. 2. Ion Ca²⁺ terbentuk karena atom Ca melepaskan 2 elektron, jadi elektron tersisa = 20 − 2 = 18. 3. Kesalahan umum: menjawab 22 karena mengira muatan +2 berarti elektron bertambah, padahal kation berarti elektron berkurang." },
  { q: "Suatu partikel memiliki 12 proton, 12 neutron, dan 10 elektron. Partikel tersebut adalah ...", options: ["Atom Mg", "Ion Mg²⁻", "Ion Ne²⁺", "Ion Mg²⁺"], answer: 3, solution: "1. Jumlah proton 12 menunjukkan unsur magnesium (nomor atom 12). 2. Elektron (10) lebih sedikit 2 dari proton (12), sehingga muatannya +2 → ion Mg²⁺. 3. Kesalahan umum: menjawab atom Mg netral karena hanya melihat jumlah protonnya, tanpa membandingkan jumlah elektron." },
  { q: "Suatu atom netral memiliki 26 proton dan 30 neutron. Nomor massa atom tersebut adalah ...", options: ["26", "30", "4", "56"], answer: 3, solution: "1. Nomor massa = proton + neutron = 26 + 30 = 56. 2. Atom tersebut adalah besi-56 (⁵⁶Fe). 3. Kesalahan umum: menjawab 26 (itu nomor atom) atau 30 (itu jumlah neutron saja)." },
  { q: "Jumlah neutron yang dimiliki ion ³⁷Cl⁻ (nomor atom Cl = 17) adalah ...", options: ["17", "18", "20", "37"], answer: 2, solution: "1. Jumlah neutron = nomor massa − nomor atom = 37 − 17 = 20. 2. Muatan −1 pada ion tidak mengubah jumlah neutron, hanya jumlah elektron. 3. Kesalahan umum: mengira muatan ion ikut mengubah jumlah neutron, atau menjawab 37 (nomor massanya)." },
  // ===== STRUKTUR ATOM: isotop/isobar/isoton (4 soal) =====
  { q: "Pasangan atom berikut yang merupakan isobar adalah ...", options: ["¹⁴C dan ¹⁴N", "¹²C dan ¹⁴C", "¹⁶O dan ¹⁷O", "¹H dan ²H"], answer: 0, solution: "1. Isobar = atom berbeda unsur (nomor atom berbeda) tetapi nomor massanya sama. 2. ¹⁴C (6 proton) dan ¹⁴N (7 proton) sama-sama bernomor massa 14 → isobar. 3. Kesalahan umum: tertukar dengan isotop — ¹²C dan ¹⁴C itu isotop (unsur sama, massa beda), sedangkan isobar unsurnya berbeda." },
  { q: "Pasangan atom berikut yang merupakan isoton adalah ...", options: ["¹³C dan ¹⁴N", "¹²C dan ¹³C", "¹⁴C dan ¹⁴N", "¹H dan ³H"], answer: 0, solution: "1. Isoton = atom berbeda unsur dengan jumlah neutron yang sama. 2. ¹³C: neutron = 13 − 6 = 7; ¹⁴N: neutron = 14 − 7 = 7 → keduanya 7 neutron → isoton. 3. Kesalahan umum: mengira nomor massa yang sama (¹⁴C dan ¹⁴N) berarti isoton, padahal itu isobar." },
  { q: "Pasangan atom klor berikut yang tergolong isotop adalah ...", options: ["³⁵Cl dan ³⁷Cl", "³⁵Cl dan ³⁵Ar", "³⁷Cl dan ³⁷K", "³⁵Cl dan ³⁷Ar"], answer: 0, solution: "1. Isotop = unsur sama (nomor atom sama) dengan nomor massa berbeda. 2. ³⁵Cl dan ³⁷Cl sama-sama klor (17 proton), hanya jumlah neutronnya beda → isotop. 3. Kesalahan umum: memilih pasangan bernomor massa sama (³⁵Cl–³⁵Ar atau ³⁷Cl–³⁷K) — itu isobar, bukan isotop." },
  { q: "Atom A memiliki 20 proton dan 20 neutron, sedangkan atom B memiliki 18 proton dan 22 neutron. Hubungan atom A dan B adalah ...", options: ["Isotop", "Isobar", "Isoton", "Isomer"], answer: 1, solution: "1. Nomor massa A = 20 + 20 = 40; nomor massa B = 18 + 22 = 40. 2. Nomor atom berbeda (20 vs 18) tetapi nomor massa sama (40) → isobar. 3. Kesalahan umum: menjawab isoton karena jumlah neutronnya terlihat mirip, padahal neutron A (20) dan B (22) berbeda." },
  // ===== STRUKTUR ATOM: konfigurasi elektron & bilangan kuantum (8 soal) =====
  { q: "Konfigurasi elektron atom Na (nomor atom 11) yang benar adalah ...", options: ["1s² 2s² 2p⁶ 3s¹", "1s² 2s² 2p⁶ 3p¹", "[Ne] 3s²", "1s² 2s² 2p⁷"], answer: 0, solution: "1. Isi 11 elektron mengikuti urutan Aufbau: 1s² 2s² 2p⁶ 3s¹ (total 2 + 2 + 6 + 1 = 11). 2. Elektron terakhir menempati subkulit 3s, bukan 3p. 3. Kesalahan umum: menulis 2p⁷ (subkulit p maksimum hanya 6 elektron) atau 3s² (total elektron menjadi 12)." },
  { q: "Konfigurasi elektron ion Cl⁻ (nomor atom Cl = 17) yang benar adalah ...", options: ["[Ne] 3s² 3p⁵", "1s² 2s² 2p⁶ 3s² 3p⁶", "1s² 2s² 2p⁶ 3s² 3p⁴", "[Ar] 4s¹"], answer: 1, solution: "1. Atom Cl netral: 1s² 2s² 2p⁶ 3s² 3p⁵ (17 elektron). 2. Ion Cl⁻ menangkap 1 elektron → 1s² 2s² 2p⁶ 3s² 3p⁶ (18 elektron, konfigurasi gas mulia argon). 3. Kesalahan umum: lupa menambah 1 elektron sehingga menjawab konfigurasi atom Cl netral, atau malah mengurangi elektron." },
  { q: "Bilangan kuantum elektron terakhir atom Al (nomor atom 13) yang mungkin adalah ...", options: ["n = 3, l = 1, m = −1, s = +½", "n = 3, l = 2, m = 0, s = +½", "n = 2, l = 1, m = 0, s = −½", "n = 3, l = 1, m = −2, s = +½"], answer: 0, solution: "1. Konfigurasi Al: 1s² 2s² 2p⁶ 3s² 3p¹; elektron terakhir di 3p → n = 3, l = 1. 2. Untuk subkulit p, m yang mungkin: −1, 0, +1 dan s = ±½, jadi n = 3, l = 1, m = −1, s = +½ valid. 3. Kesalahan umum: memilih l = 2 untuk elektron p (l = 2 itu subkulit d), atau m = −2 yang tidak mungkin untuk l = 1." },
  { q: "Jumlah orbital yang terdapat dalam satu subkulit d adalah ...", options: ["3", "7", "5", "10"], answer: 2, solution: "1. Jumlah orbital tiap subkulit = 2l + 1; untuk subkulit d, l = 2. 2. Jumlah orbital = 2(2) + 1 = 5 orbital. 3. Kesalahan umum: menjawab 10 — itu jumlah elektron maksimum subkulit d (5 orbital × 2 elektron), bukan jumlah orbitalnya." },
  { q: "Jumlah maksimum elektron yang dapat ditampung kulit dengan bilangan kuantum utama n = 3 adalah ...", options: ["8", "32", "18", "2"], answer: 2, solution: "1. Berlaku rumus $2n^2$. 2. Untuk n = 3: 2 × 3² = 18 elektron (subkulit 3s² 3p⁶ 3d¹⁰). 3. Kesalahan umum: menjawab 8 karena hanya menghitung subkulit 3s dan 3p (aturan oktet), padahal kulit ketiga juga memiliki subkulit 3d." },
  { q: "Konfigurasi elektron atom Cr (nomor atom 24) yang benar adalah ...", options: ["[Ar] 4s² 3d⁴", "[Ar] 4s¹ 3d⁵", "[Ar] 3d⁶", "[Ar] 4s² 4p⁴"], answer: 1, solution: "1. Menurut Aufbau seharusnya [Ar] 4s² 3d⁴, tetapi Cr menyimpang menjadi [Ar] 4s¹ 3d⁵. 2. Penyimpangan ini terjadi karena subkulit d yang terisi setengah penuh (d⁵) lebih stabil. 3. Kesalahan umum: menerapkan aturan Aufbau secara kaku sehingga menjawab [Ar] 4s² 3d⁴ — Cr dan Cu adalah pengecualian yang harus dihafal." },
  { q: "Pernyataan yang sesuai dengan prinsip larangan Pauli adalah ...", options: ["Elektron mengisi orbital dari tingkat energi terendah", "Satu orbital maksimum diisi 2 elektron dengan spin berlawanan", "Elektron-elektron mengisi orbital degenerat satu per satu dengan spin sejajar", "Tidak ada dua elektron dengan keempat bilangan kuantum yang seluruhnya sama kecuali spinnya"], answer: 1, solution: "1. Prinsip larangan Pauli: dalam satu atom tidak ada dua elektron yang memiliki keempat bilangan kuantum sama; akibatnya satu orbital hanya menampung maksimum 2 elektron dengan spin berlawanan (+½ dan −½). 2. Kesalahan umum: tertukar dengan aturan Hund (pengisian orbital degenerat satu per satu) atau prinsip Aufbau (pengisian dari energi terendah)." },
  { q: "Himpunan bilangan kuantum berikut yang TIDAK mungkin untuk sebuah elektron adalah ...", options: ["n = 1, l = 0, m = 0, s = +½", "n = 3, l = 1, m = −1, s = −½", "n = 2, l = 2, m = 1, s = +½", "n = 4, l = 3, m = 2, s = +½"], answer: 2, solution: "1. Syarat yang berlaku: l < n dan |m| ≤ l. 2. Pada pilihan ketiga, n = 2 tetapi l = 2 — melanggar syarat l < n, jadi tidak mungkin. 3. Kesalahan umum: hanya memeriksa nilai m dan s tanpa memeriksa hubungan l terhadap n." },
  // ===== SPU: golongan/periode & sifat periodik (8 soal) =====
  { q: "Di antara unsur Na, Cl, O, dan F, yang memiliki keelektronegatifan terbesar adalah ...", options: ["Na", "Cl", "F", "O"], answer: 2, solution: "1. Keelektronegatifan bertambah ke kanan dan ke atas dalam sistem periodik. 2. F terletak paling kanan-atas di antara pilihan dan merupakan unsur paling elektronegatif di seluruh sistem periodik. 3. Kesalahan umum: memilih O atau Cl karena ukurannya lebih besar — justru atom yang kecil dengan muatan inti efektif besar menarik elektron paling kuat." },
  { q: "Di antara unsur F, Cl, Br, dan I, yang memiliki afinitas elektron terbesar adalah ...", options: ["F", "Cl", "Br", "I"], answer: 1, solution: "1. Umumnya afinitas elektron bertambah ke atas dalam satu golongan, tetapi F menyimpang: atom F sangat kecil sehingga tolakan antar elektron besar. 2. Akibatnya urutannya Cl > F > Br > I — Cl memiliki afinitas elektron terbesar. 3. Kesalahan umum: menjawab F karena mengira semua sifat periodik selalu maksimal pada F." },
  { q: "Unsur yang energi ionisasi keduanya melonjak sangat tajam dibandingkan energi ionisasi pertamanya adalah ...", options: ["Na", "Mg", "Al", "Si"], answer: 0, solution: "1. Na (konfigurasi [Ne] 3s¹) melepas 1 elektron terluarnya dengan mudah, mencapai konfigurasi oktet gas mulia Ne yang sangat stabil. 2. Melepas elektron kedua berarti merusak kulit oktet yang stabil → energi ionisasi kedua melonjak tajam. 3. Kesalahan umum: mengira loncatan besar terjadi pada semua unsur, padahal loncatan tajam menandai selesainya pelepasan elektron valensi." },
  { q: "Diketahui ion-ion Na⁺, Mg²⁺, Al³⁺, dan O²⁻ masing-masing memiliki 10 elektron (isoelektronik). Ion yang memiliki jari-jari terbesar adalah ...", options: ["Na⁺", "Mg²⁺", "Al³⁺", "O²⁻"], answer: 3, solution: "1. Pada deret isoelektronik, jumlah elektron sama sehingga yang menentukan ukuran adalah jumlah proton: makin sedikit proton, makin lemah tarikan inti terhadap elektron. 2. O²⁻ hanya memiliki 8 proton (paling sedikit) → tarikan inti paling lemah → jari-jari terbesar. 3. Kesalahan umum: mengira kation selalu lebih kecil dari anion tanpa alasan, atau memilih Al³⁺ karena muatannya paling besar — justru proton terbanyak (13) membuat Al³⁺ paling kecil." },
  { q: "Dalam satu golongan dari atas ke bawah, energi ionisasi unsur-unsur cenderung ...", options: ["Bertambah", "Berkurang", "Tetap", "Bertambah lalu berkurang"], answer: 1, solution: "1. Dari atas ke bawah, jumlah kulit bertambah sehingga jari-jari atom membesar dan elektron terluar makin jauh dari inti. 2. Gaya tarik inti terhadap elektron terluar melemah → elektron makin mudah dilepas → energi ionisasi berkurang. 3. Kesalahan umum: mengira bertambahnya jumlah proton otomatis menaikkan energi ionisasi, tanpa memperhitungkan efek perisai dan jarak elektron terluar." },
  { q: "Letak unsur Fe (nomor atom 26) dalam sistem periodik adalah ...", options: ["Golongan VIIIB, periode 4", "Golongan VIB, periode 4", "Golongan VIIIB, periode 3", "Golongan IIA, periode 4"], answer: 0, solution: "1. Konfigurasi Fe: [Ar] 4s² 3d⁶; elektron pada subkulit 4s dan 3d menempatkannya di blok d (golongan transisi). 2. Jumlah elektron valensi (4s + 3d) = 8 → golongan VIIIB; kulit terluar n = 4 → periode 4. 3. Kesalahan umum: hanya menghitung elektron 3d (6) sehingga menjawab golongan VIB, atau tertukar antara periode 3 dan 4." },
  { q: "Di antara logam alkali Li, Na, K, dan Cs, yang paling reaktif adalah ...", options: ["Li", "Na", "K", "Cs"], answer: 3, solution: "1. Reaktivitas logam alkali ditentukan oleh kemudahan melepas 1 elektron valensi (energi ionisasi kecil). 2. Cs memiliki jari-jari atom terbesar sehingga elektron terluarnya paling lemah terikat → energi ionisasi terkecil → paling reaktif. 3. Kesalahan umum: mengira Li paling reaktif karena paling ringan, padahal dalam satu golongan reaktivitas logam bertambah ke bawah." },
  { q: "Di antara unsur periode 3 berikut (Na, Mg, Al, Cl), yang memiliki keelektronegatifan terbesar adalah ...", options: ["Na", "Mg", "Al", "Cl"], answer: 3, solution: "1. Dalam satu periode, keelektronegatifan bertambah dari kiri ke kanan karena muatan inti efektif bertambah sedangkan jari-jari mengecil. 2. Cl terletak paling kanan di antara pilihan → keelektronegatifan terbesar. 3. Kesalahan umum: memilih Na karena paling mudah melepas elektron — justru kemudahan melepas elektron (sifat logam) berlawanan arah dengan keelektronegatifan." },
{ q: "Logam dapat ditempa menjadi lembaran tipis dan menghantar listrik dengan baik. Model ikatan yang paling tepat menjelaskan sifat ini adalah ...", options: ["Model lautan elektron (electron sea)", "Ikatan ion antara atom-atom logam", "Ikatan kovalen rangkap antar atom logam", "Pasangan elektron bebas yang terikat kuat pada tiap atom"], answer: 0, solution: "1. Dalam model lautan elektron, elektron valensi atom logam terdelokalisasi dan bergerak bebas di antara kation-kation logam. 2. Elektron yang bebas bergerak inilah yang menghantar listrik dan panas, serta memungkinkan lapisan atom bergeser tanpa putus sehingga logam dapat ditempa. 3. Kesalahan umum: mengira logam berikatan ion — ikatan ion justru membuat zat rapuh dan hanya menghantar listrik dalam bentuk lelehan atau larutan." },
  { q: "Pada pembentukan senyawa NaCl dari unsur Na dan Cl, peristiwa yang terjadi adalah ...", options: ["Na dan Cl berbagi pasangan elektron secara setara", "Na melepaskan satu elektron menjadi Na⁺ dan Cl menangkapnya menjadi Cl⁻", "Cl melepaskan elektron dan Na menangkapnya", "Na dan Cl saling bertukar proton"], answer: 1, solution: "1. Na (logam alkali) cenderung melepaskan 1 elektron valensinya membentuk Na⁺ yang stabil (oktet). 2. Cl (halogen) cenderung menangkap 1 elektron membentuk Cl⁻ yang stabil (oktet). 3. Serah terima elektron inilah hakikat ikatan ion. Kesalahan umum: tertukar arah perpindahan elektron — yang melepaskan elektron adalah logam (Na), bukan nonlogam." },
  { q: "Suatu senyawa AB memiliki selisih keelektronegatifan 2,5. Jenis ikatan yang paling mungkin pada senyawa AB adalah ...", options: ["Kovalen nonpolar", "Kovalen polar", "Ion", "Logam"], answer: 2, solution: "1. Aturan praktis Pauling: selisih keelektronegatifan > 1,7 menunjukkan ikatan ionik; 0,4–1,7 kovalen polar; < 0,4 kovalen nonpolar. 2. Selisih 2,5 > 1,7 sehingga ikatan cenderung ionik. Kesalahan umum: mengira selisih besar berarti kovalen polar — justru makin besar selisihnya, makin ionik karakter ikatannya." },
  { q: "Larutan NaCl dapat menghantar listrik, sedangkan larutan gula (C₁₂H₂₂O₁₁) tidak. Penyebab perbedaan ini adalah ...", options: ["Gaya tarik elektrostatik antara ion positif dan negatif dalam kisi kristal sangat kuat", "Molekulnya sangat besar", "Ikatan kovalennya banyak", "Massa jenisnya kecil"], answer: 0, solution: "1. Dalam kristal ion, kation dan anion tersusun rapat dalam kisi tiga dimensi dengan gaya tarik elektrostatik ke segala arah. 2. Memutus seluruh gaya ini untuk melelehkan kristal memerlukan energi (kalor) yang sangat besar. 3. Kesalahan umum: mengaitkan titik leleh tinggi dengan ukuran molekul — pada senyawa ion tidak ada molekul diskrit, yang ada adalah kisi ion raksasa." },
  { q: "Senyawa ionik umumnya memiliki titik leleh yang sangat tinggi. Penyebabnya adalah ...", options: ["NaCl terionisasi menghasilkan ion-ion bebas yang bergerak, sedangkan gula tetap sebagai molekul netral", "NaCl berikatan kovalen sedangkan gula berikatan ion", "Gula menguap dalam air", "NaCl bereaksi dengan air membentuk gas"], answer: 0, solution: "1. NaCl adalah senyawa ion yang dalam air terdisosiasi menjadi ion Na⁺ dan Cl⁻ yang bebas bergerak. 2. Ion-ion yang bergerak inilah pembawa muatan listrik. 3. Gula adalah senyawa kovalen yang larut sebagai molekul netral utuh, tanpa ion pembawa muatan. Kesalahan umum: mengira semua zat yang larut dalam air pasti menghantar listrik — hanya zat yang menghasilkan ion yang bisa." },
  { q: "Pada ion amonium (NH₄⁺), ikatan antara atom N dan atom H yang keempat disebut ikatan kovalen koordinasi karena ...", options: ["Pasangan elektron ikatan berasal dari satu atom saja, yaitu N", "Terjadi serah terima elektron seperti pada ikatan ion", "Tidak melibatkan elektron sama sekali", "Atom H menyumbangkan kedua elektron ikatan"], answer: 0, solution: "1. Atom N pada NH₃ sudah memiliki satu pasangan elektron bebas (PEB). 2. PEB milik N inilah yang dipakai bersama dengan ion H⁺ untuk membentuk ikatan N–H keempat — kedua elektron berasal dari N saja. 3. Ikatan kovalen yang pasangan elektronnya berasal dari satu pihak disebut ikatan kovalen koordinasi (dativ). Kesalahan umum: mengira ikatan koordinasi berarti tidak ada pembagian elektron — elektronnya tetap dipakai bersama, hanya asal-usulnya dari satu atom." },
  { q: "Logam merupakan penghantar panas yang baik karena ...", options: ["Atom-atom logam bergetar sangat cepat", "Elektron-elektron bebas yang mudah bergerak menghantarkan energi kalor dengan cepat", "Ikatan logam menyerap semua kalor", "Kerapatan logam selalu tinggi"], answer: 1, solution: "1. Elektron valensi logam terdelokalisasi (model lautan elektron) dan sangat mudah bergerak. 2. Ketika satu ujung logam dipanaskan, elektron-elektron ini cepat menyebarkan energi kinetik ke seluruh bagian logam. 3. Kesalahan umum: mengira hantaran panas logam disebabkan getaran atom saja — pada logam, kontribusi elektron bebas jauh lebih dominan dibanding getaran kisi." },
  { q: "Pasangan senyawa berikut yang KEDUANYA berikatan kovalen adalah ...", options: ["HCl dan H₂O", "NaCl dan HCl", "MgO dan H₂O", "NaCl dan MgO"], answer: 0, solution: "1. HCl (nonlogam + nonlogam) dan H₂O (nonlogam + nonlogam) sama-sama dibentuk oleh pemakaian bersama pasangan elektron → kovalen. 2. NaCl dan MgO melibatkan logam + nonlogam → ikatan ionik. Kesalahan umum: mengira HCl berikatan ion hanya karena ia bersifat asam dan terionisasi dalam air — dalam keadaan murni HCl adalah molekul kovalen." },
  { q: "Jumlah total elektron valensi yang digunakan untuk menggambar struktur Lewis H₂SO₄ adalah ... (elektron valensi: H = 1, S = 6, O = 6)", options: ["28", "30", "32", "34"], answer: 2, solution: "1. Hitung: 2 atom H × 1 = 2; 1 atom S × 6 = 6; 4 atom O × 6 = 24. 2. Total = 2 + 6 + 24 = 32 elektron valensi. Kesalahan umum: lupa mengalikan elektron valensi O dengan jumlah atomnya (4), atau salah menghitung elektron valensi S." },
  { q: "Senyawa berikut yang atom pusatnya TIDAK memenuhi aturan oktet adalah ...", options: ["CH₄", "H₂O", "NH₃", "BF₃"], answer: 3, solution: "1. Aturan oktet: atom cenderung memiliki 8 elektron valensi di sekelilingnya. 2. Pada BF₃, atom B hanya dikelilingi 3 ikatan tunggal = 6 elektron (oktet tak lengkap) karena B hanya punya 3 elektron valensi. 3. CH₄, H₂O, dan NH₃ semuanya memenuhi oktet pada atom pusatnya. Kesalahan umum: mengira semua senyawa stabil pasti beroktet — unsur seperti B dan Be dapat stabil dengan oktet tak lengkap." },
  { q: "Dalam struktur Lewis ion nitrat (NO₃⁻), jumlah ikatan rangkap dua N=O adalah ...", options: ["0", "1", "2", "3"], answer: 1, solution: "1. Total elektron valensi NO₃⁻ = 5 + 3(6) + 1 (dari muatan negatif) = 24. 2. Setelah 3 ikatan tunggal N–O dan oktet tiap O dipenuhi, tersisa 1 pasangan elektron yang membentuk 1 ikatan rangkap N=O (beresonansi di antara ketiga atom O). 3. Jadi hanya ada 1 ikatan rangkap dua dalam tiap struktur resonansi. Kesalahan umum: mengira semua ikatan N–O adalah rangkap dua, atau mengabaikan elektron tambahan dari muatan ion." },
  { q: "Muatan formal atom nitrogen dalam ion amonium (NH₄⁺) adalah ...", options: ["0", "+1", "−1", "+2"], answer: 1, solution: "1. Muatan formal = elektron valensi − (elektron bebas + ½ elektron ikatan). 2. Untuk N: 5 − (0 + 8/2) = 5 − 4 = +1. 3. Nilai +1 ini konsisten dengan muatan total ion NH₄⁺. Kesalahan umum: lupa membagi dua elektron ikatan, atau mengira muatan formal N sama dengan bilangan oksidasinya (−3)." },
  { q: "Unsur berikut yang dalam keadaan bebas sudah stabil sehingga tidak membentuk ikatan kimia adalah ...", options: ["O", "N", "Ne", "Cl"], answer: 2, solution: "1. Ne adalah gas mulia dengan konfigurasi elektron valensi penuh (oktet): 2s² 2p⁶. 2. Karena kulit terluarnya sudah penuh, Ne tidak cenderung melepas, menangkap, atau berbagi elektron. 3. O, N, dan Cl belum beroktet sehingga reaktif membentuk ikatan. Kesalahan umum: mengira semua unsur ingin berikatan — gas mulia justru stabil tanpa berikatan karena oktetnya sudah lengkap." },
  { q: "Jumlah pasangan elektron bebas (PEB) pada atom oksigen dalam molekul H₂O adalah ...", options: ["1", "3", "0", "2"], answer: 3, solution: "1. O memiliki 6 elektron valensi; 2 di antaranya dipakai untuk 2 ikatan O–H. 2. Sisa 4 elektron = 2 pasangan elektron bebas. 3. Kedua PEB inilah yang membuat H₂O berbentuk bengkok menurut VSEPR. Kesalahan umum: menghitung semua elektron valensi O sebagai PEB (3 pasangan), lupa bahwa 1 pasangan sudah dipakai untuk berikatan." },
  { q: "Bentuk molekul CH₄ menurut teori VSEPR adalah ...", options: ["Segitiga datar", "Tetrahedral", "Linear", "Piramida segitiga"], answer: 1, solution: "1. Atom C memiliki 4 pasangan elektron ikatan (PEI) dan 0 pasangan elektron bebas (tipe AX₄). 2. Menurut VSEPR, keempat domain elektron saling menjauh maksimal membentuk sudut 109,5°, yaitu bentuk tetrahedral. 3. Kesalahan umum: tertukar dengan NH₃ yang berbentuk piramida segitiga karena memiliki 1 PEB, atau mengira semua molekul dengan 4 atom pasti tetrahedral tanpa memeriksa PEB." },
  { q: "Bentuk molekul H₂O menurut teori VSEPR adalah ...", options: ["Linear", "Bengkok", "Segitiga datar", "Tetrahedral"], answer: 1, solution: "1. Atom O memiliki 2 pasangan elektron ikatan dan 2 pasangan elektron bebas (tipe AX₂E₂). 2. Dua PEB menekan kedua ikatan O–H sehingga molekul berbentuk bengkok (seperti huruf V) dengan sudut sekitar 104,5°. 3. Kesalahan umum: mengabaikan PEB dan menjawab linear hanya karena rumusnya H₂O — bentuk molekul ditentukan oleh domain elektron, bukan oleh jumlah atomnya." },
  { q: "Bentuk molekul CO₂ menurut teori VSEPR adalah ...", options: ["Bengkok", "Segitiga datar", "Linear", "Piramida segitiga"], answer: 2, solution: "1. Struktur Lewis CO₂ adalah O=C=O; atom C memiliki 2 domain elektron ikatan dan 0 PEB (tipe AX₂). 2. Dua domain elektron saling menjauh maksimal pada sudut 180°, sehingga molekul berbentuk linear. 3. Kesalahan umum: mengira CO₂ bengkok seperti H₂O atau SO₂ — CO₂ tidak punya PEB pada atom C sehingga tetap linear." },
  { q: "Bentuk molekul BF₃ menurut teori VSEPR adalah ...", options: ["Piramida segitiga", "Segitiga datar", "Tetrahedral", "Bengkok"], answer: 1, solution: "1. Atom B memiliki 3 pasangan elektron ikatan dan 0 PEB (tipe AX₃). 2. Tiga domain elektron tersebar merata pada sudut 120° dalam satu bidang → segitiga datar (trigonal planar). 3. Kesalahan umum: mengira BF₃ berbentuk piramida segitiga seperti NH₃ — BF₃ tidak memiliki PEB pada atom pusatnya." },
  { q: "Bentuk molekul PCl₅ menurut teori VSEPR adalah ...", options: ["Bipiramida trigonal", "Oktahedral", "Piramida segiempat", "Tetrahedral"], answer: 0, solution: "1. Atom P memiliki 5 pasangan elektron ikatan dan 0 PEB (tipe AX₅). 2. Lima domain elektron tersusun sebagai bipiramida trigonal: 3 atom Cl di bidang ekuator (sudut 120°) dan 2 di posisi aksial (sudut 90° terhadap bidang). 3. Kesalahan umum: mengira molekul dengan 5 domain pasti oktahedral — oktahedral memerlukan 6 domain elektron (AX₆)." },
  { q: "Bentuk molekul SF₄ menurut teori VSEPR adalah ...", options: ["Jungkat-jungkit (seesaw)", "Tetrahedral", "Segiempat datar", "Bipiramida trigonal"], answer: 0, solution: "1. Atom S memiliki 4 pasangan elektron ikatan dan 1 PEB (tipe AX₄E). 2. Lima domain elektron berinduk pada bipiramida trigonal, tetapi 1 posisi ekuator ditempati PEB sehingga 4 atom F membentuk bangun jungkat-jungkit (seesaw). 3. Kesalahan umum: mengabaikan PEB dan menjawab tetrahedral atau bipiramida trigonal — PEB mengubah bentuk molekul meski susunan domain elektronnya sama." },
  { q: "Bentuk molekul XeF₄ menurut teori VSEPR adalah ...", options: ["Tetrahedral", "Oktahedral", "Piramida segiempat", "Segiempat datar (square planar)"], answer: 3, solution: "1. Atom Xe memiliki 4 pasangan elektron ikatan dan 2 PEB (tipe AX₄E₂). 2. Enam domain elektron berinduk pada oktahedral; kedua PEB menempati posisi berseberangan (aksial) agar saling menjauh maksimal. 3. Akibatnya 4 atom F berada sebidang membentuk segiempat datar (square planar). Kesalahan umum: mengira 2 PEB membuat molekul berbentuk tetrahedral, atau lupa bahwa PEB cenderung menempati posisi berseberangan." },
  { q: "Urutan sudut ikatan dari TERBESAR ke terkecil untuk CH₄, NH₃, dan H₂O adalah ...", options: ["CH₄ > NH₃ > H₂O", "H₂O > NH₃ > CH₄", "NH₃ > H₂O > CH₄", "NH₃ > CH₄ > H₂O"], answer: 0, solution: "1. Sudut ikatan: CH₄ = 109,5° (0 PEB), NH₃ ≈ 107° (1 PEB), H₂O ≈ 104,5° (2 PEB). 2. Urutan kekuatan tolakan: PEB–PEB > PEB–PEI > PEI–PEI, sehingga makin banyak PEB makin menyempit sudut ikatannya. 3. Kesalahan umum: mengira molekul dengan PEB lebih banyak memiliki sudut lebih besar — justru PEB menekan pasangan ikatan sehingga sudut mengecil." },
  { q: "Molekul CCl₄ bersifat nonpolar meskipun setiap ikatan C–Cl bersifat polar. Hal ini disebabkan ...", options: ["Ikatan C–Cl sebenarnya nonpolar", "Bentuk molekul tetrahedral yang simetris membuat momen dipol saling meniadakan", "Atom C tidak elektronegatif", "CCl₄ berikatan ion"], answer: 1, solution: "1. Setiap ikatan C–Cl memang polar (Cl lebih elektronegatif daripada C). 2. Namun bentuk molekulnya tetrahedral yang sangat simetris, sehingga keempat vektor momen dipol saling meniadakan dan momen dipol total = 0. 3. Kesalahan umum: menyimpulkan kepolaran molekul hanya dari kepolaran ikatannya — geometri molekul sama pentingnya." },
  { q: "Molekul SO₂ bersifat polar karena ...", options: ["Bentuk molekulnya bengkok sehingga momen dipol tidak saling meniadakan", "Atom S lebih elektronegatif daripada O", "SO₂ berikatan ion", "SO₂ memiliki ikatan rangkap"], answer: 0, solution: "1. Atom S pada SO₂ memiliki 1 PEB (tipe AX₂E) sehingga molekul berbentuk bengkok. 2. Bentuk yang tidak simetris membuat momen dipol kedua ikatan S=O tidak saling meniadakan → molekul polar. 3. Kesalahan umum: mengira semua molekul triatomik linear seperti CO₂ — SO₂ punya PEB pada atom pusatnya sehingga bengkok dan polar." },
  { q: "Ikatan hidrogen dapat terbentuk pada senyawa-senyawa berikut, KECUALI ...", options: ["HF", "H₂O", "NH₃", "CH₄"], answer: 3, solution: "1. Syarat ikatan hidrogen: atom H terikat langsung pada atom yang sangat elektronegatif dan kecil, yaitu N, O, atau F. 2. HF, H₂O, dan NH₃ memenuhi syarat; pada CH₄ atom H terikat pada C yang keelektronegatifannya rendah. 3. Kesalahan umum: mengira setiap molekul yang mengandung H dapat berikatan hidrogen — tanpa N, O, atau F, yang ada hanya gaya London atau dipol-dipol biasa." },
  { q: "Di antara CH₃OH, CH₃OCH₃ (dimetil eter), dan CH₄, senyawa dengan titik didih tertinggi adalah ...", options: ["CH₃OH", "CH₃OCH₃", "CH₄", "Ketiganya sama"], answer: 0, solution: "1. CH₃OH dapat membentuk ikatan hidrogen antarmolekul (titik didih 64,7 °C). 2. CH₃OCH₃ hanya memiliki gaya dipol-dipol (−24 °C) dan CH₄ hanya gaya London (−162 °C). 3. Urutan kekuatan gaya antarmolekul: ikatan hidrogen > dipol-dipol > London, sejalan dengan urutan titik didihnya. Kesalahan umum: mengira massa molekul yang menentukan — CH₃OH dan CH₃OCH₃ berisomer (massa sama) tetapi titik didihnya jauh berbeda." },
  { q: "Di antara gas mulia berikut, yang paling mudah dicairkan adalah ...", options: ["He", "Ne", "Ar", "Xe"], answer: 3, solution: "1. Gas mulia hanya memiliki gaya dispersi London sebagai gaya antarmolekul. 2. Xe memiliki awan elektron terbesar dan paling mudah terpolarisasi, sehingga gaya London-nya terkuat dan titik didihnya tertinggi (165 K vs He 4 K). 3. Kesalahan umum: mengira atom yang lebih kecil lebih mudah dicairkan — justru atom besar dengan elektron banyak menghasilkan dipol sesaat yang lebih kuat." },
  { q: "NaCl mudah larut dalam air tetapi sukar larut dalam minyak. Penjelasan yang tepat adalah ...", options: ["Air dan minyak sama-sama polar", "Air bersifat polar sehingga dapat memisahkan ion-ion NaCl (like dissolves like), sedangkan minyak nonpolar", "NaCl bereaksi dengan air", "Minyak terlalu kental"], answer: 1, solution: "1. Prinsip kelarutan: like dissolves like — zat polar larut dalam pelarut polar. 2. Molekul air yang polar mengelilingi dan memisahkan ion Na⁺ dan Cl⁻ dari kisi kristalnya (hidrasi). 3. Minyak bersifat nonpolar sehingga tidak mampu memisahkan ion-ion tersebut. Kesalahan umum: mengira NaCl larut karena bereaksi kimia dengan air — yang terjadi hanya pemisahan ion secara fisik (disosiasi)." },
  { q: "Molekul NH₃ bersifat polar karena ...", options: ["N memiliki 3 PEB", "Ikatan N–H nonpolar", "NH₃ berikatan ion", "Bentuk piramida trigonal yang tidak simetris membuat momen dipol tidak saling meniadakan"], answer: 3, solution: "1. NH₃ berbentuk piramida trigonal (1 PEB pada N) yang tidak simetris. 2. Momen dipol ketiga ikatan N–H tidak saling meniadakan sehingga terdapat momen dipol total. 3. Kesalahan umum: menjawab N memiliki 3 PEB — NH₃ hanya memiliki 1 PEB; atau mengira molekul dengan atom sejenis di sekeliling pusat pasti nonpolar." },
  { q: "NaCl berwujud padat sedangkan HCl berwujud gas pada suhu kamar. Perbedaan ini disebabkan ...", options: ["Massa molekul NaCl lebih kecil", "NaCl disatukan gaya elektrostatik antarion yang sangat kuat, sedangkan antar molekul HCl hanya ada gaya dipol-dipol yang lemah", "HCl berikatan ion", "NaCl mengandung air"], answer: 1, solution: "1. NaCl adalah padatan ionik: kation dan anion terikat gaya elektrostatik kuat dalam kisi kristal (titik leleh 801 °C). 2. HCl adalah molekul kovalen diskrit yang antar molekulnya hanya diikat gaya dipol-dipol lemah (titik didih −85 °C). 3. Kesalahan umum: mengira perbedaan wujud disebabkan massa molekul — yang menentukan adalah jenis dan kekuatan gaya antar partikelnya." },
  { q: "Proses berikut yang merupakan reaksi endoterm adalah ...", options: ["Pembakaran kayu", "Es mencair", "Kondensasi uap air", "Pembakaran bensin"], answer: 1, solution: "1. Es mencair membutuhkan kalor dari lingkungan untuk memutus ikatan hidrogen antar molekul air dalam es. 2. Karena sistem menyerap kalor, ΔH > 0 → endoterm. 3. Pembakaran dan kondensasi justru melepaskan kalor (eksoterm). Kesalahan umum: mengira semua perubahan wujud yang melibatkan air bersifat eksoterm — mencair dan menguap menyerap kalor, sedangkan membeku dan mengembun melepaskan kalor." },
  { q: "Pada sistem terisolasi, yang terjadi adalah ...", options: ["Hanya materi yang tidak dapat bertukar dengan lingkungan", "Hanya energi yang tidak dapat bertukar dengan lingkungan", "Materi maupun energi tidak dapat bertukar dengan lingkungan", "Materi dan energi bebas bertukar dengan lingkungan"], answer: 2, solution: "1. Sistem terisolasi adalah sistem yang dibatasi dinding yang tidak dapat ditembus materi maupun energi. 2. Contoh mendekatinya adalah termos yang ideal. 3. Kesalahan umum: tertukar dengan sistem tertutup (materi tidak bertukar tetapi energi masih bisa) atau sistem terbuka (keduanya bertukar)." },
  { q: "Perubahan entalpi (ΔH) suatu reaksi kimia sama dengan kalor yang diserap atau dilepas pada kondisi ...", options: ["Tekanan tetap", "Volume tetap", "Suhu selalu nol", "Tanpa pereaksi"], answer: 0, solution: "1. Entalpi didefinisikan sebagai H = U + PV, sehingga pada tekanan tetap berlaku ΔH = qp (kalor pada tekanan tetap). 2. Sebagian besar reaksi kimia di laboratorium berlangsung pada tekanan atmosfer yang tetap, sehingga kalor yang diukur adalah ΔH. 3. Kesalahan umum: mengira ΔH sama dengan kalor pada volume tetap — pada volume tetap yang diukur adalah perubahan energi dalam (ΔU), misalnya dengan kalorimeter bom." },
  { q: "Pada diagram tingkat energi reaksi eksoterm, letak tingkat energi produk terhadap reaktan adalah ...", options: ["Lebih tinggi", "Sama tinggi", "Lebih rendah", "Tidak dapat ditentukan"], answer: 2, solution: "1. Reaksi eksoterm melepaskan kalor, artinya entalpi produk lebih kecil daripada entalpi reaktan. 2. Pada diagram tingkat energi, produk digambarkan lebih rendah daripada reaktan dengan selisih ΔH yang negatif. 3. Kesalahan umum: menggambar produk lebih tinggi karena 'melepas energi berarti energinya besar' — justru karena melepas energi, energi yang tersisa pada produk lebih kecil." },
  { q: "Menurut konvensi tanda termokimia, jika sistem melepaskan kalor ke lingkungan maka nilai q adalah ...", options: ["Positif", "Nol", "Tak berhingga", "Negatif"], answer: 3, solution: "1. Konvensi tanda memakai sudut pandang sistem: kalor yang masuk ke sistem bertanda positif, kalor yang keluar dari sistem bertanda negatif. 2. Sistem yang melepaskan kalor berarti kalor keluar dari sistem → q < 0. 3. Kesalahan umum: memberi tanda positif karena 'melepas' terasa seperti 'menghasilkan' — tandanya negatif karena ditinjau dari sistem yang kehilangan energi." },
  { q: "Diketahui: 2H₂(g) + O₂(g) → 2H₂O(l) ΔH = −572 kJ. Kalor yang dilepas pada pembakaran 4 gram H₂ (Ar H = 1) adalah ...", options: ["286 kJ", "1144 kJ", "572 kJ", "143 kJ"], answer: 2, solution: "1. Jumlah mol H₂ = 4/2 = 2 mol, tepat sama dengan koefisien H₂ pada persamaan. 2. Maka kalor yang dilepas = 1 × 572 kJ = 572 kJ (tanda negatif menunjukkan kalor dilepas). 3. Kesalahan umum: membagi 572 dengan 2 karena melihat 4 gram = 2 mol H₂ — padahal persamaan memang tertulis untuk 2 mol H₂." },
  { q: "Reaksi A + B → C memiliki ΔH = −100 kJ. Nilai ΔH untuk reaksi 2A + 2B → 2C adalah ...", options: ["−50 kJ", "+200 kJ", "−100 kJ", "−200 kJ"], answer: 3, solution: "1. ΔH adalah besaran ekstensif: nilainya sebanding dengan jumlah zat yang bereaksi. 2. Mengalikan semua koefisien dengan 2 berarti ΔH juga dikalikan 2: 2 × (−100 kJ) = −200 kJ. 3. Kesalahan umum: mengira ΔH tidak berubah karena 'reaksinya sama' — ΔH mengikuti stoikiometri persamaan yang ditulis." },
  { q: "Diketahui N₂ + 3H₂ → 2NH₃ ΔH = −92 kJ. Nilai ΔH untuk reaksi 2NH₃ → N₂ + 3H₂ adalah ...", options: ["+92 kJ", "−92 kJ", "−184 kJ", "+184 kJ"], answer: 0, solution: "1. Reaksi kedua adalah kebalikan dari reaksi pertama. 2. Membalik persamaan reaksi membalik tanda ΔH: −(−92 kJ) = +92 kJ. 3. Kesalahan umum: hanya membalik persamaan tanpa membalik tanda ΔH, atau ikut mengalikan dengan koefisien yang sebenarnya tidak berubah." },
  { q: "Diketahui ΔH pembakaran CH₄ = −890 kJ/mol. Kalor yang dilepas dari pembakaran 8 gram CH₄ (Mr = 16) adalah ...", options: ["222,5 kJ", "445 kJ", "890 kJ", "1780 kJ"], answer: 1, solution: "1. Jumlah mol CH₄ = 8/16 = 0,5 mol. 2. Kalor yang dilepas = 0,5 × 890 kJ = 445 kJ (tanda negatif pada ΔH menunjukkan kalor dilepas). 3. Kesalahan umum: langsung memakai −890 kJ tanpa mengalikan jumlah mol, atau salah menghitung Mr CH₄." },
  { q: "Diketahui ΔHf° H₂O(l) = −285,8 kJ/mol. Persamaan termokimia yang tepat adalah ...", options: ["2H₂(g) + O₂(g) → 2H₂O(l) ΔH = −285,8 kJ", "H₂O(l) → H₂(g) + ½O₂(g) ΔH = −285,8 kJ", "H₂(g) + O₂(g) → H₂O(l) ΔH = −285,8 kJ", "H₂(g) + ½O₂(g) → H₂O(l) ΔH = −285,8 kJ"], answer: 3, solution: "1. ΔHf° adalah entalpi pembentukan 1 mol senyawa dari unsur-unsurnya dalam bentuk paling stabil. 2. Persamaannya harus menghasilkan tepat 1 mol H₂O(l) dari H₂(g) dan O₂(g) yang setara: H₂ + ½O₂ → H₂O. 3. Kesalahan umum: memakai 2H₂ + O₂ → 2H₂O dengan ΔH tetap −285,8 kJ — persamaan itu membentuk 2 mol sehingga ΔH-nya −571,6 kJ; atau menulis reaksi penguraian (tandanya jadi positif)." },
  { q: "Diketahui S + O₂ → SO₂ ΔH = −297 kJ/mol. Kalor yang dilepas jika 6,4 gram belerang (Ar S = 32) dibakar sempurna adalah ...", options: ["297 kJ", "29,7 kJ", "594 kJ", "59,4 kJ"], answer: 3, solution: "1. Jumlah mol S = 6,4/32 = 0,2 mol. 2. Kalor yang dilepas = 0,2 × 297 kJ = 59,4 kJ. 3. Kesalahan umum: menggeser koma secara keliru (menjawab 594 atau 29,7 kJ) atau lupa mengonversi massa menjadi mol terlebih dahulu." },
  { q: "Diketahui: (1) CH₄ + 2O₂ → CO₂ + 2H₂O ΔH = −890 kJ; (2) C + O₂ → CO₂ ΔH = −394 kJ; (3) H₂ + ½O₂ → H₂O ΔH = −286 kJ. Berdasarkan Hukum Hess, ΔHf° CH₄ adalah ...", options: ["+76 kJ/mol", "−76 kJ/mol", "−890 kJ/mol", "−1756 kJ/mol"], answer: 1, solution: "1. Target: C + 2H₂ → CH₄. Balik reaksi (1): CO₂ + 2H₂O → CH₄ + 2O₂, ΔH = +890 kJ. 2. Kalikan reaksi (3) dengan 2: 2H₂ + O₂ → 2H₂O, ΔH = −572 kJ. 3. Jumlahkan: (reaksi 1 dibalik) + (reaksi 2) + (2 × reaksi 3) menghasilkan C + 2H₂ → CH₄ dengan ΔH = 890 − 394 − 572 = −76 kJ/mol. Kesalahan umum: lupa membalik tanda ΔH saat reaksi dibalik, atau lupa mengalikan ΔH ketika koefisien dikalikan." },
  { q: "Diketahui: (1) 2C + H₂ → C₂H₂ ΔH = +227 kJ; (2) C₂H₂ + 2H₂ → C₂H₆ ΔH = −312 kJ. ΔH reaksi 2C + 3H₂ → C₂H₆ adalah ...", options: ["+539 kJ", "−539 kJ", "−85 kJ", "+85 kJ"], answer: 2, solution: "1. Jumlahkan kedua reaksi: ruas kiri menjadi 2C + H₂ + C₂H₂ + 2H₂ dan ruas kanan menjadi C₂H₂ + C₂H₆. 2. Coret C₂H₂ yang muncul di kedua ruas: diperoleh 2C + 3H₂ → C₂H₆. 3. ΔH = 227 + (−312) = −85 kJ. Kesalahan umum: menjumlahkan nilai mutlaknya (539 kJ) tanpa memperhatikan tanda, atau salah menentukan tanda hasil akhir." },
  { q: "Diketahui ΔH untuk A → B adalah +50 kJ dan untuk B → C adalah −120 kJ. Nilai ΔH untuk A → C adalah ...", options: ["+170 kJ", "−170 kJ", "+70 kJ", "−70 kJ"], answer: 3, solution: "1. Menurut Hukum Hess, ΔH total = jumlah ΔH tahap-tahapnya: A → B → C. 2. ΔH = (+50) + (−120) = −70 kJ. 3. Kesalahan umum: mengurangkan kedua nilai (170 kJ) atau mengabaikan tanda negatif sehingga mendapat +70 kJ." },
  { q: "Diketahui: (1) N₂ + O₂ → 2NO ΔH = +180 kJ; (2) N₂ + 2O₂ → 2NO₂ ΔH = +66 kJ. ΔH untuk reaksi 2NO + O₂ → 2NO₂ adalah ...", options: ["−114 kJ", "+114 kJ", "−246 kJ", "+246 kJ"], answer: 0, solution: "1. Balik reaksi (1): 2NO → N₂ + O₂, ΔH = −180 kJ. 2. Jumlahkan dengan reaksi (2): (2NO → N₂ + O₂) + (N₂ + 2O₂ → 2NO₂) menghasilkan 2NO + O₂ → 2NO₂. 3. ΔH = −180 + 66 = −114 kJ. Kesalahan umum: tidak membalik tanda ΔH reaksi (1) sehingga menghitung 180 + 66 = +246 kJ." },
  { q: "Diketahui ΔHf° (kJ/mol): CH₄ = −75; CO₂ = −394; H₂O(l) = −286. ΔH untuk CH₄ + 2O₂ → CO₂ + 2H₂O adalah ...", options: ["−891 kJ", "+891 kJ", "−966 kJ", "−816 kJ"], answer: 0, solution: "1. Gunakan ΔH = ΣΔHf°(produk) − ΣΔHf°(reaktan). 2. ΔH = [−394 + 2(−286)] − [−75 + 2(0)] = (−394 − 572) + 75 = −891 kJ. 3. Kesalahan umum: lupa mengalikan ΔHf° H₂O dengan koefisien 2, atau membalik urutan pengurangan (reaktan − produk) sehingga tandanya positif." },
  { q: "Diketahui: (1) C(s) → C(g) ΔH = +717 kJ; (2) H₂(g) → 2H(g) ΔH = +436 kJ; (3) C(g) + 4H(g) → CH₄(g) ΔH = −1660 kJ. ΔHf° CH₄(g) adalah ...", options: ["+71 kJ/mol", "−2383 kJ/mol", "−71 kJ/mol", "−1043 kJ/mol"], answer: 2, solution: "1. Target: C(s) + 2H₂(g) → CH₄(g). Kalikan reaksi (2) dengan 2: 2H₂ → 4H, ΔH = +872 kJ. 2. Jumlahkan (1) + (2× reaksi 2) + (3): C(s) + 2H₂ → CH₄. 3. ΔH = 717 + 872 + (−1660) = −71 kJ/mol. Kesalahan umum: lupa mengalikan ΔH reaksi (2) dengan 2, atau salah menjumlahkan bilangan positif dan negatifnya." },
  { q: "Diketahui: (1) Ca + ½O₂ → CaO ΔH = −635 kJ; (2) CaO + CO₂ → CaCO₃ ΔH = −178 kJ; (3) C + O₂ → CO₂ ΔH = −394 kJ. ΔHf° CaCO₃ adalah ...", options: ["−63 kJ/mol", "−1019 kJ/mol", "+1207 kJ/mol", "−1207 kJ/mol"], answer: 3, solution: "1. Target pembentukan: Ca + C + 3/2O₂ → CaCO₃. 2. Jumlahkan ketiga reaksi: CaO dan CO₂ muncul di kedua ruas lalu saling meniadakan, tersisa tepat reaksi target. 3. ΔH = (−635) + (−178) + (−394) = −1207 kJ/mol. Kesalahan umum: hanya menjumlahkan dua reaksi pertama (−813 kJ) karena mengira CO₂ adalah unsur, padahal CO₂ harus dibentuk dari C dan O₂ lewat reaksi (3)." },
  { q: "Diketahui energi ikatan (kJ/mol): H–H = 436; Cl–Cl = 242; H–Cl = 431. ΔH reaksi H₂ + Cl₂ → 2HCl adalah ...", options: ["+184 kJ", "−540 kJ", "−184 kJ", "−1198 kJ"], answer: 2, solution: "1. ΔH = Σ(energi ikatan yang diputus) − Σ(energi ikatan yang dibentuk). 2. Diputus: 1 ikatan H–H + 1 ikatan Cl–Cl = 436 + 242 = 678 kJ. 3. Dibentuk: 2 ikatan H–Cl = 2 × 431 = 862 kJ. 4. ΔH = 678 − 862 = −184 kJ. Kesalahan umum: membalik rumus menjadi (dibentuk − diputus) sehingga tandanya positif, atau lupa mengalikan energi ikatan H–Cl dengan 2." },
  { q: "Diketahui energi ikatan (kJ/mol): C–H = 413; O=O = 495; C=O = 799; O–H = 463. ΔH pembakaran CH₄ (CH₄ + 2O₂ → CO₂ + 2H₂O) adalah ...", options: ["+808 kJ", "−6088 kJ", "−180 kJ", "−808 kJ"], answer: 3, solution: "1. Ikatan diputus: 4 C–H + 2 O=O = 4(413) + 2(495) = 1652 + 990 = 2642 kJ. 2. Ikatan dibentuk: 2 C=O + 4 O–H = 2(799) + 4(463) = 1598 + 1852 = 3450 kJ. 3. ΔH = 2642 − 3450 = −808 kJ. Kesalahan umum: menghitung ikatan O–H hanya 2 (lupa ada 2 molekul H₂O), atau memakai rumus terbalik sehingga bertanda positif." },
  { q: "Dalam perhitungan ΔH menggunakan data energi ikatan, energi untuk MEMUTUS ikatan bertanda ... sedangkan energi yang dilepas saat MEMBENTUK ikatan bertanda ...", options: ["negatif – positif", "positif – negatif", "positif – positif", "negatif – negatif"], answer: 1, solution: "1. Memutus ikatan membutuhkan energi (proses endoterm) sehingga bertanda positif. 2. Membentuk ikatan melepaskan energi (proses eksoterm) sehingga bertanda negatif. 3. Inilah alasan rumus ΔH = Σ(putus) − Σ(bentuk). Kesalahan umum: mengira memutus ikatan melepaskan energi — justru sebaliknya, ikatan yang putus memerlukan pasokan energi." },
  { q: "Diketahui energi ikatan (kJ/mol): N≡N = 941; H–H = 436; N–H = 391. ΔH reaksi N₂ + 3H₂ → 2NH₃ adalah ...", options: ["+97 kJ", "−2249 kJ", "−4595 kJ", "−97 kJ"], answer: 3, solution: "1. Ikatan diputus: 1 N≡N + 3 H–H = 941 + 3(436) = 941 + 1308 = 2249 kJ. 2. Ikatan dibentuk: 6 N–H (2 molekul NH₃ × 3 ikatan) = 6 × 391 = 2346 kJ. 3. ΔH = 2249 − 2346 = −97 kJ. Kesalahan umum: menghitung ikatan N–H yang terbentuk hanya 3 (lupa koefisien 2NH₃), atau tertukar memakai energi ikatan N–N tunggal." },
  { q: "Ke dalam kalorimeter dicampurkan 100 mL larutan HCl dan 100 mL larutan NaOH. Suhu campuran naik dari 25 °C menjadi 31 °C. Jika kalor jenis larutan 4,18 J/g°C dan massa jenisnya 1 g/mL, kalor yang diserap larutan adalah ...", options: ["2,51 kJ", "25,08 kJ", "5,02 kJ", "0,84 kJ"], answer: 2, solution: "1. Massa total larutan = (100 + 100) mL × 1 g/mL = 200 g; ΔT = 31 − 25 = 6 °C. 2. q = m × c × ΔT = 200 × 4,18 × 6 = 5016 J ≈ 5,02 kJ. 3. Kalor reaksi penetralannya sama besar tetapi bertanda negatif (dilepas sistem). Kesalahan umum: hanya memakai 100 mL sebagai massa, atau lupa mengonversi joule ke kilojoule." },
  { q: "Pada kalorimeter bom (volume tetap), besaran yang diukur secara langsung adalah ...", options: ["Perubahan entalpi (ΔH)", "Perubahan energi dalam (ΔU)", "Perubahan entropi (ΔS)", "Perubahan energi bebas Gibbs (ΔG)"], answer: 1, solution: "1. Pada volume tetap tidak ada kerja p–V (w = 0), sehingga kalor yang diukur (qv) sama dengan perubahan energi dalam: qv = ΔU. 2. ΔH baru terukur pada tekanan tetap (kalorimeter sederhana/cangkir kopi). 3. Kesalahan umum: mengira semua kalorimeter mengukur ΔH — jenis kalorimeter menentukan besaran apa yang terukur langsung." },
  { q: "Sebanyak 1 gram sampel dibakar dalam kalorimeter bom yang kapasitas kalornya 8,5 kJ/°C. Suhu kalorimeter naik 2,5 °C. Kalor pembakaran sampel per gram adalah ...", options: ["3,4 kJ/g dilepas", "53,13 kJ/g dilepas", "21,25 kJ/g dilepas", "10,63 kJ/g dilepas"], answer: 2, solution: "1. Kalor yang diserap kalorimeter: q = C × ΔT = 8,5 × 2,5 = 21,25 kJ. 2. Massa sampel 1 gram, maka kalor pembakaran = 21,25 kJ/g (dilepas, bertanda negatif dari sudut pandang reaksi). 3. Kesalahan umum: membagi kapasitas kalor dengan kenaikan suhu (8,5/2,5), atau lupa membagi dengan massa sampel bila massanya bukan 1 gram." },
// ===== KESETIMBANGAN KIMIA: Kc & Kp (6 soal) =====
  { q: "Pada kesetimbangan CaCO₃(s) ⇌ CaO(s) + CO₂(g), ungkapan Kp yang tepat adalah ...", options: ["$K_p = P_{CO_2}$", "$K_p = \\frac{P_{CO_2}}{P_{CaCO_3}}$", "$K_p = \\frac{P_{CaO} \\cdot P_{CO_2}}{P_{CaCO_3}}$", "$K_p = P_{CaO} + P_{CO_2}$"], answer: 0, solution: "1. Pada kesetimbangan heterogen, zat padat murni dan cairan murni tidak dimasukkan ke dalam ungkapan tetapan kesetimbangan. 2. CaCO₃ dan CaO berfase padat, sehingga hanya CO₂ (gas) yang ditulis: Kp = P_CO₂. Kesalahan umum: memasukkan semua spesi termasuk padatan ke dalam ungkapan K." },
  { q: "Dalam wadah 1 L, pada saat setimbang terdapat 0,2 mol A; 0,4 mol B; dan 0,8 mol C untuk reaksi A + B ⇌ 2C. Nilai Kc reaksi tersebut adalah ...", options: ["4", "1", "8", "16"], answer: 2, solution: "1. Konsentrasi = mol/volume: [A] = 0,2 M; [B] = 0,4 M; [C] = 0,8 M. 2. Kc = [C]²/([A][B]) = (0,8)²/(0,2 × 0,4) = 0,64/0,08 = 8. Kesalahan umum: lupa memangkatkan [C] dengan koefisien 2 sehingga menghitung 0,8/0,08 = 10." },
  { q: "Pada kesetimbangan 2NO₂(g) ⇌ N₂O₄(g) diukur tekanan parsial NO₂ = 0,5 atm dan N₂O₄ = 0,25 atm. Nilai Kp adalah ...", options: ["2", "1", "0,5", "0,25"], answer: 1, solution: "1. Kp = P_N₂O₄/(P_NO₂)². 2. Kp = 0,25/(0,5)² = 0,25/0,25 = 1. Kesalahan umum: lupa memangkatkan tekanan parsial NO₂ dengan koefisien 2 sehingga mendapat 0,25/0,5 = 0,5." },
  { q: "Ungkapan Kc yang tepat untuk reaksi 4NH₃(g) + 5O₂(g) ⇌ 4NO(g) + 6H₂O(g) adalah ...", options: ["$K_c = \\frac{[NH_3]^4[O_2]^5}{[NO]^4[H_2O]^6}$", "$K_c = \\frac{[NO][H_2O]}{[NH_3][O_2]}$", "$K_c = [NO]^4[H_2O]^6 - [NH_3]^4[O_2]^5$", "$K_c = \\frac{[NO]^4[H_2O]^6}{[NH_3]^4[O_2]^5}$"], answer: 3, solution: "1. Kc = (konsentrasi produk berpangkat koefisien) dibagi (konsentrasi reaktan berpangkat koefisien). 2. Kc = [NO]⁴[H₂O]⁶/([NH₃]⁴[O₂]⁵). Kesalahan umum: menulis produk dikurangi reaktan (seperti menghitung Δ), atau menukar posisi produk dan reaktan." },
  { q: "Suatu reaksi memiliki Kc = 10¹² pada 25 °C. Hal ini menunjukkan bahwa pada kesetimbangan ...", options: ["reaksi tidak dapat berlangsung", "konsentrasi produk jauh lebih besar daripada reaktan", "konsentrasi reaktan jauh lebih besar daripada produk", "konsentrasi produk sama dengan reaktan"], answer: 2, solution: "1. Nilai K yang sangat besar (K >> 1) berarti pembilang (produk) jauh lebih besar daripada penyebut (reaktan). 2. Jadi reaksi praktis berlangsung sempurna ke arah produk. Kesalahan umum: mengira K besar berarti reaksi berlangsung cepat — K menyatakan posisi kesetimbangan, bukan laju reaksi." },
  { q: "Reaksi A ⇌ B memiliki tetapan kesetimbangan K₁ = 0,5. Tetapan kesetimbangan untuk reaksi sebaliknya, B ⇌ A, adalah ...", options: ["2", "0,5", "0,25", "−0,5"], answer: 0, solution: "1. Membalik arah reaksi berarti membalik ungkapan K: K_balik = 1/K_maju. 2. K₂ = 1/0,5 = 2. Kesalahan umum: memakai nilai K yang sama untuk reaksi bolak-balik, atau mengira K reaksi balik bernilai negatif." },

  // ===== KESETIMBANGAN KIMIA: Asas Le Chatelier (8 soal) =====
  { q: "Pada sistem setimbang CO(g) + H₂O(g) ⇌ CO₂(g) + H₂(g), jika gas CO ditambahkan maka kesetimbangan bergeser ke ...", options: ["kiri, membentuk lebih banyak CO", "tidak bergeser karena jumlah mol gas sama", "tetap karena Kc berubah", "kanan, membentuk lebih banyak CO₂ dan H₂"], answer: 3, solution: "1. Asas Le Chatelier: sistem melawan perubahan dengan mengurangi spesi yang ditambah. 2. Menambah CO (reaktan) menggeser kesetimbangan ke arah produk (kanan). 3. Nilai Kc tidak berubah karena suhu tetap. Kesalahan umum: mengira penambahan reaktan menggeser ke kiri, atau mengira Kc ikut berubah." },
  { q: "Pada kesetimbangan N₂O₄(g) ⇌ 2NO₂(g), jika sebagian gas NO₂ dikeluarkan dari sistem maka ...", options: ["kesetimbangan tidak bergeser", "kesetimbangan bergeser ke kanan membentuk NO₂ kembali", "nilai Kc menjadi lebih kecil", "kesetimbangan bergeser ke kiri membentuk N₂O₄"], answer: 1, solution: "1. Mengeluarkan NO₂ (produk) membuat Qc < Kc. 2. Sistem bereaksi ke kanan untuk membentuk kembali NO₂ hingga Qc = Kc. Kesalahan umum: mengira mengeluarkan produk menggeser ke kiri karena 'kekurangan di kanan harus diisi dari kiri' — justru sistem menghasilkan produk baru dari reaktan." },
  { q: "Pada kesetimbangan H₂(g) + I₂(g) ⇌ 2HI(g), jika tekanan sistem diperbesar maka kesetimbangan ...", options: ["tidak bergeser karena jumlah mol gas kiri dan kanan sama", "bergeser ke kanan", "bergeser ke kiri", "bergeser ke arah mol gas lebih besar"], answer: 0, solution: "1. Jumlah mol gas: kiri = 1 + 1 = 2; kanan = 2. 2. Karena jumlah mol gas sama di kedua ruas, perubahan tekanan tidak menggeser kesetimbangan. Kesalahan umum: menghafal 'tekanan naik selalu menggeser ke kanan' tanpa memeriksa jumlah mol gas." },
  { q: "Pada kesetimbangan 2SO₃(g) ⇌ 2SO₂(g) + O₂(g), jika volume wadah diperbesar (tekanan turun) maka kesetimbangan bergeser ke ...", options: ["kiri karena tekanan turun", "tidak bergeser", "kanan, ke arah jumlah mol gas lebih besar", "kanan, ke arah jumlah mol gas lebih kecil"], answer: 2, solution: "1. Jumlah mol gas: kiri = 2; kanan = 2 + 1 = 3. 2. Memperbesar volume (menurunkan tekanan) menggeser kesetimbangan ke arah mol gas lebih banyak, yaitu ke kanan. Kesalahan umum: tertukar antara memperbesar volume dan memperbesar tekanan — keduanya memberi efek berlawanan." },
  { q: "Reaksi 2CO(g) + O₂(g) ⇌ 2CO₂(g) memiliki ΔH = −566 kJ. Jika suhu sistem diturunkan, kesetimbangan bergeser ke ...", options: ["kiri karena reaksi menjadi lebih lambat", "tidak bergeser karena Kc tetap", "tidak dapat ditentukan", "kanan, membentuk lebih banyak CO₂"], answer: 3, solution: "1. Reaksi ke kanan bersifat eksoterm (ΔH negatif, melepas kalor). 2. Menurunkan suhu = mengurangi kalor; sistem melawan dengan bergeser ke arah yang melepas kalor, yaitu ke kanan. Kesalahan umum: mengira suhu hanya memengaruhi laju reaksi, padahal suhu juga mengubah nilai K dan posisi kesetimbangan." },
  { q: "Pada kesetimbangan N₂O₄(g) ⇌ 2NO₂(g) dengan ΔH = +58 kJ, jika suhu sistem dinaikkan maka ...", options: ["kesetimbangan bergeser ke kiri", "kesetimbangan bergeser ke kanan membentuk lebih banyak NO₂", "nilai Kc tidak berubah", "kesetimbangan tidak bergeser"], answer: 1, solution: "1. Reaksi ke kanan bersifat endoterm (ΔH positif, menyerap kalor). 2. Menaikkan suhu menambah kalor; sistem melawan dengan bergeser ke arah yang menyerap kalor, yaitu ke kanan. Kesalahan umum: mengira menaikkan suhu selalu menggeser ke kiri — arahnya tergantung apakah reaksi maju eksoterm atau endoterm." },
  { q: "Gas helium (inert) ditambahkan ke dalam sistem setimbang H₂(g) + I₂(g) ⇌ 2HI(g) pada volume tetap. Kesetimbangan akan ...", options: ["tidak bergeser karena tekanan parsial tiap gas tidak berubah", "bergeser ke kanan", "bergeser ke kiri", "bergeser ke arah mol gas lebih kecil"], answer: 0, solution: "1. Gas inert tidak bereaksi dan pada volume tetap tidak mengubah tekanan parsial maupun konsentrasi tiap spesi. 2. Karena Qc tidak berubah, posisi kesetimbangan tetap. Kesalahan umum: mengira kenaikan tekanan total akibat gas inert pasti menggeser kesetimbangan — yang berpengaruh adalah tekanan parsial, bukan tekanan total." },
  { q: "Pada kesetimbangan PCl₅(g) ⇌ PCl₃(g) + Cl₂(g), jika tekanan sistem diperkecil maka kesetimbangan bergeser ke ...", options: ["kiri, ke arah mol gas lebih sedikit", "tidak bergeser", "kanan, ke arah mol gas lebih banyak", "kiri, karena volume bertambah"], answer: 2, solution: "1. Jumlah mol gas: kiri = 1; kanan = 2. 2. Memperkecil tekanan menggeser kesetimbangan ke arah jumlah mol gas lebih besar, yaitu ke kanan (PCl₃ dan Cl₂ bertambah). Kesalahan umum: mengira tekanan kecil 'menarik' sistem ke kiri, padahal sistem melawan penurunan tekanan dengan memperbanyak partikel gas." },

  // ===== KESETIMBANGAN KIMIA: Disosiasi & derajat disosiasi (3 soal) =====
  { q: "Sebanyak 2 mol N₂O₄ dimasukkan ke dalam wadah; pada saat setimbang 0,5 mol N₂O₄ terurai menurut N₂O₄(g) ⇌ 2NO₂(g). Derajat disosiasi (α) N₂O₄ adalah ...", options: ["0,5", "0,25", "0,75", "1"], answer: 1, solution: "1. Derajat disosiasi α = (mol terurai)/(mol mula-mula). 2. α = 0,5/2 = 0,25. Kesalahan umum: memakai mol yang tersisa (1,5 mol) sebagai pembilang sehingga mendapat 0,75." },
  { q: "Untuk reaksi PCl₅(g) ⇌ PCl₃(g) + Cl₂(g): mula-mula 2 mol PCl₅ dengan derajat disosiasi 0,5; tekanan total saat setimbang 3 atm. Nilai Kp adalah ...", options: ["9 atm", "0,5 atm", "3 atm", "1 atm"], answer: 3, solution: "1. Mol setimbang: PCl₅ = 2(1 − 0,5) = 1; PCl₃ = 2(0,5) = 1; Cl₂ = 1; total 3 mol. 2. Tekanan parsial tiap gas = (1/3) × 3 atm = 1 atm. 3. Kp = (P_PCl₃ × P_Cl₂)/P_PCl₅ = (1 × 1)/1 = 1 atm. Kesalahan umum: memakai jumlah mol langsung sebagai tekanan parsial tanpa membagi dengan mol total." },
  { q: "Untuk kesetimbangan N₂O₄(g) ⇌ 2NO₂(g), derajat disosiasi N₂O₄ akan bertambah jika ...", options: ["tekanan sistem diperkecil", "tekanan sistem diperbesar", "ditambahkan katalis", "volume wadah diperkecil"], answer: 0, solution: "1. Disosiasi N₂O₄ → 2NO₂ menambah jumlah mol gas (1 → 2). 2. Menurut Le Chatelier, memperkecil tekanan (memperbesar volume) menggeser kesetimbangan ke arah mol gas lebih banyak, sehingga disosiasi bertambah. Kesalahan umum: mengira katalis dapat memperbesar derajat disosiasi — katalis hanya mempercepat tercapainya kesetimbangan." },

  // ===== KESETIMBANGAN KIMIA: Hubungan Kc–Kp (3 soal) =====
  { q: "Untuk reaksi 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), hubungan Kp dan Kc yang tepat adalah ...", options: ["$K_p = K_c(RT)$", "$K_p = K_c(RT)^{-2}$", "$K_p = K_c(RT)^{-1}$", "$K_p = K_c$"], answer: 2, solution: "1. Gunakan $K_p = K_c(RT)^{\\Delta n}$ dengan Δn = (mol gas produk) − (mol gas reaktan). 2. Δn = 2 − 3 = −1, sehingga Kp = Kc(RT)⁻¹. Kesalahan umum: menghitung Δn terbalik (reaktan − produk) sehingga mendapat pangkat +1." },
  { q: "Untuk reaksi C(s) + CO₂(g) ⇌ 2CO(g), hubungan Kp dan Kc yang tepat adalah ...", options: ["$K_p = K_c$", "$K_p = K_c(RT)$", "$K_p = K_c(RT)^2$", "$K_p = K_c(RT)^{-1}$"], answer: 1, solution: "1. Δn hanya menghitung spesi berfase gas: produk = 2 (CO), reaktan = 1 (CO₂); C padat tidak dihitung. 2. Δn = 2 − 1 = +1, sehingga Kp = Kc(RT). Kesalahan umum: ikut menghitung C(s) sebagai 1 mol gas sehingga mendapat Δn = 0." },
  { q: "Untuk reaksi H₂(g) + I₂(g) ⇌ 2HI(g), hubungan Kp dan Kc yang tepat adalah ...", options: ["$K_p = K_c(RT)^2$", "$K_p = K_c(RT)^{-1}$", "$K_p = K_c(RT)$", "$K_p = K_c$"], answer: 3, solution: "1. Δn = (mol gas produk) − (mol gas reaktan) = 2 − 2 = 0. 2. Kp = Kc(RT)⁰ = Kc. Kesalahan umum: mengira Kp dan Kc selalu berbeda nilainya, padahal sama jika jumlah mol gas di kedua ruas sama." },

  // ===== ASAM-BASA: Teori asam-basa (4 soal) =====
  { q: "Menurut teori asam-basa Arrhenius, asam didefinisikan sebagai zat yang dalam air ...", options: ["menghasilkan ion H⁺", "menghasilkan ion OH⁻", "menerima proton", "menerima pasangan elektron"], answer: 0, solution: "1. Arrhenius: asam = zat yang dalam air melepaskan ion H⁺; basa = zat yang dalam air melepaskan ion OH⁻. 2. Contoh: HCl → H⁺ + Cl⁻. Kesalahan umum: tertukar dengan definisi basa Arrhenius (penghasil OH⁻) atau definisi donor proton Brønsted-Lowry." },
  { q: "Pasangan asam-basa konjugasi yang tepat adalah ...", options: ["HCl dan NaCl", "H₂O dan H₂O₂", "NH₄⁺ dan NH₃", "CH₄ dan CH₃⁺"], answer: 2, solution: "1. Pasangan konjugasi adalah dua spesi yang berbeda tepat satu proton (H⁺): NH₄⁺ ⇌ NH₃ + H⁺. 2. NH₄⁺ adalah asam konjugasi dari basa NH₃. Kesalahan umum: memasangkan zat yang selisihnya bukan satu proton, misalnya HCl dengan NaCl." },
  { q: "Menurut teori asam-basa Lewis, BF₃ dapat bertindak sebagai asam karena ...", options: ["melepaskan ion H⁺ dalam air", "dapat menerima pasangan elektron pada orbital kosong atom B", "menghasilkan ion OH⁻ dalam air", "dapat mendonorkan proton"], answer: 1, solution: "1. Lewis: asam = akseptor (penerima) pasangan elektron; basa = donor pasangan elektron. 2. Atom B pada BF₃ memiliki orbital kosong sehingga dapat menerima pasangan elektron, misalnya dari NH₃. Kesalahan umum: mengira definisi Lewis sama dengan Arrhenius sehingga mencari H⁺ atau OH⁻." },
  { q: "Dalam reaksi NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, spesi yang bertindak sebagai asam menurut teori Brønsted-Lowry adalah ...", options: ["NH₃", "NH₄⁺", "OH⁻", "H₂O"], answer: 3, solution: "1. Brønsted-Lowry: asam = donor (pendonor) proton H⁺. 2. Pada reaksi tersebut H₂O mendonorkan protonnya menjadi OH⁻, sedangkan NH₃ menerima proton menjadi NH₄⁺ (bertindak sebagai basa). Kesalahan umum: mengira H₂O selalu netral dan tidak bisa menjadi asam — dalam reaksi ini H₂O justru donor proton." },

  // ===== ASAM-BASA: pH asam kuat & basa kuat (6 soal) =====
  { q: "pH larutan HNO₃ 0,001 M adalah ...", options: ["3", "11", "1", "6"], answer: 0, solution: "1. HNO₃ adalah asam kuat bervalensi 1 yang terionisasi sempurna: [H⁺] = 0,001 M = $10^{-3}$ M. 2. $\\text{pH} = -\\log[H^+] = -\\log(10^{-3}) = 3$. Kesalahan umum: menjawab pH = 0,001, padahal pH adalah negatif logaritma konsentrasi, bukan nilai konsentrasinya." },
  { q: "pH larutan Ba(OH)₂ 0,005 M adalah ...", options: ["11", "2", "12", "13"], answer: 2, solution: "1. Ba(OH)₂ adalah basa kuat bervalensi 2: [OH⁻] = 2 × 0,005 = 0,01 M = $10^{-2}$ M. 2. pOH = 2, maka pH = 14 − 2 = 12. Kesalahan umum: lupa mengalikan dengan valensi basa (2) sehingga menghitung [OH⁻] = 0,005 dan mendapat pH ≈ 11,7." },
  { q: "Suatu larutan memiliki pH = 5. Konsentrasi ion H⁺ dalam larutan tersebut adalah ...", options: ["5 M", "$10^{-5}$ M", "0,5 M", "$10^5$ M"], answer: 1, solution: "1. Definisi pH: $\\text{pH} = -\\log[H^+]$, sehingga $[H^+] = 10^{-\\text{pH}}$. 2. [H⁺] = $10^{-5}$ M = 0,00001 M. Kesalahan umum: menjawab [H⁺] = 5 M atau 1/5 M karena mengira pH berbanding lurus dengan konsentrasi." },
  { q: "pH larutan KOH 0,01 M adalah ...", options: ["2", "10", "7", "12"], answer: 3, solution: "1. KOH basa kuat bervalensi 1: [OH⁻] = 0,01 M = $10^{-2}$ M. 2. pOH = 2, maka pH = 14 − 2 = 12. Kesalahan umum: berhenti di pOH = 2 lalu menjawab pH = 2 — untuk larutan basa harus dikonversi dengan pH + pOH = 14." },
  { q: "pH larutan Ca(OH)₂ 0,05 M adalah ...", options: ["13", "1,3", "12", "11"], answer: 0, solution: "1. Ca(OH)₂ basa kuat bervalensi 2: [OH⁻] = 2 × 0,05 = 0,1 M = $10^{-1}$ M. 2. pOH = 1, maka pH = 14 − 1 = 13. Kesalahan umum: lupa mengalikan konsentrasi dengan 2 (jumlah ion OH⁻ per molekul) sehingga mendapat pH ≈ 12,7." },
  { q: "pH larutan yang memiliki [OH⁻] = $10^{-5}$ M adalah ...", options: ["5", "14", "9", "19"], answer: 2, solution: "1. pOH = −log[OH⁻] = −log($10^{-5}$) = 5. 2. pH = 14 − pOH = 14 − 5 = 9. Kesalahan umum: langsung menjawab pH = 5 karena tertukar antara pH dan pOH." },

  // ===== ASAM-BASA: pH asam lemah & basa lemah (4 soal) =====
  { q: "pH larutan NH₃ 0,1 M dengan Kb = $10^{-5}$ adalah ...", options: ["3", "11", "5", "9"], answer: 1, solution: "1. NH₃ adalah basa lemah: $[OH^-] = \\sqrt{K_b \\times M} = \\sqrt{10^{-5} \\times 0,1} = \\sqrt{10^{-6}} = 10^{-3}$ M. 2. pOH = 3, maka pH = 14 − 3 = 11. Kesalahan umum: menganggap basa lemah terionisasi sempurna seperti NaOH sehingga menghitung [OH⁻] = 0,1 dan mendapat pH = 13." },
  { q: "pH larutan asam lemah HA 0,1 M dengan Ka = $10^{-9}$ adalah ...", options: ["1", "9", "4", "5"], answer: 3, solution: "1. Asam lemah terionisasi sebagian: $[H^+] = \\sqrt{K_a \\times M} = \\sqrt{10^{-9} \\times 0,1} = \\sqrt{10^{-10}} = 10^{-5}$ M. 2. pH = −log($10^{-5}$) = 5. Kesalahan umum: memakai rumus asam kuat [H⁺] = M sehingga menjawab pH = 1." },
  { q: "Suatu larutan asam lemah 0,01 M memiliki pH = 4. Nilai Ka asam tersebut adalah ...", options: ["$10^{-6}$", "$10^{-4}$", "$10^{-8}$", "$10^{-2}$"], answer: 0, solution: "1. pH = 4 berarti [H⁺] = $10^{-4}$ M. 2. Untuk asam lemah $K_a = [H^+]^2/M = (10^{-4})^2/0,01 = 10^{-8}/10^{-2} = 10^{-6}$. Kesalahan umum: memakai [H⁺] = M (asam kuat) atau lupa menguadratkan [H⁺] dalam rumus Ka." },
  { q: "pH larutan piridina (C₅H₅N) 0,1 M dengan Kb = $10^{-9}$ adalah ...", options: ["5", "1", "9", "13"], answer: 2, solution: "1. Basa lemah: $[OH^-] = \\sqrt{K_b \\times M} = \\sqrt{10^{-9} \\times 0,1} = \\sqrt{10^{-10}} = 10^{-5}$ M. 2. pOH = 5, maka pH = 14 − 5 = 9. Kesalahan umum: menjawab pH = 5 karena tertukar antara pOH hasil hitungan dan pH." },

  // ===== ASAM-BASA: Hidrolisis garam & larutan penyangga (6 soal) =====
  { q: "Larutan CH₃COONa dalam air bersifat basa karena ...", options: ["ion Na⁺ terhidrolisis menghasilkan H⁺", "ion CH₃COO⁻ (basa konjugasi asam lemah) terhidrolisis menghasilkan OH⁻", "CH₃COONa berasal dari asam kuat", "ion Na⁺ dan CH₃COO⁻ keduanya terhidrolisis"], answer: 1, solution: "1. CH₃COO⁻ adalah basa konjugasi dari asam lemah CH₃COOH, sehingga terhidrolisis: CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻. 2. Dihasilkannya ion OH⁻ membuat larutan bersifat basa. Kesalahan umum: mengira kation Na⁺ yang terhidrolisis — Na⁺ berasal dari basa kuat NaOH sehingga tidak terhidrolisis." },
  { q: "Garam berikut yang jika dilarutkan dalam air bersifat asam adalah ...", options: ["NH₄Cl", "CH₃COONa", "NaCl", "KNO₃"], answer: 0, solution: "1. NH₄⁺ adalah asam konjugasi dari basa lemah NH₃, sehingga terhidrolisis: NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺. 2. Dihasilkannya ion H₃O⁺ membuat larutan bersifat asam; Cl⁻ dari asam kuat tidak terhidrolisis. Kesalahan umum: mengira semua garam bersifat netral." },
  { q: "Larutan NaCl dalam air bersifat netral karena ...", options: ["NaCl tidak larut dalam air", "Na⁺ dan Cl⁻ keduanya tidak terhidrolisis (berasal dari basa kuat dan asam kuat)", "NaCl adalah garam dari asam lemah", "pH NaCl selalu 7 pada konsentrasi berapapun karena tidak bereaksi"], answer: 3, solution: "1. Na⁺ berasal dari basa kuat NaOH dan Cl⁻ berasal dari asam kuat HCl. 2. Ion-ion dari asam/basa kuat tidak terhidrolisis dalam air, sehingga [H⁺] = [OH⁻] dan larutan netral. Kesalahan umum: mengira semua garam mengalami hidrolisis." },
  { q: "pH larutan CH₃COONa 0,1 M (Ka CH₃COOH = $10^{-5}$) adalah ...", options: ["5", "7", "9", "11"], answer: 2, solution: "1. Garam dari asam lemah + basa kuat → hidrolisis anion menghasilkan OH⁻: $[OH^-] = \\sqrt{(K_w/K_a) \\times M}$. 2. $[OH^-] = \\sqrt{(10^{-14}/10^{-5}) \\times 0,1} = \\sqrt{10^{-10}} = 10^{-5}$ M. 3. pOH = 5, maka pH = 9. Kesalahan umum: memakai rumus asam lemah [H⁺] = √(Ka × M) untuk garam sehingga mendapat pH = 3." },
  { q: "pH larutan NH₄Cl 0,1 M (Kb NH₃ = $10^{-5}$) adalah ...", options: ["9", "5", "7", "3"], answer: 1, solution: "1. Garam dari basa lemah + asam kuat → hidrolisis kation menghasilkan H⁺: $[H^+] = \\sqrt{(K_w/K_b) \\times M}$. 2. $[H^+] = \\sqrt{(10^{-14}/10^{-5}) \\times 0,1} = \\sqrt{10^{-10}} = 10^{-5}$ M. 3. pH = 5. Kesalahan umum: tertukar memakai Ka asam konjugasi sebagai pengganti Kw/Kb, atau menjawab basa (pH > 7) karena melihat NH₃ sebagai basa." },
  { q: "Campuran 0,1 M NH₃ dan 0,1 M NH₄Cl merupakan larutan penyangga dengan pH sebesar ... (Kb NH₃ = $10^{-5}$)", options: ["9", "5", "7", "11"], answer: 0, solution: "1. Penyangga basa: $[OH^-] = K_b \\times \\frac{[basa]}{[asam\\ konjugasi]} = 10^{-5} \\times \\frac{0,1}{0,1} = 10^{-5}$ M. 2. pOH = 5, maka pH = 14 − 5 = 9. Kesalahan umum: memakai rumus penyangga asam [H⁺] = Ka × (asam/garam) untuk sistem penyangga basa." },
{
    q: "Bilangan oksidasi atom Mn dalam KMnO₄ adalah ...",
    options: [
      "+4",
      "+5",
      "−7",
      "+7"
    ],
    answer: 3,
    solution: "1. Aturan biloks: K = +1, O = −2, total senyawa netral = 0. 2. (+1) + biloks Mn + 4(−2) = 0 → biloks Mn = +7. 3. Kesalahan umum: mengira biloks unsur golongan VIIA selalu +7 tanpa menghitung, atau lupa mengalikan biloks O dengan jumlah atomnya (4)."
  },
  {
    q: "Bilangan oksidasi atom C dalam CO₂ adalah ...",
    options: [
      "+4",
      "−4",
      "+2",
      "0"
    ],
    answer: 0,
    solution: "1. Biloks O = −2 dan total molekul netral = 0. 2. biloks C + 2(−2) = 0 → biloks C = +4. 3. Kesalahan umum: mengira biloks C selalu tetap (+4 atau −4) tanpa melihat pasangannya — biloks C bervariasi tergantung senyawanya."
  },
  {
    q: "Bilangan oksidasi atom N dalam NH₃ adalah ...",
    options: [
      "−3",
      "+3",
      "0",
      "+5"
    ],
    answer: 0,
    solution: "1. Biloks H = +1 dan total molekul netral = 0. 2. biloks N + 3(+1) = 0 → biloks N = −3. 3. Kesalahan umum: mengira biloks N selalu positif karena N segolongan VA, padahal pada NH₃ atom N lebih elektronegatif daripada H."
  },
  {
    q: "Bilangan oksidasi atom Fe dalam Fe₂O₃ adalah ...",
    options: [
      "+6",
      "+3",
      "0",
      "+2"
    ],
    answer: 1,
    solution: "1. Biloks O = −2 dan total senyawa netral = 0. 2. 2(biloks Fe) + 3(−2) = 0 → 2(biloks Fe) = +6 → biloks Fe = +3. 3. Kesalahan umum: lupa mengalikan biloks dengan jumlah atomnya (2 atom Fe), atau mengira Fe selalu berbiloks +2."
  },
  {
    q: "Bilangan oksidasi atom Cl dalam HClO₃ adalah ...",
    options: [
      "+5",
      "+3",
      "−1",
      "+1"
    ],
    answer: 0,
    solution: "1. Biloks H = +1, O = −2, total senyawa netral = 0. 2. (+1) + biloks Cl + 3(−2) = 0 → biloks Cl = +5. 3. Kesalahan umum: mengira biloks Cl selalu −1 seperti pada NaCl, padahal pada oksiasam Cl dapat berbiloks positif."
  },
  {
    q: "Bilangan oksidasi atom O dalam H₂O₂ adalah ...",
    options: [
      "0",
      "−1",
      "+1",
      "−2"
    ],
    answer: 1,
    solution: "1. Biloks H = +1 dan total molekul netral = 0. 2. 2(+1) + 2(biloks O) = 0 → biloks O = −1. 3. Kesalahan umum: menghafal biloks O selalu −2; pada peroksida (H₂O₂, Na₂O₂) biloks O = −1 karena adanya ikatan O−O."
  },
  {
    q: "Pada reaksi CuO + H₂ → Cu + H₂O, hasil reduksinya adalah ...",
    options: [
      "H₂",
      "H₂O",
      "CuO",
      "Cu"
    ],
    answer: 3,
    solution: "1. Biloks Cu: +2 (dalam CuO) → 0 (dalam Cu), turun = mengalami reduksi. 2. Biloks H: 0 → +1, naik = mengalami oksidasi. 3. Hasil reduksi = zat yang mengalami reduksi = Cu. 4. Kesalahan umum: menunjuk CuO sebagai hasil reduksi — CuO adalah oksidatornya, sedangkan H₂O adalah hasil oksidasi."
  },
  {
    q: "Pada reaksi Mg + 2H⁺ → Mg²⁺ + H₂, zat yang bertindak sebagai oksidator adalah ...",
    options: [
      "H⁺",
      "Mg²⁺",
      "H₂",
      "Mg"
    ],
    answer: 0,
    solution: "1. Biloks Mg: 0 → +2 (naik = oksidasi), jadi Mg adalah reduktor. 2. Biloks H: +1 → 0 (turun = reduksi). 3. Zat yang mengalami reduksi disebut oksidator, yaitu H⁺ (dari HCl). 4. Kesalahan umum: mengira oksidator adalah zat yang mengalami oksidasi karena namanya mirip — justru sebaliknya."
  },
  {
    q: "Setengah reaksi berikut yang menunjukkan peristiwa oksidasi adalah ...",
    options: [
      "Zn → Zn²⁺ + 2e⁻",
      "Cu²⁺ + 2e⁻ → Cu",
      "2H⁺ + 2e⁻ → H₂",
      "Cl₂ + 2e⁻ → 2Cl⁻"
    ],
    answer: 0,
    solution: "1. Oksidasi = melepas elektron sehingga biloks naik. 2. Zn → Zn²⁺ + 2e⁻: Zn melepas 2 elektron, biloks 0 → +2. 3. Tiga pilihan lain semuanya menangkap elektron (biloks turun) = reduksi. 4. Kesalahan umum: mengira semua setengah reaksi yang melibatkan elektron adalah oksidasi tanpa memperhatikan arah elektronnya."
  },
  {
    q: "Pada reaksi Fe₂O₃ + 3CO → 2Fe + 3CO₂, zat yang mengalami kenaikan bilangan oksidasi adalah ...",
    options: [
      "CO",
      "Fe",
      "CO₂",
      "Fe₂O₃"
    ],
    answer: 0,
    solution: "1. Biloks Fe: +3 → 0 (turun = reduksi); biloks C: +2 (dalam CO) → +4 (dalam CO₂) (naik = oksidasi). 2. Zat yang mengalami kenaikan biloks = CO. 3. Kesalahan umum: menunjuk Fe karena 'besi yang berubah', padahal Fe justru mengalami reduksi di sini."
  },
  {
    q: "Diketahui reaksi: Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂. Oksidator dalam reaksi tersebut adalah ...",
    options: [
      "Br₂",
      "Br⁻",
      "Cl⁻",
      "Cl₂"
    ],
    answer: 3,
    solution: "1. Biloks Cl: 0 → −1 (turun = reduksi); biloks Br: −1 → 0 (naik = oksidasi). 2. Oksidator = zat yang mengalami reduksi = Cl₂. 3. Kesalahan umum: mengira Br⁻ oksidator karena 'menghasilkan Br₂', padahal Br⁻ justru teroksidasi sehingga ia adalah reduktor."
  },
  {
    q: "Pada sel volta (sel galvani), katoda merupakan ...",
    options: [
      "tempat oksidasi yang bermuatan positif",
      "tempat oksidasi yang bermuatan negatif",
      "tempat reduksi yang bermuatan negatif",
      "tempat reduksi yang bermuatan positif"
    ],
    answer: 3,
    solution: "1. KaRed: katode = tempat reduksi. 2. Elektron mengalir dari anoda menuju katode melalui kawat luar, sehingga anoda bermuatan negatif dan katode bermuatan positif. 3. Kesalahan umum: menghafal 'katode selalu negatif' — itu berlaku pada sel elektrolisis, pada sel volta justru sebaliknya."
  },
  {
    q: "Notasi sel yang benar untuk reaksi Zn + Cu²⁺ → Zn²⁺ + Cu adalah ...",
    options: [
      "Zn|Zn²⁺||Cu²⁺|Cu",
      "Cu|Cu²⁺||Zn²⁺|Zn",
      "Zn²⁺|Zn||Cu|Cu²⁺",
      "Cu²⁺|Cu||Zn²⁺|Zn"
    ],
    answer: 0,
    solution: "1. Aturan notasi sel: anoda (oksidasi) di kiri, katode (reduksi) di kanan, dipisahkan jembatan garam (||). 2. Anoda = Zn (E° lebih kecil), katode = Cu²⁺ (E° lebih besar). 3. Notasi: Zn|Zn²⁺||Cu²⁺|Cu. 4. Kesalahan umum: menukar kiri-kanan (meletakkan katode di kiri) atau menulis ion sebelum logamnya pada sisi anoda."
  },
  {
    q: "Pada sel volta Zn–Cu, elektron mengalir ...",
    options: [
      "dari elektroda Zn ke elektroda Cu melalui kawat luar",
      "dari larutan Zn²⁺ ke larutan Cu²⁺ melalui jembatan garam",
      "dari elektroda Cu ke elektroda Zn melalui jembatan garam",
      "dari elektroda Cu ke elektroda Zn melalui kawat luar"
    ],
    answer: 0,
    solution: "1. Oksidasi terjadi di anoda Zn menghasilkan elektron: Zn → Zn²⁺ + 2e⁻. 2. Elektron mengalir melalui kawat luar menuju katode Cu untuk mereduksi Cu²⁺ menjadi Cu. 3. Jadi aliran elektron: dari elektroda Zn ke elektroda Cu melalui kawat luar. 4. Kesalahan umum: mengira elektron mengalir lewat jembatan garam — jembatan garam hanya dilewati ion untuk menjaga kenetralan muatan."
  },
  {
    q: "Diketahui E°(Ag⁺/Ag) = +0,80 V dan E°(Mg²⁺/Mg) = −2,37 V. Potensial sel volta Mg|Mg²⁺||Ag⁺|Ag adalah ...",
    options: [
      "−1,57 V",
      "1,57 V",
      "−3,17 V",
      "3,17 V"
    ],
    answer: 3,
    solution: "1. Katode = potensial reduksi lebih besar: Ag⁺/Ag (+0,80 V); anoda = Mg²⁺/Mg (−2,37 V). 2. E°sel = E°katode − E°anoda = 0,80 − (−2,37) = 3,17 V. 3. Nilai positif berarti reaksi berlangsung spontan. 4. Kesalahan umum: menjumlahkan langsung 0,80 + (−2,37) = −1,57 V karena lupa rumusnya adalah pengurangan."
  },
  {
    q: "Diketahui E°(Fe²⁺/Fe) = −0,44 V dan E°(Pb²⁺/Pb) = −0,13 V. Reaksi yang berlangsung spontan adalah ...",
    options: [
      "Fe + Pb²⁺ → Fe²⁺ + Pb",
      "Fe²⁺ + Pb²⁺ → Fe + Pb",
      "Fe + Pb → FePb",
      "Pb + Fe²⁺ → Pb²⁺ + Fe"
    ],
    answer: 0,
    solution: "1. Katode = E° lebih besar: Pb²⁺/Pb (−0,13 V); anoda = Fe²⁺/Fe (−0,44 V). 2. E°sel = −0,13 − (−0,44) = +0,31 V > 0 → spontan. 3. Reaksi: Fe + Pb²⁺ → Fe²⁺ + Pb (Fe teroksidasi, Pb²⁺ tereduksi). 4. Kesalahan umum: memilih reaksi sebaliknya (Pb + Fe²⁺) — reaksi itu justru tidak spontan karena E°sel-nya negatif."
  },
  {
    q: "Pada elektrolisis larutan CuSO₄ dengan elektroda inert, reaksi yang terjadi di katoda adalah ...",
    options: [
      "SO₄²⁻ + 2e⁻ → SO₃²⁻ + O²⁻",
      "2H₂O → O₂ + 4H⁺ + 4e⁻",
      "Cu → Cu²⁺ + 2e⁻",
      "Cu²⁺ + 2e⁻ → Cu"
    ],
    answer: 3,
    solution: "1. Di katode terjadi reduksi; spesi yang paling mudah direduksi yang menang: Cu²⁺ vs H₂O. 2. E° Cu²⁺/Cu (+0,34 V) lebih besar daripada E° reduksi air, sehingga Cu²⁺ + 2e⁻ → Cu (mengendap sebagai logam tembaga). 3. Kesalahan umum: menulis reaksi anoda (2H₂O → O₂ + ...) sebagai jawaban — reaksi itu terjadi di anoda, bukan katode."
  },
  {
    q: "Arus listrik 2 A dialirkan selama 965 detik melalui larutan AgNO₃. Massa Ag yang mengendap di katoda adalah ... (Ar Ag = 108, F = 96500 C/mol)",
    options: [
      "108 g",
      "1,08 g",
      "4,32 g",
      "2,16 g"
    ],
    answer: 3,
    solution: "1. Muatan Q = I × t = 2 × 965 = 1930 C. 2. Mol elektron = Q/F = 1930/96500 = 0,02 mol. 3. Reaksi Ag⁺ + e⁻ → Ag (1 elektron per atom), jadi mol Ag = 0,02 mol; massa = 0,02 × 108 = 2,16 g. 4. Kesalahan umum: mengira Ag⁺ butuh 2 elektron seperti Cu²⁺, atau tidak mengubah coulomb menjadi mol elektron."
  },
  {
    q: "Untuk mengendapkan 3,175 gram Cu dari larutan CuSO₄ diperlukan muatan listrik sebesar ... (Ar Cu = 63,5, F = 96500 C/mol)",
    options: [
      "9650 C",
      "19300 C",
      "96500 C",
      "4825 C"
    ],
    answer: 0,
    solution: "1. Mol Cu = 3,175/63,5 = 0,05 mol. 2. Reaksi Cu²⁺ + 2e⁻ → Cu: tiap mol Cu butuh 2 mol elektron → 0,10 mol e⁻. 3. Q = 0,10 × 96500 = 9650 C. 4. Kesalahan umum: memakai 1 elektron per Cu (dapat 4825 C) — jumlah elektron ditentukan oleh valensi ion Cu²⁺."
  },
  {
    q: "Dua sel elektrolisis disusun seri dan dialiri arus yang sama. Perbandingan massa Ag (Ar = 108) dan Cu (Ar = 63,5) yang mengendap adalah ...",
    options: [
      "63,5 : 108",
      "1 : 3,40",
      "108 : 63,5",
      "3,40 : 1"
    ],
    answer: 3,
    solution: "1. Menurut Hukum Faraday II, massa yang mengendap sebanding dengan massa ekuivalen = Ar/valensi. 2. Ag: 108/1 = 108; Cu: 63,5/2 = 31,75. 3. Perbandingan Ag : Cu = 108 : 31,75 = 3,40 : 1. 4. Kesalahan umum: membandingkan langsung Ar (108 : 63,5) tanpa membagi dengan valensi ionnya."
  },
  {
    q: "Atom karbon dapat membentuk rantai yang sangat panjang karena ...",
    options: [
      "memiliki jari-jari atom paling besar",
      "dapat membentuk empat ikatan kovalen dengan atom karbon lain",
      "selalu membentuk ion positif",
      "hanya dapat membentuk ikatan tunggal"
    ],
    answer: 1,
    solution: "1. Atom C memiliki 4 elektron valensi sehingga dapat membentuk 4 ikatan kovalen (tetravalen). 2. Ikatan C−C sangat stabil sehingga C dapat berantai panjang, bercabang, atau membentuk cincin — inilah dasar keragaman senyawa organik. 3. Kesalahan umum: mengira kekhasan C karena ukurannya besar atau karena bermuatan — justru karena sifat tetravalen dan kestabilan ikatan C−C."
  },
  {
    q: "Hibridisasi atom C pada ikatan rangkap dua (C=C) adalah ...",
    options: [
      "sp³",
      "sp",
      "sp²",
      "sp³d"
    ],
    answer: 2,
    solution: "1. Ikatan rangkap dua C=C terdiri dari satu ikatan sigma dan satu ikatan pi. 2. Atom C memakai 3 orbital hibrida untuk berikatan sigma ke 3 arah (geometri segitiga datar) → hibridisasi sp². 3. Kesalahan umum: mengira semua atom C berhibridisasi sp³; sp³ hanya untuk C yang seluruhnya berikatan tunggal (tetrahedral)."
  },
  {
    q: "Ikatan rangkap tiga C≡C terdiri atas ...",
    options: [
      "satu ikatan sigma dan satu ikatan pi",
      "tiga ikatan sigma",
      "satu ikatan sigma dan dua ikatan pi",
      "tiga ikatan pi"
    ],
    answer: 2,
    solution: "1. Ikatan rangkap tiga tersusun dari 1 ikatan sigma (tumpang tindih ujung orbital) + 2 ikatan pi (tumpang tindih samping orbital p). 2. Ikatan sigma selalu hanya satu dalam setiap ikatan rangkap. 3. Kesalahan umum: mengira rangkap tiga = tiga ikatan sigma, atau mengira ikatan pi lebih kuat daripada ikatan sigma."
  },
  {
    q: "Nama IUPAC dari senyawa CH₃–CH(CH₃)–CH₂–CH₃ adalah ...",
    options: [
      "3-metilbutana",
      "2-metilbutana",
      "2-etilpropana",
      "n-pentana"
    ],
    answer: 1,
    solution: "1. Rantai utama terpanjang = 4 atom C (butana): CH₃–CH–CH₂–CH₃. 2. Cabang metil (–CH₃) terletak pada atom C nomor 2 (penomoran dari ujung terdekat cabang). 3. Nama: 2-metilbutana. 4. Kesalahan umum: menomori dari ujung yang salah sehingga menjadi 3-metilbutana, atau salah memilih rantai utama."
  },
  {
    q: "Nama IUPAC senyawa CH₂=CH–CH₂–CH₃ adalah ...",
    options: [
      "2-butena",
      "1-butana",
      "1-butena",
      "butena-3"
    ],
    answer: 2,
    solution: "1. Rantai 4 atom C dengan ikatan rangkap dua dimulai dari atom C nomor 1. 2. Akhiran -ena untuk alkena; posisi ikatan rangkap ditandai angka terendah → 1-butena. 3. Kesalahan umum: menamai butena-3 (penomoran harus dari ujung terdekat ikatan rangkap) atau memakai akhiran -ana."
  },
  {
    q: "Rumus struktur dari 2,2-dimetilpropana adalah ...",
    options: [
      "CH₃–CH₂–CH(CH₃)–CH₃",
      "CH₃–C(CH₃)₂–CH₃",
      "CH₃–CH(CH₃)–CH₂–CH₃",
      "(CH₃)₂CH–CH₂–CH₃"
    ],
    answer: 1,
    solution: "1. Rantai utama propana (3 atom C); dua cabang metil pada atom C nomor 2. 2. Atom C ke-2 mengikat dua gugus –CH₃, strukturnya CH₃–C(CH₃)₂–CH₃. 3. Kesalahan umum: menulis rantai lurus pentana — jumlah atom C-nya memang 5, tetapi rantai utamanya hanya 3."
  },
  {
    q: "Rumus umum senyawa alkuna adalah ...",
    options: [
      "CₙH₂ₙ",
      "CₙH₂ₙ₊₂",
      "CₙH₂ₙ₋₂",
      "CₙH₂ₙ₋₄"
    ],
    answer: 2,
    solution: "1. Alkuna = hidrokarbon tak jenuh dengan satu ikatan rangkap tiga. 2. Setiap ikatan rangkap tiga mengurangi 4 atom H dibanding alkana (CₙH₂ₙ₊₂ − H₄). 3. Rumus umum: CₙH₂ₙ₋₂ (contoh: etuna C₂H₂). 4. Kesalahan umum: memakai rumus alkena CₙH₂ₙ untuk alkuna."
  },
  {
    q: "Senyawa CH₃–C≡C–CH₃ bernama ...",
    options: [
      "1-butuna",
      "2-butena",
      "2-butuna",
      "butadiuna"
    ],
    answer: 2,
    solution: "1. Rantai 4 atom C dengan ikatan rangkap tiga antara atom C-2 dan C-3. 2. Akhiran -una untuk alkuna → 2-butuna. 3. Kesalahan umum: menamai 1-butuna — penomoran diambil dari ujung yang memberi angka terendah pada ikatan rangkap."
  },
  {
    q: "Di antara isomer C₅H₁₂ berikut, yang memiliki titik didih tertinggi adalah ...",
    options: [
      "neopentana (2,2-dimetilpropana)",
      "n-pentana",
      "isopentana (2-metilbutana)",
      "ketiganya sama"
    ],
    answer: 1,
    solution: "1. Ketiganya berumus molekul sama (C₅H₁₂); titik didih ditentukan gaya London yang bergantung pada luas permukaan molekul. 2. n-pentana (rantai lurus) memiliki permukaan kontak antarmolekul terbesar → gaya London terkuat → titik didih tertinggi; makin bercabang makin rendah. 3. Kesalahan umum: mengira isomer selalu bertitik didih sama karena rumus molekulnya sama."
  },
  {
    q: "Gugus fungsi yang dimiliki senyawa eter adalah ...",
    options: [
      "R–OH",
      "R–O–R′",
      "R–CO–R′",
      "R–OOH"
    ],
    answer: 1,
    solution: "1. Eter = R–O–R′ (atom O diapit dua gugus alkil). 2. R–OH = alkohol, R–CO–R′ = keton. 3. Kesalahan umum: tertukar dengan alkohol karena sama-sama mengandung O — pada eter tidak ada gugus –OH."
  },
  {
    q: "Senyawa CH₃–CHO termasuk golongan ...",
    options: [
      "keton",
      "aldehida",
      "alkohol",
      "eter"
    ],
    answer: 1,
    solution: "1. Gugus –CHO (karbonil di ujung rantai, terikat satu atom H) adalah ciri aldehida. 2. Jadi CH₃–CHO adalah aldehida (etanal/asetaldehida). 3. Kesalahan umum: mengira keton — pada keton gugus C=O diapit dua atom C (di tengah rantai)."
  },
  {
    q: "Gugus fungsi yang dimiliki oleh 2-propanona (aseton) adalah ...",
    options: [
      "aldehida",
      "ester",
      "keton",
      "asam karboksilat"
    ],
    answer: 2,
    solution: "1. Propanona = rantai 3 atom C dengan gugus C=O pada atom C nomor 2 (di tengah rantai). 2. Gugus karbonil di tengah rantai = keton. 3. Kesalahan umum: mengira aldehida karena sama-sama memiliki C=O — gugus C=O aldehida selalu berada di ujung rantai."
  },
  {
    q: "Gugus fungsi asam karboksilat adalah ...",
    options: [
      "−CHO",
      "−OH",
      "−COOH",
      "−COOR"
    ],
    answer: 2,
    solution: "1. Gugus fungsi asam karboksilat = −COOH (gabungan karbonil C=O dan hidroksil −OH pada satu atom C). 2. −CHO = aldehida, −COOR = ester. 3. Kesalahan umum: menjawab −OH saja (itu alkohol) — ciri asam karboksilat adalah pasangan C=O dan −OH pada atom C yang sama."
  },
  {
    q: "Senyawa etil asetat (CH₃COOC₂H₅) memiliki gugus fungsi ...",
    options: [
      "eter",
      "ester",
      "aldehida",
      "keton"
    ],
    answer: 1,
    solution: "1. CH₃COOC₂H₅ = CH₃–COO–C₂H₅; gugus −COO− diapit dua gugus karbon = ester. 2. Ester adalah turunan asam karboksilat dengan −OH diganti −OR. 3. Kesalahan umum: mengira eter karena namanya mengandung 'etil' dan ada atom O — eter polanya R–O–R′ tanpa gugus C=O."
  },
  {
    q: "Gugus fungsi amina adalah ...",
    options: [
      "−NO₂",
      "−CN",
      "−NH₂",
      "−OH"
    ],
    answer: 2,
    solution: "1. Amina adalah turunan amonia dengan gugus −NH₂ terikat pada atom C. 2. −NO₂ = gugus nitro, −CN = gugus nitril (siano). 3. Kesalahan umum: tertukar dengan gugus nitro (−NO₂) karena sama-sama mengandung N."
  },
  {
    q: "Uji Tollens yang positif (terbentuk cermin perak) menunjukkan adanya gugus ...",
    options: [
      "keton",
      "alkohol",
      "ester",
      "aldehida"
    ],
    answer: 3,
    solution: "1. Pereaksi Tollens (ion Ag(NH₃)₂⁺) adalah oksidator lemah yang hanya mampu mengoksidasi aldehida menjadi asam karboksilat. 2. Ion Ag⁺ tereduksi menjadi logam Ag (cermin perak) → uji positif berarti ada gugus aldehida. 3. Kesalahan umum: mengira keton juga memberi hasil positif — keton tidak dapat dioksidasi Tollens, sehingga uji ini justru membedakan aldehida dari keton."
  },
  {
    q: "Senyawa 1-propanol dan 2-propanol merupakan isomer ...",
    options: [
      "isomer rangka",
      "isomer posisi",
      "isomer fungsi",
      "bukan isomer"
    ],
    answer: 1,
    solution: "1. Keduanya berumus molekul C₃H₈O dengan gugus fungsi yang sama (−OH). 2. Perbedaannya hanya pada posisi gugus −OH (atom C-1 vs C-2) → isomer posisi. 3. Kesalahan umum: menyebut isomer fungsi — gugus fungsinya sama, yang berbeda hanya letaknya."
  },
  {
    q: "Etanol (C₂H₅OH) dan dimetil eter (CH₃OCH₃) merupakan isomer ...",
    options: [
      "isomer posisi",
      "isomer rangka",
      "isomer fungsi",
      "stereoisomer"
    ],
    answer: 2,
    solution: "1. Etanol (CH₃CH₂OH) dan dimetil eter (CH₃OCH₃) sama-sama berumus molekul C₂H₆O. 2. Gugus fungsinya berbeda (alkohol vs eter) → isomer fungsi (isomer gugus fungsi). 3. Kesalahan umum: mengira keduanya bukan isomer karena 'golongannya beda' — isomer justru mensyaratkan rumus molekul sama dengan struktur atau gugus fungsi berbeda."
  },
  {
    q: "n-heksana dan 2-metilpentana merupakan isomer ...",
    options: [
      "isomer fungsi",
      "isomer posisi",
      "bukan isomer",
      "isomer rangka"
    ],
    answer: 3,
    solution: "1. n-heksana dan 2-metilpentana sama-sama berumus molekul C₆H₁₄. 2. Perbedaannya pada kerangka karbon (rantai lurus vs bercabang) dengan jenis senyawa sama (alkana) → isomer rangka. 3. Kesalahan umum: tertukar dengan isomer posisi — pada isomer posisi yang berpindah adalah letak gugus/substituen, bukan bentuk kerangka karbonnya."
  },
  {
    q: "Jumlah isomer struktur alkena rantai terbuka dengan rumus molekul C₄H₈ adalah ...",
    options: [
      "2",
      "4",
      "3",
      "5"
    ],
    answer: 2,
    solution: "1. Alkena C₄H₈ rantai terbuka: 1-butena (CH₂=CHCH₂CH₃), 2-butena (CH₃CH=CHCH₃), dan 2-metilpropena (CH₂=C(CH₃)₂). 2. Jadi terdapat 3 isomer struktur. 3. Kesalahan umum: menghitung cis-2-butena dan trans-2-butena sebagai isomer struktur — keduanya adalah isomer geometri (stereoisomer), bukan isomer struktur."
  }
  ]
};
