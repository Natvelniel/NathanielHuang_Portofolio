import Navbar from "@/components/navigation/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";
import { personalInfo } from "@/content/personal";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <footer className="border-t border-rule bg-base transition-colors duration-250 ease-editorial">
        <div className="mx-auto flex max-w-page flex-col items-start justify-between gap-4 px-5 py-10 sm:flex-row sm:items-center sm:px-8">
          <div className="flex items-center gap-3">
            <span className="inline-block h-2 w-2 bg-accent" aria-hidden="true" />
            <p className="meta-label text-primary">
              The Curious Builder — {personalInfo.name}
            </p>
          </div>
          <p className="meta-label">
            © {new Date().getFullYear()} · {personalInfo.tagline}
          </p>
        </div>
      </footer>
    </>
  );
}
