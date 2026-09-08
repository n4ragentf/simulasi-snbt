import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Check, RefreshCw, ShieldCheck, X } from "lucide-react";
import { AppShell } from "@/components/app-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { useAccount, type AccountProfile, type ApprovalStatus } from "@/hooks/use-account";

export const Route = createFileRoute("/admin")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Verifikasi Akun — SNBT Simulator" },
      {
        name: "description",
        content: "Halaman admin untuk menyetujui atau menolak pendaftaran akun SNBT Simulator.",
      },
      { property: "og:title", content: "Verifikasi Akun — SNBT Simulator" },
      { property: "og:description", content: "Kelola persetujuan pendaftar SNBT Simulator." },
    ],
  }),
  component: AdminPage,
});

const TABS: { value: ApprovalStatus; label: string }[] = [
  { value: "pending", label: "Menunggu" },
  { value: "approved", label: "Disetujui" },
  { value: "rejected", label: "Ditolak" },
];

function AdminPage() {
  const { ready, user, isAdmin } = useAccount();
  const [tab, setTab] = useState<ApprovalStatus>("pending");
  const [rows, setRows] = useState<AccountProfile[]>([]);
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("profiles")
      .select("id, email, display_name, status, created_at")
      .order("created_at", { ascending: false });
    setLoading(false);
    if (error) {
      toast.error("Gagal memuat daftar pendaftar.");
      return;
    }
    setRows((data ?? []) as AccountProfile[]);
  }, []);

  useEffect(() => {
    if (ready && isAdmin) void load();
  }, [ready, isAdmin, load]);

  async function setStatus(id: string, status: ApprovalStatus) {
    const { error } = await supabase
      .from("profiles")
      .update({
        status,
        approved_at: status === "approved" ? new Date().toISOString() : null,
        approved_by: user?.id ?? null,
      })
      .eq("id", id);
    if (error) {
      toast.error("Gagal memperbarui status.");
      return;
    }
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
    toast.success(status === "approved" ? "Akun disetujui." : "Akun ditolak.");
  }

  if (!ready) {
    return (
      <AppShell>
        <p className="py-20 text-center text-muted-foreground">Memuat…</p>
      </AppShell>
    );
  }

  if (!user || !isAdmin) {
    return (
      <AppShell>
        <Card className="mx-auto max-w-md shadow-card">
          <CardContent className="p-8 text-center">
            <h1 className="text-xl font-semibold">Halaman khusus admin</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Masuk dengan akun admin untuk melihat daftar pendaftar.
            </p>
            <Button asChild className="mt-6 rounded-full">
              <Link to="/auth">Masuk</Link>
            </Button>
          </CardContent>
        </Card>
      </AppShell>
    );
  }

  const list = rows.filter((r) => r.status === tab);
  const pendingCount = rows.filter((r) => r.status === "pending").length;

  return (
    <AppShell>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="flex items-center gap-2 text-3xl font-bold">
            <ShieldCheck className="size-7 text-primary" aria-hidden="true" /> Verifikasi Akun
          </h1>
          <p className="mt-1 text-muted-foreground">
            {pendingCount} pendaftar menunggu persetujuanmu.
          </p>
        </div>
        <Button variant="outline" className="rounded-full" onClick={() => void load()}>
          <RefreshCw className="mr-1 size-4" aria-hidden="true" /> Muat ulang
        </Button>
      </div>

      <Tabs value={tab} onValueChange={(v) => setTab(v as ApprovalStatus)} className="mt-6">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          {TABS.map((t) => (
            <TabsTrigger key={t.value} value={t.value}>
              {t.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <Card className="mt-4 shadow-card">
        <CardHeader>
          <CardTitle className="text-base">Daftar akun</CardTitle>
          <CardDescription>
            {loading ? "Memuat…" : `${list.length} akun pada kategori ini.`}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {list.length === 0 && !loading ? (
            <p className="py-8 text-center text-sm text-muted-foreground">Belum ada data.</p>
          ) : null}
          {list.map((r) => (
            <div
              key={r.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border p-4"
            >
              <div className="min-w-0">
                <p className="truncate font-semibold">{r.display_name || "(tanpa nama)"}</p>
                <p className="truncate text-sm text-muted-foreground">{r.email}</p>
                <p className="text-xs text-muted-foreground">
                  Daftar {new Date(r.created_at).toLocaleString("id-ID")}
                </p>
              </div>
              <div className="flex gap-2">
                {r.status !== "approved" ? (
                  <Button
                    size="sm"
                    className="rounded-full"
                    onClick={() => void setStatus(r.id, "approved")}
                  >
                    <Check className="mr-1 size-4" aria-hidden="true" /> Setujui
                  </Button>
                ) : null}
                {r.status !== "rejected" ? (
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full"
                    onClick={() => void setStatus(r.id, "rejected")}
                  >
                    <X className="mr-1 size-4" aria-hidden="true" /> Tolak
                  </Button>
                ) : null}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </AppShell>
  );
}
