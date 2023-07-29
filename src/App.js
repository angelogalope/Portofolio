import "./App.css";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <div className="flex flex-row py-[90px]  justify-between">
      <div className="flex flex-col w-[595px]">
        <div className="text-gray-400 text-[20px] font-medium">Hi! I am</div>
        <div className=" text-blue-900 text-[20px] font-semibold">
          Angelo Galope, pursuing BS in
        </div>
        <div className="text-zinc-950 text-[48px] font-extrabold text-shadow-md">
          <h1 className="">
            Information &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;Technology
          </h1>
        </div>
        <div class=" text-zinc-950 text-[14px] font-norma py-5">
          A newbie tech dweeb determined to dive into the world of
          <br />
          technology with passion and drive.
        </div>
        <button>
          <Link
            to="about"
            smooth={true}
            offset={0}
            duration={500}
            class="w-[129px] h-[39px] flex items-center justify-center bg-black rounded-lg space-x-2 hover:scale-110 duration-300"
          >
            <img alt="MeIcon" class="w-4 h-4" src="images/Me(icon).png" />
            <div class="text-white text-[14px] font-normal">About Me</div>
          </Link>
        </button>
      </div>

      <div className="flex">
        <img
          alt="Angelo2"
          className="w-[303px] h-[303px]"
          src="images/Untitled design (7) 1.png"
        />
        <div className="flex flex-col gap-6">
          <a href="https://www.facebook.com/gzelogal/">
            <img
              alt="Angelo2"
              className="w-[38px] h-[38px] hover:scale-110 duration-300"
              src="images/Facebook.png"
            />
          </a>
          <a href="https://www.instagram.com/datboijero/">
            <img
              alt="Angelo2"
              className="w-[38px] h-[38px] hover:scale-110 duration-300"
              src="images/Instagram.png"
            />
          </a>
          <a href="https://www.tiktok.com/@gzelo_o">
            <img
              alt="Angelo2"
              className="w-[38px] h-[38px] hover:scale-110 duration-300"
              src="images/TikTok.png"
            />
          </a>
          <a href="https://www.youtube.com/channel/UCQbPRkGcJmO6wkKQ0wFwp3Q">
            <img
              alt="Angelo2"
              className="w-[38px] h-[38px] hover:scale-110 duration-300"
              src="images/YouTube.png"
            />
          </a>
          <a href="https://github.com/angelogalope">
            <img
              alt="Angelo2"
              className="w-[38px] h-[38px] hover:scale-110 duration-300"
              src="images/GitHub.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div id="home">
      <div className="flex flex-col w-full h-full pt-5 px-[150px]">
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

        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <div id="about" className="flex flex-row justify-between  py-[150px]">
          <img
            alt="Angelo2"
            className="w-[303px] h-[303px]"
            src="images/Untitled design (6) 1.png"
          />
          <div className="w-[564px] relative flex flex-col justify-center items-start space-y-10">
            <div className="w-[304px] h-[70px] text-[44px] font-semibold">
              About me
            </div>
            <div className="w-[564px] h-[172px] text-[16px] font-normal">
              As a second-year student at Caraga State University, I find myself
              pursuing a Bachelor of Science degree in Information Technology.
              Although it wasn't initially my area of interest, I've been
              influenced by the people around me who are enthusiastic about
              technology. Their passion and excitement for the field inspired me
              to explore Information Technology further.
            </div>
          </div>
        </div>

        {/* Stack Section */}
        <div className="flex flex-col items-center py-[150px]">
          <div id="stack" className="text-zinc-950 text-[44px] font-semibold">
            Technology Stacks
          </div>
          <div className="text-center text-[16px] font-normal">
            While proficient in some areas, I'm actively learning and
            practicing, like diving deeper into advanced JavaScript concepts, as
            well as mastering React's technicalities and honing my skills into
            Tailwind CSS for efficient and responsive web development.
          </div>
          <div class="justify-center items-center mt-10">
            <div class="flex justify-center items-center gap-[99px]">
              <img
                alt="Angelo2"
                className="w-[55px] h-[55px] hover:scale-110 duration-300"
                src="images/Mysql.png"
              />
              <img
                alt="Angelo2"
                className="w-[55px] h-[55px] hover:scale-110 duration-300"
                src="images/Figma.png"
              />
              <img
                alt="Angelo2"
                className="w-[55px] h-[55px] hover:scale-110 duration-300"
                src="images/Java.png"
              />
              <img
                alt="Angelo2"
                className="w-[55px] h-[55px] hover:scale-110 duration-300"
                src="images/React.png"
              />
              <img
                alt="Angelo2"
                className="w-[55px] h-[55px] hover:scale-110 duration-300"
                src="images/devicon_tailwindcss.png"
              />
            </div>
            <div className="flex justify-center items-center gap-[99px] mt-10">
              <img
                alt="Angelo2"
                className="w-[55px] h-[55px] hover:scale-110 duration-300"
                src="images/Css3.png"
              />
              <img
                alt="Angelo2"
                className="w-[55px] h-[55px] hover:scale-110 duration-300"
                src="images/Html5.png"
              />
              <img
                alt="Angelo2"
                className="w-[55px] h-[55px] hover:scale-110 duration-300"
                src="images/Javascript.png"
              />
              <img
                alt="Angelo2"
                className="w-[55px] h-[55px] hover:scale-110 duration-300"
                src="images/C.png"
              />
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="flex flex-col items-center py-[150px] space-y-10">
          <div
            id="project"
            className="wtext-zinc-950 text-[44px] font-semibold"
          >
            My Projects
          </div>
          <div className="text-zinc-950 text-[16px] font-normal text-center">
            {" "}
            I worked on diverse school projects involving a mix of programming
            languages and frameworks. I actively sought to enhance my skills and
            knowledge, making each project a valuable learning experience.
          </div>
          <div className="flex justify-center border rounded-lg w-full h-[250px] text-gray-500 py-10">
            ---Personal Projects Here---
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        id="contact"
        className="flex justify-between px-[150px] space-x-10 w-full h-[70px] top-[2706px] bg-black"
      >
        <div className="flex gap-10">
          <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
            <img
              alt="Angelo2"
              className="w-[27px] h-[27px]"
              src="images/Gmail Logo.png"
            />
            <div className="text-white text-[14px] font-semibold">
              angelo.galope03@gmail.com
            </div>
          </div>
          <div className="top-[2736px]justify-start items-center gap-2.5 inline-flex">
            <img
              alt="Angelo2"
              className="w-[27px] h-[27px]"
              src="images/Phone.png"
            />
            <div className="text-white text-[14px] font-semibold">
              (085) 303 6214
            </div>
          </div>
        </div>
        <button className="flex items-center">
            <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
              <img
                alt="Angelo2"
                className="w-[27px] h-[27px] left-[1708px] top-[2736px]"
                src="images/3 1.png"
              />
            </Link>
          </button>
      </div>
    </div>
  );
}

export default App;
