import { FaChevronDown } from "react-icons/fa";
import bgObject from "../assets/bg-objects/obj-1.svg";
import fgObj1 from "../assets/fg-objects/fg-1.png";
import fgObj2 from "../assets/fg-objects/fg-2.png";
import img from "../assets/image/mahdi.png";

const Hero = () => {
  return (
    <div className="relative bg-[#FEFAF6] max-w-[1350px] mx-auto pb-16">
      <img className="absolute top-0 right-0" src={bgObject}></img>

      <div className=" flex justify-between items-end pt-10">
        <div className="w-[600px]">
          <h1 className="font-playfair text-[rgb(19,34,56)] text-[64px] font-bold leading-[64px]">
            Hi 👋 <br />
            I’m Mahdi Mortuza
          </h1>
          <p className="mt-[27px] font-raleway font-medium text-[32px] text-[#556070] leading-[40px]">
            A full-stack web developer. I solve web problems by crafting
            scalable products using MERN stack technology.
          </p>
          <div className="flex mt-[60px] font-raleway text-xl font-bold gap-7">
            <button className="px-5 py-[10px] bg-gradient-to-r from-[#75B4F1] to-[#A573F0] rounded-[4px] text-white">
              {" "}
              Let’s Talk
            </button>

            <button className="px-5 py-[10px] text-[#4285F4] border-2 border-[#4285F4] rounded-[4px]">
              {" "}
              My Resume
            </button>
          </div>
        </div>
        <div className="relative">
          <img src={fgObj1} className="absolute left-0 top-16" />
          <img className="" src={img}></img>
          <img src={fgObj2} className="absolute right-28 -mt-[20px]" />
        </div>
      </div>
      <FaChevronDown className="mt-[60px] mx-auto text-[22px]" />
    </div>
  );
};

export default Hero;
