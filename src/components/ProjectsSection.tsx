import ProjectsGrid from "./projects/ProjectsGrid";
import ProjectsHeader from "./projects/ProjectsHeader";
import { projects } from "../data/projectsData";
import type { Project } from "../data/projectsData";

export type { Project };

const ProjectsSection = () => {
  return (
    <section id="projects" className="scroll-mt-24 bg-white py-20 text-slate-950 dark:bg-slate-950 dark:text-white md:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="flex w-full flex-col gap-10">
          <ProjectsHeader />
          <ProjectsGrid projects={projects} />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
