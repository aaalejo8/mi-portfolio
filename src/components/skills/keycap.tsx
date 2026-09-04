"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { SkillItem } from "@/components/skills/skills-data";

interface KeycapProps {
  skill: SkillItem;
  pressed: boolean;
  onPress: () => void;
  onRelease: () => void;
}

export default function Keycap({ skill, pressed, onPress, onRelease }: KeycapProps) {
  const { name, color, icon: Icon, emoji, key } = skill;
  const [pops, setPops] = useState<number[]>([]);
  const wasPressed = useRef(false);

  useEffect(() => {
    if (pressed && !wasPressed.current) {
      const popId = Date.now() + Math.random();
      setPops((current) => [...current, popId]);
      const timeout = setTimeout(() => {
        setPops((current) => current.filter((id) => id !== popId));
      }, 800);
      wasPressed.current = true;
      return () => clearTimeout(timeout);
    }
    wasPressed.current = pressed;
  }, [pressed]);

  return (
    <div className="relative">
      <AnimatePresence>
        {pops.map((id) => (
          <motion.span
            key={id}
            initial={{ opacity: 0, scale: 0, y: 0 }}
            animate={{ opacity: 1, scale: 1.2, y: -30 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="pointer-events-none absolute left-1/2 top-0 z-20 -translate-x-1/2 text-xl"
          >
            {emoji}
          </motion.span>
        ))}
      </AnimatePresence>

      <motion.button
        type="button"
        onPointerDown={onPress}
        onPointerUp={onRelease}
        onPointerLeave={onRelease}
        animate={{
          y: pressed ? 5 : 0,
          boxShadow: pressed ? "0 2px 0 0 rgba(0,0,0,0.6)" : "0 7px 0 0 rgba(0,0,0,0.6)",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 24 }}
        className="relative flex h-16 w-16 flex-col items-center justify-center gap-1 rounded-lg border border-white/10 bg-surface sm:h-20 sm:w-20"
      >
        <Icon size={22} style={{ color }} />
        <span className="font-mono text-[9px] text-white/50">{name}</span>
        <span className="absolute bottom-1 right-1.5 font-mono text-[8px] uppercase text-white/20">
          {key}
        </span>
      </motion.button>
    </div>
  );
}
