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
];
