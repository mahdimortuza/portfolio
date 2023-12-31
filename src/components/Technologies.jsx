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
    <div className="max-w-[1350px] mx-auto mt-[70px] pt-[84px]">
      <div className=" flex items-center justify-center gap-8 ">
        <h1 className="font-playfair text-[64px] text-right leading-[66px]">
          What <br /> Technologies <br /> I use
        </h1>
        <div className="w-[1px] h-[230px] bg-[#132238]"></div>
        <p className="w-[612px] font-raleway text-[32px] font-medium leading-[40px]">
          I assure stability, security, and a unique UX with tailored front-end
          and back-end technologies.
        </p>
      </div>
      <div className="flex flex-col gap-16 items-center mt-[100px] mb-[160px]">
        <div className="flex gap-16">
          <img src={html}></img>
          <img src={css}></img>
          <img src={js}></img>
          <img src={react}></img>
          <img src={ts}></img>
          <img src={tailwind}></img>
          <img src={redux}></img>
        </div>
        <div className="flex gap-16">
          <img src={node}></img>
          <img src={mongoose}></img>
          <img src={mongodb}></img>
          <img src={express}></img>
          <img src={firebase}></img>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
