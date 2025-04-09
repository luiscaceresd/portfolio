import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { ModeToggle } from "./mode-toggle";

interface SocialLink {
  icon: IconProp;
  url: string;
}

const socials: SocialLink[] = [
  {
    icon: faEnvelope as IconProp,
    url: "mailto: luisdeveloper97@outlook.com",
  },
  {
    icon: faGithub as IconProp,
    url: "https://github.com/luiscaceresd",
  },
  {
    icon: faLinkedin as IconProp,
    url: "https://www.linkedin.com/in/luiscaceresd/",
  }
];

// React 19 uses function declaration syntax by default
function Header() {
  // Use the new explicit anchor ID format
  const handleClick = (anchor: string) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-slate-950 z-10 border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
      <div className="w-full max-w-[95%] mx-auto px-1 py-1 md:px-10 md:py-2 text-slate-800 dark:text-slate-200">
        <div className="flex justify-between items-center">
          <nav>
            <div className="flex space-x-1 md:space-x-6">
              {socials.map(({ icon, url }) => (
                <a 
                  key={url} 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-1 md:p-2 hover:text-teal-500 hover:scale-105 transition-all duration-300"
                >
                  <FontAwesomeIcon icon={icon} size={(window.innerWidth < 768 ? 'lg' : 'xl') as SizeProp} />
                </a>
              ))}
            </div>
          </nav>

          <div className="flex items-center space-x-3 md:space-x-6">
            <nav>
              <div className="flex space-x-3 md:space-x-6">
                <a 
                  href="#projects" 
                  onClick={handleClick('projects')}
                  className="text-md md:text-xl hover:text-teal-500 hover:scale-105 transition-all duration-300 whitespace-nowrap"
                >
                  Projects
                </a>
                <a 
                  href="#contact-me" 
                  onClick={handleClick('contactme')}
                  className="text-md md:text-xl hover:text-teal-500 hover:scale-105 transition-all duration-300 whitespace-nowrap"
                >
                  Contact
                </a>
              </div>
            </nav>
            <div>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;