import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import logo from "../assets/logo/logo.svg";
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const navList = (
    <ul className="font-raleway font-semibold text-lg flex gap-5 md:gap-14 text-[#222A35]">
      <li>
        <a className="px-3 py-2" href="#about">
          About
        </a>
      </li>
      <li>
        <a className="px-3 py-2" href="#">
          Skills
        </a>
      </li>
      <li>
        <a className="px-3 py-2" href="#">
          Work
        </a>
      </li>

      <li>
        <a className="px-3 py-2" href="#">
          Contact
        </a>
      </li>
    </ul>
  );

  const social = (
    <ul className="flex item-center justify-center gap-16 ">
      <li>
        <a href="">
          <FaLinkedinIn className="w-6 h-5 text-[#222A35]" />
        </a>
      </li>

      <li>
        <a href="">
          <FaGithub className="w-6 h-5 text-[#222A35]" />
        </a>
      </li>

      <li>
        <a href="">
          <RiTwitterXLine className="w-6 h-5 text-[#222A35]" />
        </a>
      </li>
    </ul>
  );
  return (
    <div className="pb-10 flex flex-col items-center">
      <img className="w-12 md:w-16 h-9 md:h-12" src={logo}></img>

      <div className="mt-8">{navList}</div>
      <div className="mx-auto mt-8"> {social}</div>

      <h1 className=" mt-[76px] font-raleway text-[15px] font-[400] text-center text-[#5C606C]">
        &copy; Copyright Mahdi Mortuza, {year}
      </h1>
    </div>
  );
};

export default Footer;
