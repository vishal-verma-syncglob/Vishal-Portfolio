export type ProjectCategory = "React" | "React Native" | "Electron";

export interface Project {
  id: number;
  title: string;
  description: string;
  category: ProjectCategory;
  tech: string[];
  highlights: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "UNCURL HEALTH – Mobile Health Platform",
    description:
      "A large-scale health & wellness mobile application with dynamic forms, step-based flows, and real-time data handling.",
    category: "React Native",
    tech: [
      "React Native",
      "TypeScript",
      "Redux Saga",
      "React Hook Form",
      "REST APIs",
    ],
    highlights: [
      "Built complex dynamic form flows",
      "Handled real-time validations & conditional logic",
      "Optimized performance for large datasets",
    ],
  },
  {
    id: 2,
    title: "Gym Supplements E-Commerce Frontend",
    description:
      "Modern responsive frontend for a gym supplements & protein store with product listing, cart, and checkout UI.",
    category: "React",
    tech: ["React", "Material UI", "Context API", "REST APIs"],
    highlights: [
      "Pixel-perfect UI from Figma",
      "Reusable component architecture",
      "Mobile-first responsive design",
    ],
  },
  {
    id: 3,
    title: "Admin Dashboard for Business Operations",
    description:
      "Web-based admin dashboard with analytics, role-based views, and dynamic tables.",
    category: "React",
    tech: ["React", "TypeScript", "MUI", "Charts"],
    highlights: [
      "Reusable table & filter components",
      "Optimized API rendering",
      "Clean modular architecture",
    ],
  },
  {
    id: 4,
    title: "Desktop Utility App",
    description:
      "Cross-platform desktop application built using Electron for internal productivity.",
    category: "Electron",
    tech: ["Electron", "React", "IPC"],
    highlights: ["Cross-platform build", "Secure IPC communication"],
  },
];
