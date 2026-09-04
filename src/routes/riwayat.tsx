import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
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
import { clearHistory, getHistory } from "@/lib/storage";
import { formatDuration } from "@/lib/exam-engine";
import type { ExamResult } from "@/lib/types";

export const Route = createFileRoute("/riwayat")({
  head: () => ({
    meta: [
      { title: "Riwayat Simulasi — SNBT Simulator" },
      {
        name: "description",
        content: "Semua hasil simulasi SNBT-mu tersimpan lengkap dengan skor, akurasi, dan tanggal.",
      },
      { property: "og:title", content: "Riwayat Simulasi — SNBT Simulator" },
      {
        property: "og:description",
        content: "Telusuri kembali hasil simulasi sebelumnya dan buka pembahasannya.",
      },
    ],
  }),
  component: HistoryPage,
});

function HistoryPage() {
  const [history, setHistory] = useState<ExamResult[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setHistory(getHistory());
    setReady(true);
  }, []);

  return (
    <AppShell>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-3xl font-bold">Riwayat Simulasi</h1>
          <p className="mt-1 text-muted-foreground">
            Data tersimpan di perangkat ini menggunakan penyimpanan lokal.
          </p>
        </div>
        {history.length > 0 ? (
          <Button
            variant="outline"
            className="rounded-full"
            onClick={() => {
              clearHistory();
              setHistory([]);
            }}
          >
            <Trash2 className="mr-1 size-4" aria-hidden="true" /> Hapus riwayat
          </Button>
        ) : null}
      </div>

      <Card className="mt-6 shadow-card">
        <CardContent className="p-0">
          {!ready ? (
            <p className="p-10 text-center text-muted-foreground">Memuat…</p>
          ) : history.length === 0 ? (
            <div className="p-10 text-center">
              <p className="text-muted-foreground">Belum ada simulasi yang diselesaikan.</p>
              <Button asChild className="mt-4 rounded-full">
                <Link to="/simulasi">Mulai Simulasi</Link>
              </Button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Simulasi</TableHead>
                    <TableHead>Tanggal</TableHead>
                    <TableHead className="text-right">Skor</TableHead>
                    <TableHead className="text-right">Akurasi</TableHead>
                    <TableHead className="text-right">Waktu</TableHead>
                    <TableHead />
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {history.map((r) => (
                    <TableRow key={r.id}>
                      <TableCell className="font-medium">{r.title}</TableCell>
                      <TableCell className="text-muted-foreground">
                        {new Date(r.finishedAt).toLocaleDateString("id-ID", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </TableCell>
                      <TableCell className="text-right font-semibold">{r.score}</TableCell>
                      <TableCell className="text-right">{r.accuracy}%</TableCell>
                      <TableCell className="text-right text-muted-foreground">
                        {formatDuration(r.timeUsedSec)}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button asChild size="sm" variant="ghost" className="rounded-full">
                          <Link to="/hasil/$id" params={{ id: r.id }}>
                            Lihat
                          </Link>
                        </Button>
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
