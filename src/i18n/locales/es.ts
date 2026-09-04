interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  status: "in-development" | "completed" | "planned";
}

interface ExperienceItem {
  date: string;
  title: string;
  subtitle: string;
  bullets: string[];
}

export interface Dictionary {
  hero: {
    greeting: string;
    headingLine1: string;
    headingLine2: string;
    description: string;
    cta: string;
    available: string;
  };
  about: {
    eyebrow: string;
    statement: string;
    identity: string[];
  };
  skills: {
    eyebrow: string;
    title: string;
    hint: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    statusInDevelopment: string;
    statusCompleted: string;
    statusPlanned: string;
    viewRepo: string;
    demoSoon: string;
    otherProjectsTitle: string;
    otherProjectsDescription: string;
    otherProjectsTags: string[];
    items: ProjectItem[];
  };
  experience: {
    eyebrow: string;
    title: string;
    items: ExperienceItem[];
  };
  contact: {
    eyebrow: string;
    statement: string;
    cta: string;
    github: string;
    email: string;
  };
}

export const es: Dictionary = {
  hero: {
    greeting: "Hi, I'm Alejo.",
    headingLine1: "SOFTWARE",
    headingLine2: "DEVELOPER.",
    description:
      "Estudiante avanzado de Ingeniería Informática, desarrollador full-stack construyendo productos digitales reales.",
    cta: "Ver mi trabajo",
    available: "Disponible para nuevas oportunidades",
  },
  about: {
    eyebrow: "// about",
    statement:
      "Estudiante avanzado de Ingeniería Informática (UCASAL) construyendo productos full-stack, de Salta, Argentina.",
    identity: [
      "Desarrollador de Software en Once TV Salta (2024–2026)",
      "Full-stack developer",
      "Python Essentials 2 — Cisco Networking Academy",
      "Inglés B1",
      "UCASAL — Ingeniería Informática (en curso)",
    ],
  },
  skills: {
    eyebrow: "// skills",
    title: "Stack técnico",
    hint: "hover to interact",
  },
  projects: {
    eyebrow: "// projects",
    title: "Proyectos",
    statusInDevelopment: "En desarrollo",
    statusCompleted: "Completado",
    statusPlanned: "Próximamente",
    viewRepo: "Ver repo",
    demoSoon: "Demo próximamente",
    otherProjectsTitle: "Otros proyectos",
    otherProjectsDescription:
      "Landing pages y proyectos desplegados en Vercel: automatización, scripts en Python, análisis de datos.",
    otherProjectsTags: ["Automatización", "Python", "Vercel"],
    items: [
      {
        title: "Traductor de Lengua de Señas Argentina (LSA)",
        description:
          "Modelo entrenado con landmarks para reconocimiento y traducción bidireccional en tiempo real.",
        tags: ["Python", "IA", "Visión por computadora"],
        status: "in-development" as const,
      },
      {
        title: "SaaS — Distribuidora Palacio de las Golosinas",
        description:
          "Solución de gestión comercial para una distribuidora real.",
        tags: ["Gestión comercial", "SaaS"],
        status: "planned" as const,
      },
      {
        title: "ERP",
        description: "Sistema de planificación de recursos empresariales para un negocio real.",
        tags: ["ERP", "Gestión"],
        status: "in-development" as const,
      },
      {
        title: "Sistema de Turnos — Barbería Ciro",
        description:
          "Plataforma de gestión de citas para un negocio real.",
        tags: ["Gestión de turnos", "Reservas"],
        status: "planned" as const,
      },
      {
        title: "E-commerce de mueblería",
        description: "Tienda online con stack MERN.",
        tags: ["MongoDB", "Express", "React", "Node.js"],
        status: "planned" as const,
      },
      {
        title: "Sistema de Reservas Hoteleras",
        description: "Gestión de reservas para hotelería.",
        tags: ["Gestión de reservas"],
        status: "planned" as const,
      },
      {
        title: "Armador de outfits",
        description:
          "Previsualizador de outfits con integración a un adaptador de Google.",
        tags: ["Integración con Google"],
        status: "planned" as const,
      },
      {
        title: "SkillForge",
        description:
          "Plataforma web gamificada para practicar lenguajes de programación, con integración de APIs REST.",
        tags: ["Gamificación", "REST APIs"],
        status: "planned" as const,
      },
    ],
  },
  experience: {
    eyebrow: "// experience",
    title: "Experiencia",
    items: [
      {
        date: "2024 — 2026",
        title: "Desarrollador de Software",
        subtitle: "Once TV Salta · Salta, Argentina",
        bullets: [
          "Mantenimiento correctivo y evolutivo de sistemas internos, resolviendo errores y desarrollando funcionalidades a partir de requerimientos relevados con usuarios de distintas áreas.",
          "Mejora de interfaces, flujos de trabajo e integración de APIs, uso de Git para control de versiones, testing y validación previo a producción.",
          "Participación activa en charlas de equipo y propuesta de nuevos proyectos.",
        ],
      },
      {
        date: "En curso",
        title: "Ingeniería Informática",
        subtitle: "UCASAL",
        bullets: [
          "Formación en programación, estructuras de datos, algoritmos, bases de datos, ingeniería de software y gestión de proyectos informáticos.",
          "Formación complementaria en Full Stack, IA y tecnologías modernas.",
        ],
      },
      {
        date: "",
        title: "Certificación Python Essentials 2",
        subtitle: "Cisco Networking Academy",
        bullets: [],
      },
      {
        date: "",
        title: "Certificación de Inglés — Nivel B1",
        subtitle: "",
        bullets: [],
      },
    ],
  },
  contact: {
    eyebrow: "// contact",
    statement: "¿Tenés un proyecto en mente? Hablemos.",
    cta: "Escribime",
    github: "GitHub",
    email: "Email",
  },
};
