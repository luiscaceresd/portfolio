import React from "react";
import { Link } from "@chakra-ui/react";

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}

const Card = ({ title, description, imageSrc, href }: CardProps) => {
  return (
    <Link
      href={href}
      isExternal
      _hover={{ textDecoration: "none" }}
      style={{ display: 'block', width: '100%' }}
    >
      <div 
        className="flex flex-col border border-slate-300 dark:border-slate-700 rounded-md shadow-md dark:shadow-[0_4px_12px_rgba(255,115,36,0.8)] hover:scale-[1.02] transition-all duration-200 overflow-hidden"
      >
        <div 
          className="w-full text-center border-b border-[#DEE8EC] bg-[radial-gradient(46.28%_66.31%_at_66.95%_58.35%,#e6e6f7_0%,#e7edfa_50%,#e9fbfa_100%)] dark:bg-linear-to-br dark:from-[rgba(127,127,213,0.2)] dark:via-[rgba(134,168,231,0.2)] dark:to-[rgba(145,234,228,0.2)]"
        >
          <img
            src={imageSrc.substring(1)}
            alt={title}
            className="w-[320px] h-[243px] rounded-md m-0 object-contain"
          />
        </div>
        
        <div 
          className="flex flex-col space-y-3 py-3 bg-white dark:bg-slate-800 text-slate-800 dark:text-white rounded-b-md"
        >
          <h4 
            className="text-lg font-medium mx-3 transition-all duration-300 hover:text-blue-600 dark:hover:text-orange-400"
          >
            {title}
          </h4>
          
          <p className="text-md mx-3 text-slate-600 dark:text-slate-300">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;