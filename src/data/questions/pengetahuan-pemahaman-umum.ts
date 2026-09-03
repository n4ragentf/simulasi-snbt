import type { Question } from "@/lib/types";

const SRC = "Soal latihan original SNBT Simulator";

export const pengetahuanPemahamanUmum: Question[] = [
  {
    id: "ppu-001",
    sectionId: "pengetahuan-pemahaman-umum",
    question:
      "Kata 'mitigasi' dalam kalimat 'Pemerintah daerah menyusun langkah mitigasi banjir tahunan' bermakna ...",
    options: [
      "Penanggulangan setelah bencana terjadi",
      "Upaya mengurangi risiko dan dampak bencana",
      "Pemetaan wilayah rawan bencana",
      "Penggantian kerugian korban bencana",
      "Peringatan dini kepada masyarakat",
    ],
    correctAnswer: 1,
    explanation:
      "Mitigasi berarti tindakan untuk mengurangi risiko dan dampak suatu bencana, dilakukan sebelum bencana terjadi. Peringatan dini adalah bagian kecil, bukan definisi.",
    difficulty: "easy",
    topic: "Makna kata",
    source: SRC,
  },
  {
    id: "ppu-002",
    sectionId: "pengetahuan-pemahaman-umum",
    question: "Lawan makna (antonim) yang paling tepat untuk kata 'konvergen' adalah ...",
    options: ["Sejajar", "Divergen", "Konsisten", "Konkret", "Kohesif"],
    correctAnswer: 1,
    explanation:
      "Konvergen berarti memusat atau menuju satu titik; antonimnya divergen, yaitu memencar atau menyebar.",
    difficulty: "easy",
    topic: "Antonim",
    source: SRC,
  },
  {
    id: "ppu-003",
    sectionId: "pengetahuan-pemahaman-umum",
    question:
      "Penulisan yang sesuai kaidah bahasa Indonesia baku terdapat pada kalimat ...",
    options: [
      "Analisa data tersebut menunjukan kenaikan yang significant.",
      "Analisis data tersebut menunjukkan kenaikan yang signifikan.",
      "Analisa data tersebut menunjukkan kenaikan yang signifikan.",
      "Analisis data tersebut menunjukan kenaikan yang siginifikan.",
      "Analisis data itu menunjukan kenaikkan yang signifikan.",
    ],
    correctAnswer: 1,
    explanation:
      "Bentuk baku: 'analisis' (bukan analisa), 'menunjukkan' (dari tunjuk + kan dengan peluluhan ganda k), dan 'signifikan'.",
    difficulty: "medium",
    topic: "Ejaan",
    source: SRC,
  },
  {
    id: "ppu-004",
    sectionId: "pengetahuan-pemahaman-umum",
    passage:
      "Bank sentral menahan suku bunga acuan pada level saat ini. Keputusan tersebut diambil untuk menjaga stabilitas nilai tukar di tengah ketidakpastian global, sekaligus memberi ruang bagi pemulihan permintaan domestik.",
    question: "Hubungan antara kalimat pertama dan kalimat kedua pada teks tersebut adalah ...",
    options: [
      "Pertentangan",
      "Perbandingan",
      "Kebijakan dan alasannya",
      "Urutan waktu",
      "Contoh dan generalisasi",
    ],
    correctAnswer: 2,
    explanation:
      "Kalimat kedua diawali penanda tujuan 'untuk' yang menjelaskan alasan atau tujuan kebijakan pada kalimat pertama.",
    difficulty: "medium",
    topic: "Hubungan antarkalimat",
    source: SRC,
  },
  {
    id: "ppu-005",
    sectionId: "pengetahuan-pemahaman-umum",
    question:
      "Kata bercetak miring pada kalimat 'Program itu dinilai *marginal* pengaruhnya terhadap kesejahteraan petani' dapat digantikan oleh ...",
    options: ["besar", "menyeluruh", "sangat kecil", "tidak menentu", "berkelanjutan"],
    correctAnswer: 2,
    explanation:
      "Marginal dalam konteks pengaruh berarti sangat kecil atau nyaris tak berarti.",
    difficulty: "medium",
    topic: "Makna kontekstual",
    source: SRC,
  },
  {
    id: "ppu-006",
    sectionId: "pengetahuan-pemahaman-umum",
    question: "Padanan kata 'sustainable' yang tepat dalam ragam ilmiah bahasa Indonesia adalah ...",
    options: ["bertahan", "berkelanjutan", "berkesinambungan waktu", "abadi", "tetap"],
    correctAnswer: 1,
    explanation:
      "Istilah baku yang digunakan dalam ragam ilmiah dan kebijakan adalah 'berkelanjutan' (pembangunan berkelanjutan).",
    difficulty: "easy",
    topic: "Kosakata",
    source: SRC,
  },
  {
    id: "ppu-007",
    sectionId: "pengetahuan-pemahaman-umum",
    question:
      "'Sejak dua dekade terakhir, praktik pertanian intensif telah *mengikis* kesuburan tanah.' Makna kata bercetak miring adalah ...",
    options: [
      "memperbaiki secara perlahan",
      "mengurangi sedikit demi sedikit",
      "menghancurkan seketika",
      "memindahkan ke tempat lain",
      "menghitung ulang",
    ],
    correctAnswer: 1,
    explanation:
      "Mengikis secara kiasan berarti mengurangi atau menghabiskan sedikit demi sedikit secara berangsur.",
    difficulty: "easy",
    topic: "Makna kontekstual",
    source: SRC,
  },
  {
    id: "ppu-008",
    sectionId: "pengetahuan-pemahaman-umum",
    question: "Penggunaan tanda baca yang tepat terdapat pada kalimat ...",
    options: [
      "Ia membawa tiga benda: buku, pena dan penggaris.",
      "Ia membawa tiga benda; buku, pena, dan penggaris.",
      "Ia membawa tiga benda: buku, pena, dan penggaris.",
      "Ia membawa tiga benda, buku, pena, dan penggaris.",
      "Ia membawa: tiga benda buku, pena, dan penggaris.",
    ],
    correctAnswer: 2,
    explanation:
      "Tanda titik dua digunakan setelah pernyataan lengkap yang diikuti perincian, dan tanda koma dipakai sebelum 'dan' pada perincian tiga unsur atau lebih.",
    difficulty: "medium",
    topic: "Tanda baca",
    source: SRC,
  },
  {
    id: "ppu-009",
    sectionId: "pengetahuan-pemahaman-umum",
    question:
      "Istilah 'inklusif' pada frasa 'pertumbuhan ekonomi yang inklusif' berarti pertumbuhan yang ...",
    options: [
      "berlangsung sangat cepat",
      "dirasakan manfaatnya oleh seluruh lapisan masyarakat",
      "bergantung pada investasi asing",
      "berfokus pada sektor industri",
      "diukur dengan indikator tunggal",
    ],
    correctAnswer: 1,
    explanation:
      "Inklusif berarti merangkul semua pihak; pertumbuhan inklusif adalah pertumbuhan yang manfaatnya menjangkau seluruh lapisan masyarakat.",
    difficulty: "medium",
    topic: "Konsep",
    source: SRC,
  },
  {
    id: "ppu-010",
    sectionId: "pengetahuan-pemahaman-umum",
    question:
      "Kalimat yang mengandung hubungan sebab-akibat secara eksplisit adalah ...",
    options: [
      "Curah hujan meningkat, sedangkan debit sungai stabil.",
      "Curah hujan meningkat sehingga debit sungai naik tajam.",
      "Curah hujan meningkat, bahkan angin bertiup kencang.",
      "Curah hujan meningkat, kemudian warga mengungsi.",
      "Curah hujan meningkat atau kemarau berkepanjangan.",
    ],
    correctAnswer: 1,
    explanation:
      "Konjungsi 'sehingga' secara eksplisit menandai akibat. 'Kemudian' hanya menandai urutan waktu, bukan kausalitas.",
    difficulty: "easy",
    topic: "Hubungan informasi",
    source: SRC,
  },
  {
    id: "ppu-011",
    sectionId: "pengetahuan-pemahaman-umum",
    question:
      "Bentukan kata yang tepat dari 'per- + tanggung + jawab + -an' adalah ...",
    options: ["pertanggung jawaban", "pertanggungan jawab", "pertanggungjawaban", "per-tanggungjawaban", "pertanggung-jawaban"],
    correctAnswer: 2,
    explanation:
      "Gabungan kata yang mendapat awalan dan akhiran sekaligus ditulis serangkai: pertanggungjawaban.",
    difficulty: "medium",
    topic: "Morfologi",
    source: SRC,
  },
  {
    id: "ppu-012",
    sectionId: "pengetahuan-pemahaman-umum",
    question:
      "'Temuan itu bersifat *tentatif* sehingga masih memerlukan verifikasi lanjutan.' Kata bercetak miring bermakna ...",
    options: ["pasti", "sementara", "rahasia", "penting", "resmi"],
    correctAnswer: 1,
    explanation: "Tentatif berarti belum pasti atau bersifat sementara, sejalan dengan perlunya verifikasi.",
    difficulty: "easy",
    topic: "Makna kata",
    source: SRC,
  },
  {
    id: "ppu-013",
    sectionId: "pengetahuan-pemahaman-umum",
    question:
      "Hubungan makna kata 'kausalitas' dan 'korelasi' paling tepat dijelaskan sebagai ...",
    options: [
      "Dua istilah yang bersinonim penuh",
      "Kausalitas menyatakan sebab-akibat, korelasi hanya menyatakan keterkaitan",
      "Korelasi selalu membuktikan kausalitas",
      "Kausalitas hanya berlaku pada ilmu sosial",
      "Korelasi adalah bentuk kuat dari kausalitas",
    ],
    correctAnswer: 1,
    explanation:
      "Korelasi menunjukkan hubungan statistik antarvariabel, sedangkan kausalitas menyatakan bahwa satu variabel menyebabkan variabel lain. Korelasi tidak otomatis menunjukkan kausalitas.",
    difficulty: "hard",
    topic: "Konsep",
    source: SRC,
  },
  {
    id: "ppu-014",
    sectionId: "pengetahuan-pemahaman-umum",
    question: "Kalimat berikut yang menggunakan kata serapan secara baku adalah ...",
    options: [
      "Kwalitas produk itu sudah teruji di laboratorium.",
      "Kualitas produk itu sudah teruji di laboratorium.",
      "Kwalitas produk itu sudah teruji di labolatorium.",
      "Kualitas produk itu sudah teruji di labolatorium.",
      "Qualitas produk itu sudah teruji di laboratorium.",
    ],
    correctAnswer: 1,
    explanation: "Bentuk baku adalah 'kualitas' dan 'laboratorium'.",
    difficulty: "easy",
    topic: "Ejaan",
    source: SRC,
  },
  {
    id: "ppu-015",
    sectionId: "pengetahuan-pemahaman-umum",
    passage:
      "Digitalisasi arsip memungkinkan dokumen langka diakses tanpa merusak fisiknya. Namun, tanpa strategi penyimpanan jangka panjang, berkas digital justru lebih rapuh daripada kertas karena format dan perangkat pembacanya cepat usang.",
    question: "Gagasan utama teks tersebut adalah ...",
    options: [
      "Kertas lebih awet daripada berkas digital dalam segala kondisi.",
      "Digitalisasi arsip bermanfaat, tetapi menuntut strategi pelestarian jangka panjang.",
      "Dokumen langka sebaiknya tidak pernah didigitalkan.",
      "Perangkat pembaca berkas digital berkembang sangat cepat.",
      "Akses publik terhadap arsip harus dibatasi.",
    ],
    correctAnswer: 1,
    explanation:
      "Teks menyampaikan dua sisi: manfaat digitalisasi dan syaratnya. Gagasan utama merangkum keduanya, bukan hanya salah satu sisi.",
    difficulty: "medium",
    topic: "Ide pokok",
    source: SRC,
  },
];
