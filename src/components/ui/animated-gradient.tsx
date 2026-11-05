"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";
import type { WarpParams } from "@paper-design/shaders-react";

// The WebGL shader is purely decorative and draws nothing on the server, so
// it's split out of the main bundle and loaded client-side only. The section
// keeps its dark background while the chunk loads.
const Warp = dynamic(() => import("@/components/ui/warp-shader").then((mod) => mod.Warp), {
  ssr: false,
});

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
  // Framer's hook subscribes to the prefers-reduced-motion media query
  // (and follows changes live), replacing a hand-rolled effect.
  const reducedMotion = useReducedMotion();

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
