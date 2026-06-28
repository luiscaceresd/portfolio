import ProjectCard from "./ProjectCard";
import { Project } from "../../components/ProjectsSection";

interface ProjectsGridProps {
  projects: Project[];
}

const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.domain}
            project={project}
            featured={index === 0}
          />
        ))}
    </div>
  );
};

export default ProjectsGrid; 
