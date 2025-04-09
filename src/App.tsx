import React from "react"
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import Header from "./components/Header"
import LandingSection from "./components/LandingSection"
import ProjectsSection from "./components/ProjectsSection"
import ContactMeSection from "./components/ContactMeSection"
import Footer from "./components/Footer"
import { AlertProvider } from "./context/alertContext"
import Alert from "./components/Alert"
import theme from "./theme" // Import your custom theme
import "./animations.css" // Adjust the path as necessary
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas, faAngleDown, faRocket } from "@fortawesome/free-solid-svg-icons"
import { fab, faEthereum } from "@fortawesome/free-brands-svg-icons"
import { ThemeProvider } from "./components/theme-provider"

library.add(fas, faEthereum, faAngleDown, faRocket, fab)

// Using the new React 19 function component pattern without explicit React.FC
function App() {
  // Get initial theme from localStorage or system preference
  const getInitialTheme = (): "light" | "dark" | "system" => {
    const savedTheme = localStorage.getItem("vite-ui-theme") as "light" | "dark" | "system";
    const chakraTheme = localStorage.getItem("chakra-ui-color-mode") as "light" | "dark";
    
    if (savedTheme) return savedTheme;
    if (chakraTheme) return chakraTheme;
    
    return "system";
  };

  return (
    <ThemeProvider defaultTheme={getInitialTheme()} storageKey="vite-ui-theme">
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <AlertProvider>
          <main>
            <Header />
            <LandingSection />
            <ProjectsSection />
            <ContactMeSection />
            <Footer />
            <Alert />
          </main>
        </AlertProvider>
      </ChakraProvider>
    </ThemeProvider>
  )
}

export default App