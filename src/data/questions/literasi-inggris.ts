import type { Question } from "@/lib/types";

const SRC = "Soal latihan original SNBT Simulator";

const textSleep = `For decades, schools have started early in the morning, often before seven o'clock. The schedule suits transport logistics and parents' working hours, yet it clashes with adolescent biology. During puberty, the release of melatonin shifts roughly two hours later, which makes it genuinely difficult for teenagers to fall asleep before eleven at night.

When a district in the United States delayed its high school start time by fifty minutes, researchers recorded an average gain of thirty-four minutes of sleep per student per night. Attendance improved, and the number of car crashes involving teenage drivers in the district fell noticeably during the following year.

Critics argue that later start times simply push afternoon activities into the evening and complicate family routines. Supporters counter that the health benefits outweigh the inconvenience, and that scheduling problems are administrative rather than biological. What remains undisputed is that the debate is no longer about whether teenagers need more sleep, but about who should bear the cost of giving it to them.`;

const textCoral = `Coral reefs occupy less than one percent of the ocean floor, yet they shelter roughly a quarter of all marine species. This density makes them extraordinarily productive and extraordinarily vulnerable. When sea temperatures rise beyond a coral's tolerance, the algae living inside its tissue are expelled, and the coral turns white - a process known as bleaching.

Bleached coral is not dead coral. If temperatures fall back within weeks, the algae may return and the colony can recover. The danger lies in repetition: reefs that bleach every few years never regain the decades of growth they lose. Recent surveys suggest the interval between severe bleaching events has shortened from roughly twenty-seven years in the early 1980s to under six years today.

Some researchers are experimenting with heat-tolerant coral strains grown in nurseries and transplanted onto damaged reefs. The technique is promising at small scale, but nobody claims it can substitute for reducing the emissions that warm the sea in the first place.`;

