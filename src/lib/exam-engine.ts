import { QUESTION_BANK, getQuestionsBySection } from "@/data/questions";
import { SECTIONS, SECTION_MAP } from "@/data/sections";
import type { ExamItem, ExamMode, ExamSession, Question, SectionId } from "./types";
import { uuid } from "./storage";

export interface SimulationBlueprint {
  key: string;
  mode: ExamMode;
  title: string;
  description: string;
  sectionIds: SectionId[];
  /** questions per section */
  perSection: number;
  durationMinutes: number;
}

export const QUICK_PRACTICE_PER_SECTION = 2;

export function getBlueprints(): SimulationBlueprint[] {
  const full: SimulationBlueprint = {
    key: "full",
    mode: "full",
    title: "Simulasi SNBT Lengkap",
    description: "Seluruh subtes dikerjakan berurutan dalam satu sesi penuh.",
    sectionIds: SECTIONS.map((s) => s.id),
    perSection: 10,
    durationMinutes: 120,
  };

  const quick: SimulationBlueprint = {
    key: "quick",
    mode: "quick",
    title: "Quick Practice",
    description: "Latihan singkat lintas subtes untuk pemanasan harian.",
    sectionIds: SECTIONS.map((s) => s.id),
    perSection: QUICK_PRACTICE_PER_SECTION,
    durationMinutes: 20,
  };

  const perSection: SimulationBlueprint[] = SECTIONS.map((s) => ({
    key: `section:${s.id}`,
    mode: "section" as const,
    title: s.name,
    description: s.description,
    sectionIds: [s.id],
    perSection: s.fullCount,
    durationMinutes: s.practiceMinutes,
  }));

  return [full, quick, ...perSection];
}

export function getBlueprint(key: string): SimulationBlueprint | undefined {
  return getBlueprints().find((b) => b.key === key);
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

function pickQuestions(sectionId: SectionId, count: number, shuffleQuestions: boolean): Question[] {
  const pool = getQuestionsBySection(sectionId);
  const ordered = shuffleQuestions ? shuffle(pool) : pool;
  return ordered.slice(0, Math.min(count, ordered.length));
}

export interface CreateExamOptions {
  guestId: string;
  blueprint: SimulationBlueprint;
  shuffleQuestions: boolean;
  shuffleOptions: boolean;
}

export function createExam({
  guestId,
  blueprint,
  shuffleQuestions,
  shuffleOptions,
}: CreateExamOptions): ExamSession {
  const items: ExamItem[] = [];

  for (const sectionId of blueprint.sectionIds) {
    const questions = pickQuestions(sectionId, blueprint.perSection, shuffleQuestions);
    for (const q of questions) {
      const baseOrder = q.options.map((_, i) => i);
      items.push({
        questionId: q.id,
        sectionId,
        optionOrder: shuffleOptions ? shuffle(baseOrder) : baseOrder,
      });
    }
  }

  const now = Date.now();
  const durationSec = blueprint.durationMinutes * 60;

  return {
    id: uuid(),
    guestId,
    mode: blueprint.mode,
    title: blueprint.title,
    sectionIds: blueprint.sectionIds,
    items,
    answers: {},
    marked: [],
    currentIndex: 0,
    startedAt: now,
    endsAt: now + durationSec * 1000,
    durationSec,
    shuffleQuestions,
    shuffleOptions,
  };
}

export function remainingSeconds(session: ExamSession, now = Date.now()): number {
  return Math.max(0, Math.round((session.endsAt - now) / 1000));
}

export function formatClock(totalSeconds: number): string {
  const s = Math.max(0, Math.floor(totalSeconds));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const pad = (n: number) => n.toString().padStart(2, "0");
  return h > 0 ? `${pad(h)}:${pad(m)}:${pad(sec)}` : `${pad(m)}:${pad(sec)}`;
}

export function formatDuration(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return m > 0 ? `${m} menit ${s} detik` : `${s} detik`;
}

export function questionCountFor(blueprint: SimulationBlueprint): number {
  return blueprint.sectionIds.reduce(
    (sum, id) => sum + Math.min(blueprint.perSection, (QUESTION_BANK[id] ?? []).length),
    0,
  );
}

export function sectionLabel(id: SectionId): string {
  return SECTION_MAP[id]?.name ?? id;
}
