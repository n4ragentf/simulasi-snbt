import type { Question } from "@/lib/types";

/** Soal arsip UTBK/SNBT bidang statistika & penalaran matematika yang diunggah pengguna. */
export const arsipPenalaranMatematika: Question[] = [
  {
    id: "pm-a01",
    sectionId: "penalaran-matematika",
    question:
      "Enam bilangan bulat positif, yaitu 1, 4, 7, 3, b, dan 8, memiliki rata-rata 5⅓. Jika jangkauan keenam bilangan itu dikurangi rata-ratanya sama dengan Q/15, nilai Q adalah ...",
    options: ["24", "32", "40", "45", "48"],
    correctAnswer: 2,
    explanation:
      "Jumlah data = 6 × 16/3 = 32, sehingga b = 32 − 23 = 9. Jangkauan = 9 − 1 = 8 dan 8 − 16/3 = 8/3 = 40/15, jadi Q = 40.",
    difficulty: "hard",
    topic: "Statistika",
    source: "SNBT 2025",
  },
  {
    id: "pm-a02",
    sectionId: "penalaran-matematika",
    question:
      "Sekumpulan bilangan memiliki rata-rata 25 dan jangkauan 10. Jika setiap bilangan dikurangi a lalu dibagi b, diperoleh data baru dengan rata-rata 15 dan jangkauan 5. Nilai 2a + 5b adalah ...",
    options: ["2", "1", "0", "−1", "−2"],
    correctAnswer: 2,
    explanation:
      "Jangkauan: 10/b = 5 → b = 2. Rata-rata: (25 − a)/2 = 15 → a = −5. Maka 2a + 5b = −10 + 10 = 0.",
    difficulty: "medium",
    topic: "Statistika",
    source: "UTBK 2019",
  },
  {
    id: "pm-a03",
    sectionId: "penalaran-matematika",
    question:
      "Jika a, b, c, d, e mempunyai variansi 4 dan rata-rata 10, maka rata-rata dari 2a² + 3, 2b² + 3, 2c² + 3, 2d² + 3, 2e² + 3 adalah ...",
    options: ["200", "201", "210", "211", "220"],
    correctAnswer: 3,
    explanation:
      "Rata-rata kuadrat = variansi + (rata-rata)² = 4 + 100 = 104. Maka rata-rata data baru = 2(104) + 3 = 211.",
    difficulty: "hard",
    topic: "Statistika",
    source: "UTBK 2019",
  },
];
