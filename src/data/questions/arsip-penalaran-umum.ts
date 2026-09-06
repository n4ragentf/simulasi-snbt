import type { Question } from "@/lib/types";

/** Soal arsip SNBT/UTBK yang diunggah pengguna (dengan pembahasan resmi). */
export const arsipPenalaranUmum: Question[] = [
  {
    id: "pu-a01",
    sectionId: "penalaran-umum",
    passage:
      "Ketika festival seni tradisional diadakan di Pulau ABC, jumlah wisatawan meningkat dibandingkan ketika kegiatan tersebut tidak dilakukan. Hal serupa terjadi ketika pameran lukisan diadakan di Pulau ABC. Namun, ketika Pulau ABC mengadakan perayaan adat daerah, jumlah wisatawan yang datang tidak mengalami peningkatan.",
    question:
      "Berdasarkan informasi di atas, manakah dari pernyataan berikut yang PALING MUNGKIN BENAR?",
    options: [
      "Meskipun pameran lukisan diadakan di pulau lain, jumlah kunjungan wisatawan ke Pulau ABC tetap meningkat.",
      "Jumlah wisatawan akan mengalami penurunan ketika tidak diadakan kegiatan pameran lukisan di Pulau ABC.",
      "Mengadakan festival seni tradisional atau pameran lukisan di pulau lain akan menurunkan jumlah wisatawan di Pulau ABC.",
      "Mengadakan perayaan adat meningkatkan jumlah wisatawan dibandingkan dengan tidak mengadakannya.",
      "Mengadakan festival seni tradisional atau pameran lukisan di Pulau ABC meningkatkan jumlah kunjungan wisatawan.",
    ],
    correctAnswer: 4,
    explanation:
      "Yang terbukti menaikkan kunjungan hanyalah festival seni tradisional dan pameran lukisan di Pulau ABC, sedangkan perayaan adat tidak. Maka simpulan paling mungkin benar adalah kedua kegiatan tersebut meningkatkan kunjungan wisatawan.",
    difficulty: "medium",
    topic: "Simpulan logis",
    source: "SNBT 2025",
  },
  {
    id: "pu-a02",
    sectionId: "penalaran-umum",
    passage:
      "Banyaknya rumah kosong yang terbengkalai di suatu kampung menyebabkan rumah ditumbuhi tanaman liar. Banyaknya tanaman liar menyebabkan munculnya banyak nyamuk. Meskipun pengurus kampung telah melakukan sosialisasi pola hidup sehat, angka penyakit malaria tidak menurun karena banyaknya nyamuk di kampung tersebut.",
    question: "Berdasarkan informasi di atas, manakah pernyataan di bawah ini yang BENAR?",
    options: [
      "Meningkatnya kasus malaria disebabkan oleh banyaknya rumah kosong terbengkalai.",
      "Lebatnya tanaman liar disebabkan kurang tepatnya sosialisasi pola hidup sehat oleh pengurus kampung.",
      "Banyaknya nyamuk menyebabkan pengurus kampung melakukan sosialisasi pola hidup sehat.",
      "Adanya sosialisasi pola hidup sehat menjadikan banyak rumah kosong terbengkalai.",
      "Banyaknya nyamuk di kampung tersebut disebabkan oleh sosialisasi pola hidup sehat.",
    ],
    correctAnswer: 0,
    explanation:
      "Rantai sebabnya: rumah terbengkalai → tanaman liar → banyak nyamuk → malaria tidak menurun. Jadi meningkatnya kasus malaria berpangkal pada banyaknya rumah kosong terbengkalai.",
    difficulty: "medium",
    topic: "Hubungan sebab-akibat",
    source: "SNBT 2025",
  },
  {
    id: "pu-a03",
    sectionId: "penalaran-umum",
    passage:
      "Listrik banyak digunakan orang untuk pencahayaan di dalam ruangan dan menjadi sarana menggerakkan mesin di pabrik. Namun, penggunaan listrik yang berlebihan dapat membebani anggaran rumah tangga dan meningkatkan polusi udara.",
    question: "Berdasarkan informasi tersebut, manakah pernyataan berikut yang PASTI SALAH?",
    options: [
      "Polusi udara meningkat karena penggunaan listrik yang berlebihan.",
      "Anggaran rumah tangga meningkat karena penggunaan listrik.",
      "Listrik dapat menyebabkan orang dapat mengatur suhu ruangan.",
      "Pengguna peralatan elektronik mungkin tidak menggunakan listrik.",
      "Penggunaan listrik berlebihan tidak menyebabkan polusi udara dan air.",
    ],
    correctAnswer: 4,
    explanation:
      "Teks menyebut penggunaan listrik berlebihan meningkatkan polusi udara, sehingga pernyataan bahwa hal itu tidak menyebabkan polusi udara pasti salah.",
    difficulty: "medium",
    topic: "Simpulan logis",
    source: "SNBT 2025",
  },
  {
    id: "pu-a04",
    sectionId: "penalaran-umum",
    passage:
      "Taman bermain yang selalu ramai dihibahkan kepada warga setempat untuk dikelola guna menambah pemasukan warga. Setelah dikelola selama satu tahun, jumlah pengunjung menurun dan banyak penjual makanan ringan yang tutup.",
    question:
      "Manakah pernyataan yang PALING MUNGKIN menjelaskan perbedaan kedua kondisi tersebut?",
    options: [
      "Warga setempat tidak melakukan penggantian fasilitas bermain yang sudah rusak.",
      "Setelah dikelola warga, tidak dilakukan perbaikan layanan pada taman bermain.",
      "Taman bermain sering digunakan untuk kegiatan lain yang dapat merusak fasilitas.",
      "Pada awal warga mengelola taman tersebut, taman bermain dirawat secara berkala.",
      "Taman tersebut tidak pernah mendapatkan pengarahan dari dinas pariwisata setempat.",
    ],
    correctAnswer: 1,
    explanation:
      "Penjelasan paling menyeluruh atas turunnya pengunjung setelah pengalihan pengelolaan adalah tidak adanya perbaikan layanan pada taman bermain.",
    difficulty: "medium",
    topic: "Penjelasan fenomena",
    source: "SNBT 2025",
  },
  {
    id: "pu-a05",
    sectionId: "penalaran-umum",
    passage:
      "Remaja perkotaan mulai menyukai pakaian unik dengan warna kontras dan berkilau. Banyak di antara mereka mengenakannya sekadar untuk berjalan-jalan di pusat perbelanjaan. Para pengamat melihat hal tersebut memengaruhi perkembangan bisnis dunia fesyen.",
    question: "Manakah yang PALING MUNGKIN mendasari argumen pengamat tersebut?",
    options: [
      "Remaja kota menyalurkan ekspresinya melalui pakaian yang dikenakan.",
      "Pakaian dapat menjadi media peningkatan pengakuan terhadap remaja.",
      "Kegiatan remaja ibu kota tidak hanya dilakukan di pusat perbelanjaan.",
      "Para pengusaha di bidang fesyen mengamati kreasi pakaian remaja kota.",
      "Banyak toko yang menjual pakaian-pakaian unik khusus untuk remaja.",
    ],
    correctAnswer: 4,
    explanation:
      "Bukti bahwa selera remaja memengaruhi bisnis fesyen tampak dari banyaknya toko yang menjual pakaian unik khusus remaja.",
    difficulty: "medium",
    topic: "Asumsi argumen",
    source: "SNBT 2025",
  },
  {
    id: "pu-a06",
    sectionId: "penalaran-umum",
    passage:
      "Kehadiran sahabat di sekolah dapat mendukung proses belajar siswa. Seperti gula yang menambahkan rasa manis pada minuman, kehadiran sahabat memberi pengalaman menyenangkan dalam kehidupan sosial siswa. Jika hubungan dengan sahabat terjalin baik, kebahagiaan siswa dalam belajar meningkat sehingga motivasi belajarnya meningkat.",
    question:
      "Jika kehadiran sahabat disamakan dengan gula, manakah simpulan yang PALING MUNGKIN BENAR?",
    options: [
      "Kehadiran sahabat ibarat gula yang memberikan pengalaman menyenangkan saat di sekolah.",
      "Tingkat kebahagiaan siswa terus meningkat jika jumlah sahabatnya makin banyak.",
      "Makin banyak sahabat, makin banyak pengalaman yang menyenangkan di sekolah.",
      "Menurunnya kebahagiaan siswa hanya disebabkan oleh tidak hadirnya sahabat di sekolah.",
      "Jika siswa memiliki sahabat di sekolah, kebahagiaan siswa selama belajar akan meningkat.",
    ],
    correctAnswer: 2,
    explanation:
      "Analogi gula menekankan hubungan takaran: makin banyak gula makin manis. Maka makin banyak sahabat, makin banyak pengalaman menyenangkan di sekolah.",
    difficulty: "hard",
    topic: "Analogi",
    source: "SNBT 2024",
  },
  {
    id: "pu-a07",
    sectionId: "penalaran-umum",
    passage:
      "Eksploitasi minyak bumi di Pulau X menyebabkan kerusakan lingkungan. Kerusakan lingkungan ini mengakibatkan penurunan kualitas hidup masyarakat setempat. Meskipun belum pernah terjadi demonstrasi penolakan eksploitasi minyak bumi, banyak masyarakat tidak puas dengan kesejahteraan hidup mereka karena penurunan kualitas hidup tersebut.",
    question: "Berdasarkan informasi di atas, manakah pernyataan di bawah ini yang BENAR?",
    options: [
      "Masyarakat tidak puas dengan kesejahteraan hidup mereka walaupun terjadi eksploitasi minyak bumi di Pulau X.",
      "Kerusakan lingkungan terjadi karena demonstrasi penolakan eksploitasi minyak bumi.",
      "Penurunan kualitas hidup masyarakat menyebabkan demonstrasi penolakan eksploitasi minyak bumi.",
      "Eksploitasi minyak bumi di Pulau X menyebabkan penurunan kualitas hidup masyarakat setempat.",
      "Tidak adanya demonstrasi penolakan menyebabkan eksploitasi minyak bumi di Pulau X.",
    ],
    correctAnswer: 3,
    explanation:
      "Rantai sebabnya: eksploitasi → kerusakan lingkungan → penurunan kualitas hidup. Jadi eksploitasi menyebabkan penurunan kualitas hidup masyarakat.",
    difficulty: "easy",
    topic: "Hubungan sebab-akibat",
    source: "SNBT 2024",
  },
  {
    id: "pu-a08",
    sectionId: "penalaran-umum",
    passage:
      "Keberhasilan kampanye program kesehatan masyarakat dipengaruhi oleh partisipasi masyarakat dan efektivitas penyuluhan. Efektivitas penyuluhan terlihat dari pemahaman masyarakat terhadap informasi kesehatan dan penerapan perilaku sehat setelah penyuluhan. Partisipasi masyarakat yang tinggi meningkatkan dampak positif program kesehatan yang tercermin dalam meningkatnya pola hidup sehat dan tingginya kesadaran masyarakat.",
    question: "Jika terjadi peningkatan pola hidup sehat, manakah yang PALING MUNGKIN BENAR?",
    options: [
      "Partisipasi masyarakat dalam program kesehatan tinggi.",
      "Kampanye program kesehatan masyarakat berhasil dilaksanakan.",
      "Masyarakat paham terhadap informasi kesehatan yang disampaikan.",
      "Masyarakat menerapkan pola hidup sehat setelah penyuluhan.",
      "Penyuluhan kesehatan efektif dilaksanakan.",
    ],
    correctAnswer: 0,
    explanation:
      "Meningkatnya pola hidup sehat adalah cerminan dampak positif yang bersumber dari partisipasi masyarakat yang tinggi.",
    difficulty: "hard",
    topic: "Simpulan logis",
    source: "SNBT 2024",
  },
  {
    id: "pu-a09",
    sectionId: "penalaran-umum",
    passage:
      "Panggung kesenian tradisional, seperti lenong atau ludruk, merupakan wadah menanamkan nilai etika dan moral. Apabila panggung kesenian tradisional punah, orang mencari hiburan melalui panggung modern dan tidak terjadi regenerasi karena anak muda tidak lagi mengenalnya. Di sisi lain, gedung kesenian tradisional satu per satu mulai tutup dan para pelaku seninya beralih profesi.",
    question:
      "Apabila gedung kesenian tradisional satu per satu mulai tutup dan pelaku seninya beralih profesi, manakah simpulan yang PALING MUNGKIN BENAR?",
    options: [
      "Panggung kesenian tradisional telah punah.",
      "Panggung kesenian tradisional pernah punah.",
      "Panggung kesenian tradisional sudah pasti punah.",
      "Panggung kesenian tradisional pada akhirnya punah.",
      "Panggung kesenian tradisional tidak akan punah.",
    ],
    correctAnswer: 3,
    explanation:
      "Frasa 'satu per satu' menunjukkan proses bertahap, bukan kepunahan seketika, sehingga simpulannya panggung kesenian tradisional pada akhirnya punah.",
    difficulty: "hard",
    topic: "Simpulan logis",
    source: "SNBT 2023",
  },
  {
    id: "pu-a10",
    sectionId: "penalaran-umum",
    passage:
      "Kendaraan ojek online makin menjamur karena tarifnya dirasa lebih murah. Respons yang cepat membuat perjalanan lebih singkat dan waktunya dapat diprediksi. Akan tetapi, banyaknya kendaraan ojek online menimbulkan kepadatan di jalan raya sehingga kemacetan tidak dapat dihindari.",
    question: "Berdasarkan informasi tersebut, manakah pernyataan berikut yang PASTI BENAR?",
    options: [
      "Kemacetan di jalan terjadi karena tarif ojek online yang murah.",
      "Semua orang yang menggunakan ojek online tiba di tujuan tepat waktu.",
      "Moda transportasi lain memberikan tarif yang lebih mahal dibandingkan ojek online.",
      "Waktu perjalanan moda transportasi lain tidak dapat diprediksi.",
      "Beberapa permasalahan lalu lintas terjadi karena menjamurnya kendaraan ojek online.",
    ],
    correctAnswer: 4,
    explanation:
      "Teks menyatakan banyaknya ojek online menimbulkan kepadatan dan kemacetan, jadi sebagian masalah lalu lintas memang disebabkan menjamurnya ojek online.",
    difficulty: "easy",
    topic: "Simpulan logis",
    source: "SNBT 2023",
  },
  {
    id: "pu-a11",
    sectionId: "penalaran-umum",
    passage:
      "Tingkat kematian akibat serangan jantung makin meningkat akhir-akhir ini. Dokter menyebutkan saat ini banyak masyarakat mengonsumsi makanan berkolesterol tinggi sebagai pemicu serangan jantung.",
    question: "Manakah pernyataan berikut yang akan MEMPERLEMAH pendapat dokter tersebut?",
    options: [
      "Penyakit jantung bukan merupakan penyakit yang paling membahayakan.",
      "Masyarakat tidak menyadari pentingnya gaya hidup sehat.",
      "Makanan yang mengandung kolesterol tinggi meningkatkan risiko kematian.",
      "Produk-produk makanan yang sehat saat ini digemari oleh masyarakat.",
      "Masyarakat tidak memperhatikan kandungan gizi dalam makanannya.",
    ],
    correctAnswer: 3,
    explanation:
      "Pernyataan yang memperlemah adalah yang bertentangan dengan premis dokter. Jika makanan sehat justru digemari, klaim bahwa banyak orang mengonsumsi makanan berkolesterol tinggi menjadi lemah.",
    difficulty: "medium",
    topic: "Evaluasi argumen",
    source: "UTBK 2022",
  },
  {
    id: "pu-a12",
    sectionId: "penalaran-umum",
    passage:
      "Dalam beberapa bulan terakhir diberlakukan syarat bagi penumpang kereta api untuk menunjukkan tiket, KTP, dan surat keterangan sehat kepada petugas stasiun. Riki telah membeli tiket kereta api dan merasa dirinya sehat.",
    question:
      "Simpulannya adalah Riki dapat melakukan perjalanan dengan kereta api. Manakah pernyataan yang menggambarkan kualitas simpulan tersebut?",
    options: [
      "Simpulan tersebut pasti benar.",
      "Simpulan tersebut mungkin benar.",
      "Simpulan tersebut pasti salah.",
      "Simpulan tidak relevan dengan informasi yang diberikan.",
      "Simpulan tidak dapat dinilai karena informasi tidak cukup.",
    ],
    correctAnswer: 4,
    explanation:
      "Riki hanya merasa sehat dan tidak diketahui memiliki KTP serta surat keterangan sehat, sehingga informasi belum cukup untuk menilai simpulan.",
    difficulty: "easy",
    topic: "Kualitas simpulan",
    source: "UTBK 2022",
  },
  {
    id: "pu-a13",
    sectionId: "penalaran-umum",
    passage:
      "Seorang ekonom menyebutkan bahwa nilai ekspor negara W menurun karena kurangnya diversifikasi produk dan ketergantungan pada satu pasar ekspor.",
    question: "Pernyataan berikut yang MENDUKUNG pendapat pakar ekonomi tersebut adalah ...",
    options: [
      "Pemerintah telah mempromosikan produk unggulan negara W di pasar ekspor lainnya.",
      "Perusahaan di negara W memilih memproduksi barang yang laku di satu pasar ekspor pada tahun sebelumnya.",
      "Pemerintah telah menambah tarif impor untuk barang sejenis yang diproduksi di dalam negeri.",
      "Industri di negara W telah memperluas pasar domestik mereka.",
      "Inflasi mengakibatkan nilai ekspor negara W menurun.",
    ],
    correctAnswer: 1,
    explanation:
      "Memproduksi hanya barang yang laku di satu pasar menunjukkan minimnya diversifikasi dan ketergantungan pada satu pasar, sehingga mendukung pendapat ekonom.",
    difficulty: "medium",
    topic: "Evaluasi argumen",
    source: "Referensi SNBT",
  },
  {
    id: "pu-a14",
    sectionId: "penalaran-umum",
    passage:
      "Semua perusahaan otomotif sering melakukan inovasi. Perusahaan otomotif yang sering melakukan inovasi suka mengikuti pameran. Sebagian perusahaan otomotif yang mengikuti pameran tidak mempunyai pangsa pasar yang besar.",
    question: "Kesimpulan yang benar dari pernyataan di atas adalah ...",
    options: [
      "Sebagian perusahaan otomotif mempunyai pangsa pasar yang besar.",
      "Sebagian perusahaan otomotif suka mengikuti pameran dan tidak suka melakukan inovasi.",
      "Semua perusahaan otomotif tidak mempunyai pangsa pasar yang besar tetapi sering melakukan inovasi.",
      "Semua perusahaan otomotif tidak mempunyai pangsa pasar besar tetapi suka melakukan promosi.",
      "Semua perusahaan otomotif sering melakukan inovasi tetapi tidak suka mengikuti pameran.",
    ],
    correctAnswer: 0,
    explanation:
      "Karena hanya sebagian peserta pameran yang tidak memiliki pangsa pasar besar, maka sebagian perusahaan otomotif lainnya mempunyai pangsa pasar yang besar.",
    difficulty: "easy",
    topic: "Silogisme",
    source: "Referensi SNBT",
  },
];
