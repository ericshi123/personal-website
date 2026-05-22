export interface Project {
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string | null;
  badge?: string;
}

export const projects: Project[] = [
  {
    name: "VoiceGuard",
    description:
      "Configurable voice assistant safety framework with bidirectional guardrails for the OpenAI Realtime API. Features pluggable safety policies, real-time transcript interception, race condition handling, and a HarmBench-aligned evaluation harness.",
    techStack: ["Python", "OpenAI Realtime API", "Anthropic API", "asyncio"],
    githubUrl: "https://github.com/ericshi123/voiceguard",
  },
  {
    name: "Ordinal Regression Network",
    description:
      "Rank-consistent deep learning method for ordinal regression using conditional probabilities. Published in Pattern Analysis and Applications (2023).",
    techStack: ["Python", "PyTorch", "Deep Learning"],
    githubUrl: "https://github.com/ericshi123/ordinal-conditional-network",
  },
  {
    name: "Betting Market Trader",
    description:
      "ML-powered Kalshi trading bot and automated trading logic built on the PolyClaw skill framework.",
    techStack: ["Python", "Next.js", "PolyClaw"],
    githubUrl: null,
    badge: "In Progress",
  },
  {
    name: "Job Search Tailor",
    description:
      "Daily job search + resume archetype matching skill for OpenClaw. Searches LinkedIn for jobs, deduplicates listings, and matches each to a tailored resume archetype. Published on ClawHub.",
    techStack: ["Python", "OpenClaw", "ClawHub"],
    githubUrl: "https://github.com/ericshi123/job-search-tailor-skill",
  },
  {
    name: "QuizMe",
    description:
      "Adaptive tech quiz skill for OpenClaw. Asks one question at a time with code snippets, adapts difficulty dynamically, and uses a rolling question bank — generating batches via GPT-4o-mini, refilling when low, and graduating users to harder levels at 80% accuracy. Published on ClawHub.",
    techStack: ["Python", "OpenAI API", "OpenClaw", "ClawHub"],
    githubUrl: "https://github.com/ericshi123/quizme",
  },
];
