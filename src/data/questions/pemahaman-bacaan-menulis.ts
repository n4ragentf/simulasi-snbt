import type { Question } from "@/lib/types";

const SRC = "Soal latihan original SNBT Simulator";

const teksKopi = `(1) Dalam satu dekade terakhir, kedai kopi independen tumbuh pesat di kota-kota menengah Indonesia. (2) Fenomena ini tidak semata-mata didorong oleh naiknya konsumsi kopi, melainkan juga oleh kebutuhan akan ruang kerja alternatif bagi pekerja lepas. (3) Sebuah survei terhadap 1.200 pengunjung kedai menunjukkan bahwa 46 persen di antaranya datang untuk bekerja, bukan sekadar menikmati minuman. (4) Karena itu, banyak pemilik kedai mulai menyediakan stopkontak, jaringan internet cepat, dan meja panjang. (5) Namun demikian, perubahan ini menimbulkan dilema: pengunjung yang bekerja cenderung duduk berjam-jam dengan satu gelas minuman sehingga perputaran meja melambat.`;

const teksMangrove = `(1) Hutan mangrove menyimpan karbon hingga lima kali lipat dibandingkan hutan tropis daratan pada luasan yang sama. (2) Sebagian besar karbon tersebut tersimpan bukan pada batang pohon, melainkan pada lapisan sedimen di bawah akarnya. (3) Ketika mangrove dibuka menjadi tambak, sedimen teraduk dan karbon yang tersimpan berabad-abad terlepas ke atmosfer dalam hitungan tahun. (4) Rehabilitasi dengan menanam bibit baru memang dapat memulihkan tutupan, tetapi memulihkan simpanan karbon sedimen memerlukan waktu jauh lebih lama. (5) Oleh sebab itu, mencegah kerusakan jauh lebih murah dibandingkan memulihkannya.`;

