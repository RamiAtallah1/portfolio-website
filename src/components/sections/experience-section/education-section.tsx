import { educations } from "@/data/educations";
import EducationCard from "@/components/shared/education-card";

export default function EducationSection() {
  return (
    <section id="education" className="pt-20">
      <h2 className="text-blue-600 text-3xl font-bold mb-4">Education</h2>
      {educations &&
        educations.map((education, index) => (
          <div className="mt-8" key={index}>
            <EducationCard education={education} />
            {index < educations.length - 1 && (
              <hr className="my-2 border-gray-600" />
            )}
          </div>
        ))}
    </section>
  );
}
