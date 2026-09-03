import type { ExamResult, ExamSession, Guest } from "./types";

const KEYS = {
  guest: "snbt.guest.v1",
  session: "snbt.session.v1",
  history: "snbt.history.v1",
  leaderboard: "snbt.leaderboard.v1",
  theme: "snbt.theme.v1",
} as const;

export const STORAGE_KEYS = KEYS;

function hasWindow(): boolean {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

/** Safe read: returns fallback when storage is unavailable or the payload is corrupt. */
export function readJSON<T>(key: string, fallback: T): T {
  if (!hasWindow()) return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw) as T;
    if (parsed === null || parsed === undefined) return fallback;
    return parsed;
  } catch {
    try {
      window.localStorage.removeItem(key);
    } catch {
      /* ignore */
    }
    return fallback;
  }
}

export function writeJSON(key: string, value: unknown): boolean {
  if (!hasWindow()) return false;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export function removeKey(key: string): void {
  if (!hasWindow()) return;
  try {
    window.localStorage.removeItem(key);
  } catch {
    /* ignore */
  }
}

export function uuid(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/* ---------------- Guest ---------------- */

function isGuest(v: unknown): v is Guest {
  return (
    !!v &&
    typeof v === "object" &&
    typeof (v as Guest).guestId === "string" &&
    typeof (v as Guest).name === "string"
  );
}

export function getGuest(): Guest | null {
  const g = readJSON<Guest | null>(KEYS.guest, null);
  return isGuest(g) ? g : null;
}

export function createGuest(name: string): Guest {
  const guest: Guest = { guestId: uuid(), name: name.trim(), createdAt: Date.now() };
  writeJSON(KEYS.guest, guest);
  return guest;
}

export function updateGuestName(name: string): Guest | null {
  const g = getGuest();
  if (!g) return null;
  const next = { ...g, name: name.trim() };
  writeJSON(KEYS.guest, next);
  return next;
}

export function clearGuest(): void {
  removeKey(KEYS.guest);
}

/* ---------------- Active session ---------------- */

function isSession(v: unknown): v is ExamSession {
  const s = v as ExamSession;
  return (
    !!s &&
    typeof s === "object" &&
    typeof s.id === "string" &&
    Array.isArray(s.items) &&
    s.items.length > 0 &&
    typeof s.startedAt === "number" &&
    typeof s.endsAt === "number" &&
    s.endsAt > s.startedAt &&
    typeof s.answers === "object" &&
    s.answers !== null
  );
}

export function getSession(): ExamSession | null {
  const s = readJSON<ExamSession | null>(KEYS.session, null);
  if (!isSession(s)) {
    if (s !== null) removeKey(KEYS.session);
    return null;
  }
  return s;
}

export function saveSession(session: ExamSession): void {
  writeJSON(KEYS.session, session);
}

export function clearSession(): void {
  removeKey(KEYS.session);
}

/* ---------------- History ---------------- */

export function getHistory(): ExamResult[] {
  const list = readJSON<ExamResult[]>(KEYS.history, []);
  if (!Array.isArray(list)) return [];
  return list.filter((r) => r && typeof r.id === "string" && typeof r.score === "number");
}

export function saveResult(result: ExamResult): void {
  const list = getHistory();
  list.unshift(result);
  writeJSON(KEYS.history, list.slice(0, 100));
  pushLeaderboard(result);
}

export function getResult(id: string): ExamResult | undefined {
  return getHistory().find((r) => r.id === id);
}

export function clearHistory(): void {
  removeKey(KEYS.history);
}

/* ---------------- Leaderboard ----------------
 * Local for now. Swap these two functions for API calls
 * to move to a global, backend-backed leaderboard.
 */

export interface LeaderboardEntry {
  id: string;
  resultId: string;
  guestId: string;
  name: string;
  title: string;
  score: number;
  accuracy: number;
  timeUsedSec: number;
  finishedAt: number;
}

export function getLeaderboard(): LeaderboardEntry[] {
  const list = readJSON<LeaderboardEntry[]>(KEYS.leaderboard, []);
  if (!Array.isArray(list)) return [];
  return list
    .filter((e) => e && typeof e.score === "number" && typeof e.name === "string")
    .sort(
      (a, b) =>
        b.score - a.score || b.accuracy - a.accuracy || a.timeUsedSec - b.timeUsedSec,
    );
}

export function pushLeaderboard(result: ExamResult): void {
  const list = readJSON<LeaderboardEntry[]>(KEYS.leaderboard, []);
  const safe = Array.isArray(list) ? list : [];
  safe.push({
    id: uuid(),
    resultId: result.id,
    guestId: result.guestId,
    name: result.guestName,
    title: result.title,
    score: result.score,
    accuracy: result.accuracy,
    timeUsedSec: result.timeUsedSec,
    finishedAt: result.finishedAt,
  });
  writeJSON(KEYS.leaderboard, safe.slice(-200));
}

export function clearAllData(): void {
  Object.values(KEYS).forEach((k) => {
    if (k !== KEYS.theme) removeKey(k);
  });
}
