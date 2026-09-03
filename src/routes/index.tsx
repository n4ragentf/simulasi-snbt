import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  ClipboardList,
  History,
  Timer,
  Trophy,
  UserRound,
} from "lucide-react";
import { AppShell } from "@/components/app-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SECTIONS } from "@/data/sections";
import { countBySection } from "@/data/questions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SNBT Simulator — Latihan SNBT Lebih Terarah" },
      {
        name: "description",
        content:
          "Simulasi SNBT/UTBK gratis tanpa login: timer real-time, pembahasan lengkap, statistik performa, riwayat, dan leaderboard.",
      },
      { property: "og:title", content: "SNBT Simulator — Latihan SNBT Lebih Terarah" },
      {
        property: "og:description",
        content:
          "Simulasikan pengalaman ujian SNBT, ukur kemampuanmu, dan lihat perkembanganmu. Tanpa login.",
      },
    ],
  }),
  component: Landing,
});

const FEATURES = [
  { icon: ClipboardList, title: "Simulasi SNBT", desc: "Sesi penuh seluruh subtes maupun latihan per subtes." },
  { icon: Timer, title: "Timer Real-Time", desc: "Hitung mundur tetap berjalan walau halaman di-refresh." },
  { icon: BookOpenCheck, title: "Pembahasan Lengkap", desc: "Setiap soal disertai penjelasan langkah demi langkah." },
  { icon: BarChart3, title: "Statistik Performa", desc: "Skor, akurasi, dan kekuatan per subtes tervisualisasi." },
  { icon: Trophy, title: "Leaderboard", desc: "Bandingkan skor terbaikmu dan pacu peringkatmu." },
  { icon: History, title: "Riwayat Simulasi", desc: "Semua hasil tersimpan dan bisa dibuka ulang kapan saja." },
];

const STEPS = [
  { n: "1", t: "Masukkan nama", d: "Tanpa akun, tanpa kata sandi. Cukup nama panggilanmu." },
  { n: "2", t: "Pilih simulasi", d: "Sesi lengkap, per subtes, atau quick practice." },
  { n: "3", t: "Kerjakan soal", d: "Navigator soal, tandai ragu, progres tersimpan otomatis." },
  { n: "4", t: "Lihat hasil", d: "Skor estimasi, akurasi, dan rincian per subtes." },
  { n: "5", t: "Evaluasi kemampuan", d: "Baca pembahasan dan fokus ke subtes yang lemah." },
];

function Landing() {
  return (
    <AppShell>
      <section className="relative overflow-hidden rounded-3xl bg-hero-gradient px-6 py-16 text-primary-foreground shadow-float sm:px-12 sm:py-20">
        <div className="relative z-10 max-w-2xl">
          <Badge variant="secondary" className="rounded-full bg-white/15 text-primary-foreground">
            Gratis · Tanpa login
          </Badge>
          <h1 className="mt-5 text-4xl leading-tight font-bold sm:text-5xl">
            Latihan SNBT Lebih Terarah
          </h1>
          <p className="mt-4 max-w-xl text-base/relaxed opacity-90 sm:text-lg">
            Simulasikan pengalaman ujian, ukur kemampuanmu, dan lihat perkembanganmu.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="secondary" className="rounded-full">
              <Link to="/dashboard">
                Mulai Simulasi <ArrowRight className="ml-1 size-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="rounded-full border border-white/30 hover:bg-white/10"
            >
              <a href="#subtes">Lihat Subtes</a>
            </Button>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 size-80 rounded-full bg-white/10 blur-2xl"
        />
      </section>

      <section aria-labelledby="fitur" className="mt-16">
        <h2 id="fitur" className="text-2xl font-bold sm:text-3xl">
          Fitur
        </h2>
        <p className="mt-2 text-muted-foreground">Semua yang kamu butuhkan untuk berlatih serius.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <Card key={f.title} className="shadow-card transition-shadow hover:shadow-float">
              <CardContent className="p-6">
                <span className="grid size-11 place-items-center rounded-xl bg-muted text-primary">
                  <f.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="subtes" aria-labelledby="subtes-h" className="mt-16 scroll-mt-20">
        <h2 id="subtes-h" className="text-2xl font-bold sm:text-3xl">
          Subtes
        </h2>
        <p className="mt-2 text-muted-foreground">Tujuh subtes dengan bank soal original.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SECTIONS.map((s) => (
            <Card key={s.id} className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-lg bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
                    {s.short}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {countBySection(s.id)} soal
                  </span>
                </div>
                <h3 className="mt-3 text-base font-semibold">{s.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section aria-labelledby="cara" className="mt-16">
        <h2 id="cara" className="text-2xl font-bold sm:text-3xl">
          Cara Kerja
        </h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((s) => (
            <li key={s.n} className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <span className="grid size-8 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {s.n}
              </span>
              <h3 className="mt-3 text-sm font-semibold">{s.t}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16 overflow-hidden rounded-3xl border border-border bg-subtle-gradient px-6 py-14 text-center shadow-card">
        <UserRound className="mx-auto size-10 text-primary" aria-hidden="true" />
        <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Siap menguji kemampuanmu?</h2>
        <p className="mx-auto mt-2 max-w-md text-muted-foreground">
          Masuk sebagai guest dan mulai simulasi pertamamu dalam hitungan detik.
        </p>
        <Button asChild size="lg" className="mt-6 rounded-full">
          <Link to="/dashboard">
            Mulai Simulasi <ArrowRight className="ml-1 size-4" aria-hidden="true" />
          </Link>
        </Button>
      </section>
    </AppShell>
  );
}
