"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, type PanInfo } from "framer-motion";
import { useLanguage } from "@/i18n/language-provider";
import ProjectCardFeatured from "@/components/projects/project-card-featured";

interface CarouselItem {
  title: string;
  description: string;
  tags: readonly string[];
  image: string;
  alt: string;
  url?: string;
  repoUrl?: string;
}

const DRAG_DISTANCE_THRESHOLD = 60;
const DRAG_VELOCITY_THRESHOLD = 450;
const SPRING = { type: "spring", stiffness: 300, damping: 32, mass: 0.9 } as const;

/** Shortest signed distance from `index` to `active` on a ring of size `count`. */
function circularDelta(index: number, active: number, count: number) {
  const raw = index - active;
  const half = count / 2;
  return ((raw + half + count) % count) - half;
}

function slideStyle(delta: number, isMobile: boolean, reduceMotion: boolean) {
  const abs = Math.abs(delta);
  const dir = Math.sign(delta);

  if (reduceMotion) {
    return {
      x: `${delta * 100}%`,
      rotateY: 0,
      scale: abs === 0 ? 1 : 0.92,
      opacity: abs === 0 ? 1 : 0,
      zIndex: 20 - abs,
    };
  }

  const xPercent = isMobile ? delta * 78 : delta * 60;
  const rotateY = isMobile ? dir * -10 : dir * -32;
  const scale = abs === 0 ? 1 : abs === 1 ? (isMobile ? 0.9 : 0.86) : 0.74;
  const opacity = abs === 0 ? 1 : abs === 1 ? (isMobile ? 0.55 : 0.45) : 0;
  const z = abs === 0 ? 0 : -160;

  return {
    x: `${xPercent}%`,
    rotateY,
    scale,
    opacity,
    z,
    zIndex: 50 - abs * 10,
  };
}

export default function ProjectsCarousel({ items }: { items: CarouselItem[] }) {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const reduceMotion = useReducedMotion();
  const count = items.length;
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 640px)");
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  const paginate = useCallback(
    (dir: 1 | -1) => {
      setActiveIndex((prev) => ((prev + dir) % count + count) % count);
    },
    [count]
  );

  const goTo = useCallback((index: number) => setActiveIndex(index), []);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const { offset, velocity } = info;
    if (offset.x < -DRAG_DISTANCE_THRESHOLD || velocity.x < -DRAG_VELOCITY_THRESHOLD) {
      paginate(1);
    } else if (offset.x > DRAG_DISTANCE_THRESHOLD || velocity.x > DRAG_VELOCITY_THRESHOLD) {
      paginate(-1);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      paginate(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      paginate(1);
    }
  };

  return (
    <div className="relative">
      <div
        ref={stageRef}
        role="region"
        aria-roledescription="carousel"
        aria-label={t.projects.title}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="relative overflow-hidden py-4 outline-none focus-visible:ring-2 focus-visible:ring-accent/50 sm:py-6"
        style={{ perspective: isMobile ? undefined : 1400 }}
      >
        <motion.div
          className="mx-auto grid max-w-sm cursor-grab grid-cols-1 grid-rows-1 active:cursor-grabbing sm:max-w-md lg:max-w-lg"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.6}
          dragTransition={{ bounceStiffness: 400, bounceDamping: 32 }}
          whileTap={{ cursor: "grabbing" }}
          onDragEnd={handleDragEnd}
        >
          {items.map((item, index) => {
            const delta = circularDelta(index, activeIndex, count);
            const isActive = delta === 0;
            const style = slideStyle(delta, isMobile, Boolean(reduceMotion));

            return (
              <motion.div
                key={item.title}
                className="col-start-1 row-start-1"
                style={{ transformStyle: "preserve-3d" }}
                animate={style}
                transition={reduceMotion ? { duration: 0.2 } : SPRING}
              >
                <div inert={!isActive} aria-hidden={!isActive}>
                  <ProjectCardFeatured {...item} index={index} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <button
          type="button"
          onClick={() => paginate(-1)}
          aria-label={t.projects.carouselPrev}
          className="absolute left-2 top-1/2 z-50 hidden -translate-y-1/2 rounded-full border border-white/10 bg-background/60 p-2.5 text-white/60 backdrop-blur-sm transition-all duration-200 hover:border-accent/40 hover:text-accent active:scale-90 sm:flex"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M10 3L5 8l5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => paginate(1)}
          aria-label={t.projects.carouselNext}
          className="absolute right-2 top-1/2 z-50 hidden -translate-y-1/2 rounded-full border border-white/10 bg-background/60 p-2.5 text-white/60 backdrop-blur-sm transition-all duration-200 hover:border-accent/40 hover:text-accent active:scale-90 sm:flex"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M6 3l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {items.map((item, index) => (
          <button
            key={item.title}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`${t.projects.carouselGoTo} ${index + 1}`}
            aria-current={index === activeIndex}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === activeIndex ? "w-6 bg-accent" : "w-1.5 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
