import { Link } from "react-scroll";

const Navbar = () => {

  return (
    <div>
      <div className="flex items-center justify-between h-10 top-[15px]  pb-5">
          <img src="images/Logo.png" alt="logo" className="w-[44px] h-[44px]" />
          <div className="flex gap-20">
            <button className="top-[15px] text-zinc-950 text-[14px] font-semibold hover:text-slate-400">
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
            <button className="top-[15px] text-zinc-950 text-[14px] font-semibold hover:text-slate-400">
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
            <button className="top-[15px] text-zinc-950 text-[14px] font-semibold hover:text-slate-400">
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
            <button className="top-[15px] text-zinc-950 text-[14px] font-semibold hover:text-slate-400">
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
        </div>
        <div className="flex border border-black"></div>
    </div>
    
  );
};

export default Navbar;
