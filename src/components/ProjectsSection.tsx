import React, { useState, useEffect } from "react";
import FullScreenSection from "./FullScreenSection";
import ProjectsGrid from "./projects/ProjectsGrid";
import ProjectsHeader from "./projects/ProjectsHeader";
import ProjectsLoading from "./projects/ProjectsLoading";
import { projects } from "../data/projectsData";

// Define the project type
export type Project = {
  title: string;
  description: string;
  getImageSrc: () => string;
  url: string;
  tags: string[];
};

const ProjectsSection = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Preload all images to avoid layout shifts
    const imagePromises = projects.map((project) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = project.getImageSrc();
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.allSettled(imagePromises).then(() => {
      setImagesLoaded(true);
    });
  }, []);

  return (
    <section id="projects">
      <FullScreenSection
        isDarkBackground={false}
        className="py-16 flex flex-col items-start space-y-8"
      >
        <div className="w-full flex flex-col items-center space-y-8">
          <ProjectsHeader />
          {imagesLoaded ? (
            <ProjectsGrid projects={projects} />
          ) : (
            <ProjectsLoading />
          )}
        </div>
      </FullScreenSection>
    </section>
  );
};

export default ProjectsSection;
