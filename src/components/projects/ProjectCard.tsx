import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../data/projectsData";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const getScreenshotSrc = (url: string) =>
  `https://image.thum.io/get/width/1200/crop/760/noanimate/${url}`;

const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
  return (
    <a 
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white text-left no-underline shadow-[0_24px_80px_-58px_rgba(15,23,42,0.5)] transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 dark:border-white/10 dark:bg-white/[0.035] dark:shadow-black/30 ${
        featured ? "md:col-span-6 lg:grid lg:grid-cols-[1.1fr_0.9fr]" : "md:col-span-3 lg:col-span-3 xl:col-span-3"
      }`}
    >
      <div className={`relative overflow-hidden bg-slate-100 dark:bg-slate-900 ${featured ? "min-h-[300px] lg:min-h-full" : "aspect-[16/10]"}`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-20`} />
        {(project.previewImage || project.title !== "Millennium Marine") && (
          <img
            src={project.previewImage ?? getScreenshotSrc(project.url)}
            alt={`${project.title} website screenshot`}
            loading="lazy"
            className="absolute inset-0 h-full w-full bg-white object-cover object-top transition duration-500 group-hover:scale-[1.025]"
          />
        )}
        {project.title === "Millennium Marine" && !project.previewImage && (
          <div className="absolute inset-x-5 bottom-5 top-10 flex flex-col justify-between rounded-md border border-white/35 bg-white/92 p-5 text-slate-950 shadow-2xl">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
              <span>{project.domain}</span>
              <span>boat builder</span>
            </div>
            <div>
              <div className="h-20 rounded-md bg-gradient-to-r from-cyan-200 via-blue-300 to-slate-700" />
              <div className="mt-5 h-3 w-2/3 rounded bg-slate-900" />
              <div className="mt-3 h-2 w-full rounded bg-slate-200" />
              <div className="mt-2 h-2 w-4/5 rounded bg-slate-200" />
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-blue-700 dark:text-blue-300">{project.role}</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
              {project.title}
            </h3>
          </div>
          <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-950 transition group-hover:border-blue-500 group-hover:bg-blue-600 group-hover:text-white dark:border-white/10 dark:text-white">
            <ArrowUpRight className="size-5" />
          </span>
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
          {project.description}
        </p>

        <div className="mt-5 grid gap-2 text-sm text-slate-700 dark:text-slate-200 sm:grid-cols-3">
          {project.highlights.map((highlight) => (
            <span key={highlight} className="rounded-md bg-slate-100 px-3 py-2 dark:bg-white/6">
              {highlight}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard; 
