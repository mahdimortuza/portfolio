import Footer from "./components/Footer";
import Hero from "./components/Hero";
import StickyNavbar from "./components/Navigation";
import Technologies from "./components/Technologies";

const Home = () => {
  return (
    <div>
      <StickyNavbar />
      <Hero />
      <Technologies />
      <Footer />
    </div>
  );
};

export default Home;
