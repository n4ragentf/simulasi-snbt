import type { SectionConfig, SectionId } from "@/lib/types";

export const SECTIONS: SectionConfig[] = [
  {
    id: "penalaran-umum",
    name: "Penalaran Umum",
    short: "PU",
    description: "Logika, analisis pola, evaluasi argumen, dan pemecahan masalah.",
    topics: ["Logika", "Analisis", "Pola", "Hubungan", "Evaluasi argumen", "Problem solving"],
    fullCount: 10,
    practiceMinutes: 20,
  },
  {
    id: "pengetahuan-pemahaman-umum",
    name: "Pengetahuan dan Pemahaman Umum",
    short: "PPU",
    description: "Kosakata, makna kata, konsep, konteks, dan hubungan antarinformasi.",
    topics: ["Kosakata", "Makna kata", "Konsep", "Konteks", "Hubungan informasi"],
    fullCount: 10,
    practiceMinutes: 15,
  },
  {
    id: "pemahaman-bacaan-menulis",
    name: "Pemahaman Bacaan dan Menulis",
    short: "PBM",
    description: "Ide utama, inferensi, struktur teks, efektivitas kalimat, dan tata bahasa.",
    topics: ["Ide utama", "Inferensi", "Struktur teks", "Kalimat efektif", "Tata bahasa"],
    fullCount: 10,
    practiceMinutes: 20,
  },
  {
    id: "pengetahuan-kuantitatif",
    name: "Pengetahuan Kuantitatif",
    short: "PK",
    description: "Aritmetika, aljabar, geometri, statistika, dan probabilitas kontekstual.",
    topics: ["Aritmetika", "Aljabar", "Perbandingan", "Geometri", "Statistika", "Probabilitas"],
    fullCount: 10,
    practiceMinutes: 20,
  },
  {
    id: "literasi-indonesia",
    name: "Literasi dalam Bahasa Indonesia",
    short: "LBI",
    description: "Pemahaman bacaan panjang, analisis informasi, inferensi, dan evaluasi.",
    topics: ["Pemahaman bacaan", "Analisis informasi", "Inferensi", "Evaluasi", "Kesimpulan"],
    fullCount: 10,
    practiceMinutes: 22,
  },
  {
    id: "literasi-inggris",
    name: "Literasi dalam Bahasa Inggris",
    short: "LBE",
    description: "Main idea, detail, inference, vocabulary, reference, dan author's purpose.",
    topics: ["Main idea", "Detail", "Inference", "Vocabulary", "Reference", "Purpose"],
    fullCount: 10,
    practiceMinutes: 20,
  },
  {
    id: "penalaran-matematika",
    name: "Penalaran Matematika",
    short: "PM",
    description: "Pemodelan matematika, interpretasi data, dan masalah kontekstual.",
    topics: ["Pemodelan", "Interpretasi data", "Penalaran", "Analisis", "Kontekstual"],
    fullCount: 10,
    practiceMinutes: 25,
  },
];

export const SECTION_MAP: Record<SectionId, SectionConfig> = SECTIONS.reduce(
  (acc, s) => {
    acc[s.id] = s;
    return acc;
  },
  {} as Record<SectionId, SectionConfig>,
);

export function getSection(id: SectionId): SectionConfig | undefined {
  return SECTION_MAP[id];
}

export function sectionName(id: SectionId): string {
  return SECTION_MAP[id]?.name ?? id;
}
