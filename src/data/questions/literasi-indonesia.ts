import type { Question } from "@/lib/types";

const SRC = "Soal latihan original SNBT Simulator";

const teksPangan = `Ketahanan pangan sebuah negara kerap diukur dari jumlah produksi beras nasional. Ukuran itu tampak masuk akal karena beras merupakan makanan pokok bagi sebagian besar penduduk. Namun, sejumlah peneliti menilai indikator tunggal tersebut menyesatkan.

Pertama, produksi tinggi tidak menjamin distribusi merata. Daerah surplus sering kali terpisah ribuan kilometer dari daerah defisit, sementara biaya logistik antarpulau dapat menambah 20 hingga 40 persen harga di tingkat konsumen. Akibatnya, harga beras di wilayah timur bisa jauh lebih mahal meskipun produksi nasional sedang berlimpah.

Kedua, ketergantungan pada satu komoditas membuat sistem pangan rapuh. Serangan hama atau anomali iklim yang menghantam sentra produksi padi dapat mengguncang pasokan nasional secara serentak. Sebaliknya, negara yang basis pangannya beragam - misalnya menggabungkan padi, jagung, sagu, dan umbi-umbian - memiliki penyangga alami ketika satu komoditas gagal panen.

Ketiga, indikator produksi mengabaikan aspek gizi. Kecukupan kalori tidak identik dengan kecukupan gizi. Data survei kesehatan menunjukkan bahwa daerah dengan produksi beras tertinggi tidak selalu memiliki angka prevalensi tengkes yang rendah.

Karena itu, sejumlah ahli mengusulkan indikator gabungan yang mencakup keterjangkauan harga, keragaman sumber pangan, dan kualitas gizi. Pendekatan ini menuntut pengumpulan data yang lebih kompleks, tetapi memberikan gambaran yang jauh lebih jujur tentang kondisi pangan sesungguhnya.`;

const teksKotaSpons = `Konsep kota spons mengubah cara kita memandang air hujan. Dalam paradigma lama, air hujan adalah gangguan yang harus secepatnya dibuang melalui gorong-gorong beton menuju sungai. Paradigma kota spons memperlakukan air hujan sebagai sumber daya yang perlu ditahan, diserap, dan disimpan di tempat ia jatuh.

Penerapannya berupa taman hujan, perkerasan berpori, kolam retensi, dan atap hijau. Sebuah kota di Tiongkok yang menerapkan konsep ini melaporkan penurunan limpasan permukaan hingga 60 persen pada kawasan percontohan. Manfaatnya berlapis: banjir berkurang, cadangan air tanah terisi, dan suhu permukaan kota menurun berkat penguapan dari vegetasi.

Meski demikian, kota spons bukan solusi tunggal. Pada curah hujan ekstrem yang melampaui kapasitas serap, infrastruktur konvensional tetap dibutuhkan sebagai jaring pengaman. Selain itu, biaya awal pembangunan relatif tinggi dan perawatannya menuntut keahlian yang belum dimiliki banyak pemerintah daerah.`;

