import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={{ base: "24px", md: "48px" }}> {/* Adjusted spacing */}
      <VStack spacing="8px">
        <Avatar size={{ base: 'xl', md: '2xl' }} name='Pete' src='https://i.pravatar.cc/150?img=7' /> {/* Responsive avatar size */}
        <Heading as='h1' size={{ base: 'md', md: '2xs' }}> {/* Responsive font size */}
          Hello, I'm Pete!
        </Heading>
      </VStack>
      <VStack spacing={{ base: "8px", md: "16px" }}> {/* Adjusted spacing */}
        <Heading as='h2' size={{ base: 'xl', md: '2xl' }}> {/* Responsive font size */}
          A frontend developer
        </Heading>
        <Heading as='h2' size={{ base: 'xl', md: '2xl' }}> {/* Responsive font size */}
          specialised in React
        </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
