import type {
  AnswerDetail,
  Difficulty,
  ExamResult,
  ExamSession,
  SectionId,
  SectionScore,
} from "./types";
import { getQuestion } from "@/data/questions";

/**
 * Scoring configuration — change these values to retune scoring
 * without touching the exam engine or the UI.
 */
export const SCORING_CONFIG = {
  minScore: 200,
  maxScore: 1000,
  difficultyWeight: { easy: 1, medium: 1.4, hard: 1.9 } as Record<Difficulty, number>,
  /** Penalty per wrong answer, as fraction of the question weight. 0 = no penalty. */
  wrongPenalty: 0,
};

export const SCORE_DISCLAIMER =
  "Skor simulasi merupakan estimasi untuk latihan dan bukan skor resmi SNBT.";

function scaleScore(weightedCorrect: number, weightedTotal: number): number {
  if (weightedTotal <= 0) return SCORING_CONFIG.minScore;
  const ratio = Math.max(0, Math.min(1, weightedCorrect / weightedTotal));
  const { minScore, maxScore } = SCORING_CONFIG;
  return Math.round(minScore + ratio * (maxScore - minScore));
}

export function computeResult(session: ExamSession, guestName: string, now = Date.now()): ExamResult {
  const details: AnswerDetail[] = [];
  const perSectionMap = new Map<
    SectionId,
    { total: number; correct: number; wrong: number; unanswered: number; w: number; wc: number }
  >();
  const perDifficulty: Record<Difficulty, { total: number; correct: number }> = {
    easy: { total: 0, correct: 0 },
    medium: { total: 0, correct: 0 },
    hard: { total: 0, correct: 0 },
  };

  let weightedTotal = 0;
  let weightedCorrect = 0;
  let correct = 0;
  let wrong = 0;
  let unanswered = 0;

  for (const item of session.items) {
    const q = getQuestion(item.questionId);
    if (!q) continue;
    const weight = SCORING_CONFIG.difficultyWeight[q.difficulty] ?? 1;
    const rawSelected = session.answers[item.questionId];
    const selected = typeof rawSelected === "number" ? rawSelected : null;
    const correctDisplayIndex = item.optionOrder.indexOf(q.correctAnswer);
    const isCorrect = selected !== null && selected === correctDisplayIndex;

    weightedTotal += weight;
    if (isCorrect) {
      weightedCorrect += weight;
      correct++;
    } else if (selected === null) {
      unanswered++;
    } else {
      wrong++;
      weightedCorrect -= weight * SCORING_CONFIG.wrongPenalty;
    }

    perDifficulty[q.difficulty].total++;
    if (isCorrect) perDifficulty[q.difficulty].correct++;

    const bucket =
      perSectionMap.get(item.sectionId) ??
      { total: 0, correct: 0, wrong: 0, unanswered: 0, w: 0, wc: 0 };
    bucket.total++;
    bucket.w += weight;
    if (isCorrect) {
      bucket.correct++;
      bucket.wc += weight;
    } else if (selected === null) bucket.unanswered++;
    else bucket.wrong++;
    perSectionMap.set(item.sectionId, bucket);

    details.push({
      questionId: item.questionId,
      sectionId: item.sectionId,
      optionOrder: item.optionOrder,
      selected,
      isCorrect,
    });
  }

  const total = details.length;
  const perSection: SectionScore[] = [...perSectionMap.entries()].map(([sectionId, b]) => ({
    sectionId,
    total: b.total,
    correct: b.correct,
    wrong: b.wrong,
    unanswered: b.unanswered,
    accuracy: b.total > 0 ? Math.round((b.correct / b.total) * 100) : 0,
    score: scaleScore(b.wc, b.w),
  }));

  return {
    id: `res_${now}_${Math.random().toString(36).slice(2, 8)}`,
    examId: session.id,
    guestId: session.guestId,
    guestName,
    mode: session.mode,
    title: session.title,
    finishedAt: now,
    timeUsedSec: Math.max(0, Math.round((now - session.startedAt) / 1000)),
    total,
    correct,
    wrong,
    unanswered,
    accuracy: total > 0 ? Math.round((correct / total) * 100) : 0,
    score: scaleScore(weightedCorrect, weightedTotal),
    perSection,
    perDifficulty,
    details,
  };
}
