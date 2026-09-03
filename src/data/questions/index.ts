import type { Question, SectionId } from "@/lib/types";
import { penalaranUmum } from "./penalaran-umum";
import { pengetahuanPemahamanUmum } from "./pengetahuan-pemahaman-umum";
import { pemahamanBacaanMenulis } from "./pemahaman-bacaan-menulis";
import { pengetahuanKuantitatif } from "./pengetahuan-kuantitatif";
import { literasiIndonesia } from "./literasi-indonesia";
import { literasiInggris } from "./literasi-inggris";
import { penalaranMatematika } from "./penalaran-matematika";

/**
 * Question bank grouped by section.
 * To add questions: append to the relevant file — no engine change required.
 */
export const QUESTION_BANK: Record<SectionId, Question[]> = {
  "penalaran-umum": penalaranUmum,
  "pengetahuan-pemahaman-umum": pengetahuanPemahamanUmum,
  "pemahaman-bacaan-menulis": pemahamanBacaanMenulis,
  "pengetahuan-kuantitatif": pengetahuanKuantitatif,
  "literasi-indonesia": literasiIndonesia,
  "literasi-inggris": literasiInggris,
  "penalaran-matematika": penalaranMatematika,
};

export const ALL_QUESTIONS: Question[] = Object.values(QUESTION_BANK).flat();

const QUESTION_INDEX = new Map<string, Question>(ALL_QUESTIONS.map((q) => [q.id, q]));

export function getQuestion(id: string): Question | undefined {
  return QUESTION_INDEX.get(id);
}

export function getQuestionsBySection(sectionId: SectionId): Question[] {
  return QUESTION_BANK[sectionId] ?? [];
}

export function countBySection(sectionId: SectionId): number {
  return getQuestionsBySection(sectionId).length;
}
