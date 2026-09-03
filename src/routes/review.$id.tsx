import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, CircleSlash, XCircle } from "lucide-react";
import { AppShell } from "@/components/app-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getResult } from "@/lib/storage";
import { getQuestion } from "@/data/questions";
import { sectionLabel } from "@/lib/exam-engine";
import type { ExamResult } from "@/lib/types";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/review/$id")({
  head: () => ({
    meta: [
      { title: "Review Pembahasan — SNBT Simulator" },
      {
        name: "description",
        content: "Bandingkan jawabanmu dengan kunci jawaban dan baca pembahasan lengkap tiap soal.",
      },
      { property: "og:title", content: "Review Pembahasan — SNBT Simulator" },
      {
        property: "og:description",
        content: "Pembahasan langkah demi langkah untuk setiap soal simulasi SNBT.",
      },
    ],
  }),
  component: ReviewPage,
});

const LETTERS = ["A", "B", "C", "D", "E", "F"];
type Filter = "all" | "wrong" | "empty";

function ReviewPage() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const [result, setResult] = useState<ExamResult | null>(null);
  const [ready, setReady] = useState(false);
  const [filter, setFilter] = useState<Filter>("all");

  useEffect(() => {
    setResult(getResult(id) ?? null);
    setReady(true);
  }, [id]);

  const details = useMemo(() => {
    if (!result) return [];
    return result.details.filter((d) => {
      if (filter === "wrong") return !d.isCorrect && d.selected !== null;
      if (filter === "empty") return d.selected === null;
      return true;
    });
  }, [result, filter]);

  if (!ready) {
    return (
      <AppShell>
        <p className="py-20 text-center text-muted-foreground">Memuat…</p>
      </AppShell>
    );
  }

  if (!result) {
    return (
      <AppShell>
        <Card className="mx-auto max-w-md shadow-card">
          <CardContent className="p-8 text-center">
            <h1 className="text-xl font-semibold">Data review tidak ditemukan</h1>
            <Button className="mt-6 rounded-full" onClick={() => navigate({ to: "/riwayat" })}>
              Buka Riwayat
            </Button>
          </CardContent>
        </Card>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-3xl font-bold">Review Pembahasan</h1>
          <p className="mt-1 text-muted-foreground">
            {result.title} · skor {result.score} · akurasi {result.accuracy}%
          </p>
        </div>
        <Button asChild variant="outline" className="rounded-full">
          <Link to="/hasil/$id" params={{ id: result.id }}>
            Kembali ke Hasil
          </Link>
        </Button>
      </div>

      <Tabs value={filter} onValueChange={(v) => setFilter(v as Filter)} className="mt-6">
        <TabsList>
          <TabsTrigger value="all">Semua ({result.total})</TabsTrigger>
          <TabsTrigger value="wrong">Salah ({result.wrong})</TabsTrigger>
          <TabsTrigger value="empty">Kosong ({result.unanswered})</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="mt-6 space-y-4">
        {details.length === 0 ? (
          <p className="py-10 text-center text-muted-foreground">Tidak ada soal pada filter ini.</p>
        ) : null}

        {details.map((d) => {
          const q = getQuestion(d.questionId);
          if (!q) return null;
          const number = result.details.findIndex((x) => x.questionId === d.questionId) + 1;
          const correctDisplay = d.optionOrder.indexOf(q.correctAnswer);
          const status = d.isCorrect ? "correct" : d.selected === null ? "empty" : "wrong";

          return (
            <Card key={d.questionId} className="shadow-card">
              <CardContent className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold">Soal {number}</p>
                  <span className="text-xs text-muted-foreground">
                    {sectionLabel(d.sectionId)} · {q.topic} · {q.difficulty}
                  </span>
                </div>

                {q.passage ? (
                  <div className="mt-4 rounded-xl border border-border bg-muted/50 p-4 text-sm leading-relaxed whitespace-pre-line">
                    {q.passage}
                  </div>
                ) : null}

                <p className="mt-4 leading-relaxed font-medium">{q.question}</p>

                <ul className="mt-4 space-y-2">
                  {d.optionOrder.map((originalIdx, displayIdx) => {
                    const isCorrect = displayIdx === correctDisplay;
                    const isChosen = d.selected === displayIdx;
                    return (
                      <li
                        key={originalIdx}
                        className={cn(
                          "flex items-start gap-3 rounded-xl border p-3 text-sm",
                          isCorrect
                            ? "border-success/60 bg-success/10"
                            : isChosen
                              ? "border-destructive/60 bg-destructive/10"
                              : "border-border",
                        )}
                      >
                        <span className="grid size-6 shrink-0 place-items-center rounded-md bg-muted text-xs font-bold">
                          {LETTERS[displayIdx]}
                        </span>
                        <span className="leading-relaxed">{q.options[originalIdx]}</span>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                  <span>
                    Jawaban kamu:{" "}
                    <strong>{d.selected === null ? "—" : LETTERS[d.selected]}</strong>
                  </span>
                  <span>
                    Jawaban benar: <strong>{LETTERS[correctDisplay]}</strong>
                  </span>
                  {status === "correct" ? (
                    <span className="inline-flex items-center gap-1 font-semibold text-success">
                      <CheckCircle2 className="size-4" aria-hidden="true" /> Jawaban benar
                    </span>
                  ) : status === "wrong" ? (
                    <span className="inline-flex items-center gap-1 font-semibold text-destructive">
                      <XCircle className="size-4" aria-hidden="true" /> Salah
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 font-semibold text-muted-foreground">
                      <CircleSlash className="size-4" aria-hidden="true" /> Tidak dijawab
                    </span>
                  )}
                </div>

                <div className="mt-4 rounded-xl border border-border bg-muted/40 p-4">
                  <p className="text-xs font-semibold tracking-wide uppercase">Pembahasan</p>
                  <p className="mt-1 text-sm leading-relaxed">{q.explanation}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </AppShell>
  );
}
