import type { Question } from "@/lib/types";

const SRC = "Soal latihan original SNBT Simulator";

export const pengetahuanKuantitatif: Question[] = [
  {
    id: "pk-001",
    sectionId: "pengetahuan-kuantitatif",
    question:
      "Harga sebuah barang dinaikkan 20%, lalu diberi diskon 20% dari harga baru. Dibandingkan harga awal, harga akhir barang tersebut ...",
    options: ["sama", "naik 4%", "turun 4%", "turun 2%", "naik 2%"],
    correctAnswer: 2,
    explanation:
      "Harga akhir = 1,2 × 0,8 = 0,96 dari harga awal, artinya turun 4%.",
    difficulty: "easy",
    topic: "Persentase",
    source: SRC,
  },
  {
    id: "pk-002",
    sectionId: "pengetahuan-kuantitatif",
    question:
      "Rata-rata nilai 10 siswa adalah 72. Setelah satu siswa baru bergabung, rata-rata menjadi 73. Nilai siswa baru tersebut adalah ...",
    options: ["73", "78", "80", "83", "85"],
    correctAnswer: 3,
    explanation:
      "Total awal 720. Total baru = 11 × 73 = 803. Nilai siswa baru = 803 − 720 = 83.",
    difficulty: "easy",
    topic: "Statistika",
    source: SRC,
  },
  {
    id: "pk-003",
    sectionId: "pengetahuan-kuantitatif",
    question: "Jika x + 1/x = 5, maka nilai x² + 1/x² adalah ...",
    options: ["21", "22", "23", "24", "25"],
    correctAnswer: 2,
    explanation:
      "(x + 1/x)² = x² + 2 + 1/x² = 25, sehingga x² + 1/x² = 25 − 2 = 23.",
    difficulty: "medium",
    topic: "Aljabar",
    source: SRC,
  },
  {
    id: "pk-004",
    sectionId: "pengetahuan-kuantitatif",
    question:
      "Sebuah kotak berisi 4 bola merah dan 6 bola biru. Dua bola diambil sekaligus secara acak. Peluang keduanya berwarna sama adalah ...",
    options: ["1/3", "7/15", "8/15", "3/5", "2/3"],
    correctAnswer: 1,
    explanation:
      "Total cara C(10,2)=45. Dua merah C(4,2)=6, dua biru C(6,2)=15, jumlah 21. Peluang = 21/45 = 7/15.",
    difficulty: "medium",
    topic: "Probabilitas",
    source: SRC,
  },
  {
    id: "pk-005",
    sectionId: "pengetahuan-kuantitatif",
    question:
      "Perbandingan uang Ani dan Budi adalah 3 : 5. Setelah Ani menerima Rp60.000, perbandingannya menjadi 3 : 4. Uang Budi adalah ...",
    options: ["Rp300.000", "Rp400.000", "Rp450.000", "Rp500.000", "Rp600.000"],
    correctAnswer: 1,
    explanation:
      "Misal Ani 3k, Budi 5k. (3k+60.000)/5k = 3/4 → 12k + 240.000 = 15k → k = 80.000. Budi = 5k = Rp400.000.",
    difficulty: "medium",
    topic: "Perbandingan",
    source: SRC,
  },
  {
    id: "pk-006",
    sectionId: "pengetahuan-kuantitatif",
    question:
      "Sebuah persegi panjang memiliki keliling 44 cm dan luas 105 cm². Selisih panjang dan lebarnya adalah ...",
    options: ["2 cm", "4 cm", "6 cm", "8 cm", "10 cm"],
    correctAnswer: 3,
    explanation:
      "p + l = 22 dan p·l = 105 → p dan l adalah 15 dan 7. Selisihnya 8 cm.",
    difficulty: "medium",
    topic: "Geometri",
    source: SRC,
  },
  {
    id: "pk-007",
    sectionId: "pengetahuan-kuantitatif",
    question:
      "Data: 4, 7, 7, 9, 12, 15. Manakah pernyataan yang benar?",
    options: [
      "Median lebih besar daripada rata-rata",
      "Modus sama dengan median",
      "Rata-rata lebih besar daripada median",
      "Jangkauan data adalah 12",
      "Median adalah 9",
    ],
    correctAnswer: 2,
    explanation:
      "Rata-rata = 54/6 = 9; median = (7+9)/2 = 8. Jadi rata-rata > median. Jangkauan = 15 − 4 = 11, modus = 7.",
    difficulty: "medium",
    topic: "Statistika",
    source: SRC,
  },
  {
    id: "pk-008",
    sectionId: "pengetahuan-kuantitatif",
    question:
      "Dua pekerja menyelesaikan sebuah proyek dalam 12 hari jika bekerja bersama. Jika pekerja pertama sendirian butuh 20 hari, pekerja kedua sendirian membutuhkan ...",
    options: ["24 hari", "28 hari", "30 hari", "32 hari", "36 hari"],
    correctAnswer: 2,
    explanation:
      "1/12 − 1/20 = (5 − 3)/60 = 2/60 = 1/30. Jadi pekerja kedua butuh 30 hari.",
    difficulty: "medium",
    topic: "Aritmetika",
    source: SRC,
  },
  {
    id: "pk-009",
    sectionId: "pengetahuan-kuantitatif",
    question:
      "Jika 2^(x+1) = 32, maka nilai dari 3^(x−1) adalah ...",
    options: ["3", "9", "27", "81", "1"],
    correctAnswer: 2,
    explanation: "2^(x+1) = 2^5 → x = 4. Maka 3^(4−1) = 3³ = 27.",
    difficulty: "easy",
    topic: "Eksponen",
    source: SRC,
  },
  {
    id: "pk-010",
    sectionId: "pengetahuan-kuantitatif",
    question:
      "Diketahui x dan y bilangan bulat positif dengan x + y = 12. Nilai maksimum dari xy adalah ...",
    options: ["32", "35", "36", "40", "44"],
    correctAnswer: 2,
    explanation:
      "Hasil kali maksimum tercapai saat kedua bilangan sedekat mungkin, yaitu 6 dan 6, sehingga xy = 36.",
    difficulty: "easy",
    topic: "Aljabar",
    source: SRC,
  },
  {
    id: "pk-011",
    sectionId: "pengetahuan-kuantitatif",
    question:
      "Sebuah tabung berjari-jari 7 cm dan tinggi 10 cm diisi air setinggi 6 cm. Berapa persen volume tabung yang terisi?",
    options: ["50%", "55%", "60%", "65%", "70%"],
    correctAnswer: 2,
    explanation:
      "Karena luas alas sama, persentase volume = 6/10 = 60%. Jari-jari tidak memengaruhi rasio.",
    difficulty: "easy",
    topic: "Geometri",
    source: SRC,
  },
  {
    id: "pk-012",
    sectionId: "pengetahuan-kuantitatif",
    question:
      "Manakah yang bernilai paling besar di antara pilihan berikut jika 0 < a < 1?",
    options: ["a²", "a³", "√a", "a", "a⁴"],
    correctAnswer: 2,
    explanation:
      "Untuk 0 < a < 1, semakin besar pangkatnya semakin kecil nilainya, sedangkan akar kuadrat (pangkat 1/2) menghasilkan nilai terbesar.",
    difficulty: "medium",
    topic: "Perbandingan bilangan",
    source: SRC,
  },
  {
    id: "pk-013",
    sectionId: "pengetahuan-kuantitatif",
    question:
      "Sebuah kelas terdiri atas 30 siswa. Sebanyak 18 siswa gemar basket, 15 siswa gemar voli, dan 5 siswa tidak gemar keduanya. Jumlah siswa yang gemar keduanya adalah ...",
    options: ["6", "7", "8", "9", "10"],
    correctAnswer: 2,
    explanation:
      "Gemar minimal satu = 30 − 5 = 25. |A∩B| = 18 + 15 − 25 = 8.",
    difficulty: "medium",
    topic: "Himpunan",
    source: SRC,
  },
  {
    id: "pk-014",
    sectionId: "pengetahuan-kuantitatif",
    question:
      "Kecepatan rata-rata sebuah kendaraan yang menempuh 60 km pertama dengan 60 km/jam dan 60 km berikutnya dengan 30 km/jam adalah ...",
    options: ["35 km/jam", "40 km/jam", "45 km/jam", "48 km/jam", "50 km/jam"],
    correctAnswer: 1,
    explanation:
      "Waktu total = 1 + 2 = 3 jam untuk 120 km, sehingga kecepatan rata-rata = 40 km/jam (bukan rata-rata aritmetika 45).",
    difficulty: "hard",
    topic: "Aritmetika kontekstual",
    source: SRC,
  },
  {
    id: "pk-015",
    sectionId: "pengetahuan-kuantitatif",
    question:
      "Jika himpunan penyelesaian dari x² − 5x + 6 < 0 adalah interval (a, b), maka nilai a + b adalah ...",
    options: ["3", "4", "5", "6", "7"],
    correctAnswer: 2,
    explanation:
      "x² − 5x + 6 = (x−2)(x−3) < 0 berlaku untuk 2 < x < 3. Maka a + b = 5.",
    difficulty: "medium",
    topic: "Pertidaksamaan",
    source: SRC,
  },
];
