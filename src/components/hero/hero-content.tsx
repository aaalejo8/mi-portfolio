"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/language-provider";

export default function HeroContent() {
  const { t } = useLanguage();

  return (
    <div className="text-center lg:text-left">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="font-mono text-sm text-accent"
      >
        {t.hero.greeting}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="mt-3 font-heading text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
      >
        {t.hero.headingLine1}
        <br />
        {t.hero.headingLine2}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="mx-auto mt-6 max-w-xl font-sans text-base font-light text-white/70 lg:mx-0"
      >
        {t.hero.description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        className="mt-8 flex flex-col items-center gap-6 lg:items-start"
      >
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-accent/60 hover:bg-accent/10"
        >
          {t.hero.cta}
        </motion.a>

        <div className="flex items-center gap-6 font-mono text-sm text-white/60">
          <motion.a
            href="https://github.com/aaalejo8"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="inline-block transition-colors hover:text-accent"
          >
            {t.contact.github}
          </motion.a>
          <motion.a
            href="mailto:alejoalmada17@gmail.com"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="inline-block transition-colors hover:text-accent"
          >
            {t.contact.email}
          </motion.a>
        </div>

        <div className="flex items-center gap-2 text-xs text-white/50">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {t.hero.available}
        </div>
      </motion.div>
    </div>
  );
}
