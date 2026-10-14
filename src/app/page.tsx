import { BackgroundGlow } from "@/components/ui/BackgroundGlow";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070709] text-white selection:bg-purple-600/30 selection:text-white relative">
      {/* Restrained Ambient Glow & Grid Backdrop */}
      <BackgroundGlow />

      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex flex-col">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
