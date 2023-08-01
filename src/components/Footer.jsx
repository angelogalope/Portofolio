import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { AiFillPhone } from "react-icons/ai";
import { Link } from "react-scroll";

const Footer = () => {
    return (
      <div className=" bottom-0 left-0 w-full h-[80px] bg-black text-white text-[12px] md:text-[14px] py-2 px-[25px] md:px-[150px] flex md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row gap-2 md:gap-10">
          <div className="flex items-center gap-2.5">
            <BiLogoGmail className="md:w-[27px] md:h-[27px]" />
            <p className="text-[8px] sm:text-[12px]">angelo.galope03@gmail.com</p>
          </div>
          <div className="flex items-center gap-2.5">
            <AiFillPhone className="md:w-[27px] md:h-[27px]" />
            <p className="text-[8px] sm:text-[12px]">(085) 303 6214</p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-2 md:gap-5">
          <p className="text-[8px] sm:text-[12px]">© 2023 Angelo Galope. All rights reserved.</p>
          <button>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <img
                alt="Angelo2"
                className="w-[17px] md:w-[27px] h-[17px] md:h-[27px]"
                src="images/3 1.png"
              />
            </Link>
          </button>
        </div>
      </div>
    );
  };

  export default Footer;