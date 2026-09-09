import { Link } from "@tanstack/react-router";
import { GraduationCap, LogIn, Menu, ShieldCheck, UserRound } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { useAccount } from "@/hooks/use-account";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NAV = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/simulasi", label: "Simulasi" },
  { to: "/riwayat", label: "Riwayat" },
  { to: "/leaderboard", label: "Leaderboard" },
  { to: "/profil", label: "Profil" },
] as const;

export function Brand({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2 font-semibold ${className}`}>
      <span className="grid size-9 place-items-center rounded-xl bg-hero-gradient text-primary-foreground shadow-float">
        <GraduationCap className="size-5" aria-hidden="true" />
      </span>
      <span className="font-display text-base tracking-tight">SNBT Simulator</span>
    </Link>
  );
}

function AccountButton() {
  const { ready, user, profile, isAdmin, isApproved, signOut } = useAccount();

  if (!ready) return null;

  if (!user) {
    return (
      <Button asChild variant="outline" size="sm" className="rounded-full">
        <Link to="/auth">
          <LogIn className="mr-1 size-4" aria-hidden="true" /> Masuk
        </Link>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full" aria-label="Menu akun">
          <UserRound className="size-5" aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="truncate">
          {profile?.display_name || profile?.email || "Akun"}
        </DropdownMenuLabel>
        <DropdownMenuLabel className="pt-0 text-xs font-normal text-muted-foreground">
          {isApproved ? "Akun terverifikasi" : "Menunggu verifikasi admin"}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {isAdmin ? (
          <DropdownMenuItem asChild>
            <Link to="/admin">
              <ShieldCheck className="mr-2 size-4" aria-hidden="true" /> Verifikasi akun
            </Link>
          </DropdownMenuItem>
        ) : null}
        <DropdownMenuItem asChild>
          <Link to="/profil">Profil</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => void signOut()}>Keluar</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function AppHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4">
        <Brand />

        <nav aria-label="Navigasi utama" className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              activeProps={{ className: "bg-muted text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden rounded-full sm:inline-flex">
            <Link to="/simulasi">Mulai Simulasi</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Buka menu">
                <Menu className="size-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] max-w-xs">
              <SheetTitle className="px-4 pt-4">Menu</SheetTitle>
              <nav aria-label="Navigasi mobile" className="mt-4 flex flex-col gap-1 px-3 pb-6">
                {NAV.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    activeProps={{ className: "bg-muted text-foreground" }}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <AppHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">{children}</main>
      <footer className="border-t border-border/70 py-6 text-center text-xs text-muted-foreground">
        SNBT Simulator — soal latihan original, bukan soal resmi SNBT/UTBK.
      </footer>
    </div>
  );
}
