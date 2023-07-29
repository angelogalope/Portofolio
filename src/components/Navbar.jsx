import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiMenu } from "react-icons/hi";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`sticky top-0 ${darkMode ? "bg-dark-300 text-white transition-all duration-500" : "bg-white transition-all duration-500"}`}>
      <div className="flex items-center justify-between">
        <img
          src={darkMode ? "images/3 1.png" : "images/Logo.png"}
          alt="logo"
          className="w-[34px] h-[34px] p-1"
        />

        {/* Mobile Menu */}
        {isMobile && (
          <button
          className={`text-[14px] font-semibold hover:text-slate-400 ${
            darkMode ? "text-white" : "text-black"
          }`}
            onClick={toggleMenu}
          >
            <HiMenu size={30} />
          </button>
        )}

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex gap-20">
            <button className="text-[14px] font-semibold hover:text-slate-400">
              <Link to="about" spy={true} smooth={true} offset={0} duration={500}>
                About
              </Link>
            </button>
            <button className="text-[14px] font-semibold hover:text-slate-400">
              <Link to="stack" spy={true} smooth={true} offset={0} duration={500}>
                Stack
              </Link>
            </button>
            <button className="text-[14px] font-semibold hover:text-slate-400">
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
            <button className="text-[14px] font-semibold hover:text-slate-400">
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

        {/* Dark Mode Toggle Button */}
        <button onClick={toggleDarkMode}>
          {darkMode ? <BsFillSunFill size={30} className="p-1 text-yellow-300 transition-all duration-500"/> : <BsFillMoonFill size={30} className="p-1 transition-all duration-500"/>}
        </button>
      </div>

      {isMobile && isMenuOpen && (
          <div className="absolute top-12 left-0 w-full bg-inherit shadow-md py-2 rounded-b-lg border">
            <div className="flex flex-col items-center">
              <button className="text-[14px] hover:text-slate-400 mb-2 border-b w-full">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </button>
              <button className="text-[14px] hover:text-slate-400 mb-2 border-b w-full">
                <Link
                  to="stack"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={toggleMenu}
                >
                  Stack
                </Link>
              </button>
              <button className="text-[14px] hover:text-slate-400 mb-2 border-b w-full">
                <Link
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={toggleMenu}
                >
                  Projects
                </Link>
              </button>
              <button className="text-[14px] hover:text-slate-400">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </button>
            </div>
          </div>
        )}

      <div className="flex border border-black"></div>
    </div>
  );
};

export default Navbar;
