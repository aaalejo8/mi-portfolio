"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroProfile() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative mx-auto aspect-square w-full max-w-[280px] lg:max-w-[420px]"
    >
      <div className="absolute inset-[-20px] rounded-full bg-blue-500/10 blur-3xl" />
      <Image
        src="/profile.webp"
        alt="Alejo Almada"
        fill
        priority
        sizes="(min-width: 1024px) 420px, 280px"
        className="relative rounded-full border border-white/15 object-cover"
      />
    </motion.div>
  );
}
