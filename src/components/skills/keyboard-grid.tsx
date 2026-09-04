"use client";

import { motion } from "framer-motion";
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
import Keycap, { type KeycapData } from "@/components/skills/keycap";

const keys: KeycapData[] = [
  { label: "Java", icon: FaJava, color: "#f89820" },
  { label: "Python", icon: SiPython, color: "#3776AB" },
  { label: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { label: "SQL", icon: SiMysql, color: "#4479A1" },
  { label: "HTML", icon: SiHtml5, color: "#E34F26" },
  { label: "CSS", icon: SiCss, color: "#663399" },
  { label: "React", icon: SiReact, color: "#61DAFB" },
  { label: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { label: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { label: "REST APIs", icon: TbApi, color: "#66B3FF" },
  { label: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { label: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { label: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { label: "Docker", icon: SiDocker, color: "#2496ED" },
  { label: "Git", icon: SiGit, color: "#F05032" },
  { label: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { label: "Vercel", icon: SiVercel, color: "#FFFFFF" },
  { label: "Figma", icon: SiFigma, color: "#F24E1E" },
  { label: "n8n", icon: SiN8N, color: "#EA4B71" },
];

export default function KeyboardGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="overflow-hidden [perspective:1400px]"
    >
      <div className="mx-auto w-fit origin-center scale-[0.6] sm:scale-[0.8] md:scale-100">
        <div
          className="grid grid-cols-4 gap-4 sm:grid-cols-5 md:gap-5"
          style={{
            transform: "rotateX(48deg) rotateZ(-35deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {keys.map((key) => (
            <Keycap key={key.label} {...key} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
