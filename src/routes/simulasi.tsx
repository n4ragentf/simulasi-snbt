import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AlertTriangle, Clock, FileText, ListChecks, Play, Zap } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { AppShell } from "@/components/app-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { createArsipExam, createExam, getBlueprints, questionCountFor, type SimulationBlueprint } from "@/lib/exam-engine";
import { ARSIP_TOTAL } from "@/data/questions/arsip";
import { clearSession, getGuest, getSession, saveSession } from "@/lib/storage";
import type { ExamSession } from "@/lib/types";

export const Route = createFileRoute("/simulasi")({
  head: () => ({
    meta: [
      { title: "Pilih Simulasi — SNBT Simulator" },
      {
        name: "description",
        content:
          "Pilih simulasi SNBT lengkap, latihan per subtes, atau quick practice dengan durasi singkat.",
      },
      { property: "og:title", content: "Pilih Simulasi — SNBT Simulator" },
      {
        property: "og:description",
        content: "Simulasi lengkap, latihan per subtes, atau quick practice — pilih sesuai waktumu.",
      },
    ],
  }),
  component: SimulasiPage,
});

function BlueprintCard({
  bp,
  highlight,
  onStart,
}: {
  bp: SimulationBlueprint;
  highlight?: boolean;
  onStart: (bp: SimulationBlueprint) => void;
}) {
  const count = questionCountFor(bp);
  return (
    <Card className={`shadow-card transition-shadow hover:shadow-float ${highlight ? "border-primary/60" : ""}`}>
      <CardContent className="flex h-full flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold">{bp.title}</h3>
          {highlight ? <Badge className="rounded-full">Rekomendasi</Badge> : null}
        </div>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{bp.description}</p>
        <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <FileText className="size-3.5" aria-hidden="true" /> {count} soal
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3.5" aria-hidden="true" /> {bp.durationMinutes} menit
          </span>
          <span className="inline-flex items-center gap-1">
            <ListChecks className="size-3.5" aria-hidden="true" /> {bp.sectionIds.length} subtes
          </span>
        </div>
        <Button className="mt-5 w-full rounded-full" onClick={() => onStart(bp)} disabled={count === 0}>
          <Play className="mr-1 size-4" aria-hidden="true" /> Mulai
        </Button>
      </CardContent>
    </Card>
  );
}

