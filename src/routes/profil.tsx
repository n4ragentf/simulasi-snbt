import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { RotateCcw, UserRound } from "lucide-react";
import { toast } from "sonner";
import { AppShell } from "@/components/app-header";
import { StatCard } from "@/components/stat-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useGuest, validateName } from "@/hooks/use-guest";
import { clearAllData, getHistory } from "@/lib/storage";
import type { ExamResult } from "@/lib/types";

export const Route = createFileRoute("/profil")({
  head: () => ({
    meta: [
      { title: "Profil Guest — SNBT Simulator" },
      {
        name: "description",
        content: "Kelola nama guest, lihat best score dan total simulasi, atau reset data lokalmu.",
      },
      { property: "og:title", content: "Profil Guest — SNBT Simulator" },
      { property: "og:description", content: "Profil guest tanpa login untuk latihan SNBT." },
    ],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  const { guest, ready, rename } = useGuest();
  const navigate = useNavigate();
  const [history, setHistory] = useState<ExamResult[]>([]);
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [confirmReset, setConfirmReset] = useState(false);

  useEffect(() => {
    if (!ready) return;
    setHistory(getHistory());
    setName(guest?.name ?? "");
  }, [ready, guest]);

  if (!ready) {
    return (
      <AppShell>
        <p className="py-20 text-center text-muted-foreground">Memuat…</p>
      </AppShell>
    );
  }

  if (!guest) {
    return (
      <AppShell>
        <Card className="mx-auto max-w-md shadow-card">
          <CardContent className="p-8 text-center">
            <h1 className="text-xl font-semibold">Belum ada profil guest</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Masukkan namamu terlebih dahulu di dashboard.
            </p>
            <Button asChild className="mt-6 rounded-full">
              <Link to="/dashboard">Ke Dashboard</Link>
            </Button>
          </CardContent>
        </Card>
      </AppShell>
    );
  }

  const best = history.length ? Math.max(...history.map((r) => r.score)) : 0;

  return (
    <AppShell>
      <h1 className="text-3xl font-bold">Profil</h1>

      <Card className="mt-6 shadow-card">
        <CardContent className="flex items-center gap-4 p-6">
          <span className="grid size-16 place-items-center rounded-2xl bg-hero-gradient text-primary-foreground">
            <UserRound className="size-8" aria-hidden="true" />
          </span>
          <div>
            <p className="font-display text-2xl font-bold">{guest.name}</p>
            <p className="text-sm text-muted-foreground">Guest User</p>
            <p className="text-xs text-muted-foreground">
              Bergabung {new Date(guest.createdAt).toLocaleDateString("id-ID")}
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <StatCard label="Best Score" value={best || "—"} />
        <StatCard label="Total Simulasi" value={history.length} />
      </div>

      <Card className="mt-6 shadow-card">
        <CardHeader>
          <CardTitle className="text-base">Ubah nama</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            noValidate
            className="flex flex-wrap items-end gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              const err = validateName(name);
              setError(err);
              if (err) return;
              rename(name);
              toast.success("Nama berhasil diperbarui.");
            }}
          >
            <div className="min-w-[220px] flex-1 space-y-2">
              <Label htmlFor="profile-name">Nama</Label>
              <Input
                id="profile-name"
                value={name}
                maxLength={30}
                aria-invalid={!!error}
                onChange={(e) => setName(e.target.value)}
              />
              {error ? (
                <p role="alert" className="text-sm text-destructive">
                  {error}
                </p>
              ) : null}
            </div>
            <Button type="submit" className="rounded-full">
              Simpan
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card className="mt-6 border-destructive/40 shadow-card">
        <CardHeader>
          <CardTitle className="text-base">Reset data</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            Menghapus profil guest, riwayat, sesi berjalan, dan leaderboard lokal.
          </p>
          <Button variant="destructive" className="rounded-full" onClick={() => setConfirmReset(true)}>
            <RotateCcw className="mr-1 size-4" aria-hidden="true" /> Reset semua data
          </Button>
        </CardContent>
      </Card>

      <Dialog open={confirmReset} onOpenChange={setConfirmReset}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reset semua data?</DialogTitle>
            <DialogDescription>
              Tindakan ini tidak dapat dibatalkan. Semua data lokal akan dihapus.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2 sm:gap-2">
            <Button variant="outline" className="rounded-full" onClick={() => setConfirmReset(false)}>
              Batal
            </Button>
            <Button
              variant="destructive"
              className="rounded-full"
              onClick={() => {
                clearAllData();
                setConfirmReset(false);
                navigate({ to: "/" });
              }}
            >
              Ya, reset
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AppShell>
  );
}
