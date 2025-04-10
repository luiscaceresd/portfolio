import React, { useState, useRef, useEffect } from "react";
import FullScreenSection from "./FullScreenSection";
import { FaPlay, FaExpand } from "react-icons/fa";
import { useTheme } from "./theme-provider";

const DemoReelSection = () => {
  const { theme } = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const playerRef = useRef<HTMLIFrameElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const youtubeId = "izae9-0J7tI";

  // Effect to handle YouTube player visibility based on intersection
  useEffect(() => {
    const sectionElement = sectionRef.current;
    
    if (!sectionElement) return;
    
    // Create intersection observer to detect when video section is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When the section is visible in the viewport
          if (entry.isIntersecting) {
            setShowControls(true);
          }
        });
      },
      {
        root: null, // Use viewport as root
        rootMargin: '0px',
        threshold: 0.3, // Trigger when 30% of the element is visible
      }
    );
    
    // Start observing the section
    observer.observe(sectionElement);
    
    // Clean up
    return () => {
      observer.disconnect();
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleMouseMove = () => {
    setShowControls(true);
    
    // Clear any existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    // Hide controls after 3 seconds of inactivity
    timerRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  // Handle click on the play button overlay
  const handlePlayClick = () => {
    // The YouTube iframe will handle the actual playing
    setIsPlaying(true);
  };

  // Background color based on theme
  const getBgColor = () => {
    return theme === "dark" ? "bg-black" : "bg-slate-100";
  };

  return (
    <section id="demoreel" ref={sectionRef}>
      <FullScreenSection
        isDarkBackground={theme === "dark"}
        className={`${getBgColor()} py-16 flex flex-col items-center`}
      >
        <div className="w-full max-w-7xl px-4 flex flex-col items-center">
          <div className="w-full mb-12 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 
                          text-slate-800 dark:text-white 
                          dark:text-shadow-sm dark:shadow-black/50">
              Demo Reel
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto 
                        font-medium dark:drop-shadow-md">
              Watch a showcase of my Next.js, AI and 3D modeling projects in action
            </p>
          </div>
          
          <div 
            className="w-full max-w-5xl aspect-video relative group"
            onMouseMove={handleMouseMove}
          >
            {/* Streaming service styling */}
            <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-tr from-blue-500/30 via-indigo-500/20 to-purple-500/30 
                          blur-md opacity-70 rounded-xl"></div>
            
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl border border-gray-300 dark:border-gray-800 bg-black z-1">
              {/* YouTube Embed */}
              <iframe
                ref={playerRef}
                width="100%" 
                height="100%"
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=0&rel=0&modestbranding=1&enablejsapi=1`}
                title="Portfolio Demo Reel"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full z-1"
              ></iframe>
              
              {/* Custom overlay for better design integration */}
              <div 
                className={`absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/40 to-transparent 
                           transition-opacity duration-300 z-2 pointer-events-none
                           ${showControls ? 'opacity-100' : 'opacity-0'}`}
              ></div>
            </div>
          </div>
          
          <div className="w-full max-w-3xl mt-10">
            <div className="bg-slate-200/90 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 
                           border border-slate-300 dark:border-indigo-900/40 shadow-xl">
              <h3 className="text-xl md:text-2xl font-semibold text-slate-800 dark:text-white mb-3 dark:drop-shadow-sm">
                About This Demo
              </h3>
              <p className="text-slate-700 dark:text-gray-200 mb-4 leading-relaxed">
                This demo reel showcases my expertise in developing modern web applications with Next.js, 
                integrating AI technologies, creating responsive mobile designs, working with complex database systems, 
                and building immersive 3D experiences with Three.js and AI-driven modeling.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-200 rounded-full text-sm font-medium shadow-sm">Next.js</span>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-200 rounded-full text-sm font-medium shadow-sm">AI Integration</span>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-200 rounded-full text-sm font-medium shadow-sm">Mobile Design</span>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-200 rounded-full text-sm font-medium shadow-sm">Databases</span>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-200 rounded-full text-sm font-medium shadow-sm">Three.js</span>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-200 rounded-full text-sm font-medium shadow-sm">3D AI Modeling</span>
              </div>
            </div>
          </div>
        </div>
      </FullScreenSection>
    </section>
  );
};

export default DemoReelSection; 