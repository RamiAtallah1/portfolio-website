import { works } from "@/data/works";
import WorkExperienceCard from "@/components/shared/work-experience-card";

export default function WorkExperienceSection() {
  return (
    <section id="work-experience" className="pt-20">
      <h2 className="text-blue-600 text-3xl font-bold mb-4">Work Experience</h2>
      {works &&
        works.map((work, index) => (
          <div className="mt-8" key={index}>
            <WorkExperienceCard work={work} />
            {index < works.length - 1 && (
              <hr className="my-2 border-gray-600" />
            )}
          </div>
        ))}
    </section>
  );
}
