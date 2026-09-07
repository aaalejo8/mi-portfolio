import AnimatedGradient from "@/components/ui/animated-gradient";
import HeroProfile from "@/components/hero/hero-profile";
import HeroContent from "@/components/hero/hero-content";
import ScrollCue from "@/components/hero/scroll-cue";

export default function PortfolioHero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <AnimatedGradient config={{ preset: "Prism", speed: 12 }} />
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-t from-background via-black/20 to-black/50" />

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <HeroProfile />
          <HeroContent />
        </div>
      </div>

      <ScrollCue />
    </section>
  );
}
