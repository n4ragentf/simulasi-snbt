import type { Question } from "@/lib/types";
import { arsipPenalaranUmum } from "./arsip-penalaran-umum";
import { arsipKuantitatif } from "./arsip-kuantitatif";
import { arsipPenalaranMatematika } from "./arsip-penalaran-matematika";

/** Soal arsip yang diunggah pengguna — dipakai untuk latihan dengan jumlah soal pilihan sendiri. */
export const ARSIP_QUESTIONS: Question[] = [
  ...arsipPenalaranUmum,
  ...arsipKuantitatif,
  ...arsipPenalaranMatematika,
];

export const ARSIP_TOTAL = ARSIP_QUESTIONS.length;
