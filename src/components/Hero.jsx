import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-scroll";
import bgObject from "../assets/bg-objects/obj-1.svg";
import fgObj1 from "../assets/fg-objects/fg-1.png";
import fgObj2 from "../assets/fg-objects/fg-2.png";
import img from "../assets/image/mahdi.png";

const Hero = () => {
  return (
    <div
      name="about"
      className="relative px-4 lg:px-8 bg-[#fffed0] max-w-[1350px] mx-auto pb-[37px] md:pb-16"
    >
      <img className="absolute top-0 right-0" src={bgObject}></img>

      <div className=" flex flex-col md:flex-row md:items-end md:justify-between pt-10 md:pt-5">
        <div className="md:w-[600px]">
          <motion.h1
            className="font-playfair text-[rgb(19,34,56)] text-[48px] md:text-[64px] font-bold leading-[50px] md:leading-[64px]"
            initial={{ opacity: 0, marginBottom: -15 }}
            whileInView={{ opacity: 1, marginBottom: 0 }}
            transition={{ duration: 1 }}
          >
            Hi 👋 <br />
            I’m Mahdi Mortuza
          </motion.h1>
          <motion.p
            className="mt-[17px] md:mt-[27px] font-raleway font-medium text-[20px] md:text-[32px] text-[#556070] leading-[24px] md:leading-[40px]"
            initial={{ opacity: 0, marginBottom: -15 }}
            whileInView={{ opacity: 1, marginBottom: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            A full-stack web developer. I solve web problems by crafting
            scalable products using MERN stack technology.
          </motion.p>
          <div className="flex justify-center md:justify-start mt-[26px] md:mt-[60px] font-raleway leading-[40px] text-[18px] md:text-xl font-bold gap-7">
            <button
              className="px-[14px] md:px-5 py-2 md:py-[10px] bg-gradient-to-r from-[#75B4F1] to-[#A573F0] border-2 hover:border-[#4285F4]
             rounded-[4px] text-white"
            >
              Let’s Talk
            </button>

            <button className="px-[14px] md:px-5 py-2 md:py-[10px] text-[#4285F4] border-2 border-[#4285F4] hover:bg-gradient-to-r from-[#75B4F1] to-[#A573F0] hover:text-white rounded-[4px]">
              My Resume
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            src={fgObj1}
            className="absolute left-0 top-10 md:top-16 w-[45px] h-[43px] md:w-[72px]  md:h-[69px] "
          />
          <img className="" src={img}></img>
          <img
            src={fgObj2}
            className="absolute right-28 -mt-[15] md:-mt-[20px] h-[38px] md:w-[72px]  md:h-[69px]"
          />
        </div>
      </div>
      <Link
        to="skills"
        spy={true}
        smooth={true}
        offset={0}
        duration={1000}
        className="cursor-pointer"
      >
        <FaChevronDown className="text-[#132238] mt-[20px] mx-auto text-[30px]" />
      </Link>
    </div>
  );
};

export default Hero;
