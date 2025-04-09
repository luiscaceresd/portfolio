import { extendTheme, theme as baseTheme, ThemeConfig } from "@chakra-ui/react";

// Define your color mode config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// Define the colors for light mode and dark mode
interface ColorMode {
  background: string;
  text: string;
  border: string;
  buttonColor: string;
  headingColorHover: string;
}

interface CustomColors {
  light: ColorMode;
  dark: ColorMode;
}

const colors: CustomColors = {
  light: {
    background: "white",
    text: "black",
    border: "black",
    buttonColor: "#1C1CFF",
    headingColorHover: "#1C1CFF",
    // other colors for light mode
  },
  dark: {
    background: "black",
    text: "white",
    border: "2F3336",
    buttonColor: "#FF7324",
    headingColorHover: "#FF7324",
    // other colors for dark mode
  },
};

// Extend the theme with the custom avatar sizes and color configurations
const theme = extendTheme({
  config,
  colors,
});

export default theme; 