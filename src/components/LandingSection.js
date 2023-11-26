import React, { useState, useEffect } from "react";
import {
  Avatar,
  Heading,
  VStack,
  useColorModeValue,
  Icon,
  Box,
  Text,
} from "@chakra-ui/react";
import { GoChevronDown } from "react-icons/go";
import { FaSmile } from "react-icons/fa";
import FullScreenSection from "./FullScreenSection";
import ProfilePicture from "../images/ProfilePic.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Access the current theme colors for background

const LandingSection = () => {
  // Correct placement of useColorModeValue hooks
  const backgroundColor = useColorModeValue(
    "light.background",
    "dark.background"
  );
  const fontColor = useColorModeValue("light.text", "dark.text");
  const borderColor = useColorModeValue("light.border", "dark.border");
  const boxShadow = useColorModeValue(
    "0 4px 12px rgba(0, 0, 0, 0.5)", // Light mode boxShadow
    "0 4px 12px rgba(255, 255, 255, 0.5)" // Dark mode boxShadow
  );
  const arrowAnimation = {
    animation: "palpitate 1.5s ease-in-out infinite",
  };

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
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor={backgroundColor} // Use theme color
      color={fontColor}
    >
      <VStack spacing={{ base: "24px", md: "48px" }}>
        {" "}
        {/* Adjusted spacing */}
        <VStack spacing="16px">
          <Avatar
            size={{ base: "2xl", md: "3xl" }}
            name="Luis"
            src={ProfilePicture}
            borderColor={borderColor}
            boxShadow={boxShadow}
            cursor="pointer"
            transition="all 0.2s ease-in-out"
            _hover={{
              transform: "scale(1.02)",
            }}
          />{" "}
          {/* Responsive avatar size */}
          <Heading as="h1" size={{ base: "lg", md: "lg" }}>
            {" "}
            {/* Responsive font size */}
            Hello, I'm Luis!
          </Heading>
        </VStack>
        <VStack spacing={{ base: "24px", md: "48px" }}>
          {/* Adjusted spacing */}
          <VStack spacing={{ base: "8px", md: "16px" }}>
            <Heading as="h2" size={{ base: "md", md: "2xl" }}>
              {/* Responsive font size */}FullStack Blockchain Developer
            </Heading>
            <Heading as="h2" size={{ base: "md", md: "2xl" }}>
              {/* Responsive font size */}
              specialised in React
            </Heading>
          </VStack>
          <Box className="icon-container">
            <FontAwesomeIcon icon={['fas', 'angle-down']} beatFade size="4x" className={!hasScrolled ? "icon-show" : "icon-hide"} />
            <FontAwesomeIcon icon={['fab', 'ethereum']} fade size="4x" className={hasScrolled ? "icon-show-2" : "icon-hide"}/>
          </Box>
          <Text fontSize={{ base: "md", md: "2xl" }} className={hasScrolled ? "enjoy-show" : "icon-hide"} >
              Enjoy! <FontAwesomeIcon icon={['fas', 'rocket']} size="x" />
          </Text>
        </VStack>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
