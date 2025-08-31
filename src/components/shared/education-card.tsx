"use client";

import { IoBriefcaseOutline } from "react-icons/io5";
import { Education } from "@/types/education";

export default function EducationCard({ education }: { education: Education }) {
  return (
    <div className="relative flex gap-4 pl-6">
      <div className="absolute -left-[40px] flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full text-gray-300">
        <IoBriefcaseOutline className="w-7 h-7" />
      </div>

      <div>
        <h3 className="text-xl font-bold text-white mb-4">
          {education.university}
        </h3>
        <h4 className="text-lg font-semibold text-purple-400">
          {education.degree}
        </h4>
        <p className="font-semibold text-white mb-4">{education.title}</p>
        <p className="text-blue-600 font-medium mb-4">{education.duration}</p>
      </div>
    </div>
  );
}
