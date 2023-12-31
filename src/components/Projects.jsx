import objBlue from "../assets/bg-objects/obj-blue.svg";
import sliderObj from "../assets/bg-objects/sliderObj.svg";
const Projects = () => {
  return (
    <div className="max-w-[1350px] mx-auto relative">
      <img className="absolute top-0 right-0 -mt-96" src={objBlue} />
      <h2 className="font-playfair text-[64px] text-center leading-[66px] mt-[100px]">
        Some of my recent <br /> projects
      </h2>
      <img className="absolute top-0 left-0" src={sliderObj} />
    </div>
  );
};

export default Projects;
