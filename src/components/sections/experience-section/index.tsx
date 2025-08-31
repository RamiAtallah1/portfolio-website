"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import EducationSection from "./education-section";
import SkillsSection from "./skills-section";
import WorkExperienceSection from "./work-experience-section";

const sections = [
  { id: "work-experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
];

export default function ExperienceSection() {
  const activeSection = useActiveSection(
    sections.map((section) => section.id),
    {
      behavior: "sidebar",
    }
  );

  return (
    <div
      id="experience"
      className="flex md:flex-row flex-col w-full max-w-6xl mx-auto pt-20"
    >
      {/* Left Sidebar */}
      <div className="hidden md:block w-1/4 md:sticky static top-20 h-fit pl-12 mb-4">
        <ul className="space-y-4">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`block text-lg font-medium transition-colors ${
                  activeSection === section.id
                    ? "text-blue-600 font-bold"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Content */}
      <div className="w-3/4 pl-12">
        <WorkExperienceSection />
        <EducationSection />
        <SkillsSection />
      </div>
    </div>
  );
}
