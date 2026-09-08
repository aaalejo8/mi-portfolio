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
    introTitle: "I build software for real businesses.",
    introSubtitle: "I enjoy creating from scratch as much as improving what's already there.",
    blocks: [
      {
        title: "Engineering",
        description:
          "Full-stack developer training in Computer Engineering (UCASAL): data structures, databases, and software architecture.",
      },
      {
        title: "Building",
        description:
          "From internal systems in production to landing pages for real clients, with Git, Scrum, and solid team practices.",
      },
      {
        title: "Exploring",
        description:
          "AI, workflow automation, and agents — testing how tools like Claude Code and n8n change the way software gets built.",
      },
    ],
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
    title: "SKILLS",
    hint: "(hint: press a key)",
    idleTitle: "Pick a technology",
    idleDescription: "Press a physical key or click on the macropad.",
    descriptions: {
      java: "grandpa of them all, still compiles fine.",
      python: "forced indentation, everyone loves it anyway.",
      javascript: "== is a trap, use === instead.",
      typescript: "JavaScript with a guilty conscience.",
      sql: "SELECT * FROM problems WHERE solution IS NULL.",
      html: "not a programming language, but holds everything up.",
      css: "centering a div was never this personal.",
      react: "everything's a component, even the bugs.",
      nextjs: "the framework that decides everything for you (and it's fine).",
      nodejs: "JavaScript escaped the browser and never came back.",
      restapis: "GET, POST, and the occasional broken promise.",
      graphql: "ask for exactly what you need, for once.",
      supabase: "Firebase, but with real SQL.",
      postgresql: "the database that never lets you down.",
      docker: "works on my machine... now on every machine.",
      git: "commit, push, and a little prayer.",
      github: "where the code lives, along with unresolved issues.",
      vercel: "deploy in one click, literally.",
      figma: "where design becomes real (almost).",
      n8n: "automating the boring stuff for you.",
    },
  },
  projects: {
    eyebrow: "// projects",
    title: "Projects",
    viewSite: "View site ↗",
    viewCode: "View code ↗",
    underConstructionTitle: "In progress",
    underConstructionHint:
      "No demo yet — as each one gets real progress, it moves up to featured.",
    featured: [
      {
        title: "Landing — Florencia Almada, Lawyer & Notary",
        description:
          "Institutional site for an individual lawyer and notary: her own identity, services, and direct contact.",
        tags: ["Next.js", "Landing page", "Custom design"],
        image: "/projects/florencia-almada.png",
        alt: "Screenshot of the Florencia Almada, Lawyer & Notary landing page",
      },
      {
        title: "Landing — ALF Soluciones Legales",
        description:
          "Landing page for a law firm with two offices (Salta Capital and Orán): practice areas and how they work.",
        tags: ["Next.js", "Landing page", "Branding"],
        image: "/projects/alf-soluciones-legales.png",
        alt: "Screenshot of the ALF Soluciones Legales landing page",
      },
      {
        title: "This portfolio",
        description:
          "The site you're looking at: an animated frontend, an interactive 3D macropad, and ES/EN support.",
        tags: ["Next.js", "Framer Motion", "i18n"],
        image: "/projects/portfolio-placeholder.svg",
        alt: "Screenshot of this portfolio",
        repoUrl: "https://github.com/aaalejo8/mi-portfolio",
      },
    ],
    underConstruction: [
      {
        title: "Argentine Sign Language (LSA) Translator",
        pitch:
          "Computer-vision model that recognizes signs from hand landmarks and translates in real time.",
      },
      {
        title: "Dog walker app",
        pitch:
          "Map of available dog walkers by area, with assigned dogs, reviews, and direct contact.",
      },
      {
        title: "Outfit builder",
        pitch: "Outfit previewer integrated with a Google adapter.",
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
        credentialUrl: "/credentials/python-essentials-2.png",
        credentialLabel: "View credential ↗",
      },
      {
        date: "",
        title: "English Certification — B1 Level",
        subtitle: "Bonfire Academy",
        bullets: [],
        credentialUrl: "/credentials/english-b1-bonfire.pdf",
        credentialLabel: "View certificate ↗",
      },
    ],
  },
  contact: {
    eyebrow: "// contact",
    statementLead: "Have a project in mind?",
    statementHighlight: "Let's talk.",
    cta: "Get in touch",
    ctaHover: "Open email ↗",
    github: "GitHub",
    email: "Email",
    linkedin: "LinkedIn",
    localTimeLabel: "Local time — Salta, Argentina",
    availableNow: "Available now",
    awayNow: "Outside working hours, but I reply soon",
  },
};
