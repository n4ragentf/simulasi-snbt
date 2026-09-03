import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Sparkles, ThumbsUp, TrendingDown } from "lucide-react";
import { AppShell } from "@/components/app-header";
import { StatCard } from "@/components/stat-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getResult } from "@/lib/storage";
import { SCORE_DISCLAIMER } from "@/lib/scoring";
import { formatDuration, sectionLabel } from "@/lib/exam-engine";
import { SECTION_MAP } from "@/data/sections";
import type { ExamResult } from "@/lib/types";

export const Route = createFileRoute("/hasil/$id")({
  head: () => ({
    meta: [
      { title: "Hasil Simulasi — SNBT Simulator" },
      {
        name: "description",
        content: "Skor estimasi, akurasi, dan analisis performa per subtes dari simulasi SNBT-mu.",
      },
      { property: "og:title", content: "Hasil Simulasi — SNBT Simulator" },
      {
        property: "og:description",
        content: "Lihat skor, akurasi, dan rekomendasi latihan berdasarkan hasil simulasimu.",
      },
    ],
  }),
  component: ResultPage,
});

function ResultPage() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const [result, setResult] = useState<ExamResult | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setResult(getResult(id) ?? null);
    setReady(true);
  }, [id]);

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
            <h1 className="text-xl font-semibold">Hasil tidak ditemukan</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Data hasil mungkin sudah terhapus dari perangkat ini.
            </p>
            <Button className="mt-6 rounded-full" onClick={() => navigate({ to: "/riwayat" })}>
              Buka Riwayat
            </Button>
          </CardContent>
        </Card>
      </AppShell>
    );
  }

  const sorted = [...result.perSection].sort((a, b) => b.accuracy - a.accuracy);
  const best = sorted[0];
  const worst = sorted[sorted.length - 1];

  const barData = result.perSection.map((s) => ({
    name: SECTION_MAP[s.sectionId]?.short ?? s.sectionId,
    Akurasi: s.accuracy,
    Skor: s.score,
  }));

  const pieData = [
    { name: "Benar", value: result.correct, color: "var(--success)" },
    { name: "Salah", value: result.wrong, color: "var(--destructive)" },
    { name: "Tidak dijawab", value: result.unanswered, color: "var(--muted-foreground)" },
  ];

  const diffData = (["easy", "medium", "hard"] as const).map((d) => ({
    name: d === "easy" ? "Mudah" : d === "medium" ? "Sedang" : "Sulit",
    Akurasi: result.perDifficulty[d].total
      ? Math.round((result.perDifficulty[d].correct / result.perDifficulty[d].total) * 100)
      : 0,
  }));

  return (
    <AppShell>
      <section className="rounded-3xl bg-hero-gradient px-6 py-10 text-center text-primary-foreground shadow-float">
        <h1 className="text-2xl font-bold sm:text-3xl">🎉 Simulasi Selesai!</h1>
        <p className="mt-1 opacity-90">{result.guestName}</p>
        <p className="mt-6 text-xs tracking-widest uppercase opacity-80">Skor</p>
        <p className="font-display text-6xl font-bold">{result.score}</p>
        <p className="mt-2 text-sm opacity-90">
          {result.title} · {formatDuration(result.timeUsedSec)}
        </p>
      </section>

      <p className="mt-4 text-center text-xs text-muted-foreground">{SCORE_DISCLAIMER}</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Akurasi" value={`${result.accuracy}%`} />
        <StatCard label="Benar" value={result.correct} />
        <StatCard label="Salah" value={result.wrong} />
        <StatCard label="Tidak Dijawab" value={result.unanswered} />
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-base">Performa tiap subtes</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="var(--muted-foreground)" />
                <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} stroke="var(--muted-foreground)" />
                <Tooltip
                  contentStyle={{
                    background: "var(--popover)",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    color: "var(--popover-foreground)",
                  }}
                />
                <Bar dataKey="Akurasi" fill="var(--primary)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-base">Benar vs salah</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" innerRadius={55} outerRadius={90}>
                  {pieData.map((d) => (
                    <Cell key={d.name} fill={d.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: "var(--popover)",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    color: "var(--popover-foreground)",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-base">Akurasi per tingkat kesulitan</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={diffData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="var(--muted-foreground)" />
                <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} stroke="var(--muted-foreground)" />
                <Tooltip
                  contentStyle={{
                    background: "var(--popover)",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    color: "var(--popover-foreground)",
                  }}
                />
                <Bar dataKey="Akurasi" fill="var(--chart-2)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-base">Evaluasi</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {best ? (
              <div className="rounded-xl border border-success/40 bg-success/10 p-4">
                <p className="inline-flex items-center gap-2 text-sm font-semibold">
                  <ThumbsUp className="size-4 text-success" aria-hidden="true" /> Kemampuan Terbaik
                </p>
                <p className="mt-1 text-sm">
                  {sectionLabel(best.sectionId)} — akurasi {best.accuracy}%
                </p>
              </div>
            ) : null}
            {worst && worst !== best ? (
              <div className="rounded-xl border border-warning/50 bg-warning/10 p-4">
                <p className="inline-flex items-center gap-2 text-sm font-semibold">
                  <TrendingDown className="size-4 text-warning" aria-hidden="true" /> Yang Perlu
                  Ditingkatkan
                </p>
                <p className="mt-1 text-sm">
                  {sectionLabel(worst.sectionId)} — akurasi {worst.accuracy}%
                </p>
              </div>
            ) : null}
            <div className="rounded-xl border border-border p-4">
              <p className="inline-flex items-center gap-2 text-sm font-semibold">
                <Sparkles className="size-4 text-primary" aria-hidden="true" /> Rekomendasi
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {worst
                  ? `Fokuskan latihan berikutnya pada ${sectionLabel(worst.sectionId)}, lalu ulangi simulasi untuk mengukur perubahannya.`
                  : "Lanjutkan latihan rutin untuk menjaga konsistensi skormu."}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild className="rounded-full">
          <Link to="/review/$id" params={{ id: result.id }}>
            Review Jawaban
          </Link>
        </Button>
        <Button asChild variant="outline" className="rounded-full">
          <Link to="/dashboard">Kembali ke Dashboard</Link>
        </Button>
        <Button asChild variant="secondary" className="rounded-full">
          <Link to="/simulasi">Coba Lagi</Link>
        </Button>
      </div>
    </AppShell>
  );
}
