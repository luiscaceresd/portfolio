import React, { useState, useEffect } from "react";
import { useTheme } from "@/components/theme-provider";
import { GoChevronDown } from "react-icons/go";
import { FaSmile } from "react-icons/fa";
import FullScreenSection from "./FullScreenSection";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";

const LandingSection = () => {
  const { theme } = useTheme();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [currentGreeting, setCurrentGreeting] = useState("Hello, I'm Luis!");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change the scroll threshold as per your requirement
      if (window.scrollY > 100) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }

      // Show back to top only when scrolled significantly
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const greetings = [
      "Hello, I'm Luis!",
      "¡Hola, soy Luis!",
      "Bonjour, je suis Luis!"
    ];
    let currentIndex = 0;

    const cycleGreetings = () => {
      setIsAnimating(true);
      
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % greetings.length;
        setCurrentGreeting(greetings[currentIndex]);
        setIsAnimating(false);
      }, 500);
    };

    const intervalId = setInterval(cycleGreetings, 5000);

    return () => clearInterval(intervalId);
  }, []);

  // Determine gradient based on theme
  const getGradient = () => {
    if (theme === "dark") {
      // Rich, vibrant gradient for dark mode with multiple color stops
      return 'linear-gradient(135deg, #ff6b6b, #ff9e5e, #ffbd4f, #ffa441, #ff7e47, #ff5e62)';
    } else {
      return 'linear-gradient(90deg, #3b82f6, #8b5cf6, #6366f1, #3b82f6)'; // Blue/purple gradient for light mode
    }
  };

  // Animation duration based on theme
  const getAnimationDuration = () => {
    return theme === "dark" ? "10s" : "8s";
  };

  return (
    <>
      <FullScreenSection>
        <div className="flex flex-col items-center justify-center w-full gap-8 md:gap-16">
          <div className="flex flex-col items-center gap-2">
            <div className="relative rounded-full size-32 md:size-40 overflow-hidden border-3 border-gray-300 dark:border-gray-700 shadow-xl transition-transform duration-200 hover:scale-105 cursor-pointer">
              <img
                src="/ProfilePic.jpeg"
                alt="Luis"
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            <div className="w-full flex justify-center pt-4 pb-8">
              <h1 
                className={`text-4xl md:text-5xl lg:text-6xl font-bold text-transparent transition-all duration-500 ease-in-out px-4 leading-normal ${
                  isAnimating ? "opacity-0 transform -translate-y-4 scale-95" : "opacity-100 transform translate-y-0 scale-100"
                }`}
                style={{
                  lineHeight: "1.5",
                  paddingTop: "0.25em",
                  paddingBottom: "0.25em",
                  display: "inline-block",
                  backgroundImage: getGradient(),
                  backgroundSize: '400% 400%',
                  backgroundClip: 'text',
                  animation: `gradient-x ${getAnimationDuration()} ease-in-out infinite alternate`
                }}
              >
                {currentGreeting}
              </h1>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-8 md:gap-12">
            <div className="flex flex-col items-center gap-3 md:gap-4">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-center text-slate-800 dark:text-slate-100">
                Full Stack Blockchain Developer
              </h2>
              <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold text-center text-indigo-500 dark:text-amber-300 tracking-wide">
                specialised in React, Next.js and AI
              </h3>
            </div>
            
            <div className="flex flex-col items-center gap-6 md:gap-12 mt-4">
              <div className="relative w-10 h-10 flex items-center justify-center">
                {!hasScrolled && (
                  <div className="absolute inset-0 flex items-center justify-center animate-bounce">
                    <HiOutlineChevronDown 
                      className="h-8 w-8 text-indigo-500 dark:text-amber-300 opacity-70"
                    />
                  </div>
                )}
                <div className={`absolute inset-0 flex items-center justify-center ${hasScrolled ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}>
                  <FontAwesomeIcon 
                    icon={['fab', 'ethereum']} 
                    size="2x" 
                    className="text-indigo-500 dark:text-amber-300"
                  />
                </div>
              </div>
              <p className={`text-xl md:text-2xl ${hasScrolled ? "enjoy-show" : "icon-hide"}`}>
                Enjoy!
              </p>
            </div>
          </div>
        </div>
      </FullScreenSection>

      {/* Back to top button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-2 rounded-full bg-slate-100/80 dark:bg-slate-800/50 
                  shadow-md border border-slate-200 dark:border-slate-700/50
                  text-indigo-500 dark:text-amber-300
                  transition-all duration-300 z-50
                  hover:bg-white dark:hover:bg-slate-700 hover:cursor-pointer
                  ${showBackToTop ? 'opacity-70 scale-100' : 'opacity-0 scale-75 pointer-events-none'}`}
        aria-label="Back to top"
      >
        <HiOutlineChevronUp className="w-6 h-6" />
      </button>
    </>
  );
};

export default LandingSection; 