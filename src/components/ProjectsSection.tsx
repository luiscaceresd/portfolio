import React from "react";
import { Box, Heading, Link } from "@chakra-ui/react";
import Card from "./Card";

// Import images
import Image1 from "../images/photo1.png";
import Image2 from "../images/photo2.png";
import Image3 from "../images/photo3.png";
import Image4 from "../images/photo4.png";

interface Project {
  title: string;
  description: string;
  imageSrc: string;
  url: string;
}

const projects: Project[] = [
  {
    title: "Blockchain Kickstarter",
    description:
      "A crowdfunding platform built with Solidity, React, Hardhat and Thirdweb",
    imageSrc: Image2,
    url: "https://quantumfund.netlify.app/",
  },
  {
    title: "React Reservations Engine",
    description:
      "A restaurant landing page with a reservations engine, built with React and TailwindCSS",
    imageSrc: Image1,
    url: "https://react-reservations-engine.netlify.app/",
  },
  {
    title: "Node.js Nasa Mission Dashboard",
    description:
      "A dashboard to scehdule and monitor rocket launches, built with Node.js, EC2 and Express",
    imageSrc: Image4,
    url: "https://github.com/luiscaceresd/nasa-project",
  },
  {
    title: "Multiplayer Pong Game",
    description:
      "A two people multiplayer pong game, built with Node.js, Socket.io and Express",
    imageSrc: Image3,
    url: "https://github.com/luiscaceresd/multiplayer-pong",
  },
];

const ProjectsSection = () => {
  return (
    <section className="w-full min-h-screen py-16 flex flex-col items-center justify-center 
                        bg-white dark:bg-slate-950 text-slate-800 dark:text-blue-100 
                        z-[1]">
      <div className="w-full max-w-4xl px-4 py-8 md:py-16 flex flex-col items-center space-y-8">
        <Heading as="h1" id="projects-section" size={{ base: "lg", md: "lg" }} className="mb-4">
          Featured Projects
        </Heading>
        <Box
          display="grid"
          gridTemplateColumns={{
            base: "repeat(1,minmax(0,1fr))",
            md: "repeat(2,minmax(0,1fr))",
          }}
          gridGap={6}
        >
          {projects.map((project) => (
            <Card
              key={project.url}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              href={project.url}
            />
          ))}
        </Box>
      </div>
    </section>
  );
};

export default ProjectsSection;
