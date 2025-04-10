import React, { useState, useRef, useEffect } from "react";
import FullScreenSection from "./FullScreenSection";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaExpand } from "react-icons/fa";
import { HiOutlineFastForward, HiOutlineRewind } from "react-icons/hi";
import { useTheme } from "./theme-provider";

const DemoReelSection = () => {
  const { theme } = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Effect to handle video playback based on visibility
  useEffect(() => {
    const videoElement = videoRef.current;
    const sectionElement = sectionRef.current;
    
    if (!videoElement || !sectionElement) return;
    
    // Create intersection observer to detect when video is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When the section is visible in the viewport
          if (entry.isIntersecting) {
            // Only attempt to play if not already playing
            if (!isPlaying && videoElement.paused) {
              const playPromise = videoElement.play();
              
              if (playPromise !== undefined) {
                playPromise
                  .then(() => {
                    setIsPlaying(true);
                  })
                  .catch(error => {
                    console.log("Video play prevented:", error);
                    // If autoplay is blocked, show the play button
                    setIsPlaying(false);
                  });
              }
            }
          } else {
            // Pause when not in viewport
            if (!videoElement.paused) {
              videoElement.pause();
              setIsPlaying(false);
            }
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
  }, [isPlaying]);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      const percentage = (current / duration) * 100;
      setProgress(percentage);
      setCurrentTime(current);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = e.currentTarget;
    const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
    const percentage = (clickPosition / progressBar.clientWidth) * 100;
    
    if (videoRef.current) {
      videoRef.current.currentTime = (percentage / 100) * videoRef.current.duration;
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10;
    }
  };

  const handleRewind = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10;
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

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
            onMouseLeave={() => isPlaying && setShowControls(false)}
          >
            {/* Streaming service styling */}
            <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-tr from-blue-500/30 via-indigo-500/20 to-purple-500/30 
                          blur-md opacity-70 rounded-xl"></div>
            
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl border border-gray-300 dark:border-gray-800 bg-black z-1">
              {/* Video Player */}
              <video
                ref={videoRef}
                className="w-full h-full object-contain"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={() => setIsPlaying(false)}
                onClick={handlePlayPause}
                poster="/demo-thumbnail.jpg"
                playsInline
                preload="metadata"
                loop
              >
                <source src="/demo-reel.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Play/Pause Overlay (shows briefly when clicking) */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-1">
                  <div 
                    className="w-20 h-20 flex items-center justify-center rounded-full bg-indigo-600/80 text-white
                              cursor-pointer transition-transform duration-200 hover:scale-110
                              shadow-xl"
                    onClick={handlePlayPause}
                  >
                    <FaPlay className="text-2xl ml-1" />
                  </div>
                </div>
              )}
              
              {/* Video Controls */}
              <div 
                className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent 
                           pt-10 pb-4 px-4 transition-opacity duration-300 z-2
                           ${showControls ? 'opacity-100' : 'opacity-0'}`}
              >
                {/* Progress Bar */}
                <div 
                  className="w-full h-2 bg-gray-700 rounded-full mb-4 cursor-pointer relative"
                  onClick={handleSeek}
                >
                  <div 
                    className="absolute h-full bg-indigo-600 rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                  <div 
                    className="absolute h-4 w-4 bg-white rounded-full -mt-1 shadow-md"
                    style={{ left: `${progress}%`, transform: 'translateX(-50%)' }}
                  ></div>
                </div>
                
                {/* Control Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={handlePlayPause}
                      className="text-white hover:text-indigo-400 transition-colors"
                    >
                      {isPlaying ? <FaPause /> : <FaPlay />}
                    </button>
                    
                    <button 
                      onClick={handleRewind}
                      className="text-white hover:text-indigo-400 transition-colors"
                    >
                      <HiOutlineRewind />
                    </button>
                    
                    <button 
                      onClick={handleForward}
                      className="text-white hover:text-indigo-400 transition-colors"
                    >
                      <HiOutlineFastForward />
                    </button>
                    
                    <button 
                      onClick={handleMuteToggle}
                      className="text-white hover:text-indigo-400 transition-colors"
                    >
                      {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                    </button>
                    
                    <div className="text-white text-sm drop-shadow-md">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </div>
                  </div>
                  
                  <button 
                    onClick={handleFullscreen}
                    className="text-white hover:text-indigo-400 transition-colors"
                  >
                    <FaExpand />
                  </button>
                </div>
              </div>
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