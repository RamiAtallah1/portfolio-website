import { skills } from "@/data/skills";
import SkillsCard from "@/components/shared/skill-card";

export default function Skills() {
  return (
    <section id="skills" className="pt-20 lg:pr-12">
      <h2 className="text-blue-600 text-3xl font-bold mb-4">Skills</h2>
      <div className="mt-8 flex flex-wrap justify-center gap-8 lg:grid lg:grid-cols-8 lg:gap-12">
        {skills.map((skill, idx) => (
          <SkillsCard key={idx} skill={skill} />
        ))}
      </div>
    </section>
  );
}
