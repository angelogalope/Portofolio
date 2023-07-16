import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="w-[1324.02px] h-[73.48px] left-[297.99px] top-[23px] absolute">
      <img
        alt="Logo"
        className="w-[54px] h-[54px] left-[69.01px] top-0 absolute"
        src="Logo.png"
      />
      {!isMobile && (
        <>
          <button className="left-[906.01px] top-[15px] absolute text-zinc-950 text-[20px] font-semibold hover:text-slate-400">
            <Link to="stack" spy={true} smooth={true} offset={0} duration={500}>
              Stack
            </Link>
          </button>
          <button className="left-[779.01px] top-[15px] absolute text-zinc-950 text-[20px] font-semibold hover:text-slate-400">
            <Link to="about" spy={true} smooth={true} offset={0} duration={500}>
              About
            </Link>
          </button>
          <button className="left-[1030.01px] top-[15px] absolute text-zinc-950 text-[20px] font-semibold hover:text-slate-400">
            <Link
              to="project"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Projects
            </Link>
          </button>
          <button className="left-[1177.01px] top-[15px] absolute text-zinc-950 text-[20px] font-semibold hover:text-slate-400">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Contact
            </Link>
          </button>
          <div className="w-[1324.02px] h-[0px] left-0 top-[73.48px] absolute border border-black"></div>
        </>
      )}

      {isMobile && (
        <div className="flex flex-row w-[768px] top-[15px] justify-end">
          {showDropdown ? (
            <AiOutlineClose
              size={25}
              onClick={toggleDropdown}
              className="cursor-pointer"
            />
          ) : (
            <AiOutlineMenu
              size={25}
              onClick={toggleDropdown}
              className="cursor-pointer"
            />
          )}
        </div>
      )}

      {showDropdown && isMobile && (
        <div className="flex flex-col w-[768px] justify-center items-center">
          <button
            className="text-zinc-950 text-[20px] font-semibold hover:text-slate-400"
            style={{ marginBottom: "1rem" }}
          >
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              About
            </Link>
          </button>
          <button
            className="text-zinc-950 text-[20px] font-semibold hover:text-slate-400"
            style={{ marginBottom: "1rem" }}
          >
            <Link
              to="stack"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Stack
            </Link>
          </button>
          <button
            className="text-zinc-950 text-[20px] font-semibold hover:text-slate-400"
            style={{ marginBottom: "1rem" }}
          >
            <Link
              to="project"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Projects
            </Link>
          </button>
          <button className="text-zinc-950 text-[20px] font-semibold hover:text-slate-400">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Contact
            </Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
