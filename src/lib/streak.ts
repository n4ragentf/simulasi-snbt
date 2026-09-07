import { readJSON, writeJSON } from "./storage";

const KEY = "snbt.streak.v1";

export interface StreakData {
  current: number;
  longest: number;
  /** YYYY-MM-DD of the last active day (local time). */
  lastDay: string | null;
  /** Recent active days (max 60), newest last. */
  days: string[];
}

const EMPTY: StreakData = { current: 0, longest: 0, lastDay: null, days: [] };

export function dayKey(d: Date = new Date()): string {
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function daysBetween(a: string, b: string): number {
  const [ay, am, ad] = a.split("-").map(Number);
  const [by, bm, bd] = b.split("-").map(Number);
  const t1 = Date.UTC(ay!, (am ?? 1) - 1, ad!);
  const t2 = Date.UTC(by!, (bm ?? 1) - 1, bd!);
  return Math.round((t2 - t1) / 86400000);
}

function normalize(v: unknown): StreakData {
  const s = v as StreakData;
  if (!s || typeof s !== "object" || typeof s.current !== "number") return { ...EMPTY };
  return {
    current: s.current,
    longest: typeof s.longest === "number" ? s.longest : s.current,
    lastDay: typeof s.lastDay === "string" ? s.lastDay : null,
    days: Array.isArray(s.days) ? s.days.filter((d) => typeof d === "string") : [],
  };
}

/** Streak as it should be shown today (breaks automatically after a missed day). */
export function getStreak(today = dayKey()): StreakData {
  const s = normalize(readJSON<unknown>(KEY, null));
  if (!s.lastDay) return s;
  const gap = daysBetween(s.lastDay, today);
  if (gap > 1 || gap < 0) return { ...s, current: 0 };
  return s;
}

/** Call after finishing a simulation. Returns the updated streak. */
export function recordActivity(today = dayKey()): StreakData {
  const s = normalize(readJSON<unknown>(KEY, null));
  if (s.lastDay === today) return s;

  const gap = s.lastDay ? daysBetween(s.lastDay, today) : null;
  const current = gap === 1 ? s.current + 1 : 1;
  const next: StreakData = {
    current,
    longest: Math.max(current, s.longest),
    lastDay: today,
    days: [...s.days.filter((d) => d !== today), today].slice(-60),
  };
  writeJSON(KEY, next);
  return next;
}

/** Last 7 day keys (oldest first) with an active flag — for the mini calendar. */
export function lastSevenDays(streak: StreakData, today = new Date()): { key: string; active: boolean }[] {
  const out: { key: string; active: boolean }[] = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const key = dayKey(d);
    out.push({ key, active: streak.days.includes(key) });
  }
  return out;
}