export const pemahamanBacaanMenulis: Question[] = [
  {
    id: "pbm-001",
    sectionId: "pemahaman-bacaan-menulis",
    passage: teksKopi,
    question: "Gagasan utama teks tersebut adalah ...",
    options: [
      "Konsumsi kopi masyarakat Indonesia meningkat tajam.",
      "Kedai kopi independen tumbuh karena berfungsi sebagai ruang kerja alternatif, dengan konsekuensi tersendiri.",
      "Pekerja lepas kesulitan menemukan tempat bekerja yang nyaman.",
      "Pemilik kedai kopi rugi karena pengunjung terlalu lama duduk.",
      "Survei terhadap 1.200 pengunjung kedai menunjukkan hasil yang mengejutkan.",
    ],
    correctAnswer: 1,
    explanation:
      "Kalimat (2) memuat inti argumen dan kalimat (4)–(5) memaparkan konsekuensinya. Pilihan lain hanya merupakan detail pendukung.",
    difficulty: "medium",
    topic: "Ide utama",
    source: SRC,
  },
  {
    id: "pbm-002",
    sectionId: "pemahaman-bacaan-menulis",
    passage: teksKopi,
    question: "Simpulan yang dapat ditarik dari kalimat (5) adalah ...",
    options: [
      "Kedai kopi sebaiknya melarang pengunjung membawa laptop.",
      "Pendapatan per meja berpotensi menurun meskipun jumlah pengunjung tetap.",
      "Pengunjung yang bekerja selalu memesan lebih dari satu minuman.",
      "Jumlah kedai kopi akan berkurang pada tahun berikutnya.",
      "Internet cepat merupakan pemborosan bagi pemilik kedai.",
    ],
    correctAnswer: 1,
    explanation:
      "Perputaran meja yang melambat dengan konsumsi satu gelas per pengunjung berimplikasi pada turunnya pendapatan per meja per satuan waktu. Pilihan lain berlebihan atau tidak didukung teks.",
    difficulty: "hard",
    topic: "Inferensi",
    source: SRC,
  },
  {
    id: "pbm-003",
    sectionId: "pemahaman-bacaan-menulis",
    passage: teksKopi,
    question: "Kata 'Fenomena ini' pada kalimat (2) merujuk pada ...",
    options: [
      "kebutuhan ruang kerja alternatif",
      "naiknya konsumsi kopi",
      "pertumbuhan pesat kedai kopi independen",
      "kota-kota menengah di Indonesia",
      "kehadiran pekerja lepas",
    ],
    correctAnswer: 2,
    explanation:
      "Rujukan anaforis mengarah pada informasi kalimat sebelumnya, yaitu pertumbuhan pesat kedai kopi independen.",
    difficulty: "easy",
    topic: "Rujukan",
    source: SRC,
  },
  {
    id: "pbm-004",
    sectionId: "pemahaman-bacaan-menulis",
    question:
      "Kalimat yang paling efektif adalah ...",
    options: [
      "Berdasarkan hasil penelitian tersebut menunjukkan bahwa kualitas udara membaik.",
      "Hasil penelitian tersebut menunjukkan bahwa kualitas udara membaik.",
      "Dari hasil penelitian tersebut menunjukkan bahwa adanya kualitas udara yang membaik.",
      "Hasil daripada penelitian tersebut adalah menunjukkan kualitas udara membaik.",
      "Berdasarkan daripada hasil penelitian tersebut kualitas udara yang membaik.",
    ],
    correctAnswer: 1,
    explanation:
      "Kalimat efektif memerlukan subjek yang jelas. Awalan 'Berdasarkan'/'Dari' membuat subjek hilang, sedangkan 'daripada' pada konteks ini mubazir.",
    difficulty: "medium",
    topic: "Kalimat efektif",
    source: SRC,
  },
  {
    id: "pbm-005",
    sectionId: "pemahaman-bacaan-menulis",
    passage: teksMangrove,
    question: "Simpulan teks tersebut terdapat pada kalimat ...",
    options: ["(1)", "(2)", "(3)", "(4)", "(5)"],
    correctAnswer: 4,
    explanation:
      "Kalimat (5) diawali konjungsi simpulan 'oleh sebab itu' dan merangkum konsekuensi dari kalimat (1)–(4).",
    difficulty: "easy",
    topic: "Struktur teks",
    source: SRC,
  },
  {
    id: "pbm-006",
    sectionId: "pemahaman-bacaan-menulis",
    passage: teksMangrove,
    question: "Informasi yang TIDAK sesuai dengan teks adalah ...",
    options: [
      "Sebagian besar karbon mangrove tersimpan di sedimen.",
      "Pembukaan tambak melepaskan karbon yang tersimpan lama.",
      "Penanaman bibit baru langsung memulihkan simpanan karbon sedimen.",
      "Mangrove menyimpan karbon lebih banyak daripada hutan tropis daratan pada luasan sama.",
      "Pencegahan kerusakan lebih murah daripada pemulihan.",
    ],
    correctAnswer: 2,
    explanation:
      "Kalimat (4) menyatakan pemulihan simpanan karbon sedimen memerlukan waktu jauh lebih lama, bukan langsung pulih.",
    difficulty: "medium",
    topic: "Informasi tersurat",
    source: SRC,
  },
  {
    id: "pbm-007",
    sectionId: "pemahaman-bacaan-menulis",
    passage: teksMangrove,
    question:
      "Jika sebuah daerah merehabilitasi 100 hektare mangrove bekas tambak, hal yang paling mungkin terjadi berdasarkan teks adalah ...",
    options: [
      "Simpanan karbon kembali seperti semula dalam satu tahun.",
      "Tutupan vegetasi pulih lebih dahulu daripada simpanan karbon sedimennya.",
      "Karbon sedimen tidak akan pernah pulih sama sekali.",
      "Emisi karbon daerah tersebut naik akibat rehabilitasi.",
      "Rehabilitasi tidak berpengaruh terhadap ekosistem.",
    ],
    correctAnswer: 1,
    explanation:
      "Teks menyatakan penanaman dapat memulihkan tutupan, sementara pemulihan karbon sedimen jauh lebih lambat. Maka tutupan pulih lebih dahulu.",
    difficulty: "hard",
    topic: "Inferensi",
    source: SRC,
  },
  {
    id: "pbm-008",
    sectionId: "pemahaman-bacaan-menulis",
    question:
      "Perbaikan yang tepat untuk kalimat 'Meskipun harga bahan baku naik, namun produsen tidak menaikkan harga jual.' adalah ...",
    options: [
      "Menghapus kata 'meskipun'",
      "Menghapus kata 'namun'",
      "Mengganti 'namun' dengan 'tetapi'",
      "Menambahkan tanda koma sebelum 'namun'",
      "Mengganti 'meskipun' dengan 'karena'",
    ],
    correctAnswer: 1,
    explanation:
      "Konjungsi subordinatif 'meskipun' tidak boleh diikuti konjungsi 'namun' pada induk kalimat karena menimbulkan kalimat rancu tanpa induk yang jelas.",
    difficulty: "medium",
    topic: "Tata bahasa",
    source: SRC,
  },
  {
    id: "pbm-009",
    sectionId: "pemahaman-bacaan-menulis",
    passage: teksKopi,
    question: "Kalimat yang berisi data pendukung argumen penulis adalah ...",
    options: ["(1)", "(2)", "(3)", "(4)", "(5)"],
    correctAnswer: 2,
    explanation:
      "Kalimat (3) menyajikan angka survei (46 persen) sebagai bukti empiris untuk klaim pada kalimat (2).",
    difficulty: "easy",
    topic: "Struktur teks",
    source: SRC,
  },
  {
    id: "pbm-010",
    sectionId: "pemahaman-bacaan-menulis",
    question:
      "Kalimat yang memerlukan perbaikan penggunaan kata depan adalah ...",
    options: [
      "Ia tinggal di Bandung sejak kecil.",
      "Rapat itu dihadiri oleh seluruh pengurus.",
      "Buku itu terletak diatas meja belajar.",
      "Kami berdiskusi tentang perubahan iklim.",
      "Mereka berangkat ke Surabaya besok pagi.",
    ],
    correctAnswer: 2,
    explanation:
      "Kata depan 'di' yang menunjukkan tempat ditulis terpisah: 'di atas meja', bukan 'diatas'.",
    difficulty: "easy",
    topic: "Tata bahasa",
    source: SRC,
  },
  {
    id: "pbm-011",
    sectionId: "pemahaman-bacaan-menulis",
    passage: teksMangrove,
    question: "Hubungan antara kalimat (3) dan kalimat (4) adalah ...",
    options: [
      "Sebab dan akibat",
      "Masalah dan upaya penanganannya yang terbatas",
      "Contoh dan generalisasi",
      "Pertentangan waktu",
      "Perbandingan dua objek yang setara",
    ],
    correctAnswer: 1,
    explanation:
      "Kalimat (3) memaparkan masalah (pelepasan karbon), kalimat (4) memaparkan upaya rehabilitasi beserta keterbatasannya.",
    difficulty: "medium",
    topic: "Hubungan paragraf",
    source: SRC,
  },
  {
    id: "pbm-012",
    sectionId: "pemahaman-bacaan-menulis",
    question:
      "Judul yang paling tepat untuk teks tentang penyimpanan karbon mangrove dan risiko konversi tambak adalah ...",
    options: [
      "Cara Menanam Bibit Mangrove yang Benar",
      "Tambak Udang dan Ekonomi Pesisir",
      "Karbon Biru Mangrove dan Mahalnya Biaya Pemulihan",
      "Sejarah Hutan Tropis Indonesia",
      "Perbandingan Sedimen dan Batang Pohon",
    ],
    correctAnswer: 2,
    explanation:
      "Judul harus mencakup topik (simpanan karbon mangrove) dan sudut pandang penulis (pemulihan mahal/lambat).",
    difficulty: "medium",
    topic: "Ide utama",
    source: SRC,
  },
];
