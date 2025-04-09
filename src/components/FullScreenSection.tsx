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
function FullScreenSection({ 
  children, 
  isDarkBackground, 
  ...boxProps 
}: FullScreenSectionProps) {
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
}

export default FullScreenSection;
