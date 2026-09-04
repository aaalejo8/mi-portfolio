"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, animate, motion, useMotionValue } from "framer-motion";
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

/** Perceived luminance (0-1), used to pick a readable legend/icon color. */
function luminance(hex: string) {
  const value = parseInt(hex.replace("#", ""), 16);
  const r = ((value >> 16) & 255) / 255;
  const g = ((value >> 8) & 255) / 255;
  const b = (value & 255) / 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export const KEY_SIZE = 76;
const REST_DEPTH = 18;
const HOVER_DEPTH = 21;
const PRESS_DEPTH = 6;

interface KeycapProps {
  skill: SkillItem;
  pressed: boolean;
  onPress: () => void;
  onRelease: () => void;
  /** Extra rest-depth for rows nearer the viewer, so the front rows read as slightly more prominent. */
  depthBonus?: number;
}

export default function Keycap({ skill, pressed, onPress, onRelease, depthBonus = 0 }: KeycapProps) {
  const { name, color, icon: Icon, emoji, key } = skill;
  const [hovered, setHovered] = useState(false);
  const [pops, setPops] = useState<number[]>([]);
  const wasPressed = useRef(false);
  const timers = useRef<Set<number>>(new Set());

  // A single spring-driven value feeds the top face's translateZ AND the
  // side walls' height/width, so the walls genuinely shrink as the key sinks
  // instead of a fixed-depth block sliding into the floor.
  const depth = useMotionValue(REST_DEPTH + depthBonus);

  useEffect(() => {
    const target = (pressed ? PRESS_DEPTH : hovered ? HOVER_DEPTH : REST_DEPTH) + depthBonus;
    const controls = animate(depth, target, {
      type: "spring",
      stiffness: pressed ? 700 : 420,
      damping: pressed ? 32 : 16,
      mass: 0.5,
    });
    return () => controls.stop();
  }, [pressed, hovered, depth, depthBonus]);

  const isLight = luminance(color) > 0.6;
  const contrast = isLight ? "#141418" : "#ffffff";
  const topGradient = `linear-gradient(155deg, ${shade(color, 1.18)} 0%, ${color} 55%, ${shade(color, 0.92)} 100%)`;
  const frontColor = shade(color, 0.75);
  const rightColor = shade(color, 0.6);

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
    <div
      className="relative"
      style={{ width: KEY_SIZE, height: KEY_SIZE, transformStyle: "preserve-3d" }}
    >
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

      {/* Contact shadow: sits flat on the pad floor (z=0), so it shrinks and
          fades as the key rises and darkens/grows as it sinks. */}
      <motion.div
        aria-hidden
        className="absolute rounded-full bg-black blur-md"
        style={{
          width: KEY_SIZE * 0.82,
          height: KEY_SIZE * 0.4,
          left: KEY_SIZE * 0.09,
          top: KEY_SIZE * 0.82,
        }}
        animate={{
          opacity: pressed ? 0.25 : hovered ? 0.55 : 0.45,
          scale: pressed ? 0.8 : hovered ? 1.08 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />

      {/* Top face: the pressable surface, floating above the floor by `depth`. */}
      <motion.button
        type="button"
        aria-label={name}
        onPointerDown={onPress}
        onPointerUp={onRelease}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => {
          setHovered(false);
          onRelease();
        }}
        style={{
          translateZ: depth,
          background: topGradient,
          boxShadow: "inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 6px rgba(0,0,0,0.18)",
        }}
        className="absolute inset-0 flex flex-col items-center justify-center gap-1 rounded-[16px]"
      >
        <Icon size={30} style={{ color: contrast }} className="drop-shadow-sm" />
        <span
          className="absolute bottom-1.5 right-2 font-mono text-[8px] uppercase opacity-40"
          style={{ color: contrast }}
        >
          {key}
        </span>
      </motion.button>

      {/* Front wall: folded down from the top face's bottom edge, height == depth. */}
      <motion.div
        aria-hidden
        style={{
          height: depth,
          background: frontColor,
          top: "100%",
          transformOrigin: "top",
          rotateX: 90,
        }}
        className="pointer-events-none absolute left-0 w-full rounded-b-[6px]"
      />

      {/* Right wall: folded out from the top face's right edge, width == depth. */}
      <motion.div
        aria-hidden
        style={{
          width: depth,
          background: rightColor,
          left: "100%",
          transformOrigin: "left",
          rotateY: -90,
        }}
        className="pointer-events-none absolute top-0 h-full rounded-r-[6px]"
      />
    </div>
  );
}
