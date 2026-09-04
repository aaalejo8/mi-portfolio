"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";

export interface KeycapData {
  label: string;
  icon: IconType;
  color: string;
}

export default function Keycap({ label, icon: Icon, color }: KeycapData) {
  return (
    <motion.div
      className="group relative flex h-20 w-20 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-surface shadow-[0_8px_0_0_rgba(0,0,0,0.6)]"
      style={{ transformStyle: "preserve-3d" }}
      whileHover={{ y: 4, boxShadow: "0 4px 0 0 rgba(0,0,0,0.6)" }}
      whileTap={{ y: 6, boxShadow: "0 2px 0 0 rgba(0,0,0,0.6)" }}
      transition={{ duration: 0.15, ease: "easeOut" }}
    >
      <Icon size={26} style={{ color }} className="transition-transform group-hover:scale-110" />
      <span className="font-mono text-[10px] text-white/60">{label}</span>
    </motion.div>
  );
}
