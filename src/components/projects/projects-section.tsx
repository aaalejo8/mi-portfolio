"use client";

import { useLanguage } from "@/i18n/language-provider";
import ProjectCardFeatured from "@/components/projects/project-card-featured";
import ProjectCardCompact from "@/components/projects/project-card-compact";

export default function ProjectsSection() {
  const { t } = useLanguage();
  const [featured, compact] = [t.projects.items.slice(0, 4), t.projects.items.slice(4, 8)];

  return (
    <section id="projects" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <p className="font-mono text-sm text-accent">{t.projects.eyebrow}</p>
        <h2 className="mt-3 font-heading text-3xl text-white sm:text-4xl">{t.projects.title}</h2>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {featured.map((item, index) => (
            <ProjectCardFeatured key={item.title} {...item} index={index} />
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {compact.map((item, index) => (
            <ProjectCardCompact key={item.title} {...item} index={index} />
          ))}

          <ProjectCardCompact
            title={t.projects.otherProjectsTitle}
            description={t.projects.otherProjectsDescription}
            tags={t.projects.otherProjectsTags}
            index={compact.length}
          />
        </div>
      </div>
    </section>
  );
}
