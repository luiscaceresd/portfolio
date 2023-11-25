import { Heading, Image, Text, VStack, Box, Link, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const Card = ({ title, description, imageSrc, href }) => {
  const imageBoxBackground = useColorModeValue(
    "radial-gradient(46.28% 66.31% at 66.95% 58.35%, #e6e6f7 0%, #e7edfa 50%, #e9fbfa 100%)", // Gradient for light mode
    "linear-gradient(49.21deg, rgba(127, 127, 213, 0.2) 19.87%, rgba(134, 168, 231, 0.2) 58.46%, rgba(145, 234, 228, 0.2) 97.05%)" // Gradient for dark mode
  );
  const backgroundColor = useColorModeValue("light.background", "dark.background");
  const fontColor = useColorModeValue("light.text", "dark.text");
  const borderColor = useColorModeValue("light.border", "dark.border");
  const headingColorHover = useColorModeValue("light.headingColorHover", "dark.headingColorHover"); // Define hover color for the heading
  const boxShadow = useColorModeValue(
    "0 4px 12px rgba(28, 28, 255, 0.5)", // Light mode boxShadow
    "0 4px 12px rgba(255, 115, 36, 0.8)" // Dark mode boxShadow
  );

  return (
    <Link href={href} isExternal _hover={{ textDecoration: 'none' }}>
      <VStack
        spacing="0"
        color={fontColor}
        align="justify"
        borderRadius="md"
        borderWidth="1px"
        borderColor={fontColor}
        cursor="pointer"
        boxShadow={boxShadow}
        transition="all 0.2s ease-in-out"
        _hover={{
          transform: 'scale(1.03)',
          opacity: 1.5,
          '.card-heading': { // Custom class for heading
            color: headingColorHover// Change color on hover
          }
        }}
      >
        <Box align="center" borderBottom="1px" borderColor="#DEE8EC" bg={imageBoxBackground}>
          <Image
            src={imageSrc.substring(1)}
            alt={title}
            borderRadius="md"
            margin="0px"
            width="320px"
            height="243px"
          />
        </Box>
        <VStack
          spacing="12px"
          paddingBottom={{ base: "12px", md: "12px" }}
          paddingTop={{ base: "12px", md: "12px" }}
          bg={backgroundColor}
          color={fontColor}
          align="justify"
          borderBottomRadius="md"
        >
          <Heading
            as="h4"
            size="md"
            margin="0 12px 0 12px"
            color={fontColor}
            transition="all 0.3s ease-in-out"
            className="card-heading" // Assigning custom class to heading
          >
            {title}
          </Heading>
          <Text fontSize="md" margin="0 12px 0 12px">
            {description}
          </Text>
        </VStack>
      </VStack>
    </Link>
  );
};

export default Card;