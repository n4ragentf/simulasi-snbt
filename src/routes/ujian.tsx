import { createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Star,
  StarOff,
  TimerIcon,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Brand } from "@/components/app-header";
import { ThemeToggle } from "@/components/theme-toggle";
import { QuestionNavigator } from "@/components/question-navigator";
import { getQuestion } from "@/data/questions";
import { formatClock, remainingSeconds, sectionLabel } from "@/lib/exam-engine";
import { computeResult } from "@/lib/scoring";
import { clearSession, getGuest, getSession, saveResult, saveSession } from "@/lib/storage";
import { submitLeaderboardScore } from "@/lib/leaderboard";
import type { ExamSession } from "@/lib/types";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/ujian")({
  head: () => ({
    meta: [
      { title: "Sesi Ujian — SNBT Simulator" },
      {
        name: "description",
        content: "Kerjakan simulasi SNBT dengan timer real-time, navigator soal, dan auto save.",
      },
      { property: "og:title", content: "Sesi Ujian — SNBT Simulator" },
      { property: "og:description", content: "Antarmuka CBT dengan timer dan auto save." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ExamPage,
});

const LETTERS = ["A", "B", "C", "D", "E", "F"];

function ExamPage() {
  const navigate = useNavigate();
  const [session, setSession] = useState<ExamSession | null>(null);
  const [ready, setReady] = useState(false);
  const [left, setLeft] = useState(0);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const warned = useRef<Record<number, boolean>>({});
  const submitting = useRef(false);

  useEffect(() => {
    const s = getSession();
    setSession(s);
    setReady(true);
    if (s) setLeft(remainingSeconds(s));
  }, []);

  const persist = useCallback((next: ExamSession) => {
    setSession(next);
    saveSession(next);
  }, []);

  const finish = useCallback(
    (auto: boolean) => {
      if (submitting.current) return;
      const s = getSession();
      if (!s) return;
      submitting.current = true;
      const guest = getGuest();
      const result = computeResult(s, guest?.name ?? "Guest");
      saveResult(result);
      void submitLeaderboardScore(result);
      clearSession();
      if (auto) toast.info("Waktu habis. Jawabanmu telah disimpan otomatis.");
      navigate({ to: "/hasil/$id", params: { id: result.id } });
    },
    [navigate],
  );

  // Timer driven by timestamps so refresh never resets it.
  useEffect(() => {
    if (!session) return;
    const tick = () => {
      const rem = remainingSeconds(session);
      setLeft(rem);
      for (const mark of [600, 300, 60]) {
        if (rem <= mark && rem > mark - 5 && !warned.current[mark]) {
          warned.current[mark] = true;
          toast.warning(`Waktu tersisa ${mark / 60} menit.`);
        }
      }
      if (rem <= 0) finish(true);
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [session, finish]);

  const stats = useMemo(() => {
    if (!session) return { answered: 0, unanswered: 0, marked: 0 };
    const answered = session.items.filter((i) => i.questionId in session.answers).length;
    return {
      answered,
      unanswered: session.items.length - answered,
      marked: session.marked.length,
    };
  }, [session]);

  if (!ready) {
    return <div className="grid min-h-screen place-items-center text-muted-foreground">Memuat…</div>;
  }

  if (!session) {
    return (
      <div className="grid min-h-screen place-items-center px-4">
        <Card className="max-w-md shadow-card">
          <CardContent className="p-8 text-center">
            <h1 className="text-xl font-semibold">Tidak ada sesi ujian aktif</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Sesi mungkin sudah selesai atau datanya tidak valid. Pilih simulasi untuk memulai lagi.
            </p>
            <Button className="mt-6 rounded-full" onClick={() => navigate({ to: "/simulasi" })}>
              Pilih Simulasi
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const index = Math.min(Math.max(session.currentIndex, 0), session.items.length - 1);
  const item = session.items[index]!;
  const question = getQuestion(item.questionId);
  const expired = left <= 0;

  if (!question) {
    return (
      <div className="grid min-h-screen place-items-center px-4">
        <Card className="max-w-md shadow-card">
          <CardContent className="p-8 text-center">
            <h1 className="text-xl font-semibold">Soal tidak ditemukan</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Data sesi tidak cocok dengan bank soal saat ini.
            </p>
            <div className="mt-6 flex justify-center gap-2">
              <Button
                variant="outline"
                className="rounded-full"
                onClick={() => persist({ ...session, currentIndex: (index + 1) % session.items.length })}
              >
                Lewati soal ini
              </Button>
              <Button
                className="rounded-full"
                onClick={() => {
                  clearSession();
                  navigate({ to: "/simulasi" });
                }}
              >
                Reset sesi
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const selected = session.answers[question.id];
  const isMarked = session.marked.includes(question.id);
  const timeCritical = left <= 300;

  const jump = (i: number) => {
    persist({ ...session, currentIndex: Math.min(Math.max(i, 0), session.items.length - 1) });
    setNavOpen(false);
  };

  const answer = (displayIndex: number) => {
    if (expired) return;
    persist({ ...session, answers: { ...session.answers, [question.id]: displayIndex } });
  };

  const toggleMark = () => {
    const marked = isMarked
      ? session.marked.filter((id) => id !== question.id)
      : [...session.marked, question.id];
    persist({ ...session, marked });
  };

  const navigator = <QuestionNavigator session={session} current={index} onJump={jump} />;

  return (
    <div className="flex min-h-screen flex-col bg-background pb-24 lg:pb-0">
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-3">
          <div className="min-w-0">
            <Brand className="text-sm" />
            <p className="mt-0.5 truncate text-xs text-muted-foreground">
              {sectionLabel(item.sectionId)}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div
              role="timer"
              aria-live="off"
              className={cn(
                "flex items-center gap-2 rounded-full px-4 py-2 font-mono text-base font-bold tabular-nums",
                timeCritical
                  ? "bg-destructive/15 text-destructive"
                  : "bg-primary/10 text-primary",
              )}
            >
              <TimerIcon className="size-4" aria-hidden="true" />
              <span className="sr-only">Waktu tersisa </span>
              {formatClock(left)}
            </div>
            <ThemeToggle />
          </div>
        </div>
        <Progress
          value={((session.durationSec - left) / session.durationSec) * 100}
          className="h-1 rounded-none"
          aria-label="Progres waktu"
        />
      </header>

      <div className="mx-auto grid w-full max-w-6xl flex-1 gap-6 px-4 py-6 lg:grid-cols-[1fr_260px]">
        <main>
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-medium text-muted-foreground">
              Soal {index + 1} dari {session.items.length}
            </p>
            <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium capitalize">
              {question.difficulty} · {question.topic}
            </span>
          </div>

          <Card className="mt-3 shadow-card">
            <CardContent className="p-6">
              {question.passage ? (
                <div className="mb-5 rounded-xl border border-border bg-muted/50 p-4 text-sm leading-relaxed whitespace-pre-line">
                  {question.passage}
                </div>
              ) : null}

              <h1 className="text-base leading-relaxed font-semibold sm:text-lg">
                {question.question}
              </h1>

              <fieldset className="mt-5 space-y-2" disabled={expired}>
                <legend className="sr-only">Pilihan jawaban</legend>
                {item.optionOrder.map((originalIdx, displayIdx) => {
                  const active = selected === displayIdx;
                  return (
                    <button
                      key={originalIdx}
                      type="button"
                      onClick={() => answer(displayIdx)}
                      aria-pressed={active}
                      className={cn(
                        "flex w-full items-start gap-3 rounded-xl border p-4 text-left text-sm transition-colors",
                        active
                          ? "border-primary bg-primary/10 font-medium"
                          : "border-border hover:bg-muted",
                        expired && "opacity-60",
                      )}
                    >
                      <span
                        className={cn(
                          "grid size-7 shrink-0 place-items-center rounded-lg text-xs font-bold",
                          active ? "bg-primary text-primary-foreground" : "bg-muted",
                        )}
                      >
                        {LETTERS[displayIdx]}
                      </span>
                      <span className="leading-relaxed">{question.options[originalIdx]}</span>
                    </button>
                  );
                })}
              </fieldset>
            </CardContent>
          </Card>

          <div className="mt-4 hidden items-center justify-between gap-2 lg:flex">
            <Button
              variant="outline"
              className="rounded-full"
              disabled={index === 0}
              onClick={() => jump(index - 1)}
            >
              <ChevronLeft className="mr-1 size-4" aria-hidden="true" /> Sebelumnya
            </Button>
            <Button variant={isMarked ? "default" : "secondary"} className="rounded-full" onClick={toggleMark}>
              {isMarked ? (
                <>
                  <StarOff className="mr-1 size-4" aria-hidden="true" /> Batal Tandai
                </>
              ) : (
                <>
                  <Star className="mr-1 size-4" aria-hidden="true" /> Tandai Soal
                </>
              )}
            </Button>
            {index === session.items.length - 1 ? (
              <Button className="rounded-full" onClick={() => setConfirmOpen(true)}>
                Selesaikan
              </Button>
            ) : (
              <Button className="rounded-full" onClick={() => jump(index + 1)}>
                Berikutnya <ChevronRight className="ml-1 size-4" aria-hidden="true" />
              </Button>
            )}
          </div>
        </main>

        <aside className="hidden lg:block">
          <div className="sticky top-28 rounded-2xl border border-border bg-card p-4 shadow-card">
            <h2 className="mb-3 text-sm font-semibold">Navigasi Soal</h2>
            {navigator}
            <Button className="mt-4 w-full rounded-full" onClick={() => setConfirmOpen(true)}>
              Selesaikan Simulasi
            </Button>
          </div>
        </aside>
      </div>

      {/* Mobile sticky controls */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-6xl items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            aria-label="Soal sebelumnya"
            disabled={index === 0}
            onClick={() => jump(index - 1)}
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
          </Button>
          <Button
            variant={isMarked ? "default" : "secondary"}
            size="icon"
            className="rounded-full"
            aria-label={isMarked ? "Batalkan tanda soal" : "Tandai soal"}
            onClick={toggleMark}
          >
            <Star className="size-4" aria-hidden="true" />
          </Button>
          <Sheet open={navOpen} onOpenChange={setNavOpen}>
            <SheetTrigger asChild>
              <Button variant="secondary" className="flex-1 rounded-full">
                <LayoutGrid className="mr-1 size-4" aria-hidden="true" /> {index + 1}/
                {session.items.length}
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="max-h-[80vh] overflow-y-auto">
              <SheetTitle className="px-4 pt-4">Navigasi Soal</SheetTitle>
              <div className="p-4">
                {navigator}
                <Button
                  className="mt-4 w-full rounded-full"
                  onClick={() => {
                    setNavOpen(false);
                    setConfirmOpen(true);
                  }}
                >
                  Selesaikan Simulasi
                </Button>
              </div>
            </SheetContent>
          </Sheet>
          {index === session.items.length - 1 ? (
            <Button className="rounded-full" onClick={() => setConfirmOpen(true)}>
              Selesai
            </Button>
          ) : (
            <Button
              size="icon"
              className="rounded-full"
              aria-label="Soal berikutnya"
              onClick={() => jump(index + 1)}
            >
              <ChevronRight className="size-4" aria-hidden="true" />
            </Button>
          )}
        </div>
      </div>

      <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Apakah kamu yakin ingin menyelesaikan simulasi?</DialogTitle>
            <DialogDescription>
              {stats.unanswered > 0
                ? `Masih ada ${stats.unanswered} soal yang belum dijawab.`
                : "Semua soal sudah terjawab."}
            </DialogDescription>
          </DialogHeader>
          <dl className="grid grid-cols-3 gap-3 text-center">
            <div className="rounded-xl bg-muted p-3">
              <dt className="text-xs text-muted-foreground">Terjawab</dt>
              <dd className="font-display text-xl font-bold text-success">{stats.answered}</dd>
            </div>
            <div className="rounded-xl bg-muted p-3">
              <dt className="text-xs text-muted-foreground">Belum dijawab</dt>
              <dd className="font-display text-xl font-bold">{stats.unanswered}</dd>
            </div>
            <div className="rounded-xl bg-muted p-3">
              <dt className="text-xs text-muted-foreground">Ditandai</dt>
              <dd className="font-display text-xl font-bold text-warning">{stats.marked}</dd>
            </div>
          </dl>
          <DialogFooter className="gap-2 sm:gap-2">
            <Button variant="outline" className="rounded-full" onClick={() => setConfirmOpen(false)}>
              Kembali
            </Button>
            <Button className="rounded-full" onClick={() => finish(false)}>
              Selesaikan Simulasi
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
