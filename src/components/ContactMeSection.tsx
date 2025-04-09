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
      py={{ base: 4, md: 16 }}
      spacing={8}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight={{ base: "80vh", md: "10vh" }}
      minWidth={{ base: "95vw", md: "10vw" }}
    >
      <VStack
        w={{ base: "100%", md: "1024px" }}
        py={{ base: 8, md: 32 }}
        alignItems="center"
      >
        <Heading as="h1" id="contactme-section" size={{ base: "lg", md: "lg" }}>
          Contact me
        </Heading>
        <Box py={6} rounded="md" w="100%">
          <ContactForm />
        </Box>
      </VStack>
    </FullScreenSection>
  );
}

export default ContactMeSection;
