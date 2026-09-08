"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/language-provider";
import { press } from "@/components/ui/press";

interface ProjectCardFeaturedProps {
  title: string;
  description: string;
  tags: readonly string[];
  image: string;
  alt: string;
  url?: string;
  repoUrl?: string;
  index?: number;
}

export default function ProjectCardFeatured({
  title,
  description,
  tags,
  image,
  alt,
  url,
  repoUrl,
  index = 0,
}: ProjectCardFeaturedProps) {
  const { t } = useLanguage();

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-surface transition-colors duration-300 hover:border-accent/40"
    >
      <div className="relative aspect-video overflow-hidden border-b border-white/10 bg-black/40">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="p-6">
        <h3 className="font-heading text-lg text-white sm:text-xl">{title}</h3>
        <p className="mt-3 font-sans text-sm font-light text-white/70">{description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="rounded-full border border-accent/30 px-3 py-1 font-mono text-[11px] text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        {(url || repoUrl) && (
          <div className="mt-5 flex items-center gap-5 font-mono text-xs">
            {url && (
              <motion.a
                href={url}
                target="_blank"
                rel="noreferrer"
                {...press}
                className="press-shadow inline-block text-white/60 transition-colors hover:text-accent"
              >
                {t.projects.viewSite}
              </motion.a>
            )}
            {repoUrl && (
              <motion.a
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
                {...press}
                className="press-shadow inline-block text-white/60 transition-colors hover:text-accent"
              >
                {t.projects.viewCode}
              </motion.a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
