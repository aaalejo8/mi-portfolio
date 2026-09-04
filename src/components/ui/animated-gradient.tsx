"use client";

import { useEffect, useState } from "react";
import { Warp, type WarpParams } from "@paper-design/shaders-react";

/**
 * Preset library for AnimatedGradient. Each preset maps to the underlying
 * Warp shader (@paper-design/shaders) params. "Prism" is our own preset,
 * tuned as a dark/blue procedural background for the Hero.
 */
const presets = {
  Prism: {
    colors: ["#050505", "#050505", "#66B3FF", "#FFFFFF"],
    rotation: -50,
    proportion: 0.35,
    scale: 1,
    speed: 30,
    distortion: 0.15,
    swirl: 0.35,
    swirlIterations: 10,
    softness: 0.6,
    shape: "checks",
    shapeScale: 0.3,
  } satisfies WarpParams,
} as const;

type PresetName = keyof typeof presets;

interface AnimatedGradientConfig extends Partial<WarpParams> {
  preset: PresetName;
}

interface AnimatedGradientProps {
  config: AnimatedGradientConfig;
  className?: string;
}

export default function AnimatedGradient({ config, className }: AnimatedGradientProps) {
  const { preset, ...overrides } = config;
  const base = presets[preset];
  // Starts false to match the server-rendered markup; the real value is only
  // known client-side, so it's read after mount to avoid a hydration mismatch.
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const listener = (event: MediaQueryListEvent) => setReducedMotion(event.matches);
    query.addEventListener("change", listener);
    return () => query.removeEventListener("change", listener);
  }, []);

  const params: WarpParams = {
    ...base,
    ...overrides,
    speed: reducedMotion ? 0 : (overrides.speed ?? base.speed),
  };

  return (
    <div className={`pointer-events-none absolute inset-0 -z-10 ${className ?? ""}`}>
      <Warp style={{ width: "100%", height: "100%" }} {...params} />
    </div>
  );
}
