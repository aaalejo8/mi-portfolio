"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/language-provider";

interface ProjectCardFeaturedProps {
  title: string;
  description: string;
  tags: readonly string[];
  status: "in-development" | "completed" | "planned";
  index?: number;
}

export default function ProjectCardFeatured({
  title,
  description,
  tags,
  status,
  index = 0,
}: ProjectCardFeaturedProps) {
  const { t } = useLanguage();
  const statusLabel = {
    completed: t.projects.statusCompleted,
    "in-development": t.projects.statusInDevelopment,
    planned: t.projects.statusPlanned,
  }[status];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      className="group rounded-2xl border border-white/10 bg-surface p-8 shadow-none transition-[colors,box-shadow] duration-300 hover:border-accent/40 hover:shadow-[0_20px_40px_-20px_rgba(102,179,255,0.25)]"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-heading text-xl text-white sm:text-2xl">{title}</h3>
        <span
          className={`shrink-0 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-wide ${
            status === "completed"
              ? "border-accent/40 text-accent"
              : status === "planned"
                ? "border-white/10 text-white/30"
                : "border-white/20 text-white/50"
          }`}
        >
          {statusLabel}
        </span>
      </div>

      <p className="mt-4 max-w-2xl font-sans text-sm font-light text-white/70">{description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] text-white/50"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-5 font-mono text-xs">
        {status !== "planned" && (
          <a
            href="https://github.com/aaalejo8"
            target="_blank"
            rel="noreferrer"
            className="text-white/60 transition-colors hover:text-accent"
          >
            {t.projects.viewRepo}
          </a>
        )}
        <span className="text-white/30">{t.projects.demoSoon}</span>
      </div>
    </motion.article>
  );
}
