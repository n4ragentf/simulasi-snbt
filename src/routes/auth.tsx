import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Clock, LogIn, ShieldCheck, UserPlus } from "lucide-react";
import { AppShell } from "@/components/app-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { useAccount } from "@/hooks/use-account";

export const Route = createFileRoute("/auth")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Masuk atau Daftar — SNBT Simulator" },
      {
        name: "description",
        content:
          "Masuk ke akun SNBT Simulator atau daftar akun baru. Pendaftaran diverifikasi manual oleh admin sebelum aktif.",
      },
      { property: "og:title", content: "Masuk atau Daftar — SNBT Simulator" },
      {
        property: "og:description",
        content: "Akun SNBT Simulator dengan verifikasi admin, atau lanjut sebagai guest.",
      },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const { ready, user, profile, isAdmin, signOut, refresh } = useAccount();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (ready && profile?.status === "approved") {
      navigate({ to: "/dashboard", replace: true });
    }
  }, [ready, profile, navigate]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: loginEmail.trim(),
      password: loginPassword,
    });
    setLoading(false);
    if (error) {
      toast.error(
        error.message.toLowerCase().includes("invalid")
          ? "Email atau kata sandi salah."
          : error.message,
      );
      return;
    }
    await refresh();
    toast.success("Berhasil masuk.");
  }

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    if (name.trim().length < 2) {
      toast.error("Nama minimal 2 karakter.");
      return;
    }
    if (password.length < 6) {
      toast.error("Kata sandi minimal 6 karakter.");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        emailRedirectTo: window.location.origin,
        data: { display_name: name.trim() },
      },
    });
    setLoading(false);
    if (error) {
      toast.error(
        error.message.toLowerCase().includes("already")
          ? "Email ini sudah terdaftar."
          : error.message,
      );
      return;
    }
    await refresh();
    toast.success("Pendaftaran terkirim. Menunggu verifikasi admin.");
  }

  if (!ready) {
    return (
      <AppShell>
        <p className="py-20 text-center text-muted-foreground">Memuat…</p>
      </AppShell>
    );
  }

  if (user && profile && profile.status !== "approved") {
    const rejected = profile.status === "rejected";
    return (
      <AppShell>
        <Card className="mx-auto max-w-md shadow-card">
          <CardContent className="p-8 text-center">
            <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary">
              <Clock className="size-7" aria-hidden="true" />
            </span>
            <h1 className="mt-4 text-xl font-semibold">
              {rejected ? "Pendaftaran ditolak" : "Menunggu verifikasi admin"}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {rejected
                ? "Akunmu tidak disetujui admin. Kamu masih bisa berlatih sebagai guest."
                : "Akunmu sudah terdaftar dan sedang menunggu persetujuan admin. Sementara itu kamu tetap bisa berlatih sebagai guest."}
            </p>
            <p className="mt-2 text-xs text-muted-foreground">{profile.email}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <Button asChild variant="outline" className="rounded-full">
                <Link to="/dashboard">Lanjut sebagai guest</Link>
              </Button>
              <Button variant="ghost" className="rounded-full" onClick={() => void refresh()}>
                Periksa status
              </Button>
              <Button variant="ghost" className="rounded-full" onClick={() => void signOut()}>
                Keluar
              </Button>
            </div>
          </CardContent>
        </Card>
      </AppShell>
    );
  }

  if (user && isAdmin) {
    return (
      <AppShell>
        <Card className="mx-auto max-w-md shadow-card">
          <CardContent className="p-8 text-center">
            <ShieldCheck className="mx-auto size-8 text-primary" aria-hidden="true" />
            <p className="mt-3 font-semibold">Kamu masuk sebagai admin.</p>
            <Button asChild className="mt-5 rounded-full">
              <Link to="/admin">Buka halaman verifikasi</Link>
            </Button>
          </CardContent>
        </Card>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <div className="mx-auto max-w-md">
        <h1 className="text-center text-3xl font-bold">Akun SNBT Simulator</h1>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Punya akun? Streak harian dan fitur akun tersimpan permanen. Tanpa akun pun kamu tetap
          bisa berlatih sebagai guest.
        </p>

        <Card className="mt-6 shadow-card">
          <CardHeader>
            <CardTitle className="text-base">Masuk atau daftar</CardTitle>
            <CardDescription>Pendaftaran baru diverifikasi manual oleh admin.</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Masuk</TabsTrigger>
                <TabsTrigger value="signup">Daftar</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form className="mt-4 space-y-4" onSubmit={handleLogin}>
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input
                      id="login-email"
                      type="email"
                      required
                      autoComplete="email"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Kata sandi</Label>
                    <Input
                      id="login-password"
                      type="password"
                      required
                      autoComplete="current-password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                    />
                  </div>
                  <Button type="submit" disabled={loading} className="w-full rounded-full">
                    <LogIn className="mr-1 size-4" aria-hidden="true" />
                    {loading ? "Memproses…" : "Masuk"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="signup">
                <form className="mt-4 space-y-4" onSubmit={handleSignUp}>
                  <div className="space-y-2">
                    <Label htmlFor="signup-name">Nama</Label>
                    <Input
                      id="signup-name"
                      required
                      maxLength={30}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Kata sandi</Label>
                    <Input
                      id="signup-password"
                      type="password"
                      required
                      minLength={6}
                      autoComplete="new-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <Button type="submit" disabled={loading} className="w-full rounded-full">
                    <UserPlus className="mr-1 size-4" aria-hidden="true" />
                    {loading ? "Mengirim…" : "Daftar & minta verifikasi"}
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    Akun aktif setelah admin menyetujui pendaftaranmu.
                  </p>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          <Link to="/dashboard" className="underline underline-offset-4">
            Lanjut tanpa akun (guest)
          </Link>
        </p>
      </div>
    </AppShell>
  );
}
