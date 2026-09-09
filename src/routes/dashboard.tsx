import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Award, Flame, Gauge, Layers, Play, Target, TrendingDown } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { AppShell } from "@/components/app-header";
import { StatCard } from "@/components/stat-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useGuest, validateName } from "@/hooks/use-guest";
import { getHistory, getSession } from "@/lib/storage";
import { sectionLabel } from "@/lib/exam-engine";
import type { ExamResult, ExamSession, SectionId } from "@/lib/types";
import { dayKey, getStreak, lastSevenDays, type StreakData } from "@/lib/streak";

const DAY_LABELS = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard Guest — SNBT Simulator" },
      {
        name: "description",
        content:
          "Lihat rata-rata skor, best score, total simulasi, dan rekomendasi latihan SNBT-mu.",
      },
      { property: "og:title", content: "Dashboard Guest — SNBT Simulator" },
      {
        property: "og:description",
        content: "Pantau perkembangan latihan SNBT-mu tanpa perlu login.",
      },
    ],
  }),
  component: DashboardPage,
});

function GuestForm({ onSubmit }: { onSubmit: (name: string) => void }) {
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="mx-auto max-w-md py-12">
      <Card className="shadow-float">
        <CardHeader>
          <CardTitle className="text-xl">Masukkan nama kamu</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              const err = validateName(name);
              setError(err);
              if (!err) onSubmit(name.trim());
            }}
            className="space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="guest-name">Nama</Label>
              <Input
                id="guest-name"
                value={name}
                maxLength={30}
                autoFocus
                placeholder="Contoh: Budi"
                aria-invalid={!!error}
                aria-describedby={error ? "guest-name-error" : undefined}
                onChange={(e) => setName(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">2–30 karakter. Tanpa email atau kata sandi.</p>
              {error ? (
                <p id="guest-name-error" role="alert" className="text-sm text-destructive">
                  {error}
                </p>
              ) : null}
            </div>
            <Button type="submit" className="w-full rounded-full">
              Masuk sebagai Guest
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

function computeStats(history: ExamResult[]) {
  if (history.length === 0) {
    return { avg: 0, best: 0, total: 0, accuracy: 0 };
  }
  const total = history.length;
  const avg = Math.round(history.reduce((s, r) => s + r.score, 0) / total);
  const best = Math.max(...history.map((r) => r.score));
  const accuracy = Math.round(history.reduce((s, r) => s + r.accuracy, 0) / total);
  return { avg, best, total, accuracy };
}

function weakestSections(history: ExamResult[]): { sectionId: SectionId; accuracy: number }[] {
  const map = new Map<SectionId, { correct: number; total: number }>();
  for (const r of history) {
    for (const s of r.perSection) {
      const b = map.get(s.sectionId) ?? { correct: 0, total: 0 };
      b.correct += s.correct;
      b.total += s.total;
      map.set(s.sectionId, b);
    }
  }
  return [...map.entries()]
    .map(([sectionId, b]) => ({
      sectionId,
      accuracy: b.total ? Math.round((b.correct / b.total) * 100) : 0,
    }))
    .sort((a, b) => a.accuracy - b.accuracy);
}

function DashboardPage() {
  const { guest, ready, signIn } = useGuest();
  const navigate = useNavigate();
  const [history, setHistory] = useState<ExamResult[]>([]);
  const [session, setSession] = useState<ExamSession | null>(null);
  const [streak, setStreak] = useState<StreakData>({
    current: 0,
    longest: 0,
    lastDay: null,
    days: [],
  });

  useEffect(() => {
    if (!ready) return;
    setHistory(getHistory());
    setSession(getSession());
    setStreak(getStreak());
  }, [ready, guest]);

  const week = useMemo(() => lastSevenDays(streak), [streak]);
  const todayKey = dayKey();
  const stats = useMemo(() => computeStats(history), [history]);
  const weak = useMemo(() => weakestSections(history), [history]);
  const last = history[0];

  if (!ready) {
    return (
      <AppShell>
        <div className="py-20 text-center text-muted-foreground">Memuat…</div>
      </AppShell>
    );
  }

  if (!guest) {
    return (
      <AppShell>
        <GuestForm
          onSubmit={(name) => {
            signIn(name);
          }}
        />
      </AppShell>
    );
  }

  return (
    <AppShell>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Halo, {guest.name} 👋</h1>
          <p className="mt-1 text-muted-foreground">Siap latihan hari ini?</p>
        </div>
        <Button asChild size="lg" className="rounded-full">
          <Link to="/simulasi">
            <Play className="mr-1 size-4" aria-hidden="true" /> Mulai Simulasi
          </Link>
        </Button>
      </div>

      {session ? (
        <Card className="mt-6 border-warning/50 bg-warning/10 shadow-card">
          <CardContent className="flex flex-wrap items-center justify-between gap-3 p-5">
            <div>
              <p className="font-semibold">Kamu memiliki simulasi yang belum selesai.</p>
              <p className="text-sm text-muted-foreground">{session.title}</p>
            </div>
            <Button onClick={() => navigate({ to: "/ujian" })} className="rounded-full">
              Lanjutkan
            </Button>
          </CardContent>
        </Card>
      ) : null}

      {account.isApproved ? (
        <Card className="mt-6 shadow-card">
          <CardContent className="flex flex-wrap items-center justify-between gap-6 p-5">
            <div className="flex items-center gap-4">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Flame className="size-7" aria-hidden="true" />
              </div>
              <div>
                <p className="font-display text-3xl font-bold leading-none">
                  {streak.current}{" "}
                  <span className="text-base font-medium text-muted-foreground">hari</span>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Runtunan harian · rekor {streak.longest} hari
                </p>
              </div>
            </div>
            <div className="flex items-end gap-2">
              {week.map((d) => (
                <div key={d.key} className="flex flex-col items-center gap-1">
                  <div
                    className={`size-8 rounded-lg border ${
                      d.active ? "border-primary bg-primary/80" : "border-border bg-muted"
                    }`}
                    aria-label={`${d.key}${d.active ? " aktif" : " tidak aktif"}`}
                  />
                  <span className="text-[10px] text-muted-foreground">
                    {DAY_LABELS[new Date(`${d.key}T00:00:00`).getDay()]}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              {streak.lastDay === todayKey
                ? "Mantap! Kamu sudah latihan hari ini."
                : "Selesaikan satu simulasi hari ini untuk menjaga runtunanmu."}
            </p>
          </CardContent>
        </Card>
      ) : (
        <Card className="mt-6 border-dashed shadow-card">
          <CardContent className="flex flex-wrap items-center justify-between gap-4 p-5">
            <div className="flex items-center gap-4">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
                <Flame className="size-7" aria-hidden="true" />
              </div>
              <div>
                <p className="font-semibold">Runtunan harian khusus pemilik akun</p>
                <p className="text-sm text-muted-foreground">
                  Buat akun (diverifikasi admin) untuk mengaktifkan streak harian dan fitur akun
                  lainnya. Sebagai guest kamu tetap bisa simulasi, riwayat, dan leaderboard.
                </p>
              </div>
            </div>
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/auth">Masuk / Daftar</Link>
            </Button>
          </CardContent>
        </Card>
      )}

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <StatCard label="Best Score" value={stats.best || "—"} icon={<Award className="size-5" />} />
        <StatCard label="Rata-rata" value={stats.avg || "—"} icon={<Gauge className="size-5" />} />
        <StatCard label="Total Simulasi" value={stats.total} icon={<Layers className="size-5" />} />
        <StatCard
          label="Akurasi"
          value={stats.total ? `${stats.accuracy}%` : "—"}
          icon={<Target className="size-5" />}
        />
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-base">Simulasi terakhir</CardTitle>
          </CardHeader>
          <CardContent>
            {last ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{last.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(last.finishedAt).toLocaleString("id-ID")}
                    </p>
                  </div>
                  <p className="font-display text-3xl font-bold text-primary">{last.score}</p>
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-xs text-muted-foreground">
                    <span>Akurasi</span>
                    <span>{last.accuracy}%</span>
                  </div>
                  <Progress value={last.accuracy} aria-label="Akurasi simulasi terakhir" />
                </div>
                <Button asChild variant="outline" size="sm" className="rounded-full">
                  <Link to="/hasil/$id" params={{ id: last.id }}>
                    Lihat hasil
                  </Link>
                </Button>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                Belum ada simulasi. Mulai yang pertama untuk melihat progresmu di sini.
              </p>
            )}
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-base">Rekomendasi latihan</CardTitle>
          </CardHeader>
          <CardContent>
            {weak.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                Kerjakan satu simulasi untuk mendapatkan rekomendasi berbasis hasilmu.
              </p>
            ) : (
              <ul className="space-y-3">
                {weak.slice(0, 3).map((w) => (
                  <li key={w.sectionId} className="space-y-1">
                    <div className="flex items-center justify-between gap-2 text-sm">
                      <span className="flex items-center gap-2">
                        <TrendingDown className="size-4 text-warning" aria-hidden="true" />
                        {sectionLabel(w.sectionId)}
                      </span>
                      <span className="text-muted-foreground">{w.accuracy}%</span>
                    </div>
                    <Progress value={w.accuracy} aria-label={`Akurasi ${sectionLabel(w.sectionId)}`} />
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
