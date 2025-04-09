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

library.add(fas, faEthereum, faAngleDown, faRocket, fab)

const App: React.FC = () => {
  return (
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
  )
}

export default App 