"use client";

import KeyboardGrid from "@/components/skills/keyboard-grid";
import { useLanguage } from "@/i18n/language-provider";

export default function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <p className="text-center font-mono text-sm text-accent">{t.skills.eyebrow}</p>
        <h2 className="mt-3 text-center font-heading text-3xl text-white sm:text-4xl">
          {t.skills.title}
        </h2>
        <p className="mt-2 text-center font-mono text-xs text-white/40">{t.skills.hint}</p>

        <div className="mt-16">
          <KeyboardGrid />
        </div>
      </div>
    </section>
  );
}
