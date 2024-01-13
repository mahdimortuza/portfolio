import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import objBlue from "../assets/bg-objects/obj-blue.svg";
import sliderObj from "../assets/bg-objects/sliderObj.svg";
import console from "../assets/projects/1.png";
import uniaid from "../assets/projects/2.png";
import coco from "../assets/projects/3.png";

const Projects = () => {
  const sliderElements = [
    {
      header: "UniAid",
      des: "Event-based crowdfunding website.",
      img: console,
    },
    {
      header: "UniAid",
      des: "Event-based crowdfunding website.",
      img: uniaid,
    },
    {
      header: "UniAid",
      des: "Event-based crowdfunding website.",
      img: coco,
    },
  ];

  return (
    <div
      name="projects"
      className="max-w-[1350px] mx-auto relative pb-[35px] md:pb-[40px] px-4 lg:px-8"
    >
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
          <div className="relative" key={sliderElement.header}>
            <SwiperSlide>
              <div className="">
                <img
                  className="h-[300px] md:h-[330px] w-full"
                  src={sliderElement.img}
                />
                <div className="absolute bottom-2 px-[10px]">
                  <h3 className=" font-playfair text-[#132238] text-[18px] md:text-[22px] font-bold">
                    {sliderElement.header}
                  </h3>
                  <p className="  text-[#556070] font-raleway md:text-[16px] ">
                    {sliderElement.des}
                  </p>

                  {/* button  */}
                  <div className="text-[#4285F4] flex gap-[5px] md:gap-[14px] font-raleway text-[14px] md:text-[17px] font-semibold mt-2">
                    {/* <a
                      className=" border-[2px] border-[#4285F4] px-[6px] py-[3px] md:px-[10px] md:py-[5px] hover:bg-gradient-to-r from-[#75B4F1] to-[#A573F0] hover:text-white rounded-[4px]"
                      href="/"
                    >
                      Technologies
                    </a> */}
                    <a
                      className=" border-[2px] border-[#4285F4] px-[6px] py-[3px] md:px-[10px] md:py-[5px] hover:bg-gradient-to-r from-[#75B4F1] to-[#A573F0] hover:text-white rounded-[4px]"
                      href="/"
                    >
                      Source Code
                    </a>
                    <a
                      className=" border-[2px] border-[#4285F4] px-[6px] py-[3px] md:px-[10px] md:py-[5px] hover:bg-gradient-to-r from-[#75B4F1] to-[#A573F0] hover:text-white rounded-[4px]"
                      href="/"
                    >
                      Live Site
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
        {/* <div>
          
        </div> */}
      </Swiper>

      <div className="slider-controler">
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default Projects;
