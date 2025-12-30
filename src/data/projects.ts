export type ProjectCategory = "React JS" | "React Native" | "Electron";

/**
 * Core Project interface
 */
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

/* ----------------------------------
   Projects Data
----------------------------------- */

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
      "Doctor appointment scheduling",
      "Form-driven health data collection",
    ],
  },
  {
    id: 3,
    title: "OnionAI – Admin Panel",
    description:
      "A React JS-based admin panel that allows administrators to dynamically manage symptoms, configure health questionnaires, and control form flows used in the OnionAI mobile application.",
    category: "React JS",
    tech: [
      "React JS",
      "TypeScript",
      "Dynamic Forms",
      "State Management",
      "REST APIs",
      "Role-Based Access",
    ],
    highlights: [
      "Dynamic symptom creation and management",
      "Configurable health form questions and options",
      "Real-time control over mobile app form flows",
    ],
    live: "https://onion-admin-web-111060153254.europe-west2.run.app/dashboard/symptoms",
  },
  {
    id: 4,
    title: "SG-RMS – Hospital Receipt Management System",
    description:
      "A desktop application for hospital receptionists to manage OPD receipts, doctor fees, and daily financial records.",
    category: "Electron",
    tech: ["Electron", "React JS", "JavaScript", "Local Database"],
    highlights: [
      "Daily OPD and doctor fee tracking",
      "Optimized workflows for hospital reception",
      "Desktop-first user experience",
    ],
  },

  {
    id: 5,
    title: "SG-Store – E-commerce Mobile App",
    description:
      "A React Native e-commerce mobile application for customers to browse products, place orders, and track purchases.",
    category: "React Native",
    tech: [
      "React Native",
      "TypeScript",
      "REST APIs",
      "State Management",
      "Authentication",
    ],
    highlights: [
      "Customer-facing mobile shopping experience",
      "Product listing, cart, and order placement",
      "Real-time order tracking",
    ],
  },
  {
    id: 6,
    title: "SG-Store – E-commerce Web App",
    description:
      "A React JS-based web application providing customers with an online shopping experience similar to the mobile app.",
    category: "React JS",
    tech: [
      "React JS",
      "JavaScript",
      "REST APIs",
      "Responsive UI",
      "State Management",
    ],
    highlights: [
      "Responsive web-based shopping platform",
      "Shared APIs with mobile application",
      "Optimized UI for desktop users",
    ],
  },
  {
    id: 7,
    title: "SG-Store – Admin Panel",
    description:
      "A React JS admin panel for managing products, orders, users, and overall e-commerce operations.",
    category: "React JS",
    tech: [
      "React JS",
      "Admin Panel",
      "REST APIs",
      "Role-Based Access",
      "Dashboard Analytics",
    ],
    highlights: [
      "Product and inventory management",
      "Order and user management",
      "Centralized control for e-commerce operations",
    ],
  },
  {
    id: 8,
    title: "Task Board Management System",
    description:
      "An internal company tool for task assignment, project distribution, and team collaboration.",
    category: "React JS",
    tech: ["React JS", "JavaScript", "REST APIs", "Role-based Access"],
    highlights: [
      "Project and task tracking",
      "Team-based role management",
      "Improved internal workflow efficiency",
    ],
  },

  {
    id: 9,
    title: "Team Nexus – Internal Management System",
    description:
      "A company-wide internal management system to streamline operations and team coordination.",
    category: "React JS",
    tech: ["React JS", "JavaScript", "Component-based Architecture"],
    highlights: [
      "Centralized internal operations",
      "Reusable UI components",
      "Scalable frontend structure",
    ],
  },

  {
    id: 10,
    title: "Construction Management – Web Platform",
    description:
      "A React JS-based construction management web application for admins, clients, estimators, detailers, and field installers to manage workflows and project data.",
    category: "React JS",
    tech: ["React JS", "Admin Panel", "Role-Based Access Control", "REST APIs"],
    highlights: [
      "Multiple user roles with dedicated dashboards",
      "Material, spools, and workflow tracking",
      "Enterprise-level application structure",
    ],
    live: "https://con.viqgroup.com/app/",
  },
  {
    id: 11,
    title: "Construction Management – Mobile App",
    description:
      "A React Native mobile application designed for field installers and on-site teams to view tasks, update progress, and manage construction workflows in real time.",
    category: "React Native",
    tech: [
      "React Native",
      "TypeScript",
      "REST APIs",
      "Real-Time Updates",
      "Mobile-First UI",
    ],
    highlights: [
      "On-site task and job tracking for field teams",
      "Real-time status updates synced with web platform",
      "Optimized mobile UX for construction environments",
    ],
  },
];
