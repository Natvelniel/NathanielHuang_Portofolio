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
      <footer className="on-dark bg-charcoal text-ivory">
        <div className="mx-auto max-w-page border-t border-[#3A3F3C] px-5 py-8 sm:px-8">
          <p className="label">
            © {new Date().getFullYear()} {personalInfo.name}
          </p>
        </div>
      </footer>
    </>
  );
}
