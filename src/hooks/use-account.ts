import { useCallback, useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

export type ApprovalStatus = "pending" | "approved" | "rejected";

export interface AccountProfile {
  id: string;
  email: string;
  display_name: string;
  status: ApprovalStatus;
  created_at: string;
}

export interface AccountState {
  ready: boolean;
  user: User | null;
  profile: AccountProfile | null;
  isAdmin: boolean;
  /** Signed in AND approved by the admin. */
  isApproved: boolean;
  refresh: () => Promise<void>;
  signOut: () => Promise<void>;
}

export function useAccount(): AccountState {
  const [ready, setReady] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<AccountProfile | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const load = useCallback(async (u: User | null) => {
    if (!u) {
      setProfile(null);
      setIsAdmin(false);
      return;
    }
    const [{ data: p }, { data: roles }] = await Promise.all([
      supabase
        .from("profiles")
        .select("id, email, display_name, status, created_at")
        .eq("id", u.id)
        .maybeSingle(),
      supabase.from("user_roles").select("role").eq("user_id", u.id),
    ]);
    setProfile((p as AccountProfile | null) ?? null);
    setIsAdmin(!!roles?.some((r) => r.role === "admin"));
  }, []);

  useEffect(() => {
    let alive = true;

    supabase.auth.getSession().then(async ({ data }) => {
      const u = data.session?.user ?? null;
      if (!alive) return;
      setUser(u);
      await load(u);
      if (alive) setReady(true);
    });

    const { data: sub } = supabase.auth.onAuthStateChange((event, session) => {
      if (!alive) return;
      if (event !== "SIGNED_IN" && event !== "SIGNED_OUT" && event !== "USER_UPDATED") return;
      const u = session?.user ?? null;
      setUser(u);
      void load(u);
    });

    return () => {
      alive = false;
      sub.subscription.unsubscribe();
    };
  }, [load]);

  const refresh = useCallback(async () => {
    const { data } = await supabase.auth.getSession();
    const u = data.session?.user ?? null;
    setUser(u);
    await load(u);
  }, [load]);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
    setUser(null);
    setProfile(null);
    setIsAdmin(false);
  }, []);

  return {
    ready,
    user,
    profile,
    isAdmin,
    isApproved: !!user && profile?.status === "approved",
    refresh,
    signOut,
  };
}
