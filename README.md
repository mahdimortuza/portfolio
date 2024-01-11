# This is my portfolio website

- checkout the link: https://mahdi-mortuza-portfolio.netlify.app/

This is will be a well documented.

all done

https://github.com/emetdas/Youtube-code/blob/master/web%20components/React-Swiper-Slider-3D-Coverflow/final/src/App.jsx

i am building a website there i am using react swiper and i am mapping data to show them on the ui now i want the second slide to be active all time how can i do this

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

<div className="max-w-[1350px] mx-auto relative pb-[35px] md:pb-[40px] px-4 lg:px-8">
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
              <div>
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

      <div className="slider-controler">
        <div className="swiper-pagination"></div>
      </div>
    </div>

);
};

export default Projects;

this is react code

@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@500;600;700;800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Raleway:wght@500;600;700;800&display=swap");
@tailwind base;
@tailwind components;
@tailwind utilities;

/_ .swiper_container {
height: 500px;
padding: 2rem 0;
position: relative;
} _/

.swiper-slide {
width: 25rem;
height: 28rem;
position: relative;
}
.swiper-slide:nth-child(1n) {
background-color: #dfe2ff;
}

.swiper-slide:nth-child(2n) {
background-color: #ffdfdf;
}

.swiper-slide:nth-child(3n) {
background-color: #fff8df;
}
.swiper-pagination-bullet {
background-color: #7c7c7c;
width: 28px;
height: 8px;
border-radius: 2px;
transition: all 0.5s ease-in-out;
}

.swiper-pagination-bullet-active {
width: 38px;
background: linear-gradient(to right, #75b4f1, #a475f0);
}

this is css
