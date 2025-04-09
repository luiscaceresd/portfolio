import React from "react";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  const backgroundColor = useColorModeValue("light.background", "dark.background");
  const textColor = useColorModeValue("light.text", "dark.text");

  return (
    <Box backgroundColor={backgroundColor}>
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color={textColor}
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>Luisito Codes• © 2023</p>
        </Flex>
      </footer>
    </Box>
  );
};

export default Footer;
