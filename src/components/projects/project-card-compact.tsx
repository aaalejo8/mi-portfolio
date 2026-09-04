"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/language-provider";

interface ProjectCardCompactProps {
  title: string;
  description: string;
  tags: readonly string[];
  status?: "in-development" | "completed" | "planned";
}

export default function ProjectCardCompact({
  title,
  description,
  tags,
  status,
}: ProjectCardCompactProps) {
  const { t } = useLanguage();
  const statusLabel = status
    ? {
        completed: t.projects.statusCompleted,
        "in-development": t.projects.statusInDevelopment,
        planned: t.projects.statusPlanned,
      }[status]
    : null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group flex flex-col rounded-xl border border-white/10 bg-surface p-6 transition-colors hover:border-accent/40"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-heading text-base text-white">{title}</h3>
        {statusLabel && (
          <span
            className={`shrink-0 rounded-full border px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wide ${
              status === "planned" ? "border-white/10 text-white/30" : "border-white/20 text-white/50"
            }`}
          >
            {statusLabel}
          </span>
        )}
      </div>

      <p className="mt-3 font-sans text-sm font-light text-white/60">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 px-2.5 py-0.5 font-mono text-[10px] text-white/50"
          >
            {tag}
          </span>
        ))}
      </div>

      {status !== "planned" && (
        <a
          href="https://github.com/aaalejo8"
          target="_blank"
          rel="noreferrer"
          className="mt-5 font-mono text-xs text-white/60 transition-colors hover:text-accent"
        >
          {t.projects.viewRepo}
        </a>
      )}
    </motion.article>
  );
}
