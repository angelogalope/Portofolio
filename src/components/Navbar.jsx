import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
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
    <div className="sticky top-0 bg-white">
      <div className="flex items-center justify-between">
        <img src="images/Logo.png" alt="logo" className="w-[34px] h-[34px] p-1" />

        {/* Mobile Menu */}
        {isMobile && (
          <button
            className="text-zinc-950 text-[14px] font-semibold hover:text-slate-400 sticky"
            onClick={toggleMenu}
          >
            <HiMenu size={20} />
          </button>
        )}

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex gap-20">
            <button className="text-zinc-950 text-[14px] font-semibold hover:text-slate-400">
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
            <button className="text-zinc-950 text-[14px] font-semibold hover:text-slate-400">
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
            <button className="text-zinc-950 text-[14px] font-semibold hover:text-slate-400">
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
            <button className="text-zinc-950 text-[14px] font-semibold hover:text-slate-400">
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

        {/* Dropdown Menu */}
        {isMobile && isMenuOpen && (
          <div className="absolute top-12 left-0 w-full bg-white shadow-md py-2">
            <div className="flex flex-col items-center">
              <button className="text-zinc-950 text-[14px] font-semibold hover:text-slate-400 mb-2">
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
              <button className="text-zinc-950 text-[14px] font-semibold hover:text-slate-400 mb-2">
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
              <button className="text-zinc-950 text-[14px] font-semibold hover:text-slate-400 mb-2">
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
              <button className="text-zinc-950 text-[14px] font-semibold hover:text-slate-400">
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
      </div>

      <div className="flex border border-black"></div>
    </div>
  );
};

export default Navbar;
