"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
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

const preserve3d = { transformStyle: "preserve-3d" as const };

interface Rect {
  left: number;
  top: number;
  width: number;
  height: number;
}

interface KeyboardGridProps {
  onActivate: (id: string) => void;
}

export default function KeyboardGrid({ onActivate }: KeyboardGridProps) {
  const [pressedId, setPressedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [rects, setRects] = useState<Record<string, Rect>>({});

  const anchorRef = useRef<HTMLDivElement>(null);

  // The decorative keycaps live many levels deep inside nested
  // `transform-style: preserve-3d` ancestors (perspective -> responsive
  // scale -> isometric rotate -> macropad base -> grid). Chromium's
  // hit-testing for pointer events becomes unreliable for elements that
  // deep once several overlapping 3D siblings are on screen - confirmed by
  // testing a fully flat (no transform of its own) proxy element in the same
  // spot, which failed identically. So the actual clickable surface is a
  // separate, flat overlay positioned OUTSIDE that 3D chain entirely, with
  // each hit-target's screen rect measured from its decorative counterpart -
  // looked up directly in the live DOM via data-skill-id (a plain callback
  // ref per key here was proven unreliable: it went stale for some keys
  // across the re-renders triggered by measure()'s own setRects call).
  const measure = useCallback(() => {
    const anchor = anchorRef.current;
    if (!anchor) return;
    const anchorRect = anchor.getBoundingClientRect();
    const next: Record<string, Rect> = {};
    for (const skill of skillsData) {
      const el = anchor.querySelector<HTMLElement>(`[data-skill-id="${skill.id}"]`);
      if (!el) continue;
      const r = el.getBoundingClientRect();
      // Each key's screen footprint is a rotated parallelogram; its
      // axis-aligned bounding box is measurably wider/taller than that
      // shape, so neighboring keys' boxes overlap even where their visible
      // faces don't. Shrinking around the same center keeps the hit zone
      // centered on the key while clearing that overlap.
      const SHRINK = 0.62;
      const width = r.width * SHRINK;
      const height = r.height * SHRINK;
      next[skill.id] = {
        left: r.left - anchorRect.left + (r.width - width) / 2,
        top: r.top - anchorRect.top + (r.height - height) / 2,
        width,
        height,
      };
    }
    setRects(next);
  }, []);

  useLayoutEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

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
    // This outer wrapper is the shared coordinate space for both the
    // decorative scene and the hit-target overlay below. It deliberately
    // carries NO `perspective`/`transform` of its own: an element inside a
    // `perspective` ancestor gets projected through that 3D camera for
    // *positioning* purposes even without any 3D transform of its own (found
    // by measuring an absolutely-positioned test node placed inside vs.
    // outside the perspective wrapper - same CSS, different rendered spot).
    // The overlay must live outside that wrapper entirely to render at the
    // plain 2D coordinates it's given.
    <div ref={anchorRef} className="relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onAnimationComplete={measure}
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

              {/* All 20 keys are flat siblings of a single 3D context (no
                  per-row wrapper divs), purely decorative - see the flat
                  hit-target overlay below for the actual interaction. */}
              <div className="relative grid grid-cols-5 gap-3.5" style={preserve3d}>
                {skillsData.map((skill, index) => {
                  const rowIndex = Math.floor(index / COLUMNS);
                  return (
                    <Keycap
                      key={skill.id}
                      skill={skill}
                      pressed={pressedId === skill.id}
                      hovered={hoveredId === skill.id}
                      depthBonus={rowIndex * 1.4}
                      marginLeft={rowIndex * ROW_STAGGER}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Flat hit-target overlay: each button's rect is measured from its
          decorative counterpart above, but the buttons themselves sit
          outside the perspective/3D scene entirely so they hit-test and
          position reliably. */}
      <div className="pointer-events-none absolute inset-0">
        {skillsData.map((skill) => {
          const rect = rects[skill.id];
          if (!rect) return null;
          return (
            <button
              key={skill.id}
              type="button"
              aria-label={skill.name}
              onPointerDown={() => press(skill.id)}
              onPointerUp={() => release(skill.id)}
              onPointerEnter={() => setHoveredId(skill.id)}
              onPointerLeave={() => {
                setHoveredId((current) => (current === skill.id ? null : current));
                release(skill.id);
              }}
              onPointerCancel={() => {
                setHoveredId((current) => (current === skill.id ? null : current));
                release(skill.id);
              }}
              onClick={(e) => {
                // Native <button> keyboard activation (Tab + Enter/Space)
                // fires a click but no pointer events at all, so it needs
                // its own press+release pulse. `detail === 0` is how a
                // keyboard-triggered click is told apart from a mouse one
                // (which already got its press/release from the pointer
                // handlers above and would otherwise double-fire here).
                if (e.detail !== 0) return;
                press(skill.id);
                window.setTimeout(() => release(skill.id), 120);
              }}
              className="pointer-events-auto absolute rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              style={{ left: rect.left, top: rect.top, width: rect.width, height: rect.height }}
            />
          );
        })}
      </div>
    </div>
  );
}
