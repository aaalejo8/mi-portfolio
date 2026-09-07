interface FeaturedProjectItem {
  title: string;
  description: string;
  tags: string[];
  image: string;
  alt: string;
  url?: string;
  repoUrl?: string;
}

interface UnderConstructionItem {
  title: string;
  pitch: string;
}

interface ExperienceItem {
  date: string;
  title: string;
  subtitle: string;
  bullets: string[];
  credentialUrl?: string;
  credentialLabel?: string;
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
    introTitle: string;
    introSubtitle: string;
    blocks: { title: string; description: string }[];
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
    viewSite: string;
    viewCode: string;
    underConstructionTitle: string;
    underConstructionHint: string;
    featured: FeaturedProjectItem[];
    underConstruction: UnderConstructionItem[];
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
    localTimeLabel: string;
    availableNow: string;
    awayNow: string;
  };
}

export const es: Dictionary = {
  hero: {
    greeting: "Hi, I'm Alejo.",
    headingLine1: "DESARROLLADOR",
    headingLine2: "DE SOFTWARE.",
    description:
      "Estudiante avanzado de Ingeniería Informática, desarrollador full-stack construyendo productos digitales reales.",
    cta: "Ver mi trabajo",
    available: "Disponible para nuevas oportunidades",
  },
  about: {
    eyebrow: "// about",
    introTitle: "Construyo software para negocios reales.",
    introSubtitle: "Disfruto tanto crear desde cero como mejorar lo que ya existe.",
    blocks: [
      {
        title: "Ingeniería",
        description:
          "Full-stack developer formándome en Ingeniería Informática (UCASAL): estructuras de datos, bases de datos y arquitectura de software.",
      },
      {
        title: "Construcción",
        description:
          "De sistemas internos en producción a landings para clientes reales, con Git, Scrum y buenas prácticas de equipo.",
      },
      {
        title: "Exploración",
        description:
          "IA, automatización de flujos y agentes: probando cómo herramientas como Claude Code y n8n cambian la forma de construir software.",
      },
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
    viewSite: "Ver sitio ↗",
    viewCode: "Ver código ↗",
    underConstructionTitle: "En construcción",
    underConstructionHint:
      "Sin demo todavía — a medida que tengan avance real, se suman a los destacados.",
    featured: [
      {
        title: "Landing — Florencia Almada, Abogada & Escribana",
        description:
          "Sitio institucional para una abogada y escribana individual: identidad propia, servicios y contacto directo.",
        tags: ["Next.js", "Landing page", "Diseño a medida"],
        image: "/projects/florencia-almada.png",
        alt: "Captura de la landing de Florencia Almada, Abogada y Escribana",
      },
      {
        title: "Landing — ALF Soluciones Legales",
        description:
          "Landing para un estudio jurídico con dos sedes (Salta Capital y Orán): áreas de práctica y forma de trabajo.",
        tags: ["Next.js", "Landing page", "Branding"],
        image: "/projects/alf-soluciones-legales.png",
        alt: "Captura de la landing de ALF Soluciones Legales",
      },
      {
        title: "Este portfolio",
        description:
          "El sitio que estás viendo: frontend con animaciones, un macropad 3D interactivo y soporte ES/EN.",
        tags: ["Next.js", "Framer Motion", "i18n"],
        image: "/projects/portfolio-placeholder.svg",
        alt: "Captura de este portfolio",
        repoUrl: "https://github.com/aaalejo8/mi-portfolio",
      },
    ],
    underConstruction: [
      {
        title: "Traductor de Lengua de Señas Argentina (LSA)",
        pitch:
          "Modelo de visión por computadora que reconoce señas por landmarks y traduce en tiempo real.",
      },
      {
        title: "App de paseadores de perros",
        pitch:
          "Mapa de paseadores disponibles por zona, con perros asignados, reseñas y contacto directo.",
      },
      {
        title: "Selector de outfits",
        pitch: "Previsualizador de looks con integración a un adaptador de Google.",
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
        credentialUrl: "/credentials/python-essentials-2.png",
        credentialLabel: "Ver credencial ↗",
      },
      {
        date: "",
        title: "Certificación de Inglés — Nivel B1",
        subtitle: "Bonfire Academy",
        bullets: [],
        credentialUrl: "/credentials/english-b1-bonfire.pdf",
        credentialLabel: "Ver certificado ↗",
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
    localTimeLabel: "Hora local — Salta, Argentina",
    availableNow: "Disponible ahora",
    awayNow: "Fuera de horario, pero respondo pronto",
  },
};
