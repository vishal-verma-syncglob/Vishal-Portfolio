export type ProjectCategory = "React JS" | "React Native" | "Electron";

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
    title: "UNCURL:HEALTH – Mobile Health Platform",
    description:
      "A large-scale health & wellness mobile application with dynamic forms, step-based flows, and real-time data handling for users.",
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
    live: "https://play.google.com/store/apps/details?id=com.livingscopehealth.uncurl&hl=en_IN",
  },

  {
    id: 2,
    title: "OnionAI – Smart Healthcare Assistant",
    description:
      "A React Native healthcare app that helps users track symptoms, chat with AI, schedule doctor appointments, and manage medicines.",
    category: "React Native",
    tech: [
      "React Native",
      "TypeScript",
      "Redux",
      "Calendar Integration",
      "AI Chat",
      "REST APIs",
    ],
    highlights: [
      "AI-powered symptom tracking",
      "Doctor appointment scheduling with calendar",
      "Form-driven health data collection",
    ],
  },

  {
    id: 3,
    title: "SG-RMS – Hospital Receipt Management System",
    description:
      "A desktop application for hospital receptionists to manage OPD receipts, doctor fees, and daily financial records.",
    category: "Electron",
    tech: ["Electron.js", "React js", "JavaScript", "Local Database"],
    highlights: [
      "Daily OPD and doctor fee tracking",
      "Optimized workflows for hospital reception",
      "Desktop-first user experience",
    ],
  },

  {
    id: 4,
    title: "SG-Store – E-commerce Platform",
    description:
      "A full-stack e-commerce solution including mobile app, web app, and admin panel for product and order management.",
    category: "React JS",
    tech: [
      "React Native",
      "React.js",
      "Admin Panel",
      "REST APIs",
      "State Management",
    ],
    highlights: [
      "Multi-platform architecture (Mobile + Web + Admin)",
      "Product, order, and user management",
      "Scalable and modular codebase",
    ],
  },

  {
    id: 5,
    title: "Task Board Management System",
    description:
      "An internal company tool for task assignment, project distribution, and team collaboration.",
    category: "React JS",
    tech: ["React js", "JavaScript", "REST APIs", "Role-based Access"],
    highlights: [
      "Project and task tracking",
      "Team-based role management",
      "Improved internal workflow efficiency",
    ],
  },

  {
    id: 6,
    title: "Team Nexus – Internal Management System",
    description:
      "A company-wide internal management system to streamline operations and team coordination.",
    category: "React JS",
    tech: ["React js", "JavaScript", "Component-based Architecture"],
    highlights: [
      "Centralized internal operations",
      "Reusable UI components",
      "Scalable frontend structure",
    ],
  },

  {
    id: 7,
    title: "Construction Management Web Platform",
    description:
      "A role-based construction management web application for admins, clients, estimators, detailers, and field installers.",
    category: "React JS",
    tech: ["React js", "Admin Panel", "Role-Based Access Control", "REST APIs"],
    highlights: [
      "Multiple user roles and dashboards",
      "Material, spools, and workflow tracking",
      "Enterprise-level project structure",
    ],
    live: "https://con.viqgroup.com/app/",
  },
];
