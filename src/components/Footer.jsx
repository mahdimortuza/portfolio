import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { Link } from "react-scroll";
import logo from "../assets/logo/logo.svg";
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const navList = (
    <ul className="font-raleway font-semibold text-lg flex gap-5 md:gap-14 text-[#222A35] ">
      <li>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          className="px-3 py-2 cursor-pointer"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          className="px-3 py-2 cursor-pointer"
          href="#"
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-60}
          duration={1000}
          className="px-3 py-2 cursor-pointer"
          href="#"
        >
          Work
        </Link>
      </li>

      <li>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          className="px-3 py-2 cursor-pointer"
          href="#"
        >
          Contact
        </Link>
      </li>
    </ul>
  );

  const social = (
    <ul className="flex item-center justify-center gap-16 ">
      <li>
        <a href="https://www.linkedin.com/in/mahdi-mortuza">
          <FaLinkedinIn className="w-6 h-5 text-[#222A35]" />
        </a>
      </li>

      <li>
        <a href="https://github.com/mahdimortuza">
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
    <div className="pb-10 flex flex-col items-center mt-[60px] md:mt-[120px]">
      <a href="/">
        <img className="w-12 md:w-16 h-9 md:h-12" src={logo}></img>
      </a>
      <div className="mt-8">{navList}</div>
      <div className="mx-auto mt-8"> {social}</div>

      <h1 className=" mt-[76px] font-raleway text-[15px] font-[400] text-center text-[#5C606C]">
        &copy; Copyright Mahdi Mortuza, {year}
      </h1>
    </div>
  );
};

export default Footer;
