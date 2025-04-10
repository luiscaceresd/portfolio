import React from 'react';
import { Check } from 'lucide-react';
import './SkillsBanner.css';
import { useTheme } from './theme-provider';

const SkillsBanner: React.FC = () => {
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  // Tech stack: programming languages and frameworks
  const techStack = [
    'TYPESCRIPT', 'GO', 'C#', 'PYTHON', 'BASH', 'SOLIDITY', 
    'NEXT.JS', 'REACT', 'FLUTTER', 'VUE.JS', 'UNITY', 'THREE.JS',
    'TAILWIND CSS', 'SUPABASE', 'DOCKER', 'KUBERNETES'
  ];

  // Other professional skills
  const otherSkills = [
    'GIT', 'CI/CD', 'RESTFUL APIS', 'JEST', 'GOOGLE ANALYTICS', 
    'GOOGLE TAG MANAGER', 'LINUX', 'CYBERSECURITY', 'FIGMA',
    'ENGLISH C1', 'SPANISH (NATIVE)', 'FRENCH (BASIC)'
  ];

  // Create infinite arrays for scrolling
  const createInfiniteArray = (arr: string[]) => {
    return [...arr, ...arr, ...arr]; // Repeat 3 times for seamless scrolling
  };

  const infiniteTechStack = createInfiniteArray(techStack);
  const infiniteOtherSkills = createInfiniteArray(otherSkills);

  return (
    <div className={`skills-container py-8 w-full ${isDarkTheme ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Separator with label */}
      <div className="flex justify-center mb-6">
        <div className="px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-medium">
          Technical Skills
        </div>
      </div>

      {/* Tech stack track */}
      <div className="skills-track positive-track flex mb-6">
        {infiniteTechStack.map((skill, index) => (
          <React.Fragment key={`${skill}-${index}`}>
            {index > 0 && index % 1 === 0 && (
              <span className="mx-3 text-blue-400 flex items-center">•</span>
            )}
            <div className={`skill-item flex items-center px-3 py-1 rounded-full ${
              isDarkTheme 
                ? 'bg-blue-900/30 text-blue-200' 
                : 'bg-blue-50 text-blue-700'
            }`}>
              <Check size={14} className={`mr-1 ${isDarkTheme ? 'text-blue-400' : 'text-blue-500'}`} />
              <span className="font-medium">{skill}</span>
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Separator with label */}
      <div className="flex justify-center mb-6 mt-8">
        <div className="px-4 py-1 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-sm font-medium">
          Professional Skills
        </div>
      </div>

      {/* Other skills track */}
      <div className="skills-track negative-track flex">
        {infiniteOtherSkills.map((skill, index) => (
          <React.Fragment key={`${skill}-${index}`}>
            {index > 0 && index % 1 === 0 && (
              <span className="mx-3 text-purple-400 flex items-center">•</span>
            )}
            <div className={`skill-item flex items-center px-3 py-1 rounded-full ${
              isDarkTheme 
                ? 'bg-purple-900/30 text-purple-200' 
                : 'bg-purple-50 text-purple-700'
            }`}>
              <Check size={14} className={`mr-1 ${isDarkTheme ? 'text-purple-400' : 'text-purple-500'}`} />
              <span className="font-medium">{skill}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SkillsBanner; 