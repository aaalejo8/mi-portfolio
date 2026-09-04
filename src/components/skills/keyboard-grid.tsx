"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Keycap, { KEY_SIZE } from "@/components/skills/keycap";
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

const COLUMNS = 5;
// Progressive rightward shift per row, like a real keyboard's row stagger.
const ROW_STAGGER = KEY_SIZE * 0.32;

const ROWS = Array.from({ length: Math.ceil(skillsData.length / COLUMNS) }, (_, i) =>
  skillsData.slice(i * COLUMNS, i * COLUMNS + COLUMNS)
);

const preserve3d = { transformStyle: "preserve-3d" as const };

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
      className="[perspective:1600px]"
    >
      <div className="mx-auto w-fit origin-center scale-[0.3] sm:scale-[0.55] md:scale-[0.8] lg:scale-[0.92]" style={preserve3d}>
        <div style={{ transform: "rotateX(55deg) rotateZ(-40deg)", ...preserve3d }}>
          {/* Macropad base: a dark slab the keys visibly float above. */}
          <div
            className="relative rounded-[32px] border border-white/5 bg-[#0c0c10] p-6 shadow-[0_2px_0_rgba(255,255,255,0.04)_inset] sm:p-10"
            style={preserve3d}
          >
            <div
              className="pointer-events-none absolute inset-3 rounded-[24px]"
              style={{ boxShadow: "inset 0 8px 22px rgba(0,0,0,0.65)" }}
            />

            <div className="relative flex flex-col gap-3.5" style={preserve3d}>
              {ROWS.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="flex gap-3.5"
                  style={{ marginLeft: rowIndex * ROW_STAGGER, ...preserve3d }}
                >
                  {row.map((skill) => (
                    <Keycap
                      key={skill.id}
                      skill={skill}
                      pressed={pressedId === skill.id}
                      onPress={() => press(skill.id)}
                      onRelease={() => release(skill.id)}
                      depthBonus={rowIndex * 1.4}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
