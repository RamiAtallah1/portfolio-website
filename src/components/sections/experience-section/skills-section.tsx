import { skills } from "@/data/skills";
import SkillsCard from "@/components/shared/skill-card";

export default function Skills() {
  return (
    <section id="skills" className="pt-20 pr-4">
      <h2 className="text-blue-600 text-3xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-12 mt-8">
        {skills.map((skill, idx) => (
          <SkillsCard key={idx} skill={skill} />
        ))}
      </div>
    </section>
  );
}
