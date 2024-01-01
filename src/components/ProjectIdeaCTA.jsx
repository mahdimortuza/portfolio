import titleBg from "../assets/bg-objects/section-title-bg.svg";
import obj1 from "../assets/fg-objects/fg-2.png";

import obj2 from "../assets/fg-objects/fg-1.png";

const ProjectIdeaCTA = () => {
  return (
    <div className="bg-[#FEFAF6] max-w-[1350px] mx-auto pb-[83px] pt-[95px]">
      <div
        className="h-[450px] bg-no-repeat bg-center flex justify-center items-center relative"
        style={{ backgroundImage: `url(${titleBg})` }}
      >
        <img
          className="absolute top-16 right-[530px] w-[53px] h-[51px]"
          src={obj1}
        />
        <h1 className=" text-[#132238] text-center text-[64px] font-bold leading-[66px] font-playfair">
          Have a project idea? <br /> Discuss now!
        </h1>
        <button className="absolute bottom-[68px] text-[20px] text-white leading-[24px] font-bold bg-gradient-to-r from-[#75B4F1] to-[#A573F0] rounded-[4px] px-[16px] py-[8px]">
          Let’s Talk
        </button>
        <img
          className="absolute bottom-10 left-[300px] w-[72px] h-[69px] "
          src={obj2}
        />
      </div>
    </div>
  );
};

export default ProjectIdeaCTA;