export const literasiIndonesia: Question[] = [
  {
    id: "lbi-001",
    sectionId: "literasi-indonesia",
    passage: teksPangan,
    question: "Tujuan penulis menyusun teks tersebut adalah ...",
    options: [
      "Mengajak pembaca meningkatkan produksi beras nasional.",
      "Mengkritik penggunaan produksi beras sebagai indikator tunggal ketahanan pangan.",
      "Menjelaskan cara menghitung biaya logistik antarpulau.",
      "Membandingkan kandungan gizi beras dan umbi-umbian.",
      "Melaporkan hasil survei kesehatan nasional terbaru.",
    ],
    correctAnswer: 1,
    explanation:
      "Paragraf pertama memunculkan indikator tunggal lalu menyatakan indikator itu menyesatkan; paragraf berikutnya memaparkan tiga alasan. Tujuannya adalah mengkritik indikator tunggal.",
    difficulty: "medium",
    topic: "Tujuan penulis",
    source: SRC,
  },
  {
    id: "lbi-002",
    sectionId: "literasi-indonesia",
    passage: teksPangan,
    question:
      "Berdasarkan teks, alasan sistem pangan menjadi rapuh ketika bergantung pada satu komoditas adalah ...",
    options: [
      "Harga komoditas tunggal cenderung tidak stabil di pasar dunia.",
      "Gangguan pada sentra produksi komoditas itu langsung mengguncang pasokan nasional.",
      "Petani enggan menanam komoditas selain padi.",
      "Konsumen tidak terbiasa mengonsumsi sagu dan umbi-umbian.",
      "Biaya logistik komoditas tunggal lebih mahal.",
    ],
    correctAnswer: 1,
    explanation:
      "Paragraf ketiga menyebut hama atau anomali iklim pada sentra padi dapat mengguncang pasokan nasional secara serentak.",
    difficulty: "easy",
    topic: "Informasi tersurat",
    source: SRC,
  },
  {
    id: "lbi-003",
    sectionId: "literasi-indonesia",
    passage: teksPangan,
    question:
      "Simpulan yang paling tepat dari paragraf keempat adalah ...",
    options: [
      "Produksi beras yang tinggi otomatis menurunkan angka tengkes.",
      "Kecukupan kalori belum tentu mencerminkan kecukupan gizi masyarakat.",
      "Survei kesehatan tidak dapat dipercaya.",
      "Tengkes hanya terjadi di daerah dengan produksi beras rendah.",
      "Gizi masyarakat ditentukan oleh jumlah beras yang dikonsumsi.",
    ],
    correctAnswer: 1,
    explanation:
      "Paragraf keempat secara eksplisit membedakan kalori dan gizi, dibuktikan dengan data bahwa daerah produksi tertinggi tidak selalu berangka tengkes rendah.",
    difficulty: "medium",
    topic: "Kesimpulan",
    source: SRC,
  },
  {
    id: "lbi-004",
    sectionId: "literasi-indonesia",
    passage: teksPangan,
    question:
      "Kelemahan pendekatan indikator gabungan yang diakui penulis adalah ...",
    options: [
      "Hasilnya kurang jujur dibandingkan indikator tunggal.",
      "Menuntut pengumpulan data yang lebih kompleks.",
      "Tidak mempertimbangkan harga pangan.",
      "Hanya berlaku bagi negara kepulauan.",
      "Mengabaikan aspek keragaman pangan.",
    ],
    correctAnswer: 1,
    explanation:
      "Paragraf terakhir menyebut pendekatan ini 'menuntut pengumpulan data yang lebih kompleks' meski hasilnya lebih jujur.",
    difficulty: "easy",
    topic: "Informasi tersurat",
    source: SRC,
  },
  {
    id: "lbi-005",
    sectionId: "literasi-indonesia",
    passage: teksPangan,
    question:
      "Temuan manakah yang paling MELEMAHKAN argumen penulis pada paragraf kedua?",
    options: [
      "Biaya logistik antarpulau turun drastis setelah subsidi tol laut sehingga harga beras antarwilayah nyaris seragam.",
      "Produksi beras nasional meningkat 3 persen tahun ini.",
      "Beberapa daerah timur mulai menanam padi sendiri.",
      "Harga beras dunia sedang naik.",
      "Konsumsi beras per kapita menurun perlahan.",
    ],
    correctAnswer: 0,
    explanation:
      "Argumen paragraf kedua bertumpu pada disparitas harga akibat biaya logistik. Bila biaya logistik turun dan harga menjadi seragam, dasar argumen itu runtuh.",
    difficulty: "hard",
    topic: "Evaluasi",
    source: SRC,
  },
  {
    id: "lbi-006",
    sectionId: "literasi-indonesia",
    passage: teksKotaSpons,
    question: "Perbedaan mendasar paradigma lama dan konsep kota spons terletak pada ...",
    options: [
      "Jenis material gorong-gorong yang digunakan",
      "Cara memperlakukan air hujan: dibuang cepat versus ditahan dan diserap",
      "Besarnya anggaran pembangunan infrastruktur",
      "Jumlah taman kota yang dibangun",
      "Kecepatan aliran sungai di dalam kota",
    ],
    correctAnswer: 1,
    explanation:
      "Paragraf pertama mengontraskan air hujan sebagai gangguan yang dibuang cepat dengan air hujan sebagai sumber daya yang ditahan dan diserap.",
    difficulty: "easy",
    topic: "Pemahaman bacaan",
    source: SRC,
  },
  {
    id: "lbi-007",
    sectionId: "literasi-indonesia",
    passage: teksKotaSpons,
    question:
      "Pernyataan yang sesuai dengan sikap penulis terhadap konsep kota spons adalah ...",
    options: [
      "Menolak karena biayanya mahal",
      "Mendukung sepenuhnya tanpa syarat",
      "Mendukung, tetapi mengakui keterbatasan dan prasyaratnya",
      "Meragukan seluruh data yang dilaporkan",
      "Menganggapnya hanya cocok untuk negara maju",
    ],
    correctAnswer: 2,
    explanation:
      "Penulis memaparkan manfaat berlapis, lalu menegaskan kota spons 'bukan solusi tunggal' dengan menyebut curah hujan ekstrem, biaya awal, dan kebutuhan keahlian.",
    difficulty: "medium",
    topic: "Sikap penulis",
    source: SRC,
  },
  {
    id: "lbi-008",
    sectionId: "literasi-indonesia",
    passage: teksKotaSpons,
    question:
      "Penurunan suhu permukaan kota pada kawasan kota spons terjadi terutama karena ...",
    options: [
      "Berkurangnya jumlah kendaraan bermotor",
      "Penguapan dari vegetasi",
      "Pembangunan gorong-gorong beton yang lebih besar",
      "Turunnya limpasan permukaan sebesar 60 persen",
      "Penggunaan perkerasan berwarna terang",
    ],
    correctAnswer: 1,
    explanation:
      "Teks menyebut suhu permukaan menurun 'berkat penguapan dari vegetasi'.",
    difficulty: "easy",
    topic: "Informasi tersurat",
    source: SRC,
  },
  {
    id: "lbi-009",
    sectionId: "literasi-indonesia",
    passage: teksKotaSpons,
    question:
      "Sebuah kota dengan anggaran terbatas dan sering dilanda hujan ekstrem ingin menerapkan kota spons. Saran yang paling sejalan dengan teks adalah ...",
    options: [
      "Mengganti seluruh gorong-gorong dengan taman hujan.",
      "Menerapkan kota spons secara bertahap sambil mempertahankan infrastruktur konvensional sebagai jaring pengaman.",
      "Menunda seluruh pembangunan sampai anggaran mencukupi.",
      "Membangun atap hijau hanya di gedung pemerintah agar hemat.",
      "Mengabaikan konsep kota spons karena tidak efektif pada hujan ekstrem.",
    ],
    correctAnswer: 1,
    explanation:
      "Teks menegaskan infrastruktur konvensional tetap dibutuhkan pada hujan ekstrem dan biaya awal tinggi, sehingga penerapan bertahap dan berdampingan paling sesuai.",
    difficulty: "hard",
    topic: "Aplikasi",
    source: SRC,
  },
  {
    id: "lbi-010",
    sectionId: "literasi-indonesia",
    passage: teksKotaSpons,
    question: "Kata 'retensi' pada teks paling dekat maknanya dengan ...",
    options: ["pembuangan", "penahanan", "penyaringan", "pengaliran", "penguapan"],
    correctAnswer: 1,
    explanation:
      "Kolam retensi berfungsi menahan atau menampung air sementara, sejalan dengan gagasan menahan air di tempat ia jatuh.",
    difficulty: "medium",
    topic: "Makna kata",
    source: SRC,
  },
  {
    id: "lbi-011",
    sectionId: "literasi-indonesia",
    passage: teksPangan,
    question: "Struktur penyajian argumen dalam teks ketahanan pangan tersebut adalah ...",
    options: [
      "Kronologis dari masa lalu ke masa kini",
      "Pernyataan umum, penolakan, tiga alasan pendukung, lalu usulan solusi",
      "Perbandingan dua negara secara berimbang",
      "Definisi, klasifikasi, dan contoh kasus",
      "Masalah, dampak, dan penutup berupa ajakan moral",
    ],
    correctAnswer: 1,
    explanation:
      "Teks dibuka dengan indikator yang lazim, dibantah, lalu diberi tiga alasan bernomor, dan ditutup dengan usulan indikator gabungan.",
    difficulty: "medium",
    topic: "Struktur teks",
    source: SRC,
  },
  {
    id: "lbi-012",
    sectionId: "literasi-indonesia",
    passage: teksKotaSpons,
    question:
      "Manakah informasi yang TIDAK dapat disimpulkan dari teks kota spons?",
    options: [
      "Kota spons dapat mengurangi limpasan permukaan secara signifikan.",
      "Perawatan infrastruktur kota spons memerlukan keahlian khusus.",
      "Semua kota di Tiongkok telah menerapkan konsep kota spons.",
      "Atap hijau termasuk salah satu penerapan kota spons.",
      "Kota spons dapat membantu mengisi cadangan air tanah.",
    ],
    correctAnswer: 2,
    explanation:
      "Teks hanya menyebut 'sebuah kota di Tiongkok' dengan kawasan percontohan; generalisasi ke semua kota tidak didukung teks.",
    difficulty: "medium",
    topic: "Evaluasi informasi",
    source: SRC,
  },
];
