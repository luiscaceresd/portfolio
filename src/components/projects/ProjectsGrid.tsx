import React from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "../../components/ProjectsSection";

interface ProjectsGridProps {
  projects: Project[];
}

const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  return (
    <div className="w-full max-w-[1400px] px-4 md:px-8">
      <div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full auto-rows-fr"
      >
        {projects.map((project, index) => (
          <div key={index} className="h-full">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsGrid; 