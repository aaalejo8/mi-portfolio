"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import KeyboardGrid from "@/components/skills/keyboard-grid";
import { skillsData } from "@/components/skills/skills-data";
import { useLanguage } from "@/i18n/language-provider";

/** Layered text-shadow that fakes chunky extruded 3D lettering. */
const EXTRUDED_TEXT = [
  "1px 1px 0 #9a9aa5",
  "2px 2px 0 #8a8a95",
  "3px 3px 0 #7a7a85",
  "4px 4px 0 #6a6a75",
  "5px 5px 0 #5a5a65",
  "6px 7px 10px rgba(0,0,0,0.65)",
].join(", ");

export default function SkillsSection() {
  const { t } = useLanguage();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = skillsData.find((s) => s.id === selectedId) ?? null;

  return (
    <section id="skills" className="overflow-hidden bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <p className="text-center font-mono text-sm text-accent">{t.skills.eyebrow}</p>
        <h2
          className="mt-3 text-center font-heading text-5xl tracking-tight text-white sm:text-6xl"
          style={{ textShadow: EXTRUDED_TEXT }}
        >
          {t.skills.title}
        </h2>
        <p className="mt-3 text-center font-mono text-xs text-white/40">{t.skills.hint}</p>

        <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-[320px_1fr] lg:gap-4">
          <div className="order-2 [perspective:1200px] lg:order-1">
            <motion.div
              key={selected?.id ?? "idle"}
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="text-center lg:text-left lg:[transform:rotateX(52deg)_rotateZ(-38deg)]"
            >
              <p
                className="font-heading text-3xl leading-tight text-white sm:text-4xl"
                style={{ textShadow: EXTRUDED_TEXT }}
              >
                {selected ? selected.name : t.skills.idleTitle}
              </p>
              <p className="mt-3 max-w-xs font-sans text-sm font-light text-white/70 lg:text-base">
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
