import { Analytics } from "@vercel/analytics/react";
import { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-scroll";
import {
  BsFacebook,
  BsYoutube,
  BsGithub,
  BsFillPersonFill,
} from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
import { LandingPage } from "./components/LandingPage";

const HeroSection = ({ darkMode }) => {
  return (
    <div
      id="homeSection"
      className={`flex flex-col z-10 md:flex-row-reverse py-[30px] sm:py-[60px] md:py-[160px]  justify-between ${
        darkMode
          ? "bg-dark-100 transition-all duration-500"
          : "bg-white transition-all duration-500"
      }`}
    >
      <div className="flex flex-col md:flex-row items-center">
        <img
          alt="Angelo2"
          className={`w-[243px] h-[243px] md:w-[343px] md:h-[343px] transition-opacity duration-700 ${
            darkMode ? "opacity-0 absolute" : "opacity-100"
          }`}
          src="images/Untitled design (7) 1.png"
        />
        <img
          alt="Angelo2"
          className={`w-[243px] h-[243px] md:w-[343px] md:h-[343px] transition-opacity duration-700 ${
            darkMode ? "opacity-100" : "opacity-0 absolute"
          }`}
          src="images/white-circle 1.png"
        />
        <div className="flex flex-row items-center md:flex-col gap-6 py-5">
          <a href="https://www.facebook.com/gzelogal/">
            <BsFacebook className="w-[36px] h-[36px] hover:scale-110 duration-300" />
          </a>
          <a href="https://www.instagram.com/datboijero/">
            <AiFillInstagram className="w-[36px] h-[36px] hover:scale-110 duration-300" />
          </a>
          <a href="https://www.tiktok.com/@gzelo_o">
            <FaTiktok className="w-[34px] h-[34px] hover:scale-110 duration-300" />
          </a>
          <a href="https://www.youtube.com/channel/UCQbPRkGcJmO6wkKQ0wFwp3Q">
            <BsYoutube className="w-[34px] h-[34px] hover:scale-110 duration-300" />
          </a>
          <a href="https://github.com/angelogalope">
            <BsGithub className="w-[34px] h-[34px] hover:scale-110 duration-300" />
          </a>
        </div>
      </div>

      <div className="flex flex-col w-[300px] md:w-[500px]">
        <p className="text-gray-400 md:text-[20px] font-medium">Hi! I am</p>
        <p className="md:text-[20px] font-semibold">
          Angelo Galope, pursuing BS in
        </p>
        <div
          className={`text-[30px] sm:text-[34px] md:text-[48px] font-extrabold ${
            darkMode ? "text-white text-shadow-white-md" : "text-shadow-md"
          }`}
        >
          <h1 className="">
            Information{" "}
            <span className="ml-[100px] md:ml-[160px]">Technology</span>
          </h1>
        </div>
        <p className="text-[12px] md:text-[18px] py-5 w-[300px] md:w-[500px]">
          A newbie tech dweeb determined to dive into the world of technology
          with passion and drive.
        </p>
        <button className="w-[129px]">
          <Link
            to="about"
            smooth={true}
            offset={0}
            duration={500}
            className={`w-[129px] h-[39px] flex items-center justify-center  rounded-lg space-x-2 hover:scale-110 duration-300 ${
              darkMode ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            <BsFillPersonFill size={20} />
            <div className="text-[14px] font-normal">About Me</div>
          </Link>
        </button>
      </div>
    </div>
  );
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    // Simulating loading delay with setTimeout (replace with actual data fetching)
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Set a reasonable duration for your data fetching
  }, []);


  return (
    <div
      id="home"
      className={`${
        darkMode
          ? "bg-dark-100 text-white transition-all duration-500"
          : "bg-white transition-all duration-500"
      }`}
    >
      <Analytics />
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col w-full h-full pt-5 px-[25px] md:px-[150px]">
          {/* Navigation Bar */}
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

          {/* Landing Page */}
          <LandingPage darkMode={darkMode} />

          {/* Hero Section */}
          <HeroSection darkMode={darkMode} />

          {/* About Section */}
          <div
            id="about"
            className="flex flex-col md:flex-row justify-between items-center py-[50px] md:py-[150px]"
          >
            <img
              alt="Angelo2"
              className={`w-[243px] h-[243px] md:w-[343px] md:h-[343px] transition-opacity duration-700 ${
                darkMode ? "opacity-0 absolute" : "opacity-100"
              }`}
              src="images/Untitled design (6) 1.png"
            />
            <img
              alt="Angelo2"
              className={`w-[243px] h-[243px] md:w-[343px] md:h-[343px] transition-opacity duration-700 ${
                darkMode ? "opacity-100" : "opacity-0 absolute"
              }`}
              src="images/gray-circle.png"
            />
            <div className="flex flex-col sm:justify-center items-center md:items-start pt-5 md:space-y-10">
              <h1 className="h-[70px] text-[30px] md:text-[44px] font-semibold">
                About me
              </h1>
              <p className="text-[16px] font-normal text-center md:text-start">
                As a third year student at Caraga State University, I find
                myself pursuing a Bachelor of Science degree in Information
                Technology. Although it wasn't initially my area of interest,
                I've been influenced by the people around me who are
                enthusiastic about technology. Their passion and excitement for
                the field inspired me to explore Information Technology further.
                Now, I am one of the startup incubatees at Navigatú with the people
                who influence me.
              </p>
            </div>
          </div>

          {/* Stack Section */}
          <div className="flex flex-col items-center text-center py-[150px]">
            <h1
              id="stack"
              className="text-[30px] md:text-[44px] font-semibold"
            >
              Technology Stacks
            </h1>
            <p className="text-center text-[16px] font-normal pt-[30px]">
              While proficient in some areas, I'm actively learning and
              practicing, like diving deeper into advanced JavaScript concepts,
              as well as mastering React's technicalities and honing my skills
              into Tailwind CSS for efficient and responsive web development.
            </p>
            <div className="justify-center items-center mt-10">
              <div className="flex flex-wrap justify-center items-center gap-[59px] md:gap-[79px]">
                <img
                  alt="MySQL"
                  className="w-[55px] h-[55px] hover:scale-110 duration-500 md:grayscale-img"
                  src="images/Mysql.png"
                />
                <img
                  alt="Figma"
                  className="w-[55px] h-[55px] hover:scale-110 duration-500 md:grayscale-img"
                  src="images/Figma.png"
                />
                <img
                  alt="Java"
                  className="w-[55px] h-[55px] hover:scale-110 duration-500 md:grayscale-img"
                  src="images/Java.png"
                />
                <img
                  alt="React"
                  className="w-[55px] h-[55px] hover:scale-110 duration-500 md:grayscale-img"
                  src="images/React.png"
                />
                <img
                  alt="Tailwindcss"
                  className="w-[55px] h-[55px] hover:scale-110 duration-500 md:grayscale-img"
                  src="images/devicon_tailwindcss.png"
                />
                <img
                  alt="CSS3"
                  className="w-[55px] h-[55px] hover:scale-110 duration-500 md:grayscale-img"
                  src="images/Css3.png"
                />
                <img
                  alt="Html5"
                  className="w-[55px] h-[55px] hover:scale-110 duration-500 md:grayscale-img"
                  src="images/Html5.png"
                />
                <img
                  alt="JavaScript"
                  className="w-[55px] h-[55px] hover:scale-110 duration-500 md:grayscale-img"
                  src="images/Javascript.png"
                />
                <img
                  alt="C"
                  className="w-[55px] h-[55px] hover:scale-110 duration-500 md:grayscale-img"
                  src="images/C.png"
                />
                <img
                  alt="Photoshop"
                  className="w-[55px] h-[55px] hover:scale-110 duration-500 md:grayscale-img"
                  src="images/Photoshop.png"
                />
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="flex flex-col items-center py-[150px] space-y-10">
            <h1
              id="project"
              className="wtext-zinc-950 text-[30px] md:text-[44px] font-semibold"
            >
              My Projects
            </h1>
            <p className="text-[16px] font-normal text-center">
              {" "}
              I worked on diverse school and personal projects involving a mix of programming
              languages and frameworks. I actively sought to enhance my skills
              and knowledge, making each project a valuable learning experience.
            </p>
            

              <div id="indicators-carousel" class="relative w-full" data-carousel="static">
                  
                  <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                      
                      <div class=" duration-700 ease-in-out" data-carousel-item="active">
                          <img src="projects/MelloWeather.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                      </div>
                      
                      <div class=" duration-700 ease-in-out" data-carousel-item>
                          <img src="projects/ReviewUP.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                      </div>
                      
                      <div class=" duration-700 ease-in-out" data-carousel-item>
                          <img src="projects/MessageMe.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                      </div>
                      
                      <div class=" duration-700 ease-in-out" data-carousel-item>
                          <img src="projects/MelloWeather.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                      </div>
                      
                      <div class=" duration-700 ease-in-out" data-carousel-item>
                          <img src="projects/MelloWeather.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                      </div>
                  </div>
                  
                  <div class="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
                      <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                  </div>
                
                  <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                      <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                          <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                          </svg>
                          <span class="sr-only">Previous</span>
                      </span>
                  </button>
                  <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                      <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                          <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                          </svg>
                          <span class="sr-only">Next</span>
                      </span>
                  </button>
              </div>

          </div>
        </div>
      )}
      {/* Footer */}
      { !loading && <Footer/> }
    </div>
  );
}

export default App;
