CREATE TABLE public.leaderboard_scores (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  result_id text NOT NULL UNIQUE,
  guest_id text NOT NULL,
  name text NOT NULL,
  mode text NOT NULL,
  title text NOT NULL,
  section text,
  score integer NOT NULL,
  accuracy numeric(5,2) NOT NULL,
  time_used_sec integer NOT NULL,
  finished_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_leaderboard_scores_mode ON public.leaderboard_scores (mode, score DESC, accuracy DESC, time_used_sec ASC);
CREATE INDEX idx_leaderboard_scores_section ON public.leaderboard_scores (section, score DESC) WHERE section IS NOT NULL;
CREATE INDEX idx_leaderboard_scores_finished ON public.leaderboard_scores (finished_at);

GRANT SELECT, INSERT ON public.leaderboard_scores TO anon;
GRANT ALL ON public.leaderboard_scores TO service_role;

ALTER TABLE public.leaderboard_scores ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read leaderboard" ON public.leaderboard_scores
  FOR SELECT TO anon USING (true);

CREATE POLICY "Anyone can submit a score" ON public.leaderboard_scores
  FOR INSERT TO anon WITH CHECK (
    length(name) BETWEEN 2 AND 30
    AND score BETWEEN 0 AND 1000
    AND mode IN ('full', 'section', 'quick')
  );