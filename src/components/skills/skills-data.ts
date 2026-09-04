import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiCss,
  SiMysql,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiGraphql,
  SiSupabase,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiGithub,
  SiVercel,
  SiFigma,
  SiN8N,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

export interface SkillItem {
  id: string;
  key: string;
  name: string;
  color: string;
  icon: IconType;
  emoji: string;
}

export const skillsData: SkillItem[] = [
  { id: "java", key: "j", name: "Java", color: "#f89820", icon: FaJava, emoji: "☕" },
  { id: "python", key: "p", name: "Python", color: "#3776AB", icon: SiPython, emoji: "🐍" },
  { id: "javascript", key: "a", name: "JavaScript", color: "#F7DF1E", icon: SiJavascript, emoji: "🟨" },
  { id: "typescript", key: "t", name: "TypeScript", color: "#3178C6", icon: SiTypescript, emoji: "🛡️" },
  { id: "sql", key: "s", name: "SQL", color: "#4479A1", icon: SiMysql, emoji: "🗃️" },
  { id: "html", key: "h", name: "HTML", color: "#E34F26", icon: SiHtml5, emoji: "👴" },
  { id: "css", key: "c", name: "CSS", color: "#663399", icon: SiCss, emoji: "🎨" },
  { id: "react", key: "r", name: "React", color: "#61DAFB", icon: SiReact, emoji: "⚛️" },
  { id: "nextjs", key: "n", name: "Next.js", color: "#FFFFFF", icon: SiNextdotjs, emoji: "🧩" },
  { id: "nodejs", key: "o", name: "Node.js", color: "#5FA04E", icon: SiNodedotjs, emoji: "🟢" },
  { id: "restapis", key: "i", name: "REST APIs", color: "#66B3FF", icon: TbApi, emoji: "🔌" },
  { id: "graphql", key: "g", name: "GraphQL", color: "#E10098", icon: SiGraphql, emoji: "🕸️" },
  { id: "supabase", key: "u", name: "Supabase", color: "#3ECF8E", icon: SiSupabase, emoji: "⚡" },
  { id: "postgresql", key: "e", name: "PostgreSQL", color: "#4169E1", icon: SiPostgresql, emoji: "🐘" },
  { id: "docker", key: "d", name: "Docker", color: "#2496ED", icon: SiDocker, emoji: "🐳" },
  { id: "git", key: "1", name: "Git", color: "#F05032", icon: SiGit, emoji: "🌿" },
  { id: "github", key: "2", name: "GitHub", color: "#FFFFFF", icon: SiGithub, emoji: "🐙" },
  { id: "vercel", key: "v", name: "Vercel", color: "#FFFFFF", icon: SiVercel, emoji: "▲" },
  { id: "figma", key: "f", name: "Figma", color: "#F24E1E", icon: SiFigma, emoji: "🖌️" },
  { id: "n8n", key: "8", name: "n8n", color: "#EA4B71", icon: SiN8N, emoji: "🔁" },
];
