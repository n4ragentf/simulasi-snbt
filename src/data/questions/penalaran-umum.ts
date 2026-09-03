import type { Question } from "@/lib/types";

const SRC = "Soal latihan original SNBT Simulator";

export const penalaranUmum: Question[] = [
  {
    id: "pu-001",
    sectionId: "penalaran-umum",
    passage:
      "Sebuah studi di lima kota menemukan bahwa kota dengan jalur sepeda terpanjang memiliki angka kecelakaan pesepeda paling rendah. Pemerintah kota lalu menyimpulkan bahwa memperpanjang jalur sepeda pasti menurunkan angka kecelakaan pesepeda.",
    question: "Manakah pernyataan yang paling melemahkan kesimpulan pemerintah kota tersebut?",
    options: [
      "Kota dengan jalur sepeda terpanjang juga memiliki jumlah pesepeda paling banyak.",
      "Kota dengan jalur sepeda terpendek baru membangun jalurnya tahun lalu.",
      "Di kota dengan jalur sepeda terpanjang, kecepatan maksimum kendaraan bermotor dibatasi 30 km/jam sejak sepuluh tahun lalu.",
      "Sebagian pesepeda di kota tersebut tetap memilih jalan raya biasa.",
      "Anggaran pembangunan jalur sepeda berbeda-beda di setiap kota.",
    ],
    correctAnswer: 2,
    explanation:
      "Kesimpulan bersifat kausal dari data korelasional. Adanya faktor lain yang sudah lama berlaku, yaitu pembatasan kecepatan kendaraan bermotor, menawarkan penjelasan alternatif atas rendahnya kecelakaan sehingga kausalitas jalur sepeda melemah. Pilihan lain tidak menyediakan penyebab alternatif yang kuat.",
    difficulty: "hard",
    topic: "Evaluasi argumen",
    source: SRC,
  },
  {
    id: "pu-002",
    sectionId: "penalaran-umum",
    question:
      "Semua anggota klub debat mengikuti kelas menulis. Sebagian peserta kelas menulis adalah siswa kelas XII. Simpulan yang PASTI benar adalah ...",
    options: [
      "Semua siswa kelas XII mengikuti kelas menulis.",
      "Sebagian anggota klub debat adalah siswa kelas XII.",
      "Semua anggota klub debat adalah siswa kelas XII.",
      "Ada peserta kelas menulis yang merupakan anggota klub debat.",
      "Tidak ada siswa kelas XII yang menjadi anggota klub debat.",
    ],
    correctAnswer: 3,
    explanation:
      "Karena semua anggota klub debat mengikuti kelas menulis (dan himpunan klub debat tidak kosong), pasti ada peserta kelas menulis yang merupakan anggota klub debat. Irisan dengan siswa kelas XII tidak dapat dipastikan.",
    difficulty: "medium",
    topic: "Silogisme",
    source: SRC,
  },
  {
    id: "pu-003",
    sectionId: "penalaran-umum",
    question: "Perhatikan pola bilangan: 3, 4, 8, 17, 33, ... Bilangan berikutnya adalah ...",
    options: ["58", "60", "62", "64", "66"],
    correctAnswer: 0,
    explanation:
      "Selisihnya: 1, 4, 9, 16 yaitu kuadrat berurutan. Selisih berikutnya 25, sehingga 33 + 25 = 58.",
    difficulty: "medium",
    topic: "Pola bilangan",
    source: SRC,
  },
  {
    id: "pu-004",
    sectionId: "penalaran-umum",
    question:
      "Jika hujan deras, jalan menuju sekolah macet. Jika jalan macet, Rina terlambat. Rina tidak terlambat hari ini. Simpulan yang sahih adalah ...",
    options: [
      "Hari ini hujan deras.",
      "Hari ini jalan macet.",
      "Hari ini tidak hujan deras.",
      "Rina berangkat lebih pagi.",
      "Jalan macet tetapi Rina naik ojek.",
    ],
    correctAnswer: 2,
    explanation:
      "Modus tollens berantai: ~terlambat -> ~macet -> ~hujan deras. Jadi simpulan sahih adalah hari ini tidak hujan deras.",
    difficulty: "medium",
    topic: "Logika proposisi",
    source: SRC,
  },
  {
    id: "pu-005",
    sectionId: "penalaran-umum",
    passage:
      "Lima siswa (A, B, C, D, E) duduk berjajar menghadap depan. A duduk di ujung. C duduk tepat di antara B dan D. E tidak bersebelahan dengan A.",
    question: "Jika B duduk di posisi kedua dari kiri dan A di ujung kiri, siapa yang duduk di ujung kanan?",
    options: ["B", "C", "D", "E", "Tidak dapat ditentukan"],
    correctAnswer: 3,
    explanation:
      "Urutan: A(1), B(2). C tepat di antara B dan D sehingga C(3) dan D(4). Sisa posisi 5 untuk E, dan ini konsisten karena E tidak bersebelahan dengan A.",
    difficulty: "medium",
    topic: "Penalaran analitis",
    source: SRC,
  },
  {
    id: "pu-006",
    sectionId: "penalaran-umum",
    question:
      "Sebuah pernyataan: 'Tidak ada siswa rajin yang gagal ujian.' Pernyataan yang ekuivalen adalah ...",
    options: [
      "Semua siswa yang gagal ujian tidak rajin.",
      "Semua siswa rajin pasti nilainya tertinggi.",
      "Sebagian siswa rajin gagal ujian.",
      "Jika seseorang gagal ujian, ia pasti malas belajar seumur hidup.",
      "Semua siswa yang tidak gagal ujian adalah siswa rajin.",
    ],
    correctAnswer: 0,
    explanation:
      "'Tidak ada P yang Q' ekuivalen dengan 'Semua Q bukan P'. Jadi semua yang gagal ujian bukan siswa rajin (kontraposisi).",
    difficulty: "medium",
    topic: "Ekuivalensi",
    source: SRC,
  },
  {
    id: "pu-007",
    sectionId: "penalaran-umum",
    passage:
      "Data penjualan tiket bioskop sebuah kota: Januari 12.000 lembar, Februari 9.000, Maret 13.500, April 10.800. Manajer menyatakan bahwa penurunan pada Februari disebabkan oleh kenaikan harga tiket 10% yang berlaku sejak awal Februari.",
    question: "Fakta manakah yang paling memperkuat pernyataan manajer tersebut?",
    options: [
      "Bulan Maret diadakan diskon pelajar setiap hari Senin.",
      "Harga tiket kembali diturunkan pada awal Maret dan penjualan naik kembali.",
      "Februari memiliki jumlah hari paling sedikit.",
      "Bioskop pesaing membuka cabang baru pada April.",
      "Film yang tayang pada Februari kurang populer.",
    ],
    correctAnswer: 1,
    explanation:
      "Bukti yang memperkuat hubungan sebab-akibat adalah pembalikan variabel: harga turun, penjualan naik lagi. Pilihan C dan E justru menawarkan penjelasan alternatif yang melemahkan.",
    difficulty: "hard",
    topic: "Penguatan argumen",
    source: SRC,
  },
  {
    id: "pu-008",
    sectionId: "penalaran-umum",
    question: "Pola: 2, 6, 12, 20, 30, ... Suku ke-8 adalah ...",
    options: ["56", "64", "72", "80", "90"],
    correctAnswer: 2,
    explanation:
      "Pola suku ke-n adalah n(n+1): 1·2=2, 2·3=6, 3·4=12, ... Suku ke-8 = 8 × 9 = 72.",
    difficulty: "easy",
    topic: "Pola bilangan",
    source: SRC,
  },
  {
    id: "pu-009",
    sectionId: "penalaran-umum",
    question:
      "Dalam sebuah kelas, setiap siswa yang mengikuti olimpiade sains juga mengikuti klub riset. Tidak ada anggota klub riset yang mengikuti ekstrakurikuler teater. Simpulan yang benar adalah ...",
    options: [
      "Semua anggota teater mengikuti olimpiade sains.",
      "Tidak ada peserta olimpiade sains yang mengikuti teater.",
      "Sebagian anggota klub riset mengikuti teater.",
      "Semua anggota klub riset mengikuti olimpiade sains.",
      "Peserta olimpiade sains pasti bukan anggota klub riset.",
    ],
    correctAnswer: 1,
    explanation:
      "Olimpiade ⊆ klub riset, dan klub riset ∩ teater = ∅. Maka olimpiade ∩ teater = ∅.",
    difficulty: "easy",
    topic: "Silogisme",
    source: SRC,
  },
  {
    id: "pu-010",
    sectionId: "penalaran-umum",
    passage:
      "Sebuah kampanye kesehatan mengklaim: 'Orang yang tidur 8 jam sehari lebih jarang sakit. Karena itu, siapa pun yang menambah jam tidurnya menjadi 8 jam akan lebih jarang sakit.'",
    question: "Kelemahan utama penalaran tersebut adalah ...",
    options: [
      "Menggunakan data yang jumlah sampelnya tidak disebutkan.",
      "Menyamakan korelasi dengan sebab-akibat dan menggeneralisasi ke semua orang.",
      "Tidak menyebutkan nama lembaga penelitian.",
      "Menggunakan angka 8 yang terlalu bulat.",
      "Tidak menjelaskan definisi kata 'sakit'.",
    ],
    correctAnswer: 1,
    explanation:
      "Cacat penalaran intinya adalah lompatan dari asosiasi statistik ke klaim kausal universal; bisa jadi orang sehatlah yang lebih mudah tidur nyenyak 8 jam.",
    difficulty: "medium",
    topic: "Evaluasi argumen",
    source: SRC,
  },
  {
    id: "pu-011",
    sectionId: "penalaran-umum",
    question:
      "Tujuh tim mengikuti turnamen sistem gugur. Setiap pertandingan menghasilkan satu tim tersingkir. Berapa jumlah pertandingan minimal untuk mendapatkan satu juara?",
    options: ["5", "6", "7", "8", "9"],
    correctAnswer: 1,
    explanation:
      "Untuk mendapatkan satu juara, enam tim harus tersingkir. Setiap pertandingan menyingkirkan tepat satu tim, jadi diperlukan 6 pertandingan.",
    difficulty: "medium",
    topic: "Problem solving",
    source: SRC,
  },
  {
    id: "pu-012",
    sectionId: "penalaran-umum",
    question:
      "Perbandingan berikut analog dengan hubungan 'termometer : suhu' adalah ...",
    options: [
      "Buku : perpustakaan",
      "Barometer : tekanan udara",
      "Dokter : rumah sakit",
      "Pensil : kertas",
      "Jam : dinding",
    ],
    correctAnswer: 1,
    explanation:
      "Termometer adalah alat untuk mengukur suhu; barometer adalah alat untuk mengukur tekanan udara. Hubungan alat–besaran yang diukur.",
    difficulty: "easy",
    topic: "Analogi",
    source: SRC,
  },
  {
    id: "pu-013",
    sectionId: "penalaran-umum",
    passage:
      "Empat kegiatan ekstrakurikuler dijadwalkan Senin sampai Kamis, masing-masing satu hari. Basket tidak pada hari Senin. Paduan suara tepat sehari sebelum robotika. Teater pada hari Kamis.",
    question: "Kegiatan yang dijadwalkan pada hari Senin adalah ...",
    options: ["Basket", "Paduan suara", "Robotika", "Teater", "Tidak dapat ditentukan"],
    correctAnswer: 1,
    explanation:
      "Teater Kamis. Paduan suara–robotika berurutan pada Senin–Selasa atau Selasa–Rabu. Karena basket tidak Senin, Senin harus paduan suara (Senin–Selasa), lalu basket Rabu.",
    difficulty: "hard",
    topic: "Penalaran analitis",
    source: SRC,
  },
  {
    id: "pu-014",
    sectionId: "penalaran-umum",
    question:
      "Jika pernyataan 'Semua pelari maraton memiliki stamina tinggi' bernilai benar, maka pernyataan yang PASTI SALAH adalah ...",
    options: [
      "Ada orang berstamina tinggi yang bukan pelari maraton.",
      "Ada pelari maraton yang tidak berstamina tinggi.",
      "Semua orang berstamina tinggi adalah pelari maraton.",
      "Sebagian pelari maraton berlatih setiap hari.",
      "Tidak semua orang berstamina tinggi berlari maraton.",
    ],
    correctAnswer: 1,
    explanation:
      "Negasi langsung dari 'semua A adalah B' adalah 'ada A yang bukan B'. Karena pernyataan asal benar, pernyataan itu pasti salah.",
    difficulty: "medium",
    topic: "Logika proposisi",
    source: SRC,
  },
  {
    id: "pu-015",
    sectionId: "penalaran-umum",
    question:
      "Sebuah mesin menghasilkan 240 unit dalam 8 jam. Setelah diperbarui, kecepatannya naik 25%. Waktu yang dibutuhkan untuk menghasilkan 450 unit setelah pembaruan adalah ...",
    options: ["10 jam", "11 jam", "12 jam", "13 jam", "15 jam"],
    correctAnswer: 2,
    explanation:
      "Kecepatan awal 30 unit/jam; setelah naik 25% menjadi 37,5 unit/jam. Waktu = 450 : 37,5 = 12 jam.",
    difficulty: "medium",
    topic: "Problem solving",
    source: SRC,
  },
];