function SimulasiPage() {
  const navigate = useNavigate();
  const blueprints = useMemo(() => getBlueprints(), []);
  const [shuffleQuestions, setShuffleQuestions] = useState(true);
  const [shuffleOptions, setShuffleOptions] = useState(false);
  const [pending, setPending] = useState<SimulationBlueprint | null>(null);
  const [existing, setExisting] = useState<ExamSession | null>(null);
  const [ready, setReady] = useState(false);
  const [arsipCount, setArsipCount] = useState(Math.min(10, ARSIP_TOTAL));

  useEffect(() => {
    setExisting(getSession());
    setReady(true);
  }, []);

  const full = blueprints.find((b) => b.key === "full")!;
  const quick = blueprints.find((b) => b.key === "quick")!;
  const sections = blueprints.filter((b) => b.mode === "section");

  const start = (bp: SimulationBlueprint) => {
    const guest = getGuest();
    if (!guest) {
      navigate({ to: "/dashboard" });
      return;
    }
    const session = createExam({
      guestId: guest.guestId,
      blueprint: bp,
      shuffleQuestions,
      shuffleOptions,
    });
    saveSession(session);
    navigate({ to: "/ujian" });
  };

  const handleStart = (bp: SimulationBlueprint) => {
    if (existing) {
      setPending(bp);
      return;
    }
    start(bp);
  };

  const startArsip = () => {
    const guest = getGuest();
    if (!guest) {
      navigate({ to: "/dashboard" });
      return;
    }
    const session = createArsipExam({
      guestId: guest.guestId,
      count: arsipCount,
      shuffleQuestions,
      shuffleOptions,
    });
    saveSession(session);
    navigate({ to: "/ujian" });
  };

  const handleStartArsip = () => {
    if (existing) {
      const ok = window.confirm(
        "Kamu punya simulasi yang belum selesai. Memulai latihan baru akan menghapus progres itu. Lanjutkan?",
      );
      if (!ok) return;
      clearSession();
      setExisting(null);
    }
    startArsip();
  };


  return (
    <AppShell>
      <h1 className="text-3xl font-bold">Pilih Simulasi</h1>
      <p className="mt-1 text-muted-foreground">
        Atur mode acak sesuai kebutuhan, lalu pilih paket latihanmu.
      </p>

      {ready && existing ? (
        <Card className="mt-6 border-warning/50 bg-warning/10 shadow-card">
          <CardContent className="flex flex-wrap items-center justify-between gap-3 p-5">
            <p className="inline-flex items-center gap-2 text-sm font-medium">
              <AlertTriangle className="size-4 text-warning" aria-hidden="true" />
              Kamu memiliki simulasi yang belum selesai: {existing.title}
            </p>
            <div className="flex gap-2">
              <Button asChild size="sm" className="rounded-full">
                <Link to="/ujian">Lanjutkan</Link>
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="rounded-full"
                onClick={() => {
                  clearSession();
                  setExisting(null);
                }}
              >
                Buang sesi
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : null}

      <Card className="mt-6 shadow-card">
        <CardHeader>
          <CardTitle className="text-base">Pengaturan simulasi</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 sm:flex-row sm:gap-10">
          <div className="flex items-center gap-3">
            <Switch id="sq" checked={shuffleQuestions} onCheckedChange={setShuffleQuestions} />
            <Label htmlFor="sq">Acak urutan soal</Label>
          </div>
          <div className="flex items-center gap-3">
            <Switch id="so" checked={shuffleOptions} onCheckedChange={setShuffleOptions} />
            <Label htmlFor="so">Acak urutan opsi jawaban</Label>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-6 shadow-card">
        <CardHeader>
          <CardTitle className="text-base">Latihan Soal Baru (Arsip)</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Hanya berisi {ARSIP_TOTAL} soal arsip yang baru ditambahkan. Pilih sendiri jumlah soalnya —
            waktu menyesuaikan (1,5 menit per soal).
          </p>
          <div className="mt-4 space-y-2">
            <Label htmlFor="arsip-count">Jumlah soal: {arsipCount}</Label>
            <input
              id="arsip-count"
              type="range"
              min={1}
              max={ARSIP_TOTAL}
              value={arsipCount}
              onChange={(e) => setArsipCount(Number(e.target.value))}
              className="w-full accent-primary"
            />
            <div className="flex flex-wrap gap-2 pt-1">
              {[5, 10, 15, ARSIP_TOTAL].map((n) => (
                <Button
                  key={n}
                  type="button"
                  size="sm"
                  variant={arsipCount === n ? "default" : "outline"}
                  className="rounded-full"
                  onClick={() => setArsipCount(Math.min(n, ARSIP_TOTAL))}
                >
                  {n === ARSIP_TOTAL ? `Semua (${ARSIP_TOTAL})` : n}
                </Button>
              ))}
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <FileText className="size-3.5" aria-hidden="true" /> {arsipCount} soal
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="size-3.5" aria-hidden="true" /> {Math.round((arsipCount * 90) / 60)} menit
            </span>
          </div>
          <Button className="mt-5 w-full rounded-full sm:w-auto" onClick={handleStartArsip}>
            <Play className="mr-1 size-4" aria-hidden="true" /> Mulai Latihan Soal Baru
          </Button>
        </CardContent>
      </Card>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <BlueprintCard bp={full} highlight onStart={handleStart} />
        <BlueprintCard bp={quick} onStart={handleStart} />
      </section>


      <section className="mt-10">
        <h2 className="inline-flex items-center gap-2 text-xl font-bold">
          <Zap className="size-5 text-primary" aria-hidden="true" /> Latihan Per Subtes
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((bp) => (
            <BlueprintCard key={bp.key} bp={bp} onStart={handleStart} />
          ))}
        </div>
      </section>

      <Dialog open={!!pending} onOpenChange={(o) => !o && setPending(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Kamu memiliki simulasi yang belum selesai</DialogTitle>
            <DialogDescription>
              Memulai simulasi baru akan menghapus progres sesi yang sedang berjalan.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2 sm:gap-2">
            <Button variant="outline" className="rounded-full" onClick={() => navigate({ to: "/ujian" })}>
              Lanjutkan sesi lama
            </Button>
            <Button
              className="rounded-full"
              onClick={() => {
                clearSession();
                setExisting(null);
                if (pending) start(pending);
              }}
            >
              Mulai Ulang
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AppShell>
  );
}
