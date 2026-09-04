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
    paragraphs: string[];
    identity: string[];
  };
  skills: {
    eyebrow: string;
    title: string;
    hint: string;
    idleTitle: string;
    idleDescription: string;
    descriptions: Record<string, string>;
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
    statementLead: string;
    statementHighlight: string;
    cta: string;
    ctaHover: string;
    github: string;
    email: string;
    linkedin: string;
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
    paragraphs: [
      "Me interesa la tecnología principalmente por su capacidad de transformar problemas cotidianos en soluciones reales. Disfruto tanto construir productos desde cero como analizar, mejorar y refactorizar sistemas existentes.",
      "Actualmente desarrollo proyectos Full Stack mientras profundizo en áreas como Machine Learning, automatización de flujos y agentes de IA. Me interesa especialmente explorar cómo combinar el desarrollo tradicional con herramientas como Claude Code, Codex y Cursor para trabajar de una manera más eficiente y ampliar lo que puedo construir.",
      "He participado en proyectos universitarios y proyectos con necesidades reales, trabajando en equipo bajo metodologías ágiles como Scrum y utilizando GitHub y Trello como parte habitual de mi flujo de trabajo. Dentro de los equipos suelo adoptar un perfil organizado y proactivo, ayudando a coordinar cuando es necesario y, cuando me enfrento a algo que no conozco, investigando, escuchando y aprendiendo rápidamente.",
      "También me interesa comprender el producto más allá del código. He trabajado con conceptos relacionados con automatización, Content Engines, agentes, funnels y estrategias digitales, lo que me permite entender mejor cómo una solución técnica puede aportar valor dentro de un producto o negocio.",
      "Creo que la Inteligencia Artificial representa un cambio similar al que produjo Internet: más que reemplazar a quienes trabajan con tecnología, transforma la forma en la que trabajamos. Por eso intento aprender constantemente cómo utilizarla como una herramienta para potenciar mis capacidades como desarrollador.",
    ],
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
    title: "SKILLS",
    hint: "(sugerencia: presioná una tecla)",
    idleTitle: "Elegí una tecnología",
    idleDescription: "Presioná una tecla física o hacé clic en el macropad.",
    descriptions: {
      java: "el abuelo de todo, todavía compila.",
      python: "indentado a la fuerza, pero todos lo aman.",
      javascript: "== es una trampa, usá ===.",
      typescript: "JavaScript con culpa católica.",
      sql: "SELECT * FROM problemas WHERE solucion = NULL.",
      html: "no es un lenguaje de programación, pero sostiene todo.",
      css: "centrar un div nunca fue tan personal.",
      react: "todo es un componente, hasta los problemas.",
      nextjs: "el framework que decide todo por vos (y está bien).",
      nodejs: "JavaScript escapó del navegador y no volvió.",
      restapis: "GET, POST, y una que otra promesa rota.",
      graphql: "pedí exactamente lo que necesitás, por una vez.",
      supabase: "Firebase pero con SQL de verdad.",
      postgresql: "la base de datos que nunca te decepciona.",
      docker: "funciona en mi máquina... y ahora en todas.",
      git: "commit, push, y rezar un poco.",
      github: "donde vive el código y también los issues sin resolver.",
      vercel: "deploy en un click, literalmente.",
      figma: "donde el diseño se vuelve real (casi).",
      n8n: "automatizo lo aburrido para vos.",
    },
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
    statementLead: "¿Tenés un proyecto en mente?",
    statementHighlight: "Hablemos.",
    cta: "Escribime",
    ctaHover: "Abrir correo ↗",
    github: "GitHub",
    email: "Email",
    linkedin: "LinkedIn",
  },
};
