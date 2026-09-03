import type { Question } from "@/lib/types";

const SRC = "Soal latihan original SNBT Simulator";

const tabelListrik = `Tarif listrik prabayar sebuah rumah tangga dihitung sebagai berikut:
- Biaya administrasi token: Rp2.500 per pembelian
- Pajak penerangan jalan: 5% dari nilai token setelah dikurangi administrasi
- Sisanya dikonversi menjadi kWh dengan tarif Rp1.450 per kWh`;

const tabelKoperasi = `Koperasi sekolah mencatat penjualan empat produk selama satu minggu:
Produk A: 120 unit, laba Rp1.500/unit
Produk B: 80 unit, laba Rp2.750/unit
Produk C: 200 unit, laba Rp900/unit
Produk D: 45 unit, laba Rp4.200/unit`;

export const penalaranMatematika: Question[] = [
  {
    id: "pm-001",
    sectionId: "penalaran-matematika",
    passage: tabelListrik,
    question:
      "Jika sebuah keluarga membeli token senilai Rp102.500, berapa kWh (dibulatkan ke satu desimal) yang mereka peroleh?",
    options: ["61,5 kWh", "65,5 kWh", "68,9 kWh", "70,7 kWh", "72,4 kWh"],
    correctAnswer: 1,
    explanation:
      "Nilai setelah administrasi = 102.500 − 2.500 = 100.000. Pajak 5% = 5.000, sisa 95.000. kWh = 95.000 : 1.450 ≈ 65,5 kWh.",
    difficulty: "medium",
    topic: "Pemodelan matematika",
    source: SRC,
  },
  {
    id: "pm-002",
    sectionId: "penalaran-matematika",
    passage: tabelListrik,
    question:
      "Keluarga tersebut ingin memperoleh tepat 100 kWh. Nilai token minimal yang harus dibeli (dibulatkan ke ribuan terdekat ke atas) adalah ...",
    options: ["Rp146.000", "Rp150.000", "Rp153.000", "Rp156.000", "Rp160.000"],
    correctAnswer: 3,
    explanation:
      "Butuh 100 × 1.450 = Rp145.000 setelah pajak. Sebelum pajak: 145.000 : 0,95 ≈ Rp152.632. Ditambah administrasi Rp2.500 menjadi ≈ Rp155.132, sehingga pembelian minimal (pembulatan ribuan ke atas) adalah Rp156.000.",
    difficulty: "hard",
    topic: "Pemodelan matematika",
    source: SRC,
  },
  {
    id: "pm-003",
    sectionId: "penalaran-matematika",
    passage: tabelKoperasi,
    question: "Produk manakah yang menyumbang total laba terbesar dalam seminggu?",
    options: ["Produk A", "Produk B", "Produk C", "Produk D", "A dan C sama besar"],
    correctAnswer: 1,
    explanation:
      "A = 180.000; B = 220.000; C = 180.000; D = 189.000. Laba terbesar adalah Produk B.",
    difficulty: "easy",
    topic: "Interpretasi data",
    source: SRC,
  },
  {
    id: "pm-004",
    sectionId: "penalaran-matematika",
    passage: tabelKoperasi,
    question:
      "Koperasi ingin menaikkan total laba mingguan menjadi Rp800.000 hanya dengan menambah penjualan Produk D. Berapa unit tambahan Produk D yang diperlukan?",
    options: ["6 unit", "7 unit", "8 unit", "9 unit", "10 unit"],
    correctAnswer: 2,
    explanation:
      "Total laba saat ini = 180.000 + 220.000 + 180.000 + 189.000 = Rp769.000. Kekurangan Rp31.000. Karena 31.000 : 4.200 ≈ 7,38, dibutuhkan pembulatan ke atas menjadi 8 unit (8 × 4.200 = 33.600).",
    difficulty: "medium",
    topic: "Interpretasi data",
    source: SRC,
  },
  {
    id: "pm-005",
    sectionId: "penalaran-matematika",
    question:
      "Sebuah kolam diisi oleh dua keran. Keran pertama mengisi 3/5 kolam dalam 45 menit. Keran kedua mengisi seluruh kolam dalam 50 menit. Jika kedua keran dibuka bersama dari kosong, kolam penuh dalam ...",
    options: ["25 menit", "27 menit", "30 menit", "32 menit", "35 menit"],
    correctAnswer: 2,
    explanation:
      "Keran 1 mengisi 3/5 kolam dalam 45 menit sehingga 1 kolam butuh 75 menit. Laju gabungan = 1/75 + 1/50 = 2/150 + 3/150 = 1/30 kolam per menit, jadi kolam penuh dalam 30 menit.",
    difficulty: "medium",
    topic: "Pemodelan",
    source: SRC,
  },
  {
    id: "pm-006",
    sectionId: "penalaran-matematika",
    question:
      "Sebuah toko memberi diskon bertingkat 30% + 20% untuk sebuah jaket berharga Rp500.000. Berapa harga yang harus dibayar pembeli?",
    options: ["Rp250.000", "Rp260.000", "Rp280.000", "Rp300.000", "Rp350.000"],
    correctAnswer: 2,
    explanation:
      "Diskon bertingkat: 500.000 × 0,7 = 350.000; lalu × 0,8 = 280.000. Bukan 50% total.",
    difficulty: "easy",
    topic: "Kontekstual",
    source: SRC,
  },
  {
    id: "pm-007",
    sectionId: "penalaran-matematika",
    passage:
      "Sebuah aplikasi ojek daring menetapkan tarif: Rp8.000 untuk 2 km pertama, lalu Rp2.500 per km berikutnya. Pada jam sibuk, seluruh tarif dikalikan 1,4.",
    question: "Berapa tarif perjalanan 9 km pada jam sibuk?",
    options: ["Rp32.550", "Rp35.700", "Rp36.400", "Rp38.500", "Rp41.300"],
    correctAnswer: 1,
    explanation:
      "Tarif normal = 8.000 + 7 × 2.500 = 25.500. Jam sibuk = 25.500 × 1,4 = 35.700.",
    difficulty: "medium",
    topic: "Kontekstual",
    source: SRC,
  },
  {
    id: "pm-008",
    sectionId: "penalaran-matematika",
    passage:
      "Nilai ulangan 8 siswa: 65, 70, 70, 75, 80, 85, 90, 95.",
    question:
      "Jika guru menambahkan 5 poin kepada setiap siswa, pernyataan yang benar adalah ...",
    options: [
      "Rata-rata dan simpangan baku sama-sama naik 5.",
      "Rata-rata naik 5, simpangan baku tetap.",
      "Rata-rata tetap, simpangan baku naik 5.",
      "Rata-rata naik 5, jangkauan naik 5.",
      "Median tetap, rata-rata naik 5.",
    ],
    correctAnswer: 1,
    explanation:
      "Penambahan konstanta menggeser semua nilai sehingga ukuran pemusatan (rata-rata, median) naik 5, sedangkan ukuran penyebaran (simpangan baku, jangkauan) tidak berubah.",
    difficulty: "hard",
    topic: "Interpretasi data",
    source: SRC,
  },
  {
    id: "pm-009",
    sectionId: "penalaran-matematika",
    question:
      "Populasi bakteri berlipat dua setiap 3 jam. Jika awalnya 500 bakteri, jumlah bakteri setelah 12 jam adalah ...",
    options: ["4.000", "6.000", "8.000", "10.000", "16.000"],
    correctAnswer: 2,
    explanation:
      "12 jam = 4 periode penggandaan. 500 × 2⁴ = 500 × 16 = 8.000.",
    difficulty: "easy",
    topic: "Pemodelan eksponensial",
    source: SRC,
  },
  {
    id: "pm-010",
    sectionId: "penalaran-matematika",
    passage:
      "Sebuah UMKM memproduksi tas dengan biaya tetap Rp3.000.000 per bulan dan biaya variabel Rp45.000 per tas. Tas dijual Rp75.000 per unit.",
    question: "Berapa unit minimal yang harus terjual per bulan agar UMKM tidak merugi?",
    options: ["80 unit", "90 unit", "100 unit", "110 unit", "120 unit"],
    correctAnswer: 2,
    explanation:
      "Margin per unit = 75.000 − 45.000 = 30.000. Titik impas = 3.000.000 : 30.000 = 100 unit.",
    difficulty: "medium",
    topic: "Pemodelan matematika",
    source: SRC,
  },
  {
    id: "pm-011",
    sectionId: "penalaran-matematika",
    passage:
      "Sebuah UMKM memproduksi tas dengan biaya tetap Rp3.000.000 per bulan dan biaya variabel Rp45.000 per tas. Tas dijual Rp75.000 per unit.",
    question:
      "Jika biaya variabel naik menjadi Rp51.000 dan UMKM ingin laba Rp1.200.000 per bulan, jumlah tas yang harus terjual adalah ...",
    options: ["150 unit", "160 unit", "175 unit", "180 unit", "200 unit"],
    correctAnswer: 2,
    explanation:
      "Margin baru = 75.000 − 51.000 = 24.000. Kebutuhan = (3.000.000 + 1.200.000) : 24.000 = 175 unit.",
    difficulty: "hard",
    topic: "Analisis",
    source: SRC,
  },
  {
    id: "pm-012",
    sectionId: "penalaran-matematika",
    question:
      "Sebuah peta berskala 1 : 2.500.000. Dua kota berjarak 6,4 cm pada peta. Jika ditempuh dengan kecepatan rata-rata 40 km/jam, waktu tempuhnya adalah ...",
    options: ["2 jam", "3 jam", "4 jam", "5 jam", "6 jam"],
    correctAnswer: 2,
    explanation:
      "Jarak sebenarnya = 6,4 cm × 2.500.000 = 16.000.000 cm = 160 km. Waktu = 160 : 40 = 4 jam.",
    difficulty: "medium",
    topic: "Skala dan kecepatan",
    source: SRC,
  },
];
