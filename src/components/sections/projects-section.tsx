import { projects } from "@/data/projects";
import ProjectCard from "@/components/shared/project-card";

export default function ProjectsSection() {
  return (
    <section id="projects">
      <h2 className="text-blue-600 text-3xl text-center font-bold mb-4 pt-20">
        Projects
      </h2>
      <div className="py-12 flex flex-wrap gap-8 justify-center">
        {projects &&
          projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
      </div>
    </section>
  );
}
