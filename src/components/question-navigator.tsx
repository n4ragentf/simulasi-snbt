import type { ExamSession } from "@/lib/types";
import { cn } from "@/lib/utils";

export type QuestionStatus = "current" | "answered" | "marked" | "empty";

export function statusOf(session: ExamSession, index: number, current: number): QuestionStatus {
  const item = session.items[index];
  if (!item) return "empty";
  if (index === current) return "current";
  if (session.marked.includes(item.questionId)) return "marked";
  if (item.questionId in session.answers) return "answered";
  return "empty";
}

const STYLES: Record<QuestionStatus, string> = {
  current: "bg-primary text-primary-foreground ring-2 ring-ring ring-offset-2 ring-offset-background",
  answered: "bg-success/15 text-success border border-success/50",
  marked: "bg-warning/20 text-warning-foreground border border-warning",
  empty: "bg-muted text-muted-foreground border border-border",
};

const MARKS: Record<QuestionStatus, string> = {
  current: "•",
  answered: "✓",
  marked: "★",
  empty: "",
};

export function QuestionNavigator({
  session,
  current,
  onJump,
}: {
  session: ExamSession;
  current: number;
  onJump: (index: number) => void;
}) {
  return (
    <div>
      <div className="grid grid-cols-5 gap-2" role="list" aria-label="Navigasi nomor soal">
        {session.items.map((item, i) => {
          const st = statusOf(session, i, current);
          return (
            <button
              key={item.questionId}
              type="button"
              role="listitem"
              onClick={() => onJump(i)}
              aria-current={i === current ? "true" : undefined}
              aria-label={`Soal ${i + 1}${
                st === "answered" ? ", sudah dijawab" : st === "marked" ? ", ditandai" : st === "current" ? ", sedang dibuka" : ", belum dijawab"
              }`}
              className={cn(
                "relative grid h-10 place-items-center rounded-lg text-sm font-semibold transition-colors",
                STYLES[st],
              )}
            >
              {i + 1}
              <span aria-hidden="true" className="absolute -top-1 -right-1 text-[10px]">
                {MARKS[st]}
              </span>
            </button>
          );
        })}
      </div>

      <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground">
        <li className="flex items-center gap-2">
          <span className="inline-grid size-4 place-items-center rounded bg-primary text-[9px] text-primary-foreground">•</span>
          Sedang dibuka
        </li>
        <li className="flex items-center gap-2">
          <span className="inline-grid size-4 place-items-center rounded border border-success/50 bg-success/15 text-[9px] text-success">✓</span>
          Sudah dijawab
        </li>
        <li className="flex items-center gap-2">
          <span className="inline-grid size-4 place-items-center rounded border border-warning bg-warning/20 text-[9px]">★</span>
          Ditandai
        </li>
        <li className="flex items-center gap-2">
          <span className="inline-block size-4 rounded border border-border bg-muted" />
          Belum dijawab
        </li>
      </ul>
    </div>
  );
}
