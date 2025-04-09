import * as React from "react";

interface FullScreenSectionProps {
  children: React.ReactNode;
  isDarkBackground?: boolean;
  className?: string;
}

/**
 * Renders a full-screen section with centered content
 */
function FullScreenSection({ 
  children, 
  isDarkBackground = false,
  className = "",
}: FullScreenSectionProps) {
  return (
    <section 
      className={`w-full min-h-screen flex flex-col items-center 
        ${isDarkBackground ? "text-white dark:text-white" : "text-slate-800 dark:text-white"} 
        bg-white dark:bg-slate-950 transition-all duration-300 ${className}`}
    >
      <div className="w-full max-w-[95%] min-h-screen flex flex-col justify-center items-center">
        {children}
      </div>
    </section>
  );
}

export default FullScreenSection;
