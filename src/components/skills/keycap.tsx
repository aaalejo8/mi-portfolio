"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { SkillItem } from "@/components/skills/skills-data";

/** Multiply a hex color by `amount` to get a darker/lighter variant. */
function shade(hex: string, amount: number) {
  const value = parseInt(hex.replace("#", ""), 16);
  const clamp = (n: number) => Math.min(255, Math.max(0, Math.round(n)));
  const r = clamp(((value >> 16) & 255) * amount);
  const g = clamp(((value >> 8) & 255) * amount);
  const b = clamp((value & 255) * amount);
  return `rgb(${r} ${g} ${b})`;
}

/** Perceived luminance (0-1), used to pick a readable legend color. */
function luminance(hex: string) {
  const value = parseInt(hex.replace("#", ""), 16);
  const r = ((value >> 16) & 255) / 255;
  const g = ((value >> 8) & 255) / 255;
  const b = (value & 255) / 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

const EXTRUSION_STEPS = 9;

/**
 * Stacked box-shadows fake the keycap's extruded sides. Both states keep the
 * same layer count so the browser can interpolate between them smoothly.
 */
function extrusion(color: string, depth: number) {
  const side = shade(color, 0.55);
  const layers = Array.from(
    { length: EXTRUSION_STEPS },
    (_, i) => `0 ${((depth / EXTRUSION_STEPS) * (i + 1)).toFixed(2)}px 0 ${side}`
  );
  layers.push(`0 ${depth + 8}px ${depth + 12}px rgba(0,0,0,0.55)`);
  layers.push("inset 0 2px 0 rgba(255,255,255,0.22)");
  return layers.join(", ");
}

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
  const timers = useRef<Set<number>>(new Set());

  const isLight = luminance(color) > 0.6;
  const contrast = isLight ? "#141418" : "#ffffff";

  // Spawn one floating emoji per press. The removal timers are tracked so they
  // survive an early release (clearing them here would strand the emoji) and
  // are only cancelled when the keycap itself unmounts.
  useEffect(() => {
    if (!pressed) {
      wasPressed.current = false;
      return;
    }
    if (wasPressed.current) return;
    wasPressed.current = true;

    const popId = Date.now() + Math.random();
    setPops((current) => [...current, popId]);
    const timeout = window.setTimeout(() => {
      setPops((current) => current.filter((id) => id !== popId));
      timers.current.delete(timeout);
    }, 800);
    timers.current.add(timeout);
  }, [pressed]);

  useEffect(() => {
    const pending = timers.current;
    return () => {
      pending.forEach((id) => window.clearTimeout(id));
      pending.clear();
    };
  }, []);

  return (
    <div className="relative">
      <AnimatePresence>
        {pops.map((id) => (
          // The wrapper cancels the pad's isometric tilt so the sticker faces
          // the viewer; Framer owns the transform of the span inside it.
          <div
            key={id}
            className="pointer-events-none absolute left-1/2 top-0 z-20"
            style={{ transform: "translateX(-50%) rotateZ(40deg) rotateX(-55deg)" }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0, y: 0 }}
              animate={{ opacity: 1, scale: 1.2, y: -34 }}
              exit={{ opacity: 0, y: -54 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="block text-2xl"
            >
              {emoji}
            </motion.span>
          </div>
        ))}
      </AnimatePresence>

      {/* Framer drives only the travel; box-shadow stays under plain React/CSS
          control because Motion cannot interpolate multi-layer shadow lists. */}
      <motion.div
        animate={{ y: pressed ? 7 : 0 }}
        transition={{ type: "spring", stiffness: 600, damping: 26 }}
      >
        <button
          type="button"
          aria-label={name}
          onPointerDown={onPress}
          onPointerUp={onRelease}
          onPointerLeave={onRelease}
          style={{
            background: `linear-gradient(160deg, ${shade(color, 1.22)} 0%, ${color} 45%, ${shade(color, 0.88)} 100%)`,
            boxShadow: extrusion(color, pressed ? 3 : 10),
          }}
          className="relative flex h-[72px] w-[72px] items-center justify-center rounded-[14px] transition-[box-shadow] duration-100 ease-out"
        >
          <Icon size={36} style={{ color: contrast }} className="drop-shadow-sm" />
          <span
            className="absolute bottom-1 right-2 font-mono text-[9px] uppercase opacity-40"
            style={{ color: contrast }}
          >
            {key}
          </span>
        </button>
      </motion.div>
    </div>
  );
}
