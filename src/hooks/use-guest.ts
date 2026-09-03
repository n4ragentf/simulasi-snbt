import { useCallback, useEffect, useState } from "react";
import { createGuest, getGuest, updateGuestName } from "@/lib/storage";
import type { Guest } from "@/lib/types";

export function useGuest() {
  const [guest, setGuest] = useState<Guest | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setGuest(getGuest());
    setReady(true);
  }, []);

  const signIn = useCallback((name: string) => {
    const g = createGuest(name);
    setGuest(g);
    return g;
  }, []);

  const rename = useCallback((name: string) => {
    const g = updateGuestName(name);
    if (g) setGuest(g);
    return g;
  }, []);

  return { guest, ready, signIn, rename };
}

export function validateName(raw: string): string | null {
  const name = raw.trim();
  if (name.length === 0) return "Nama tidak boleh kosong.";
  if (name.length < 2) return "Nama minimal 2 karakter.";
  if (name.length > 30) return "Nama maksimal 30 karakter.";
  return null;
}
