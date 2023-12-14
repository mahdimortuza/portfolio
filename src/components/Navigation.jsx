import { IconButton, MobileNav, Navbar } from "@material-tailwind/react";
import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiBars2 } from "react-icons/hi2";
import { RiTwitterXLine } from "react-icons/ri";
import logo from "../assets/logo/logo.svg";

const StickyNavbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const navList = (
    <ul className="font-raleway font-semibold text-lg mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center text-[#222A35]">
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
    <ul className="flex gap-6 md:gap-9 ">
      <li className="hidden md:block"></li>
      <li className="hidden md:block"></li>
      <li className="hidden md:block"></li>

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
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-[#FEFAF6]">
      <div className="flex items-center justify-between text-black max-w-[1350px] mx-auto">
        <div className="mr-4 hidden lg:block">{navList}</div>

        <img src={logo}></img>

        <div className="flex  items-center gap-4">
          <div className="hidden md:block">{social}</div>

          <IconButton
            className="ml-auto text-inherit bg-transparent lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <HiBars2 className=" h-[34px] w-[34px] " />
            ) : (
              <HiBars2 className=" h-[34px] w-[34px] " />
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>
        <div> {navList}</div>
        <div className="">{social}</div>
      </MobileNav>
    </Navbar>
  );
};

export default StickyNavbar;
