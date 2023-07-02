import { Link } from "react-scroll";

function App() {
  return (
    <div id="home" className="w-[1903px] h-[2706px] bg-white">
      {/* Navigation Bar */}
      <div className="w-[1324.02px] h-[73.48px] left-[297.99px] top-[23px] absolute">
        <button className="left-[906.01px] top-[15px] absolute text-zinc-950 text-[20px] font-semibold hover:text-slate-400">
          <Link to="stack" spy={true} smooth={true} offset={0} duration={500}>Stack</Link>
        </button>
        <button className="left-[779.01px] top-[15px] absolute text-zinc-950 text-[20px] font-semibold hover:text-slate-400">
          <Link to="about" spy={true} smooth={true} offset={0} duration={500}>About</Link>
        </button>
        <button className="left-[1030.01px] top-[15px] absolute text-zinc-950 text-[20px] font-semibold hover:text-slate-400">
          <Link to="project" spy={true} smooth={true} offset={0} duration={500}>Projects</Link>
        </button>
        <button className="left-[1177.01px] top-[15px] absolute text-zinc-950 text-[20px] font-semibold hover:text-slate-400">
          <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>Contact</Link>
        </button>
        <img
          alt="Logo"
          className="w-[54px] h-[54px] left-[69.01px] top-0 absolute"
          src="Logo.png"
        />
        <div className="w-[1324.02px] h-[0px] left-0 top-[73.48px] absolute border border-black"></div>
      </div>

      {/* Hero Page */}
      <div className="w-[564px] h-[280px] left-[367px] top-[272px] absolute">
        <div class="w-[649px] h-[149px] left-0 top-[69px] absolute text-zinc-950 text-[64px] font-extrabold">
          <h1>
            Information &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;Technology
          </h1>
        </div>
        <div class="w-[564px] h-[45px] top-[275px] absolute text-zinc-950 text-[20px] font-normal">
          A newbie tech dweeb determined to dive into the world of technology
          with passion and drive.
        </div>
        <div className="w-[410px] h-[34px] left-0 top-[35px] absolute text-blue-900 text-[26px] font-semibold">
          Angelo Galope, pursuing BS in
        </div>
        <div className="w-[114px] h-[35px] left-0 top-0 absolute text-gray-400 text-[26px] font-medium">
          Hi! I am
        </div>
      </div>
        <Link to="about" spy={true} smooth={true} offset={0} duration={500} class="w-[179px] h-[49px] left-[370px] top-[638px] absolute flex items-center justify-center bg-black rounded-lg space-x-2 hover:scale-110">
          <img alt="MeIcon" class="w-6 h-6 ml-2" src="Me(icon).png" />
          <div class="text-white text-[20px] font-normal">
            About Me
          </div>
      </Link>
      <div className="left-[1001px] top-[234px] absolute justify-start items-center inline-flex">
        <img
          alt="Angelo2"
          className="w-[503px] h-[503px]"
          src="Untitled design (7) 1.png"
        />
        <div className="flex-col justify-start items-start gap-6 inline-flex">
          <a href="https://www.facebook.com/gzelogal/">
            <img
              alt="Angelo2"
              className="w-[49px] h-[49px] hover:scale-110"
              src="Facebook.png"
            />
          </a>
          <a href="https://www.instagram.com/datboijero/">
            <img
              alt="Angelo2"
              className="w-[49px] h-[49px] hover:scale-110"
              src="Instagram.png"
            />
          </a>
          <a href="https://www.tiktok.com/@gzelo_o">
            <img
              alt="Angelo2"
              className="w-[49px] h-[49px] hover:scale-110"
              src="TikTok.png"
            />
          </a>
          <a href="https://www.youtube.com/channel/UCQbPRkGcJmO6wkKQ0wFwp3Q">
            <img
              alt="Angelo2"
              className="w-[49px] h-[49px] hover:scale-110"
              src="YouTube.png"
            />
          </a>
          <a href="https://github.com/angelogalope">
            <img
              alt="Angelo2"
              className="w-[49px] h-[49px] hover:scale-110"
              src="GitHub.png"
            />
          </a>
        </div>
      </div>

      {/* About Section */}
      <div
        id="about"
        className="left-[452px] top-[940px] absolute flex flex-row"
      >
        <img
          alt="Angelo2"
          className="w-[451px] h-[451px]"
          src="Untitled design (6) 1.png"
        />
        <div className="w-[564px] relative flex flex-col justify-center items-start space-y-10">
          <div className="w-[304px] h-[70px] text-[64px] font-semibold">
            About me
          </div>
          <div className="w-[564px] h-[172px] text-[20px] font-normal">
            As a second-year student at Caraga State University, I find myself
            pursuing a Bachelor of Science degree in Information Technology.
            Although it wasn't initially my area of interest, I've been
            influenced by the people around me who are enthusiastic about
            technology. Their passion and excitement for the field inspired me
            to explore Information Technology further.
          </div>
        </div>
      </div>

      {/* Stacks Section */}
      <div className="w-[1040px] h-[388px] left-[440px] top-[1527px] absolute">
        <div
          id="stack"
          className="w-[406px] h-[52px] left-[304px] top-0 absolute text-zinc-950 text-[44px] font-semibold"
        >
          Technology Stacks
        </div>
        <div className="w-[874px] h-[72px] left-[70px] top-[68px] absolute text-center text-[20px] font-normal">
          While proficient in some areas, I'm actively learning and practicing,
          like diving deeper into advanced JavaScript concepts, as well as
          mastering React's technicalities and honing my skills into Tailwind
          CSS for efficient and responsive web development.
        </div>
        <div class="w-[1040px] h-[214px] left-0 top-[174px] absolute justify-center items-center mt-10">
          <div class="flex justify-center items-center gap-[99px]">
            <img alt="Angelo2" className="w-[88px] h-[88px] hover:scale-110" src="Mysql.png" />
            <img alt="Angelo2" className="w-[88px] h-[88px] hover:scale-110" src="Figma.png" />
            <img alt="Angelo2" className="w-[88px] h-[88px] hover:scale-110" src="Java.png" />
            <img alt="Angelo2" className="w-[88px] h-[88px] hover:scale-110" src="React.png" />
            <img
              alt="Angelo2"
              className="w-[88px] h-[88px] hover:scale-110"
              src="devicon_tailwindcss.png"
            />
          </div>
          <div className="flex justify-center items-center gap-[99px] mt-10">
            <img alt="Angelo2" className="w-[88px] h-[88px] hover:scale-110" src="Css3.png" />
            <img alt="Angelo2" className="w-[88px] h-[88px] hover:scale-110" src="Html5.png" />
            <img
              alt="Angelo2"
              className="w-[88px] h-[88px] hover:scale-110"
              src="Javascript.png"
            />
            <img alt="Angelo2" className="w-[88px] h-[88px] hover:scale-110" src="C.png" />
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="w-[874px] h-[140px] left-[519px] top-[2053px] absolute">
        <div
            id="project"
            className="w-[252px] h-[52px] left-[302px] top-0 absolute text-zinc-950 text-[44px] font-semibold"
          >
          My Projects
        </div>
        <div className="w-[874px] h-[72px] left-0 top-[68px] absolute text-center text-zinc-950 text-[20px] font-normal">
          {" "}
          I worked on diverse school projects involving a mix of programming
          languages and frameworks. I actively sought to enhance my skills and
          knowledge, making each project a valuable learning experience.
        </div>
      </div>

      {/* Footer */}
      <div
        id="contact"
        className="w-[1903px] h-[120px] left-0 top-[2706px] absolute bg-gray-400"
      />
      <button>
        <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
          <img
            alt="Angelo2"
            className="w-[57px] h-[57px] left-[1708px] top-[2736px] absolute"
            src="3 1.png"
          />
        </Link>
      </button>
      <div className="left-[155px] top-[2736px] absolute justify-end items-center inline-flex">
        <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
          <img
            alt="Angelo2"
            className="w-[57px] h-[57px]"
            src="Gmail Logo.png"
          />
          <div className="text-white text-[20px] font-semibold">
            angelo.galope03@gmail.com
          </div>
        </div>
      </div>
      <div className="left-[533px] top-[2736px] absolute justify-start items-center gap-2.5 inline-flex">
        <img alt="Angelo2" className="w-[57px] h-[57px]" src="Phone.png" />
        <div className="text-white text-[20px] font-semibold">
          (085) 303 6214
        </div>
      </div>

    </div>
  );
}

export default App;
