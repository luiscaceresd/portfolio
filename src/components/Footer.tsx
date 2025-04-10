import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-white dark:bg-slate-950 py-4">
      <div className="mx-auto px-12 text-slate-800 dark:text-slate-200 flex justify-center items-center max-w-[1024px] h-16">
        <p>Luisito Codes • © {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
