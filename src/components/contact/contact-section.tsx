"use client";

import { useRef, useState, type MouseEvent as ReactMouseEvent } from "react";
import { motion, useMotionValue, useSpring, type Variants } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { useLanguage } from "@/i18n/language-provider";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function MagneticCta({ href, label, hoverLabel }: { href: string; label: string; hoverLabel: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.4 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: ReactMouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    const maxOffset = 10;
    x.set(Math.max(-maxOffset, Math.min(maxOffset, relX * 0.35)));
    y.set(Math.max(-maxOffset, Math.min(maxOffset, relY * 0.35)));
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <motion.a
      href={href}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.97 }}
      className="relative inline-flex min-w-[11rem] items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-medium text-white transition-colors duration-300 hover:border-accent/60"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-accent/25 to-accent/5 opacity-0 transition-opacity duration-300"
        style={{ opacity: hovered ? 1 : 0 }}
      />
      <span className="relative grid">
        <span
          aria-hidden={hovered}
          className="col-start-1 row-start-1 whitespace-nowrap transition-opacity duration-200"
          style={{ opacity: hovered ? 0 : 1 }}
        >
          {label}
        </span>
        <span
          aria-hidden={!hovered}
          className="col-start-1 row-start-1 whitespace-nowrap transition-opacity duration-200"
          style={{ opacity: hovered ? 1 : 0 }}
        >
          {hoverLabel}
        </span>
      </span>
    </motion.a>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      aria-label={label}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.92 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group/icon relative inline-flex flex-col items-center gap-2 text-white/50 transition-colors duration-300 hover:text-accent"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-[-10px] -z-10 rounded-full bg-accent/0 blur-md transition-colors duration-300 group-hover/icon:bg-accent/20"
      />
      {icon}
      <span className="pointer-events-none absolute -bottom-6 whitespace-nowrap font-mono text-[10px] text-white/40 opacity-0 transition-opacity duration-200 group-hover/icon:opacity-100">
        {label}
      </span>
    </motion.a>
  );
}

export default function ContactSection() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const spotlightRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: ReactMouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    spotlightRef.current?.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    spotlightRef.current?.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      id="contact"
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-background py-24 lg:py-32"
    >
      <div
        ref={spotlightRef}
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(102,179,255,0.10), transparent 30%)",
        }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
        className="relative mx-auto max-w-3xl px-6 text-center lg:px-10"
      >
        <motion.p variants={itemVariants} className="font-mono text-sm text-accent">
          {t.contact.eyebrow}
        </motion.p>

        <motion.h2
          variants={itemVariants}
          className="relative mt-3 font-heading text-3xl text-white sm:text-4xl"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-40 w-[140%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
          />
          {t.contact.statementLead}
          <br />
          <span className="group/highlight relative inline-block">
            {t.contact.statementHighlight}
            <span
              aria-hidden
              className="ml-1 inline-block h-[0.85em] w-[2px] translate-y-[2px] bg-accent align-middle opacity-0 transition-opacity duration-200 group-hover/highlight:opacity-100 group-hover/highlight:animate-[blink-cursor_1s_steps(1)_infinite]"
            />
          </span>
        </motion.h2>

        <motion.div variants={itemVariants} className="mt-10 flex justify-center">
          <MagneticCta href="mailto:alejoalmada17@gmail.com" label={t.contact.cta} hoverLabel={t.contact.ctaHover} />
        </motion.div>

        <motion.div variants={itemVariants} className="mt-14 flex items-center justify-center gap-10">
          <SocialLink href="https://github.com/aaalejo8" label={t.contact.github} icon={<SiGithub size={26} />} />
          <SocialLink
            href="https://www.linkedin.com/in/alejo-almada-8827b4355/"
            label={t.contact.linkedin}
            icon={<FaLinkedin size={26} />}
          />
          <SocialLink
            href="mailto:alejoalmada17@gmail.com"
            label={t.contact.email}
            icon={<HiOutlineMail size={28} />}
          />
        </motion.div>
      </motion.div>

      <footer className="relative mt-24 border-t border-white/5 pt-8 text-center font-mono text-xs text-white/30">
        Alejo Almada © {year}
      </footer>
    </section>
  );
}
