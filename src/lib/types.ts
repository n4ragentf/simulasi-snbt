export type Difficulty = "easy" | "medium" | "hard";

export type SectionId =
  | "penalaran-umum"
  | "pengetahuan-pemahaman-umum"
  | "pemahaman-bacaan-menulis"
  | "pengetahuan-kuantitatif"
  | "literasi-indonesia"
  | "literasi-inggris"
  | "penalaran-matematika";

export interface Question {
  id: string;
  sectionId: SectionId;
  /** Optional reading stimulus shown above the question. */
  passage?: string;
  question: string;
  options: string[];
  /** Index into `options` (original, unshuffled order). */
  correctAnswer: number;
  explanation: string;
  difficulty: Difficulty;
  topic: string;
  source: string;
}

export interface SectionConfig {
  id: SectionId;
  name: string;
  short: string;
  description: string;
  topics: string[];
  /** Default number of questions used in a full simulation. */
  fullCount: number;
  /** Default duration (minutes) for the standalone practice of this section. */
  practiceMinutes: number;
}

export type ExamMode = "full" | "section" | "quick";

export interface Guest {
  guestId: string;
  name: string;
  createdAt: number;
}

/** A question slot inside a running exam (stores its shuffled option order). */
export interface ExamItem {
  questionId: string;
  sectionId: SectionId;
  /** Maps displayed option index -> original option index. */
  optionOrder: number[];
}

export interface ExamSession {
  id: string;
  guestId: string;
  mode: ExamMode;
  title: string;
  sectionIds: SectionId[];
  items: ExamItem[];
  /** questionId -> displayed option index */
  answers: Record<string, number>;
  marked: string[];
  currentIndex: number;
  startedAt: number;
  endsAt: number;
  durationSec: number;
  shuffleQuestions: boolean;
  shuffleOptions: boolean;
}

export interface AnswerDetail {
  questionId: string;
  sectionId: SectionId;
  optionOrder: number[];
  /** Displayed option index chosen by the user, or null. */
  selected: number | null;
  isCorrect: boolean;
}

export interface SectionScore {
  sectionId: SectionId;
  total: number;
  correct: number;
  wrong: number;
  unanswered: number;
  accuracy: number;
  score: number;
}

export interface ExamResult {
  id: string;
  examId: string;
  guestId: string;
  guestName: string;
  mode: ExamMode;
  title: string;
  finishedAt: number;
  timeUsedSec: number;
  total: number;
  correct: number;
  wrong: number;
  unanswered: number;
  accuracy: number;
  score: number;
  perSection: SectionScore[];
  perDifficulty: Record<Difficulty, { total: number; correct: number }>;
  details: AnswerDetail[];
}
