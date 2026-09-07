"use client";

import { useLanguage } from "@/i18n/language-provider";
import ProjectCardFeatured from "@/components/projects/project-card-featured";
import ProjectCardCompact from "@/components/projects/project-card-compact";

export default function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <p className="font-mono text-sm text-accent">{t.projects.eyebrow}</p>
        <h2 className="mt-3 font-heading text-3xl text-white sm:text-4xl">{t.projects.title}</h2>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {t.projects.featured.map((item, index) => (
            <ProjectCardFeatured key={index} {...item} index={index} />
          ))}
        </div>

        <div className="mt-20">
          <h3 className="font-heading text-lg text-white/80">{t.projects.underConstructionTitle}</h3>
          <p className="mt-1 font-mono text-xs text-white/40">{t.projects.underConstructionHint}</p>

          <ul className="mt-6">
            {t.projects.underConstruction.map((item, index) => (
              <ProjectCardCompact key={index} title={item.title} pitch={item.pitch} index={index} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
