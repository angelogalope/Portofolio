import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="w-[1324.02px] h-[73.48px] left-[297.99px] top-[23px] absolute">
        <img
          className="w-[54px] h-[54px] left-[69.01px] top-0 absolute"
          src="Logo.png"
        />
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
          <Link to="project" spy={true} smooth={true} offset={0} duration={500}>
            Projects
          </Link>
        </button>
        <button className="left-[1177.01px] top-[15px] absolute text-zinc-950 text-[20px] font-semibold hover:text-slate-400">
          <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
            Contact
          </Link>
        </button>

        <div className="w-[1324.02px] h-[0px] left-0 top-[73.48px] absolute border border-black"></div>
      </div>
  );
};

export default Navbar;
