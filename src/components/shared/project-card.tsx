import Image from "next/image";
import { Project } from "@/types/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="group cursor-pointer transform transition-all duration-500"
    >
      <div className="text-white rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-2xl duration-700 z-10 relative backdrop-blur-xl hover:border-white/25 overflow-hidden hover:shadow-white/5 hover:shadow-3xl max-w-[380px] h-[380px] flex flex-col justify-between">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
          <div
            style={{ animationDelay: "0.5s" }}
            className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-white/10 to-transparent blur-3xl opacity-30 group-hover:opacity-50 transform group-hover:scale-110 transition-all duration-700 animate-bounce"
          ></div>
          <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-white/5 blur-xl animate-ping"></div>
          <div
            style={{ animationDelay: "1s" }}
            className="absolute bottom-16 right-16 w-12 h-12 rounded-full bg-white/5 blur-lg animate-ping"
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
        </div>

        {/* Content */}
        <div className="p-8 relative z-10 flex flex-col h-full justify-between">
          <div className="flex flex-col items-center text-center">
            {/* Image */}
            <div className="relative mb-6">
              <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping"></div>
              <div
                style={{ animationDelay: "0.5s" }}
                className="absolute inset-0 rounded-full border border-white/10 animate-pulse"
              ></div>

              <div className="p-6 rounded-full backdrop-blur-lg border border-white/20 bg-gradient-to-br from-black/80 to-black/60 shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 hover:shadow-white/20">
                <div className="transform group-hover:rotate-360 transition-transform duration-700">
                  <Image
                    src={project.icon}
                    alt={project.title}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="mb-4 transform group-hover:scale-105 transition-transform duration-300">
              <p className="text-2xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent animate-pulse">
                {project.title}
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300 overflow-hidden">
              {project.description}
            </p>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 justify-center mt-auto">
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs rounded bg-gray-800 text-gray-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Corner glow */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-white/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </a>
  );
}
