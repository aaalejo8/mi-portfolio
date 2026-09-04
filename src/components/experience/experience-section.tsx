"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/language-provider";

export default function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <p className="font-mono text-sm text-accent">{t.experience.eyebrow}</p>
        <h2 className="mt-3 font-heading text-3xl text-white sm:text-4xl">
          {t.experience.title}
        </h2>

        <div className="mt-14 space-y-10 border-l border-white/10 pl-8">
          {t.experience.items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
              className="relative"
            >
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
              {item.date && (
                <p className="font-mono text-xs text-white/40">{item.date}</p>
              )}
              <h3 className="mt-1 font-heading text-lg text-white">{item.title}</h3>
              {item.subtitle && (
                <p className="mt-0.5 font-mono text-xs text-white/50">{item.subtitle}</p>
              )}
              {item.bullets.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="font-sans text-sm font-light text-white/70">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
