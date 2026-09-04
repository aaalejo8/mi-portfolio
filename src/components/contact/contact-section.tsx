"use client";

import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { useLanguage } from "@/i18n/language-provider";

export default function ContactSection() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <p className="font-mono text-sm text-accent">{t.contact.eyebrow}</p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-3 font-heading text-3xl text-white sm:text-4xl"
        >
          {t.contact.statement}
        </motion.h2>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          href="mailto:alejoalmada17@gmail.com"
          className="mt-10 inline-block rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-medium text-white transition-colors hover:border-accent/60 hover:bg-accent/10"
        >
          {t.contact.cta}
        </motion.a>

        <div className="mt-10 flex items-center justify-center gap-8">
          <a
            href="https://github.com/aaalejo8"
            target="_blank"
            rel="noreferrer"
            aria-label={t.contact.github}
            className="text-white/50 transition-colors hover:text-accent"
          >
            <SiGithub size={26} />
          </a>
          <a
            href="mailto:alejoalmada17@gmail.com"
            aria-label={t.contact.email}
            className="text-white/50 transition-colors hover:text-accent"
          >
            <HiOutlineMail size={28} />
          </a>
        </div>
      </div>

      <footer className="mt-24 border-t border-white/5 pt-8 text-center font-mono text-xs text-white/30">
        Alejo Almada © {year}
      </footer>
    </section>
  );
}
