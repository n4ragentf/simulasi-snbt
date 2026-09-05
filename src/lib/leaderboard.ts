import { supabase } from "@/integrations/supabase/client";
import type { ExamMode, ExamResult } from "./types";

export type LeaderboardPeriod = "all" | "week" | "day";
export type LeaderboardMode = "all" | ExamMode;

export interface GlobalLeaderboardEntry {
  id: string;
  guestId: string;
  name: string;
  mode: ExamMode;
  title: string;
  section: string | null;
  score: number;
  accuracy: number;
  timeUsedSec: number;
  finishedAt: number;
}

const SECTION_LABELS: Record<string, string> = {
  "penalaran-umum": "Penalaran Umum",
  "pengetahuan-pemahaman-umum": "PPU",
  "pemahaman-bacaan-menulis": "PBM",
  "pengetahuan-kuantitatif": "Pengetahuan Kuantitatif",
  "literasi-indonesia": "Literasi B. Indonesia",
  "literasi-inggris": "Literasi B. Inggris",
  "penalaran-matematika": "Penalaran Matematika",
};

export function sectionLabel(id: string): string {
  return SECTION_LABELS[id] ?? id;
}

/** Push a finished exam result to the global leaderboard. Fire-and-forget: local history stays the source of truth. */
export async function submitLeaderboardScore(result: ExamResult): Promise<boolean> {
  try {
    const { error } = await supabase.from("leaderboard_scores").insert({
      result_id: result.id,
      guest_id: result.guestId,
      name: result.guestName,
      mode: result.mode,
      title: result.title,
      section: result.mode === "section" ? result.title : null,
      score: result.score,
      accuracy: result.accuracy,
      time_used_sec: result.timeUsedSec,
      finished_at: new Date(result.finishedAt).toISOString(),
    });
    return !error;
  } catch {
    return false;
  }
}

interface Row {
  id: string;
  guest_id: string;
  name: string;
  mode: ExamMode;
  title: string;
  section: string | null;
  score: number;
  accuracy: number;
  time_used_sec: number;
  finished_at: string;
}

export async function fetchLeaderboard(
  period: LeaderboardPeriod,
  mode: LeaderboardMode,
  section?: string,
  limit = 100,
): Promise<{ entries: GlobalLeaderboardEntry[]; online: boolean }> {
  try {
    let q = supabase
      .from("leaderboard_scores")
      .select("id,guest_id,name,mode,title,section,score,accuracy,time_used_sec,finished_at")
      .order("score", { ascending: false })
      .order("accuracy", { ascending: false })
      .order("time_used_sec", { ascending: true })
      .limit(limit);

    if (mode !== "all") q = q.eq("mode", mode);
    if (mode === "section" && section) q = q.eq("section", section);

    if (period !== "all") {
      const since = new Date();
      if (period === "day") since.setDate(since.getDate() - 1);
      else since.setDate(since.getDate() - 7);
      q = q.gte("finished_at", since.toISOString());
    }

    const { data, error } = await q;
    if (error) return { entries: [], online: false };

    const entries = ((data ?? []) as Row[]).map((r) => ({
      id: r.id,
      guestId: r.guest_id,
      name: r.name,
      mode: r.mode,
      title: r.title,
      section: r.section,
      score: r.score,
      accuracy: Number(r.accuracy),
      timeUsedSec: r.time_used_sec,
      finishedAt: new Date(r.finished_at).getTime(),
    }));
    return { entries, online: true };
  } catch {
    return { entries: [], online: false };
  }
}
