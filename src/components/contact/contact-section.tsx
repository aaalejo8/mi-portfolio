"use client";

import { useEffect, useState, type MouseEvent as ReactMouseEvent } from "react";
import { motion, useMotionValue, useSpring, type Variants } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { useLanguage } from "@/i18n/language-provider";
import { press } from "@/components/ui/press";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const SALTA_TIMEZONE = "America/Argentina/Salta";

function useSaltaClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    // Runs once after mount to read the real clock (server-rendered state stays
    // null to avoid a hydration mismatch), then ticks every 30s.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNow(new Date());
    const interval = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(interval);
  }, []);

  if (!now) return { time: "", isAvailable: false };

  const time = new Intl.DateTimeFormat("en-GB", {
    timeZone: SALTA_TIMEZONE,
    hour: "2-digit",
    minute: "2-digit",
  }).format(now);

  const hour = Number(
    new Intl.DateTimeFormat("en-GB", { timeZone: SALTA_TIMEZONE, hour: "2-digit", hour12: false }).format(now)
  );
  const isAvailable = hour >= 9 && hour < 20;

  return { time, isAvailable };
}

function MagneticCta({ href, label }: { href: string; label: string }) {
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
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className="press-shadow relative inline-flex min-w-[11rem] items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-medium text-white transition-colors duration-300 hover:border-accent/60"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-accent/25 to-accent/5 opacity-0 transition-opacity duration-300"
        style={{ opacity: hovered ? 1 : 0 }}
      />
      {label}
    </motion.a>
  );
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      aria-label={label}
      {...press}
      className="press-shadow group/icon relative inline-flex flex-col items-center gap-2 rounded-full p-2 text-white/50 transition-colors duration-300 hover:text-accent"
    >
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
  const { time, isAvailable } = useSaltaClock();

  return (
    <section id="contact" className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-[140%] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
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

        <motion.h2 variants={itemVariants} className="mt-3 font-heading text-3xl text-white sm:text-4xl">
          {t.contact.statementLead}
          <br />
          <span className="text-accent">{t.contact.statementHighlight}</span>
        </motion.h2>

        <motion.div variants={itemVariants} className="mt-10 flex justify-center">
          <MagneticCta href="mailto:alejoalmada17@gmail.com" label={t.contact.cta} />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-8 flex items-center justify-center gap-2 font-mono text-xs text-white/50"
        >
          <span className="relative flex h-2 w-2">
            {isAvailable && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
            )}
            <span className={`relative inline-flex h-2 w-2 rounded-full ${isAvailable ? "bg-accent" : "bg-white/30"}`} />
          </span>
          {isAvailable ? t.contact.availableNow : t.contact.awayNow}
          {time && (
            <span className="text-white/30">
              · {t.contact.localTimeLabel} {time}
            </span>
          )}
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
