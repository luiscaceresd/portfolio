import React, { useState, useEffect } from "react";
import { useTheme } from "@/components/theme-provider";
import { GoChevronDown } from "react-icons/go";
import { FaSmile } from "react-icons/fa";
import FullScreenSection from "./FullScreenSection";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import ProfilePicture
import ProfilePicture from "../images/ProfilePic.png";

const LandingSection = () => {
  const { theme } = useTheme();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change the scroll threshold as per your requirement
      if (window.scrollY > 100) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <FullScreenSection>
      <div className="flex flex-col items-center justify-center w-full gap-6 md:gap-12">
        <div className="flex flex-col items-center gap-4">
          <img
            src={ProfilePicture}
            alt="Luis"
            className="rounded-full w-24 h-24 md:w-32 md:h-32 border-2 border-gray-300 dark:border-gray-700 shadow-lg transition-transform duration-200 hover:scale-105 cursor-pointer"
          />
          <h1 className="text-2xl md:text-3xl font-bold">
            Hello, I'm Luis!
          </h1>
        </div>
        
        <div className="flex flex-col items-center gap-6 md:gap-12">
          <div className="flex flex-col items-center gap-2 md:gap-4">
            <h2 className="text-xl md:text-3xl font-semibold text-center">
              Full Stack Blockchain Developer
            </h2>
            <h2 className="text-xl md:text-3xl font-semibold text-center">
              specialised in React
            </h2>
          </div>
          
          <div className="flex flex-col items-center gap-6 md:gap-12">
            <div className="icon-container">
              <FontAwesomeIcon 
                icon={['fas', 'angle-down']} 
                beatFade 
                size="4x" 
                className={!hasScrolled ? "icon-show" : "icon-hide"} 
              />
              <FontAwesomeIcon 
                icon={['fab', 'ethereum']} 
                size="4x" 
                className={hasScrolled ? "icon-show-2" : "icon-hide"}
              />
            </div>
            <p className={`text-lg md:text-2xl ${hasScrolled ? "enjoy-show" : "icon-hide"}`}>
              Enjoy!
            </p>
          </div>
        </div>
      </div>
    </FullScreenSection>
  );
};

export default LandingSection;
