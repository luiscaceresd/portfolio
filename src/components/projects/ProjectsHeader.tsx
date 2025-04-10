import React from "react";

const ProjectsHeader = () => {
  return (
    <div className="flex flex-col items-center mb-14 text-center space-y-5">
      <div className="relative pb-8">
        <h2 
          className="!text-4xl sm:!text-5xl md:!text-6xl font-bold tracking-tight bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent dark:from-orange-400 dark:via-amber-300 dark:to-yellow-200 pb-3 !leading-normal"
        >
          Featured Projects
        </h2>
        <div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[60px] h-1 bg-blue-500 dark:bg-orange-400 rounded-full"
        />
      </div>
      <p 
        className="text-xl max-w-[800px] text-gray-600 dark:text-gray-200 leading-relaxed"
      >
        Explore some of my recent work across web development, blockchain, and machine learning technologies.
      </p>
    </div>
  );
};

export default ProjectsHeader; 