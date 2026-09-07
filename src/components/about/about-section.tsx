"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/language-provider";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-accent/10 via-background/60 to-background"
      />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-mono text-sm text-accent"
        >
          {t.about.eyebrow}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
          className="mt-6 max-w-2xl font-heading text-2xl leading-snug text-white sm:text-3xl"
        >
          {t.about.introTitle}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-3 max-w-xl font-sans text-base font-light text-white/60"
        >
          {t.about.introSubtitle}
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delayChildren: 0.15, staggerChildren: 0.1 }}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {t.about.blocks.map((block, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
              className="rounded-xl border border-white/10 bg-surface p-6"
            >
              <span className="font-mono text-xs text-accent">0{index + 1}</span>
              <h3 className="mt-2 font-heading text-lg text-white">{block.title}</h3>
              <p className="mt-2 font-sans text-sm font-light leading-relaxed text-white/60">
                {block.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delayChildren: 0.1, staggerChildren: 0.06 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {t.about.identity.map((item, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="rounded-full border border-white/10 bg-surface px-4 py-2 font-mono text-xs text-white/70 transition-colors hover:border-accent/40 hover:text-white"
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
