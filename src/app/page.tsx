"use client";

import { useEffect } from "react";
import AboutSection from "@/components/sections/about-section";
import ContactSection from "@/components/sections/contact-section";
import ExperienceSection from "@/components/sections/experience-section";
import HeroSection from "@/components/sections/hero-section";
import ProjectsSection from "@/components/sections/projects-section";

export default function Home() {
  useEffect(() => {
    console.log(
      "%cHey there! 👀\nWhat are you doing here?",
      "color: #2563EB; font-size: 20px; font-weight: bold;"
    );
  }, []);

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
