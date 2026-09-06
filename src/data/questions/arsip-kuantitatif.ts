import type { Question } from "@/lib/types";

/** Soal arsip UTBK/SNBT bidang kuantitatif yang diunggah pengguna. */
export const arsipKuantitatif: Question[] = [
  {
    id: "pk-a01",
    sectionId: "pengetahuan-kuantitatif",
    question: "Titik T(2, 17) terletak pada grafik fungsi f(x) = x² − rx + 33. Nilai r adalah ...",
    options: ["6", "8", "10", "12", "14"],
    correctAnswer: 2,
    explanation: "17 = 4 − 2r + 33 → 2r = 20 → r = 10.",
    difficulty: "easy",
    topic: "Fungsi kuadrat",
    source: "SNBT 2025",
  },
  {
    id: "pk-a02",
    sectionId: "pengetahuan-kuantitatif",
    question:
      "Grafik f(x) = 2x² − x − 1 dan g(x) = x² − 3x + 7 berpotongan di K(a, b) dan L(c, d). Jika b > d, nilai a adalah ...",
    options: ["−4", "−2", "0", "2", "4"],
    correctAnswer: 0,
    explanation:
      "2x² − x − 1 = x² − 3x + 7 → x² + 2x − 8 = 0 → x = 2 atau x = −4. Nilai fungsi di x = −4 adalah 35 dan di x = 2 adalah 5. Karena b > d, maka a = −4.",
    difficulty: "medium",
    topic: "Fungsi kuadrat",
    source: "SNBT 2025",
  },
  {
    id: "pk-a03",
    sectionId: "pengetahuan-kuantitatif",
    question:
      "Diketahui f(x) = x² + x − 2 dan g(x) = x + 2. Salah satu absis titik potong grafik f dan g adalah ...",
    options: ["−3", "−2", "−1", "0", "1"],
    correctAnswer: 1,
    explanation: "x² + x − 2 = x + 2 → x² = 4 → x = 2 atau x = −2.",
    difficulty: "easy",
    topic: "Fungsi kuadrat",
    source: "UTBK 2022",
  },
  {
    id: "pk-a04",
    sectionId: "pengetahuan-kuantitatif",
    question:
      "Diketahui f(x) = −2(x − 5) dan g(x) = (x − 2)² − 2. Ordinat terkecil titik potong grafik f dan g adalah ...",
    options: ["−14", "−2", "0", "2", "14"],
    correctAnswer: 3,
    explanation:
      "−2(x − 5) = (x − 2)² − 2 → x² − 2x − 8 = 0 → x = 4 atau x = −2. Ordinatnya 2 dan 14, sehingga yang terkecil adalah 2.",
    difficulty: "easy",
    topic: "Fungsi kuadrat",
    source: "UTBK 2022",
  },
  {
    id: "pk-a05",
    sectionId: "pengetahuan-kuantitatif",
    question:
      "Fungsi g(x) = 2 − bx dan h(x) = 1 − bx + x². Grafik g memotong sumbu x di (1, 0). Salah satu titik potong grafik g dan h adalah ...",
    options: ["(−1, −4)", "(−1, 4)", "(1, −2)", "(1, 4)", "(1, 9)"],
    correctAnswer: 1,
    explanation:
      "Dari g(1) = 0 diperoleh b = 2. Maka 2 − 2x = 1 − 2x + x² → x² = 1 → x = ±1. Untuk x = −1, g(−1) = 4, jadi titiknya (−1, 4).",
    difficulty: "medium",
    topic: "Fungsi kuadrat",
    source: "UTBK 2022",
  },
  {
    id: "pk-a06",
    sectionId: "pengetahuan-kuantitatif",
    question:
      "Jika jumlah kuadrat akar-akar x² − 3x + k = 0 sama dengan jumlah pangkat tiga akar-akar x² + x − k = 0, nilai k adalah ...",
    options: ["−10", "−8", "−2", "6", "8"],
    correctAnswer: 0,
    explanation:
      "Jumlah kuadrat akar persamaan pertama = 9 − 2k. Jumlah pangkat tiga akar persamaan kedua = (−1)³ − 3(−k)(−1) = −1 − 3k. Dari 9 − 2k = −1 − 3k diperoleh k = −10.",
    difficulty: "hard",
    topic: "Persamaan kuadrat",
    source: "UTBK 2019",
  },
  {
    id: "pk-a07",
    sectionId: "pengetahuan-kuantitatif",
    question: "Nilai dari (6⁵ ÷ (3⁻¹ × 4))^(1/3) adalah ...",
    options: ["24", "18", "12", "6", "3"],
    correctAnswer: 1,
    explanation: "6⁵ = 7.776 dan 3⁻¹ × 4 = 4/3, sehingga 7.776 ÷ (4/3) = 5.832 dan ∛5.832 = 18.",
    difficulty: "medium",
    topic: "Eksponen",
    source: "SNBT 2023",
  },
  {
    id: "pk-a08",
    sectionId: "pengetahuan-kuantitatif",
    question: "Jika x₁ dan x₂ memenuhi 2^(x²) · 4^(−2x) = 1/8 dengan x₁ > x₂, maka x₁ − x₂ = ...",
    options: ["1", "2", "3", "4", "5"],
    correctAnswer: 1,
    explanation:
      "2^(x² − 4x) = 2⁻³ → x² − 4x + 3 = 0 → x = 3 atau x = 1, sehingga selisihnya 2.",
    difficulty: "medium",
    topic: "Eksponen",
    source: "UTBK 2021",
  },
  {
    id: "pk-a09",
    sectionId: "pengetahuan-kuantitatif",
    question: "Jika 3^(x+2) − 3^x = 32, maka nilai 45^x ÷ 5^(x−1) adalah ...",
    options: ["50", "60", "70", "80", "90"],
    correctAnswer: 3,
    explanation:
      "3^x(9 − 1) = 32 → 3^x = 4. 45^x ÷ 5^(x−1) = 9^x · 5^x ÷ (5^x ÷ 5) = 5 · (3^x)² = 5 · 16 = 80.",
    difficulty: "hard",
    topic: "Eksponen",
    source: "UTBK 2019",
  },
];
