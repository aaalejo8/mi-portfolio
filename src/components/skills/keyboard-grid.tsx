"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Keycap from "@/components/skills/keycap";
import { skillsData } from "@/components/skills/skills-data";

function playClick() {
  try {
    const AudioContextClass =
      window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new AudioContextClass();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "square";
    osc.frequency.value = 320;
    gain.gain.setValueAtTime(0.05, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.06);
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.07);
  } catch {
    // Web Audio not available in this environment; fail silently.
  }
}

interface KeyboardGridProps {
  onActivate: (id: string) => void;
}

export default function KeyboardGrid({ onActivate }: KeyboardGridProps) {
  const [pressedId, setPressedId] = useState<string | null>(null);

  const press = useCallback(
    (id: string) => {
      setPressedId(id);
      onActivate(id);
      playClick();
    },
    [onActivate]
  );

  const release = useCallback((id: string) => {
    setPressedId((current) => (current === id ? null : current));
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA"].includes(target.tagName)) return;
      if (e.repeat) return;
      const match = skillsData.find((s) => s.key === e.key.toLowerCase());
      if (!match) return;
      press(match.id);
    }
    function handleKeyUp(e: KeyboardEvent) {
      const match = skillsData.find((s) => s.key === e.key.toLowerCase());
      if (!match) return;
      release(match.id);
    }
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [press, release]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="[perspective:1400px]"
    >
      <div className="mx-auto w-fit origin-center scale-[0.55] sm:scale-[0.75] md:scale-100">
        <div
          className="rounded-[28px] border border-white/10 bg-[#0b0b0e] p-6"
          style={{ transform: "rotateX(52deg) rotateZ(-42deg)", transformStyle: "preserve-3d" }}
        >
          <div className="grid grid-cols-4 gap-4 sm:grid-cols-5">
            {skillsData.map((skill) => (
              <Keycap
                key={skill.id}
                skill={skill}
                pressed={pressedId === skill.id}
                onPress={() => press(skill.id)}
                onRelease={() => release(skill.id)}
              />
            ))}
          </div>
        </div>
        <div className="mx-auto -mt-4 h-8 w-[80%] rounded-full bg-black/70 blur-2xl" />
      </div>
    </motion.div>
  );
}
