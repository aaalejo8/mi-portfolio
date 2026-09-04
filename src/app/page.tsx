import PortfolioHero from "@/components/hero/portfolio-hero";
import AboutSection from "@/components/about/about-section";
import SkillsSection from "@/components/skills/skills-section";
import ProjectsSection from "@/components/projects/projects-section";
import ExperienceSection from "@/components/experience/experience-section";
import ContactSection from "@/components/contact/contact-section";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <PortfolioHero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