export const literasiInggris: Question[] = [
  {
    id: "lbe-001",
    sectionId: "literasi-inggris",
    passage: textSleep,
    question: "What is the main idea of the passage?",
    options: [
      "Teenagers should be forced to sleep earlier at night.",
      "Early school start times conflict with adolescent biology, and the debate has shifted to who bears the cost of change.",
      "Car crashes among teenagers are caused entirely by school schedules.",
      "Parents' working hours should determine school schedules.",
      "Melatonin supplements can solve teenage sleep problems.",
    ],
    correctAnswer: 1,
    explanation:
      "The passage introduces the biological conflict, presents evidence from a district, states both sides, and closes by reframing the debate as one about cost, not need.",
    difficulty: "medium",
    topic: "Main idea",
    source: SRC,
  },
  {
    id: "lbe-002",
    sectionId: "literasi-inggris",
    passage: textSleep,
    question: "According to the passage, why is it hard for teenagers to fall asleep before eleven?",
    options: [
      "They use electronic devices late at night.",
      "Their melatonin release shifts about two hours later during puberty.",
      "They have too much homework.",
      "Their transport schedules are irregular.",
      "They participate in evening activities.",
    ],
    correctAnswer: 1,
    explanation:
      "The first paragraph explicitly attributes the difficulty to a roughly two-hour delay in melatonin release during puberty.",
    difficulty: "easy",
    topic: "Detail",
    source: SRC,
  },
  {
    id: "lbe-003",
    sectionId: "literasi-inggris",
    passage: textSleep,
    question: "The word 'clashes' in the first paragraph is closest in meaning to ...",
    options: ["agrees", "conflicts", "combines", "compares", "coincides"],
    correctAnswer: 1,
    explanation:
      "'Clashes with' signals incompatibility between the schedule and adolescent biology, i.e. conflicts.",
    difficulty: "easy",
    topic: "Vocabulary",
    source: SRC,
  },
  {
    id: "lbe-004",
    sectionId: "literasi-inggris",
    passage: textSleep,
    question: "What can be inferred from the last sentence of the passage?",
    options: [
      "Researchers still disagree about whether teenagers need more sleep.",
      "The scientific question is largely settled; the remaining disagreement is practical and political.",
      "Schools will never change their start times.",
      "Parents are unwilling to help their children sleep more.",
      "The cost of later start times has already been calculated precisely.",
    ],
    correctAnswer: 1,
    explanation:
      "Saying the debate is 'no longer about whether teenagers need more sleep, but about who should bear the cost' implies scientific consensus with unresolved practical trade-offs.",
    difficulty: "hard",
    topic: "Inference",
    source: SRC,
  },
  {
    id: "lbe-005",
    sectionId: "literasi-inggris",
    passage: textSleep,
    question: "The author's purpose in mentioning the fifty-minute delay study is to ...",
    options: [
      "criticise the district administration",
      "provide empirical support for the benefits of later start times",
      "show that research on sleep is inconclusive",
      "explain how melatonin works",
      "compare two different school districts",
    ],
    correctAnswer: 1,
    explanation:
      "The study supplies measurable outcomes (more sleep, better attendance, fewer crashes) that support the case for later start times.",
    difficulty: "medium",
    topic: "Author's purpose",
    source: SRC,
  },
  {
    id: "lbe-006",
    sectionId: "literasi-inggris",
    passage: textCoral,
    question: "Which statement best reflects the passage's view of bleaching?",
    options: [
      "Bleaching always kills coral immediately.",
      "Bleaching is reversible, but frequent repetition prevents recovery.",
      "Bleaching only affects one percent of reefs.",
      "Bleaching is caused mainly by overfishing.",
      "Bleaching improves coral growth in the long run.",
    ],
    correctAnswer: 1,
    explanation:
      "The second paragraph states bleached coral is not dead and may recover, but that reefs bleaching every few years never regain lost decades of growth.",
    difficulty: "medium",
    topic: "Main idea",
    source: SRC,
  },
  {
    id: "lbe-007",
    sectionId: "literasi-inggris",
    passage: textCoral,
    question: "The word 'them' in 'they shelter roughly a quarter of all marine species' refers to ...",
    options: ["marine species", "coral reefs", "ocean floors", "researchers", "nurseries"],
    correctAnswer: 1,
    explanation:
      "The subject pronoun 'they' refers back to coral reefs, the topic of the sentence's first clause.",
    difficulty: "easy",
    topic: "Reference",
    source: SRC,
  },
  {
    id: "lbe-008",
    sectionId: "literasi-inggris",
    passage: textCoral,
    question:
      "Based on the data about bleaching intervals, which conclusion is best supported?",
    options: [
      "Reefs now have more time to recover between events.",
      "Reefs increasingly face new bleaching before full recovery is possible.",
      "Bleaching events have stopped occurring since the 1980s.",
      "Recovery takes exactly six years for every reef.",
      "The 1980s were the worst period for coral reefs.",
    ],
    correctAnswer: 1,
    explanation:
      "Shrinking intervals from twenty-seven years to under six mean events recur before the decades-long recovery described earlier can complete.",
    difficulty: "hard",
    topic: "Inference",
    source: SRC,
  },
  {
    id: "lbe-009",
    sectionId: "literasi-inggris",
    passage: textCoral,
    question: "What is the author's attitude toward heat-tolerant coral transplantation?",
    options: [
      "Entirely dismissive",
      "Cautiously positive but not treating it as a replacement for emission cuts",
      "Convinced it will fully solve reef decline",
      "Indifferent",
      "Hostile because it is expensive",
    ],
    correctAnswer: 1,
    explanation:
      "The final paragraph calls the technique 'promising at small scale' while stressing that nobody claims it substitutes for reducing emissions.",
    difficulty: "medium",
    topic: "Author's attitude",
    source: SRC,
  },
  {
    id: "lbe-010",
    sectionId: "literasi-inggris",
    passage: textCoral,
    question: "The word 'expelled' in the first paragraph most nearly means ...",
    options: ["absorbed", "driven out", "multiplied", "protected", "coloured"],
    correctAnswer: 1,
    explanation:
      "The algae are forced out of the coral tissue, which causes the whitening; 'expelled' means driven out.",
    difficulty: "easy",
    topic: "Vocabulary",
    source: SRC,
  },
  {
    id: "lbe-011",
    sectionId: "literasi-inggris",
    passage: textCoral,
    question:
      "Which detail best explains why coral reefs are described as 'extraordinarily vulnerable'?",
    options: [
      "They cover less than one percent of the ocean floor while hosting a quarter of marine species.",
      "They are located far from the coast.",
      "They grow in nurseries.",
      "They are studied by many researchers.",
      "They contain algae in their tissue.",
    ],
    correctAnswer: 0,
    explanation:
      "The concentration of biodiversity in a tiny area means damage to a small space affects a disproportionate share of marine life.",
    difficulty: "medium",
    topic: "Detail",
    source: SRC,
  },
  {
    id: "lbe-012",
    sectionId: "literasi-inggris",
    passage: textSleep,
    question: "Which of the following would most strengthen the critics' argument?",
    options: [
      "Data showing students in later-starting schools sleep more.",
      "Evidence that after-school jobs and family dinners were significantly disrupted in districts that delayed start times.",
      "A report on melatonin production in adults.",
      "Statistics showing fewer teenage car crashes nationwide.",
      "A survey showing teachers prefer later mornings.",
    ],
    correctAnswer: 1,
    explanation:
      "Critics claim later starts complicate routines; concrete evidence of disrupted jobs and family life directly supports that claim.",
    difficulty: "hard",
    topic: "Evaluation",
    source: SRC,
  },
];
