export interface Project {
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string | null;
  badge?: string;
}

export const projects: Project[] = [
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
