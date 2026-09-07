import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { CloudOff, Medal, RefreshCw, Wifi } from "lucide-react";
import { AppShell } from "@/components/app-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getGuest, getLeaderboard } from "@/lib/storage";
import {
  fetchLeaderboard,
  type GlobalLeaderboardEntry,
  type LeaderboardMode,
  type LeaderboardPeriod,
} from "@/lib/leaderboard";
import { formatDuration } from "@/lib/exam-engine";
import { SECTIONS } from "@/data/sections";
import { cn } from "@/lib/utils";


export const Route = createFileRoute("/leaderboard")({
  head: () => ({
    meta: [
      { title: "Leaderboard — SNBT Simulator" },
      {
        name: "description",
        content:
          "Peringkat global skor simulasi SNBT: harian, mingguan, dan sepanjang masa — per mode maupun per subtes.",
      },
      { property: "og:title", content: "Leaderboard — SNBT Simulator" },
      { property: "og:description", content: "Pacu peringkat skor simulasi SNBT-mu." },
    ],
  }),
  component: LeaderboardPage,
});

const MEDALS = ["text-warning", "text-muted-foreground", "text-chart-1"];

const MODE_TABS: { value: LeaderboardMode; label: string }[] = [
  { value: "all", label: "Semua Mode" },
  { value: "full", label: "Simulasi Penuh" },
  { value: "section", label: "Per Subtes" },
  { value: "quick", label: "Quick Practice" },
];

const SECTION_TABS: { value: string; label: string }[] = [
  { value: "all", label: "Semua Subtes" },
  ...SECTIONS.map((s) => ({ value: s.name, label: s.short })),
];

function LeaderboardPage() {
  const [entries, setEntries] = useState<GlobalLeaderboardEntry[]>([]);
  const [guestId, setGuestId] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const [online, setOnline] = useState(true);
  const [period, setPeriod] = useState<LeaderboardPeriod>("all");
  const [mode, setMode] = useState<LeaderboardMode>("all");
  const [section, setSection] = useState<string>("all");
  const [reloadKey, setReloadKey] = useState(0);


  useEffect(() => {
    setGuestId(getGuest()?.guestId ?? null);
  }, []);

  useEffect(() => {
    let cancelled = false;
    setReady(false);
    fetchLeaderboard(period, mode).then((res) => {
      if (cancelled) return;
      if (res.online) {
        setEntries(res.entries);
        setOnline(true);
      } else {
        // Offline fallback: local device scores.
        setEntries(
          getLeaderboard().map((e) => ({
            id: e.id,
            guestId: e.guestId,
            name: e.name,
            mode: "full",
            title: e.title,
            section: null,
            score: e.score,
            accuracy: e.accuracy,
            timeUsedSec: e.timeUsedSec,
            finishedAt: e.finishedAt,
          })),
        );
        setOnline(false);
      }
      setReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, [period, mode, reloadKey]);

  const myBestRank = useMemo(
    () => entries.findIndex((e) => e.guestId === guestId) + 1,
    [entries, guestId],
  );

  return (
    <AppShell>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-3xl font-bold">Leaderboard</h1>
          <p className="mt-1 flex items-center gap-2 text-muted-foreground">
            {online ? (
              <>
                <Wifi className="size-4 text-success" aria-hidden="true" />
                Peringkat global — semua pemain, semua perangkat.
              </>
            ) : (
              <>
                <CloudOff className="size-4 text-warning" aria-hidden="true" />
                Koneksi bermasalah — menampilkan peringkat lokal perangkat ini.
              </>
            )}
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="rounded-full"
          onClick={() => setReloadKey((k) => k + 1)}
        >
          <RefreshCw className="size-4" aria-hidden="true" />
          Muat Ulang
        </Button>
      </div>

      <div className="mt-6 space-y-3">
        <Tabs value={period} onValueChange={(v) => setPeriod(v as LeaderboardPeriod)}>
          <TabsList>
            <TabsTrigger value="day">Harian</TabsTrigger>
            <TabsTrigger value="week">Mingguan</TabsTrigger>
            <TabsTrigger value="all">Sepanjang Masa</TabsTrigger>
          </TabsList>
        </Tabs>
        <Tabs value={mode} onValueChange={(v) => setMode(v as LeaderboardMode)}>
          <TabsList className="flex-wrap">
            {MODE_TABS.map((t) => (
              <TabsTrigger key={t.value} value={t.value}>
                {t.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {online && myBestRank > 0 && myBestRank <= 100 ? (
        <p className="mt-4 rounded-xl border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
          Posisi terbaikmu saat ini: #{myBestRank}
        </p>
      ) : null}

      <Card className="mt-4 shadow-card">
        <CardContent className="p-0">
          {!ready ? (
            <p className="p-10 text-center text-muted-foreground">Memuat peringkat…</p>
          ) : entries.length === 0 ? (
            <div className="p-10 text-center">
              <p className="text-muted-foreground">
                Belum ada skor pada kategori ini. Jadilah yang pertama!
              </p>
              <Button asChild className="mt-4 rounded-full">
                <Link to="/simulasi">Mulai Simulasi</Link>
              </Button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-16">Rank</TableHead>
                    <TableHead>Nama</TableHead>
                    <TableHead className="text-right">Skor</TableHead>
                    <TableHead className="text-right">Akurasi</TableHead>
                    <TableHead className="text-right">Waktu</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {entries.slice(0, 50).map((e, i) => (
                    <TableRow key={e.id} className={cn(e.guestId === guestId && "bg-primary/5")}>
                      <TableCell className="font-semibold">
                        <span className="inline-flex items-center gap-1">
                          {i < 3 ? (
                            <Medal className={cn("size-4", MEDALS[i])} aria-hidden="true" />
                          ) : null}
                          {i + 1}
                        </span>
                      </TableCell>
                      <TableCell className="font-medium">
                        {e.name}
                        {e.guestId === guestId ? (
                          <span className="ml-2 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                            kamu
                          </span>
                        ) : null}
                        <span className="block text-xs text-muted-foreground">{e.title}</span>
                      </TableCell>
                      <TableCell className="text-right font-semibold">{e.score}</TableCell>
                      <TableCell className="text-right">{e.accuracy}%</TableCell>
                      <TableCell className="text-right text-muted-foreground">
                        {formatDuration(e.timeUsedSec)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </AppShell>
  );
}
