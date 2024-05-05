import { Toaster } from 'sonner';
import Blogs from './components/Blogs';
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import StickyNavbar from "./components/Navigation";
import ProjectIdeaCTA from "./components/ProjectIdeaCTA";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const Home = () => {
  return (
    <div>
      <Toaster />
      <StickyNavbar />
      <Hero />
      <Technologies />
      <Projects />
      <ProjectIdeaCTA />
      <Contact />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
