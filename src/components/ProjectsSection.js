import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    getImageSrc: () => require("../images/photo1.png"),
  },
  {
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 🔥️",
    getImageSrc: () => require("../images/photo2.png"),
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/photo3.png"),
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/photo4.png"),
  },
];

const ProjectsSection = () => {
  const backgroundColor = useColorModeValue("light.background", "dark.background");
  const fontColor = useColorModeValue("light.text", "dark.text");
  const borderColor = useColorModeValue("light.border", "dark.border");


  return (
    <FullScreenSection
      backgroundColor={backgroundColor}
      isDarkBackground
      p={8}
      alignItems="center"
      spacing={8}
      display="flex" // Makes FullScreenSection a flex container
      flexDirection="column" // Stacks children vertically
      justifyContent="center" // Centers children vertically
      minHeight={{ base: "80vh", md: "20vh" }}
      minWidth={{ base: "95vw", md: "10vw" }}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={{ base: "repeat(1,minmax(0,1fr))", md: "repeat(2,minmax(0,1fr))"}}
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
