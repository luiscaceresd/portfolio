import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, useColorModeValue, Link } from "@chakra-ui/react";
import Card from "./Card";
import Image1 from "../images/photo1.png";
import Image2 from "../images/photo2.png";
import Image3 from "../images/photo3.png";
import Image4 from "../images/photo4.png";

const projects = [
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
    imageSrc: Image2,
    url: "http://quantumleap.com.co:8000/",
  },
  {
    title: "Multiplayer Pong Game",
    description:
      "A two people multiplayer pong game, built with Node.js, Socket.io and Express",
    imageSrc: Image3,
    url: "https://github.com/luiscaceresd/multiplayer-pong",
  },
  {
    title: "NFT Marketplace (Cooming Soon)",
    description:
      "A marketplace to buy and sell NFTs, built with Solidity, React and Hardhat",
    imageSrc: Image4,
    url: "https://github.com/luiscaceresd/nft-marketplace",
  },
];

const ProjectsSection = () => {
  const backgroundColor = useColorModeValue(
    "light.background",
    "dark.background"
  );
  const fontColor = useColorModeValue("light.text", "dark.text");
  const borderColor = useColorModeValue("light.border", "dark.border");

  return (
    <FullScreenSection
      backgroundColor={backgroundColor}
      color={fontColor}
      isDarkBackground
      alignItems="center"
      spacing={8}
      display="flex" // Makes FullScreenSection a flex container
      flexDirection="column" // Stacks children vertically
      justifyContent="center" // Centers children vertically
      minHeight={{ base: "80vh", md: "20vh" }}
      minWidth={{ base: "95vw", md: "10vw" }}
      zIndex={1}
    >
      <Heading as="h1" id="projects-section" size={{ base: "lg", md: "lg" }}>
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
    </FullScreenSection>
  );
};

export default ProjectsSection;
