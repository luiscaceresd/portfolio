import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";
import ColorModeSwitcher from './components/ColorModeSwitcher';
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";

const theme = extendTheme({
  // your custom theme configurations here
});

function App() {
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
  );
}


export default App;
