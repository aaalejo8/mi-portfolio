import type { MotionProps } from "framer-motion";

/**
 * Shared "press" feedback for every clickable element: a slight scale-down
 * on hover/click, simulating a physical key sinking. One timing/easing pair
 * used everywhere so it reads as a single interaction language across the
 * site, tying the rest of the pages back to the macropad. Pair the element's
 * className with `press-shadow` (globals.css) for the matching shadow shrink.
 */
export const press: Pick<MotionProps, "whileHover" | "whileTap" | "transition"> = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.96 },
  transition: { duration: 0.15, ease: "easeOut" },
};
