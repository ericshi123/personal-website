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
    name: "Polymarket Intelligence",
    description:
      "ML-powered prediction market analysis and automated trading logic built on the PolyClaw skill framework.",
    techStack: ["Python", "Next.js", "PolyClaw"],
    githubUrl: null,
    badge: "In Progress",
  },
];
