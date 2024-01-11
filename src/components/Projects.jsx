// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
    <div className="max-w-[1350px] mx-auto relative pb-[35px] md:pb-[90px] px-4 lg:px-8">
      <img
        className="absolute  md:top-0 -right-0 md:right-0 -mt-80 md:-mt-96"
        src={objBlue}
      />
      <h2 className="font-playfair text-[38px] md:text-[64px] text-left md:text-center leading-[40px] md:leading-[66px] mt-[100px]">
        Some of my recent <br /> projects
      </h2>
      <img className="absolute top-0 left-0" src={sliderObj} />

      {/* swiper slider section starts here  */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        // loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="swiper_container mt-10"
      >
        {sliderElements.map((sliderElement) => (
          <div key={sliderElement.header}>
            <SwiperSlide>
              <div className="">
                <h3 className="px-4 font-playfair text-[32px] md:text-[36px] font-bold">
                  {sliderElement.header}
                </h3>
                <p className="px-4 text-[#556070] font-raleway text-[20px] md:text-[22px] font-medium">
                  {sliderElement.des}
                </p>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
