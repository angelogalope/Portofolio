import { useState } from "react";
import "./App.css";
import { Link } from "react-scroll";
import { BsFacebook, BsYoutube, BsGithub } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { AiFillInstagram, AiFillPhone } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import Navbar from "./components/Navbar";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse py-[30px] sm:py-[60px] md:py-[90px]  justify-between">
      <div className="flex flex-col md:flex-row items-center">
        <img
          alt="Angelo2"
          className=" w-[343px] sm:w-[363px] md:w-[223px] lg:w-[303px]"
          src="images/Untitled design (7) 1.png"
        />
        <div className="flex flex-row items-center md:flex-col gap-6 py-5">
          <a href="https://www.facebook.com/gzelogal/">
            <BsFacebook className="w-[36px] h-[36px] hover:scale-110 duration-300"/>
          </a>
          <a href="https://www.instagram.com/datboijero/">
            <AiFillInstagram className="w-[36px] h-[36px] hover:scale-110 duration-300"/>
          </a>
          <a href="https://www.tiktok.com/@gzelo_o">
            <FaTiktok className="w-[34px] h-[34px] hover:scale-110 duration-300"/>
          </a>
          <a href="https://www.youtube.com/channel/UCQbPRkGcJmO6wkKQ0wFwp3Q">
            <BsYoutube className="w-[34px] h-[34px] hover:scale-110 duration-300"/>
          </a>
          <a href="https://github.com/angelogalope">
            <BsGithub className="w-[34px] h-[34px] hover:scale-110 duration-300"/>
          </a>
        </div>
      </div>

      <div className="flex flex-col sm:w-[395px] md:w-[495px] lg:w-[595px]">
        <div className="text-gray-400 sm:text-[20px] font-medium">Hi! I am</div>
        <div className="  sm:text-[20px] font-semibold">
          Angelo Galope, pursuing BS in
        </div>
        <div className="text-[30px] sm:text-[48px] font-extrabold text-shadow-md">
          <h1 className="">
            Information <span className="ml-[100px] md:ml-[160px]">Technology</span>
          </h1>
        </div>
        <div class="text-[12px] sm:text-[18px] py-5">
          A newbie tech dweeb determined to dive into the world of
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
    </div>
  );
};

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  
  return (
    <div id="home" className={`${darkMode ? "bg-dark-300 text-white" : "bg-white"}`}>
      <div className="flex flex-col w-full h-full pt-5 px-[25px] md:px-[150px]">

        {/* Navigation Bar */}
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <div id="about" className="flex flex-col sm:flex-row  justify-between items-center py-[50px] md:py-[150px]">
          <img
            alt="Angelo2"
            className="w-[303px] h-[303px]"
            src="images/Untitled design (6) 1.png"
          />
          <div className="flex flex-col sm:justify-center items-center sm:items-start pt-5 md:space-y-10">
            <div className="h-[70px] text-[30px] md:text-[44px] font-semibold">
              About me
            </div>
            <div className="text-[12px] md:text-[16px] font-normal text-center md:text-start">
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
        <div className="flex flex-col items-center text-center py-[150px]">
          <div id="stack" className="text-[30px] md:text-[44px] font-semibold">
            Technology Stacks
          </div>
          <div className="text-center text-[12px] md:text-[16px] font-normal pt-[30px]">
            While proficient in some areas, I'm actively learning and
            practicing, like diving deeper into advanced JavaScript concepts, as
            well as mastering React's technicalities and honing my skills into
            Tailwind CSS for efficient and responsive web development.
          </div>
          <div class="justify-center items-center mt-10">
            <div class="grid grid-cols-2 md:grid-cols-5 justify-center items-center gap-[59px] md:gap-[99px]">
              <img
                alt="Angelo2"
                className="w-[55px] h-[55px] hover:scale-110 duration-500"
                src="images/Mysql.png"
              />
              <img
                alt="Angelo2"
                className="w-[55px] h-[55px] hover:scale-110 duration-500"
                src="images/Figma.png"
              />
              <img
                alt="Angelo2"
                className="w-[55px] h-[55px] hover:scale-110 duration-500"
                src="images/Java.png"
              />
              <img
                alt="Angelo2"
                className="w-[55px] h-[55px] hover:scale-110 duration-500"
                src="images/React.png"
              />
              <img
                alt="Angelo2"
                className="w-[55px] h-[55px] hover:scale-110 duration-500"
                src="images/devicon_tailwindcss.png"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-[59px] md:gap-[99px] mt-10">
              <img
                alt="Angelo2"
                className="w-[55px] h-[55px] hover:scale-110 duration-500"
                src="images/Css3.png"
              />
              <img
                alt="Angelo2"
                className="w-[55px] h-[55px] hover:scale-110 duration-500"
                src="images/Html5.png"
              />
              <img
                alt="Angelo2"
                className="w-[55px] h-[55px] hover:scale-110 duration-500"
                src="images/Javascript.png"
              />
              <img
                alt="Angelo2"
                className="w-[55px] h-[55px] hover:scale-110 duration-500"
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
          <div className="text-[16px] font-normal text-center">
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
        className="flex justify-between px-[25px] md:px-[150px] space-x-10 w-full h-[70px] top-[2706px] bg-black"
      >
        <div className="flex flex-col justify-center md:flex-row gap-2 md:gap-10">
          <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
          <BiLogoGmail className="md:w-[27px] md:h-[27px] text-white"/>
            <div className="text-white text-[10px] md:text-[14px]">
              angelo.galope03@gmail.com
            </div>
          </div>
          <div className="top-[2736px]justify-start items-center gap-2.5 inline-flex">
            <AiFillPhone className="md:w-[27px] md:h-[27px] text-white"/>
            <div className="text-white text-[10px] md:text-[14px]">
              (085) 303 6214
            </div>
          </div>
        </div>
        <button className="flex items-center">
            <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
              <img
                alt="Angelo2"
                className="w-[17px] md:w-[27px] h-[17px] md:h-[27px] left-[1708px] top-[2736px]"
                src="images/3 1.png"
              />
            </Link>
          </button>
      </div>
    </div>
  );
}

export default App;
