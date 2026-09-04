import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Medal } from "lucide-react";
import { AppShell } from "@/components/app-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getGuest, getLeaderboard, type LeaderboardEntry } from "@/lib/storage";
import { formatDuration } from "@/lib/exam-engine";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/leaderboard")({
  head: () => ({
    meta: [
      { title: "Leaderboard — SNBT Simulator" },
      {
        name: "description",
        content:
          "Peringkat skor simulasi SNBT berdasarkan skor tertinggi, akurasi, lalu waktu pengerjaan tercepat.",
      },
      { property: "og:title", content: "Leaderboard — SNBT Simulator" },
      { property: "og:description", content: "Pacu peringkat skor simulasi SNBT-mu." },
    ],
  }),
  component: LeaderboardPage,
});

const MEDALS = ["text-warning", "text-muted-foreground", "text-chart-1"];

function LeaderboardPage() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [guestId, setGuestId] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setEntries(getLeaderboard());
    setGuestId(getGuest()?.guestId ?? null);
    setReady(true);
  }, []);

  return (
    <AppShell>
      <h1 className="text-3xl font-bold">Leaderboard</h1>
      <p className="mt-1 text-muted-foreground">
        Diurutkan berdasarkan skor tertinggi, lalu akurasi, lalu waktu tercepat. Saat ini peringkat
        bersifat lokal di perangkat ini.
      </p>

      <Card className="mt-6 shadow-card">
        <CardContent className="p-0">
          {!ready ? (
            <p className="p-10 text-center text-muted-foreground">Memuat…</p>
          ) : entries.length === 0 ? (
            <div className="p-10 text-center">
              <p className="text-muted-foreground">Belum ada skor yang tercatat.</p>
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
