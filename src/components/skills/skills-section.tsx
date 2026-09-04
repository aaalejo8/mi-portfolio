"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import KeyboardGrid from "@/components/skills/keyboard-grid";
import { skillsData } from "@/components/skills/skills-data";
import { useLanguage } from "@/i18n/language-provider";

export default function SkillsSection() {
  const { t } = useLanguage();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = skillsData.find((s) => s.id === selectedId) ?? null;

  return (
    <section id="skills" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <p className="text-center font-mono text-sm text-accent">{t.skills.eyebrow}</p>
        <h2 className="mt-3 text-center font-heading text-4xl text-white sm:text-5xl">
          {t.skills.title}
        </h2>
        <p className="mt-2 text-center font-mono text-xs text-white/40">{t.skills.hint}</p>

        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-[280px_1fr]">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <motion.div
              key={selected?.id ?? "idle"}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <p className="font-heading text-xl text-white">
                {selected ? selected.name : t.skills.idleTitle}
              </p>
              <p className="mt-2 font-sans text-sm font-light text-white/60">
                {selected ? t.skills.descriptions[selected.id] : t.skills.idleDescription}
              </p>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            <KeyboardGrid onActivate={setSelectedId} />
          </div>
        </div>
      </div>
    </section>
  );
}
