import React, { useState } from "react";
import { FiImage } from "react-icons/fi";

// Define Project type based on ProjectsSection
interface Project {
  title: string;
  description: string;
  getImageSrc: () => string;
  url: string;
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  return (
    <a 
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="h-full flex flex-col rounded-lg overflow-hidden bg-white dark:bg-gray-800/80 hover:-translate-y-1 transition-all duration-300 no-underline
      border border-gray-200 hover:border-gray-300 shadow-md hover:shadow-xl
      dark:border-gray-700/60 dark:hover:border-blue-500/30 
      dark:shadow-[0_4px_20px_-2px_rgba(66,99,235,0.12)] 
      dark:hover:shadow-[0_8px_30px_rgba(66,99,235,0.18)]"
    >
      {/* Image Container - Larger height */}
      <div className="w-full bg-gray-100 dark:bg-gray-800 flex-shrink-0">
        {imageError ? (
          <div className="flex flex-col items-center justify-center h-60 w-full text-gray-500 dark:text-gray-400">
            <FiImage className="w-16 h-16" />
            <span className="text-base mt-2">Image not available</span>
          </div>
        ) : (
          <div className="relative">
            <img
              src={project.getImageSrc()}
              alt={project.title}
              className="w-full object-contain max-h-[300px] py-4 transition-transform duration-500 ease-in-out hover:scale-105"
              onLoad={() => setImageLoaded(true)}
              onError={() => {
                console.error(`Failed to load image for project: ${project.title}`);
                setImageError(true);
                setImageLoaded(true);
              }}
              style={{ display: imageLoaded ? 'block' : 'none' }}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 h-60 animate-pulse bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-700" />
            )}
          </div>
        )}
      </div>
      
      {/* Content Container - Larger text and padding */}
      <div className="p-6 flex flex-col flex-grow border-t border-gray-200 dark:border-t-gray-700/40">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          {project.title}
        </h3>
        
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-3 mb-auto">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm font-medium rounded-full bg-blue-50 text-blue-600 
              dark:bg-blue-900/30 dark:text-blue-300 dark:border dark:border-blue-700/30"
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