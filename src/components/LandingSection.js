import React from "react";
import { Avatar, Heading, VStack, useColorModeValue, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import ProfilePicture from "../images/ProfilePic.png";

// Access the current theme colors for background


const LandingSection = () => {
  // Correct placement of useColorModeValue hooks
  const backgroundColor = useColorModeValue("light.background", "dark.background");
  const fontColor = useColorModeValue("light.text", "dark.text");
  const borderColor = useColorModeValue("light.border", "dark.border");
  const boxShadow = useColorModeValue(
    "0 4px 12px rgba(0, 0, 0, 0.5)", // Light mode boxShadow
    "0 4px 12px rgba(255, 255, 255, 0.5)" // Dark mode boxShadow
  );
  const neonStyle = {
    textShadow: '0 0 5px #9d00ff, 0 0 10px #9d00ff, 0 0 20px #9d00ff, 0 0 40px #0fa, 0 0 80px #0fa',
    animation: 'neonGlow 2s ease-in-out infinite alternate'
  };

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor={backgroundColor} // Use theme color
      color={fontColor}
    >
      <VStack spacing={{ base: "24px", md: "48px" }}> {/* Adjusted spacing */}
        <VStack spacing="8px">
          <Avatar size={{ base: '2xl', md: '3xl' }} name='Luis' src={ProfilePicture}  borderColor={borderColor} boxShadow={boxShadow} /> {/* Responsive avatar size */}
          <Heading as='h1' size={{ base: 'md', md: 'md' }}> {/* Responsive font size */}
            Hello, I'm Luis!
          </Heading>
        </VStack>
        <VStack spacing={{ base: "8px", md: "16px" }}> {/* Adjusted spacing */}
          <Heading as='h2' size={{ base: 'lg', md: '2xl' }}> {/* Responsive font size */}
            A FullStack Blockchain Developer
          </Heading>
          <Heading as='h2' size={{ base: 'lg', md: '2xl' }}> {/* Responsive font size */}
            specialised in React
          </Heading>
          <Box sx={neonStyle}>
          </Box>
        </VStack>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
