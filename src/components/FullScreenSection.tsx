import * as React from "react";
import { VStack, StackProps } from "@chakra-ui/react";

interface FullScreenSectionProps extends StackProps {
  children: React.ReactNode;
  isDarkBackground: boolean;
  backgroundColor?: string;
}

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection: React.FC<FullScreenSectionProps> = ({ 
  children, 
  isDarkBackground, 
  ...boxProps 
}) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
    >
      <VStack maxWidth="95%" minHeight="100vh" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
