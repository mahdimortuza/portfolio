import css from "../assets/logos/css.svg";
import express from "../assets/logos/express.svg";
import firebase from "../assets/logos/firebase.svg";
import html from "../assets/logos/html.svg";
import js from "../assets/logos/js.svg";
import mongodb from "../assets/logos/mongodb.svg";
import mongoose from "../assets/logos/mongoose.svg";
import node from "../assets/logos/node.svg";
import react from "../assets/logos/react.svg";
import redux from "../assets/logos/redux.svg";
import tailwind from "../assets/logos/tailwind.svg";
import ts from "../assets/logos/ts.svg";

const Technologies = () => {
  return (
    <div
      name="skills"
      className="max-w-[1350px] mx-auto px-4 lg:px-8 mt-[35px] md:mt-[70px] pt-1 md:pt-[84px]"
    >
      <div className=" flex flex-col md:flex-row md:items-center md:justify-center gap-3 md:gap-8 ">
        <h1 className="font-playfair text-[38px] md:text-[64px] text-left md:text-right leading-[40px] md:leading-[66px]">
          What <br /> Technologies <br /> I use
        </h1>
        <div className="w-[176px] h-[1px] md:w-[1px] md:h-[230px] bg-[#132238]"></div>
        <p className="w-full md:w-[612px] font-raleway text-[20px] md:text-[32px] font-medium leading-[24px] md:leading-[40px]">
          I assure stability, security, and a unique UX with tailored front-end
          and back-end technologies.
        </p>
      </div>
      <div className="flex flex-row md:flex-col justify-between md:gap-16 px-10 md:px-0 items-center mt-[40px] md:mt-[100px] mb-[160px]">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          <div className="tooltip">
            <img
              className="w-[62px] h-[62px] md:w-[80px] md:h-[80px]"
              src={html}
            />
            <span className="tooltiptext">HTML</span>
          </div>

          <div className="tooltip">
            <img
              className="w-[62px] h-[62px] md:w-[80px] md:h-[80px]"
              src={css}
            />
            <span className="tooltiptext">CSS</span>
          </div>

          <div className="tooltip">
            <img
              className="w-[62px] h-[62px] md:w-[80px] md:h-[80px]"
              src={js}
            />
            <span className="tooltiptext">JavaScript</span>
          </div>

          <div className="tooltip">
            <img
              className="w-[62px] h-[62px] md:w-[80px] md:h-[80px]"
              src={react}
            />
            <span className="tooltiptext">React</span>
          </div>
          <div className="tooltip">
            <img
              className="w-[62px] h-[62px] md:w-[80px] md:h-[80px]"
              src={ts}
            />
            <span className="tooltiptext">TypeScript</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-12  md:gap-16">
          <div className="tooltip">
            <img
              className="w-[62px] h-[62px] md:w-[80px] md:h-[80px]"
              src={tailwind}
            />
            <span className="tooltiptext">Tailwind</span>
          </div>
          <div className="tooltip">
            <img
              className="w-[62px] h-[62px] md:w-[80px] md:h-[80px]"
              src={redux}
            />
            <span className="tooltiptext">Redux</span>
          </div>
          <div className="tooltip">
            <img
              className="w-[62px] h-[62px] md:w-[80px] md:h-[80px]"
              src={node}
            />
            <span className="tooltiptext">NodeJS</span>
          </div>
          <div className="tooltip">
            <img
              className="w-[62px] h-[62px] md:w-[80px] md:h-[80px]"
              src={mongoose}
            />
            <span className="tooltiptext">Mongoose</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-12  md:gap-16">
          <div className="tooltip">
            <img
              className="w-[62px] h-[62px] md:w-[80px] md:h-[80px]"
              src={mongodb}
            />
            <span className="tooltiptext">MongoDB</span>
          </div>
          <div className="tooltip">
            <img
              className="w-[62px] h-[62px] md:w-[80px] md:h-[80px]"
              src={express}
            />
            <span className="tooltiptext">ExpressJS</span>
          </div>
          <div className="tooltip">
            <img
              className="w-[62px] h-[62px] md:w-[80px] md:h-[80px]"
              src={firebase}
            />
            <span className="tooltiptext">Firebase</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
