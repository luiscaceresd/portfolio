import React from "react";
import {
  Box,
  Heading,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import ContactForm from "./ContactForm";

// React 19 uses function declaration syntax by default
function ContactMeSection() {
  const backgroundColor = useColorModeValue("light.background", "dark.background");
  const fontColor = useColorModeValue("light.text", "dark.text");

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor={backgroundColor}
      color={fontColor}
      py={{ base: 8, md: 16 }}
      spacing={8}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight={{ base: "80vh", md: "10vh" }}
      minWidth={{ base: "95vw", md: "10vw" }}
    >
      <VStack
        w={{ base: "95%", md: "800px" }}
        maxW="100%"
        py={{ base: 8, md: 16 }}
        alignItems="center"
        spacing={8}
      >
        <Heading 
          as="h1" 
          id="contactme-section" 
          size={{ base: "xl", md: "2xl" }}
          fontWeight="bold"
          textAlign="center"
          mb={4}
        >
          Contact me
        </Heading>
        <Box 
          py={4} 
          px={{ base: 3, md: 0 }}
          rounded="xl" 
          w="100%" 
          maxW="100%"
        >
          <ContactForm />
        </Box>
      </VStack>
    </FullScreenSection>
  );
}

export default ContactMeSection;
