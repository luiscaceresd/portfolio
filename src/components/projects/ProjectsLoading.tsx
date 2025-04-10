import React from 'react';

const ProjectsLoading = () => {
  // Create an array of 4 items to represent loading projects
  const loadingItems = Array(4).fill(0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      {loadingItems.map((_, index) => (
        <div 
          key={index}
          className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
        >
          <div className="h-[200px] bg-gray-200 dark:bg-gray-700 animate-pulse" />
          <div className="p-5">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse mt-2" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse mt-4" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 animate-pulse mt-2" />
            <div className="flex justify-end mt-4">
              <div className="h-[30px] w-[120px] bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsLoading; 