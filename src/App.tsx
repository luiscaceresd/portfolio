import Header from "./components/Header"
import LandingSection from "./components/LandingSection"
import ProjectsSection from "./components/ProjectsSection"
import DemoReelSection from "./components/DemoReelSection"
import ContactMeSection from "./components/ContactMeSection"
import Footer from "./components/Footer"
import { AlertProvider } from "./context/alertContext"
import Alert from "./components/Alert"
import "./animations.css" // Adjust the path as necessary
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas, faAngleDown, faRocket } from "@fortawesome/free-solid-svg-icons"
import { fab, faEthereum } from "@fortawesome/free-brands-svg-icons"
import { ThemeProvider } from "./components/theme-provider"
import SkillsBanner from "./components/SkillsBanner"

library.add(fas, faEthereum, faAngleDown, faRocket, fab)

// Using the new React 19 function component pattern without explicit React.FC
function App() {
  // Get initial theme from localStorage or system preference
  const getInitialTheme = (): "light" | "dark" | "system" => {
    const savedTheme = localStorage.getItem("vite-ui-theme") as "light" | "dark" | "system";
    
    if (savedTheme) return savedTheme;
    
    return "system";
  };

  return (
    <ThemeProvider defaultTheme={getInitialTheme()} storageKey="vite-ui-theme">
        <AlertProvider>
          <main>
            <Header />
            <LandingSection />
            <SkillsBanner />
            <ProjectsSection />
            <DemoReelSection />
            <ContactMeSection />
            <Footer />
            <Alert />
          </main>
        </AlertProvider>
    </ThemeProvider>
  )
}

export default App