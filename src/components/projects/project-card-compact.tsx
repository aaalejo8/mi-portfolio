"use client";

import { motion } from "framer-motion";

interface ProjectCardCompactProps {
  title: string;
  pitch: string;
  index?: number;
}

/** Lightweight, honest list item for work with no demo yet — one line, no case-study treatment. */
export default function ProjectCardCompact({ title, pitch, index = 0 }: ProjectCardCompactProps) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
      className="flex flex-col gap-1 border-b border-white/10 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
    >
      <h3 className="font-heading text-sm text-white/90">{title}</h3>
      <p className="font-sans text-sm font-light text-white/50 sm:max-w-md sm:text-right">{pitch}</p>
    </motion.li>
  );
}
