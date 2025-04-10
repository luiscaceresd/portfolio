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
      className="h-full flex flex-col rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-800 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 no-underline"
    >
      {/* Image Container - Larger height */}
      <div className="w-full bg-gray-100 dark:bg-gray-700 flex-shrink-0">
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
      <div className="p-6 flex flex-col flex-grow border-t border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          {project.title}
        </h3>
        
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-3 mb-auto">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm font-medium rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-300"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-3 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard; 