import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
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
  label: string;
}

const socials: SocialLink[] = [
  {
    icon: faEnvelope as IconProp,
    url: "mailto: luisdeveloper97@outlook.com",
    label: "Email"
  },
  {
    icon: faGithub as IconProp,
    url: "https://github.com/luiscaceresd",
    label: "GitHub"
  },
  {
    icon: faLinkedin as IconProp,
    url: "https://www.linkedin.com/in/luiscaceresd/",
    label: "LinkedIn"
  }
];

// Add TypeScript interface for the visible section object
interface VisibleSection {
  id: string;
  visiblePercent: number;
  priority: number;
}

function Header() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  // Handle scrolling and determine active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollingDown = scrollPosition > lastScrollY.current;
      lastScrollY.current = scrollPosition;
      
      // Add shadow after scrolling down
      if (scrollPosition > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update active section based on scroll position with improved detection
      const sections = ['projects', 'demoreel', 'contactme'];
      
      // Find all visible sections
      const visibleSections: VisibleSection[] = sections
        .map(section => {
          const element = document.getElementById(`${section}`);
          if (!element) return null;
          
          const rect = element.getBoundingClientRect();
          // Calculate how much of the section is in the viewport (as a percentage of viewport height)
          const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
          const visiblePercent = visibleHeight > 0 ? visibleHeight / window.innerHeight : 0;
          
          return {
            id: section,
            visiblePercent,
            // For ties, prioritize based on scroll direction
            priority: scrollingDown ? -rect.top : rect.bottom
          };
        })
        .filter((section): section is VisibleSection => section !== null);
      
      // Sort by visibility percentage first, then by priority
      visibleSections.sort((a, b) => {
        if (b.visiblePercent !== a.visiblePercent) {
          return b.visiblePercent - a.visiblePercent;
        }
        return b.priority - a.priority;
      });
      
      // Set the most visible section as active
      if (visibleSections.length > 0 && visibleSections[0].visiblePercent > 0.2) {
        setActiveSection(visibleSections[0].id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section with easing
  const handleClick = (anchor: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(anchor);
    
    if (element) {
      const headerOffset = 80; // Header height plus some padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      // Use smooth scrolling with easing
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setActiveSection(anchor);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 backdrop-blur-md z-10 transition-all duration-300
                      ${scrolled 
                          ? 'bg-white/90 dark:bg-gradient-to-b dark:from-slate-900/95 dark:to-slate-950/90 dark:border-b dark:border-blue-900/30 shadow-md dark:shadow-blue-900/10' 
                          : 'bg-white/70 dark:bg-gradient-to-r dark:from-slate-950/90 dark:via-slate-900/90 dark:to-slate-900/85'}`}>
      <div className="w-full max-w-7xl mx-auto px-4 py-3 md:px-8 md:py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="font-bold text-xl text-blue-600 dark:text-blue-400 dark:drop-shadow-[0_0_5px_rgba(59,130,246,0.4)] mr-8">LC</span>
            <nav className="hidden md:block">
              <div className="flex space-x-8">
                <a 
                  href="#projects" 
                  onClick={handleClick('projects')}
                  className={`relative py-1 text-base font-medium transition-colors duration-300
                            hover:text-blue-600 dark:hover:text-blue-300 dark:hover:drop-shadow-[0_0_2px_rgba(59,130,246,0.4)]
                            ${activeSection === 'projects' 
                                ? 'text-blue-600 dark:text-blue-300 dark:drop-shadow-[0_0_2px_rgba(59,130,246,0.4)]' 
                                : 'text-slate-700 dark:!text-white'}`}
                >
                  Projects
                  {activeSection === 'projects' && (
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-600 dark:bg-blue-400 dark:shadow-[0_0_3px_rgba(59,130,246,0.6)] rounded-full"></span>
                  )}
                </a>
                <a 
                  href="#demoreel" 
                  onClick={handleClick('demoreel')}
                  className={`relative py-1 text-base font-medium transition-colors duration-300
                            hover:text-blue-600 dark:hover:text-blue-300 dark:hover:drop-shadow-[0_0_2px_rgba(59,130,246,0.4)]
                            ${activeSection === 'demoreel' 
                                ? 'text-blue-600 dark:text-blue-300 dark:drop-shadow-[0_0_2px_rgba(59,130,246,0.4)]' 
                                : 'text-slate-700 dark:!text-white'}`}
                >
                  Demo Reel
                  {activeSection === 'demoreel' && (
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-600 dark:bg-blue-400 dark:shadow-[0_0_3px_rgba(59,130,246,0.6)] rounded-full"></span>
                  )}
                </a>
                <a 
                  href="#contactme" 
                  onClick={handleClick('contactme')}
                  className={`relative py-1 text-base font-medium transition-colors duration-300
                            hover:text-blue-600 dark:hover:text-blue-300 dark:hover:drop-shadow-[0_0_2px_rgba(59,130,246,0.4)]
                            ${activeSection === 'contactme' 
                                ? 'text-blue-600 dark:text-blue-300 dark:drop-shadow-[0_0_2px_rgba(59,130,246,0.4)]' 
                                : 'text-slate-700 dark:!text-white'}`}
                >
                  Contact
                  {activeSection === 'contactme' && (
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-600 dark:bg-blue-400 dark:shadow-[0_0_3px_rgba(59,130,246,0.6)] rounded-full"></span>
                  )}
                </a>
                <a 
                  href="/resume.pdf"
                  download="Luis_Caceres_Resume.pdf"
                  className="relative py-1 px-3 text-base font-medium transition-all duration-300
                         flex items-center gap-2 rounded-full 
                         bg-blue-600/10 dark:bg-blue-500/20
                         text-blue-600 dark:text-blue-300 
                         dark:drop-shadow-[0_0_2px_rgba(59,130,246,0.4)]
                         hover:bg-blue-600/20 dark:hover:bg-blue-500/30"
                >
                  <FontAwesomeIcon icon={faFileArrowDown} className="text-sm" />
                  Resume
                </a>
              </div>
            </nav>
          </div>

          <div className="flex items-center space-x-6">
            <nav>
              <div className="flex space-x-4">
                {socials.map(({ icon, url, label }) => (
                  <a 
                    key={url} 
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800/70 
                              text-slate-700 dark:!text-white 
                              hover:text-blue-600 dark:hover:text-blue-400 dark:hover:drop-shadow-[0_0_2px_rgba(59,130,246,0.4)]
                              transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={icon} size="lg" className="dark:!text-white" />
                  </a>
                ))}
              </div>
            </nav>
            <div className="border-l border-slate-200 dark:border-slate-700/60 h-6 mx-1"></div>
            <ModeToggle />
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <nav className="md:hidden mt-3 pb-1 border-t border-slate-200 dark:border-slate-700/60">
          <div className="flex justify-center space-x-8 pt-2">
            <a 
              href="#projects" 
              onClick={handleClick('projects')}
              className={`relative py-1 text-sm font-medium transition-colors duration-300
                        ${activeSection === 'projects' 
                            ? 'text-blue-600 dark:text-blue-300 dark:drop-shadow-[0_0_2px_rgba(59,130,246,0.4)]' 
                            : 'text-slate-700 dark:!text-white'}`}
            >
              Projects
              {activeSection === 'projects' && (
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-600 dark:bg-blue-400 dark:shadow-[0_0_3px_rgba(59,130,246,0.6)] rounded-full"></span>
              )}
            </a>
            <a 
              href="#demoreel" 
              onClick={handleClick('demoreel')}
              className={`relative py-1 text-sm font-medium transition-colors duration-300
                        ${activeSection === 'demoreel' 
                            ? 'text-blue-600 dark:text-blue-300 dark:drop-shadow-[0_0_2px_rgba(59,130,246,0.4)]' 
                            : 'text-slate-700 dark:!text-white'}`}
            >
              Demo
              {activeSection === 'demoreel' && (
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-600 dark:bg-blue-400 dark:shadow-[0_0_3px_rgba(59,130,246,0.6)] rounded-full"></span>
              )}
            </a>
            <a 
              href="#contactme" 
              onClick={handleClick('contactme')}
              className={`relative py-1 text-sm font-medium transition-colors duration-300
                        ${activeSection === 'contactme' 
                            ? 'text-blue-600 dark:text-blue-300 dark:drop-shadow-[0_0_2px_rgba(59,130,246,0.4)]' 
                            : 'text-slate-700 dark:!text-white'}`}
            >
              Contact
              {activeSection === 'contactme' && (
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-600 dark:bg-blue-400 dark:shadow-[0_0_3px_rgba(59,130,246,0.6)] rounded-full"></span>
              )}
            </a>
            <a 
              href="/resume.pdf"
              download="Luis_Caceres_Resume.pdf"
              className="py-1 px-2 text-sm font-medium
                      flex items-center gap-1 rounded-full 
                      bg-blue-600/10 dark:bg-blue-500/20
                      text-blue-600 dark:text-blue-300"
            >
              <FontAwesomeIcon icon={faFileArrowDown} className="text-xs" />
              CV
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;