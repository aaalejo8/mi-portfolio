"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/language-provider";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-mono text-sm text-accent"
        >
          {t.about.eyebrow}
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delayChildren: 0.05, staggerChildren: 0.1 }}
          className="mt-6 max-w-3xl space-y-5"
        >
          {t.about.paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
              className="font-sans text-base font-light leading-relaxed text-white/70 sm:text-lg"
            >
              {paragraph}
            </motion.p>
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
