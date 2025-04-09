import { extendTheme, theme as baseTheme, ThemeConfig } from "@chakra-ui/react";

// Define your color mode config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
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

// Use CSS variables from our tailwind/shadcn theme when possible
const colors: CustomColors = {
  light: {
    background: "var(--background, white)",
    text: "var(--foreground, black)",
    border: "var(--border, #e2e8f0)",
    buttonColor: "var(--primary, #1C1CFF)",
    headingColorHover: "var(--primary, #1C1CFF)",
  },
  dark: {
    background: "var(--background, black)",
    text: "var(--foreground, white)",
    border: "var(--border, #2F3336)",
    buttonColor: "var(--primary, #FF7324)",
    headingColorHover: "var(--primary, #FF7324)",
  },
};

// Extend the theme with the custom avatar sizes and color configurations
const theme = extendTheme({
  config,
  colors,
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'dark.background' : 'light.background',
        color: props.colorMode === 'dark' ? 'dark.text' : 'light.text',
      },
    }),
  },
});

export default theme; 