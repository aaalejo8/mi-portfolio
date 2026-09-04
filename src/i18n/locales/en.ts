import type { Dictionary } from "@/i18n/locales/es";

export const en: Dictionary = {
  hero: {
    greeting: "Hi, I'm Alejo.",
    headingLine1: "SOFTWARE",
    headingLine2: "DEVELOPER.",
    description:
      "Advanced Computer Engineering student, full-stack developer building real digital products.",
    cta: "View my work",
    available: "Available for new opportunities",
  },
  about: {
    eyebrow: "// about",
    statement:
      "Advanced Computer Engineering student (UCASAL) building full-stack products, based in Salta, Argentina.",
    identity: [
      "Software Developer at Once TV Salta (2024–2026)",
      "Full-stack developer",
      "Python Essentials 2 — Cisco Networking Academy",
      "English B1",
      "UCASAL — Computer Engineering (in progress)",
    ],
  },
  skills: {
    eyebrow: "// skills",
    title: "Tech stack",
    hint: "hover to interact",
  },
  projects: {
    eyebrow: "// projects",
    title: "Projects",
    statusInDevelopment: "In development",
    statusCompleted: "Completed",
    statusPlanned: "Coming soon",
    viewRepo: "View repo",
    demoSoon: "Demo coming soon",
    otherProjectsTitle: "Other projects",
    otherProjectsDescription:
      "Landing pages and projects deployed on Vercel: automation, Python scripts, data analysis.",
    otherProjectsTags: ["Automation", "Python", "Vercel"],
    items: [
      {
        title: "Argentine Sign Language (LSA) Translator",
        description:
          "Model trained on hand landmarks for real-time bidirectional sign language recognition and translation.",
        tags: ["Python", "AI", "Computer vision"],
        status: "in-development",
      },
      {
        title: "SaaS — Distribuidora Palacio de las Golosinas",
        description: "Business management solution for a real distribution company.",
        tags: ["Business management", "SaaS"],
        status: "planned",
      },
      {
        title: "ERP",
        description: "Enterprise resource planning system for a real business.",
        tags: ["ERP", "Management"],
        status: "in-development",
      },
      {
        title: "Booking System — Ciro Barbershop",
        description: "Appointment management platform for a real business.",
        tags: ["Booking management", "Scheduling"],
        status: "planned",
      },
      {
        title: "Furniture E-commerce",
        description: "Online store built with the MERN stack.",
        tags: ["MongoDB", "Express", "React", "Node.js"],
        status: "planned",
      },
      {
        title: "Hotel Booking System",
        description: "Reservation management for the hospitality industry.",
        tags: ["Booking management"],
        status: "planned",
      },
      {
        title: "Outfit Builder",
        description: "Outfit previewer integrated with a Google adapter.",
        tags: ["Google integration"],
        status: "planned",
      },
      {
        title: "SkillForge",
        description:
          "Gamified web platform to practice programming languages, integrating REST APIs.",
        tags: ["Gamification", "REST APIs"],
        status: "planned",
      },
    ],
  },
  experience: {
    eyebrow: "// experience",
    title: "Experience",
    items: [
      {
        date: "2024 — 2026",
        title: "Software Developer",
        subtitle: "Once TV Salta · Salta, Argentina",
        bullets: [
          "Corrective and evolutive maintenance of internal systems, fixing bugs and building features from requirements gathered with users across different areas.",
          "Improved interfaces and workflows, integrated APIs, used Git for version control, and handled testing and validation before production.",
          "Actively participated in team discussions and proposed new projects.",
        ],
      },
      {
        date: "In progress",
        title: "Computer Engineering",
        subtitle: "UCASAL",
        bullets: [
          "Training in programming, data structures, algorithms, databases, software engineering, and IT project management.",
          "Additional training in Full Stack, AI, and modern technologies.",
        ],
      },
      {
        date: "",
        title: "Python Essentials 2 Certification",
        subtitle: "Cisco Networking Academy",
        bullets: [],
      },
      {
        date: "",
        title: "English Certification — B1 Level",
        subtitle: "",
        bullets: [],
      },
    ],
  },
  contact: {
    eyebrow: "// contact",
    statement: "Have a project in mind? Let's talk.",
    cta: "Get in touch",
    github: "GitHub",
    email: "Email",
  },
};
