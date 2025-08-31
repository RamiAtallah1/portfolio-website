import Image from "next/image";
import { Skill } from "@/types/skill";

export default function SkillsCard({ skill }: { skill: Skill }) {
  return (
    <div className="flex flex-col items-center group" title={skill.name}>
      <div className="w-12 h-12 md:w-14 md:h-14 relative">
        <Image
          src={skill.icon}
          alt={skill.name}
          fill
          className="object-contain"
        />
      </div>
      <span className="text-gray-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition">
        {skill.name}
      </span>
    </div>
  );
}
