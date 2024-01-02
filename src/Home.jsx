import Footer from "./components/Footer";
import Hero from "./components/Hero";
import StickyNavbar from "./components/Navigation";
import ProjectIdeaCTA from "./components/ProjectIdeaCTA";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const Home = () => {
  return (
    <div>
      <StickyNavbar />
      <Hero />
      <Technologies />
      <Projects />
      <ProjectIdeaCTA />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default Home;
