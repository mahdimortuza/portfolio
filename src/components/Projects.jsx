import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import objBlue from "../assets/bg-objects/obj-blue.svg";
import sliderObj from "../assets/bg-objects/sliderObj.svg";

const Projects = () => {
  const sliderElements = [
    {
      header: "UniAid",
      des: "Event-based crowdfunding website.",
    },
    {
      header: "UniAid",
      des: "Event-based crowdfunding website.",
    },
    {
      header: "UniAid",
      des: "Event-based crowdfunding website.",
    },
  ];

  return (
    <div className="max-w-[1350px] mx-auto relative pb-[90px]">
      <img
        className="absolute  md:top-0 -right-16 md:right-0 -mt-80 md:-mt-96"
        src={objBlue}
      />
      <h2 className="font-playfair text-[64px] text-center leading-[66px] mt-[100px]">
        Some of my recent <br /> projects
      </h2>
      <img className="absolute top-0 left-0" src={sliderObj} />

      {/* swiper slider section starts here  */}
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper mt-8"
      >
        {sliderElements.map((sliderElement) => (
          <div key={sliderElement.header}>
            <SwiperSlide>
              <div>
                <h3>{sliderElement.header}</h3>
                <p>{sliderElement.des}</p>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
