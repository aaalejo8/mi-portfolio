"use client";

import Image from "next/image";
import { useRef, type MouseEvent as ReactMouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function HeroProfile() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 18, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMouseMove = (event: ReactMouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ perspective: 800 }}
      className="relative mx-auto aspect-square w-full max-w-[220px] lg:max-w-[340px]"
    >
      <div className="absolute inset-[-20px] rounded-full bg-accent/15 blur-3xl" />
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full w-full"
      >
        <Image
          src="/profile.webp"
          alt="Alejo Almada"
          fill
          priority
          sizes="(min-width: 1024px) 340px, 220px"
          className="relative rounded-full border border-white/15 object-cover"
        />
      </motion.div>
    </motion.div>
  );
}
