import React from "react";
import Navbar from "@/components/navigation/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import CuriositySection from "@/components/sections/CuriositySection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <div className="relative min-h-screen selection:bg-[var(--accent-orange)] selection:text-white">
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <CuriositySection />
        <ContactSection />
      </main>
    </div>
  );
}
