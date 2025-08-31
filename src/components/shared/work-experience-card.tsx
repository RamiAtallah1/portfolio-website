"use client";

import { IoBriefcaseOutline } from "react-icons/io5";
import { Work } from "@/types/work";

export default function WorkExperienceCard({ work }: { work: Work }) {
  return (
    <div className="relative flex gap-4 pl-6">
      <div className="absolute -left-[40px] flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full text-gray-300">
        <IoBriefcaseOutline className="w-7 h-7" />
      </div>

      <div>
        <h3 className="text-xl font-bold text-white">{work.jobTitle}</h3>
        <p className="text-purple-400 font-semibold">{work.company}</p>
        <p className="text-blue-600 font-medium mb-4">{work.duration}</p>

        <ul className="list-disc list-inside space-y-2 text-gray-300">
          {work?.responsibilities?.map((responsibility, idx) => (
            <li key={idx}>{responsibility}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
