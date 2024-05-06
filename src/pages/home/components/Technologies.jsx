import { motion } from "framer-motion";
import css from "../../../assets/logos/css.svg";
import express from "../../../assets/logos/express.svg";
import firebase from "../../../assets/logos/firebase.svg";
import html from "../../../assets/logos/html.svg";
import js from "../../../assets/logos/js.svg";
import mongodb from "../../../assets/logos/mongodb.svg";
import mongoose from "../../../assets/logos/mongoose.svg";
import node from "../../../assets/logos/node.svg";
import react from "../../../assets/logos/react.svg";
import redux from "../../../assets/logos/redux.svg";
import tailwind from "../../../assets/logos/tailwind.svg";
import ts from "../../../assets/logos/ts.svg";

const Technologies = () => {
  return (
    <div
      name="skills"
      className="max-w-[1350px] mx-auto px-4 lg:px-8 mt-[35px] md:mt-[70px] pt-1 md:pt-[84px]"
    >
      <div className=" flex flex-col md:flex-row md:items-center md:justify-center gap-3 md:gap-8 ">
        <motion.h1
          className="font-playfair text-[38px] md:text-[64px] text-left md:text-right leading-[40px] md:leading-[66px]"
          initial={{ opacity: 0, marginLeft: -100 }}
          whileInView={{ opacity: 1, marginLeft: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          What <br /> Technologies <br /> I use
        </motion.h1>
        <motion.div
          className="w-[176px] h-[1px] md:w-[1px] md:h-[230px] bg-[#132238]"
          initial={{ opacity: 0, marginBottom: 0 }}
          whileInView={{ opacity: 1, marginBottom: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        ></motion.div>
        <motion.p
          className="w-full md:w-[612px] font-raleway text-[20px] md:text-[32px] font-medium leading-[24px] md:leading-[40px]"
          initial={{ opacity: 0, marginRight: -100 }}
          whileInView={{ opacity: 1, marginRight: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          I assure stability, security, and a unique UX with tailored front-end
          and back-end technologies.
        </motion.p>
      </div>

      {/* technologies all images */}
      <div className="flex flex-row md:flex-col justify-between md:gap-16 px-10 md:px-0 items-center mt-[40px] md:mt-[100px] mb-[160px]">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, marginBottom: -15 }}
            whileInView={{ opacity: 1, marginBottom: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="tooltip"
          >
            <motion.img
              className="w-[62px] h-[62px] md:w-[80px] md:h-[80px] cursor-pointer"
              src={html}
              whileHover={{
                scale: 1.09,
                transition: { duration: 0.1 },
              }}
            />
            <span className="tooltiptext">HTML</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, marginBottom: -15 }}
            whileInView={{ opacity: 1, marginBottom: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="tooltip"
          >
            <motion.img
              className="w-[62px] h-[62px] md:w-[80px] md:h-[80px] cursor-pointer"
              src={css}
              whileHover={{
                scale: 1.09,
                transition: { duration: 0.1 },
              }}
            />
            <span className="tooltiptext">CSS</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, marginBottom: -15 }}
            whileInView={{ opacity: 1, marginBottom: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="tooltip"
          >
            <motion.img
              whileHover={{
                scale: 1.09,
                transition: { duration: 0.1 },
              }}
              className="w-[62px] h-[62px] md:w-[80px] md:h-[80px] cursor-pointer"
              src={js}
            />
            <span className="tooltiptext">JavaScript</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, marginBottom: -15 }}
            whileInView={{ opacity: 1, marginBottom: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="tooltip"
          >
            <motion.img
              whileHover={{
                scale: 1.09,
                transition: { duration: 0.1 },
              }}
              className="w-[62px] h-[62px] md:w-[80px] md:h-[80px] cursor-pointer"
              src={react}
            />
            <span className="tooltiptext">React</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, marginBottom: -15 }}
            whileInView={{ opacity: 1, marginBottom: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="tooltip"
          >
            <motion.img
              whileHover={{
                scale: 1.09,
                transition: { duration: 0.1 },
              }}
              className="w-[62px] h-[62px] md:w-[80px] md:h-[80px] cursor-pointer"
              src={ts}
            />
            <span className="tooltiptext">TypeScript</span>
          </motion.div>
        </div>
        <div className="flex flex-col md:flex-row gap-12  md:gap-16">
          <motion.div
            initial={{ opacity: 0, marginBottom: -15 }}
            whileInView={{ opacity: 1, marginBottom: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="tooltip"
          >
            <motion.img
              whileHover={{
                scale: 1.09,
                transition: { duration: 0.1 },
              }}
              className="w-[62px] h-[62px] md:w-[80px] md:h-[80px] cursor-pointer"
              src={tailwind}
            />
            <span className="tooltiptext">Tailwind</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, marginBottom: -15 }}
            whileInView={{ opacity: 1, marginBottom: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="tooltip"
          >
            <motion.img
              whileHover={{
                scale: 1.09,
                transition: { duration: 0.1 },
              }}
              className="w-[62px] h-[62px] md:w-[80px] md:h-[80px] cursor-pointer"
              src={redux}
            />
            <span className="tooltiptext">Redux</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, marginBottom: -15 }}
            whileInView={{ opacity: 1, marginBottom: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="tooltip"
          >
            <motion.img
              whileHover={{
                scale: 1.09,
                transition: { duration: 0.1 },
              }}
              className="w-[62px] h-[62px] md:w-[80px] md:h-[80px] cursor-pointer"
              src={node}
            />
            <span className="tooltiptext">NodeJS</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, marginBottom: -15 }}
            whileInView={{ opacity: 1, marginBottom: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="tooltip"
          >
            <motion.img
              whileHover={{
                scale: 1.09,
                transition: { duration: 0.1 },
              }}
              className="w-[62px] h-[62px] md:w-[80px] md:h-[80px] cursor-pointer"
              src={mongoose}
            />
            <span className="tooltiptext">Mongoose</span>
          </motion.div>
        </div>
        <div className="flex flex-col md:flex-row gap-12  md:gap-16">
          <motion.div
            initial={{ opacity: 0, marginBottom: -15 }}
            whileInView={{ opacity: 1, marginBottom: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="tooltip"
          >
            <motion.img
              whileHover={{
                scale: 1.09,
                transition: { duration: 0.1 },
              }}
              className="w-[62px] h-[62px] md:w-[80px] md:h-[80px] cursor-pointer"
              src={mongodb}
            />
            <span className="tooltiptext">MongoDB</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, marginBottom: -15 }}
            whileInView={{ opacity: 1, marginBottom: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="tooltip"
          >
            <motion.img
              whileHover={{
                scale: 1.09,
                transition: { duration: 0.1 },
              }}
              className="w-[62px] h-[62px] md:w-[80px] md:h-[80px] cursor-pointer"
              src={express}
            />
            <span className="tooltiptext">ExpressJS</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, marginBottom: -15 }}
            whileInView={{ opacity: 1, marginBottom: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="tooltip"
          >
            <motion.img
              whileHover={{
                scale: 1.09,
                transition: { duration: 0.1 },
              }}
              className="w-[62px] h-[62px] md:w-[80px] md:h-[80px] cursor-pointer"
              src={firebase}
            />
            <span className="tooltiptext">Firebase</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
