import { Toaster } from 'sonner';
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import StickyNavbar from "./components/Navigation";
import ProjectIdeaCTA from "./components/ProjectIdeaCTA";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <div>
      <Toaster />
      <StickyNavbar />
      <Hero />
      <Technologies />
      <Projects />
      <ProjectIdeaCTA />
      <Contact /> 
      <Footer />
    </div>
  );
};

export default App;
