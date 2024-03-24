import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import laptopAvatar from "../Imgs/laptopAvatar.webp";
import helloAvatar from "../Imgs/hiAvatar.webp";
import rickandmorty from "../Imgs/can_do.gif";
import "./AboutMe.css";
import Slider from "./Slider";
import Rate from "./Rate";
const About = () => {
  return (
    <div
      id="about"
      className="z-10 md:flex md:flex-col md:items-center w-full lg:h-screen min-h-screen lg:py-8 lg:px-6 p-2 md:p-4 bg-[#EBEBEB]"
    >
      <div className="inline-block w-full h-full grid-cols-5 grid-rows-5 gap-4 md:grid">
        <div className="rounded-2xl text-gray-600 flex mb-4 md:m-0 col-start-2 col-span-2 row-start-5 md:flex gap-4 shadow-md justify-center items-center bg-[#F7F7F7] p-4 font-bold text-[24px] lg:text-[40px] md:text-[36px]">
          <img
            src={laptopAvatar}
            alt="laptop-avatar"
            className="overflow-hidden bg-[#ebebeb] rounded-full h-16"
          />
          <p>ABOUT ME</p>
        </div>
        <div className="col-span-2 mb-4 shadow-md  md:m-0 about-me flex justify-center items-center row-span-2 bg-[#F7F7F7] p-3 lg:p-10 md:p-4 rounded-2xl">
          <p className="2xl:text-[18px] xl:text-[15px] lg:text-[14px] md:text-[13px] font-light tracking-wider">
            A full-stack developer with a passion for creating dynamic and
            user-friendly websites.Originally an automation engineer. My skill
            set includes Html, Css,Tailwind, Javascript, React.js, Node.js,
            express.js, MongoDb and proficiency in web and app design using
            Figma and Framer. Beyond my tech skills, i'm friendly, ambitious and
            always open to learning.
          </p>
        </div>
        <div className="md:flex md:w-full h-auto md:h-full inline  shadow-md items-center md:justify-center md:items-center lg:justify-center lg:items-center justify-center col-start-3 row-span-2 bg-[#f7f7f7] overflow-hidden rounded-2xl">
          <img
            src={helloAvatar}
            alt="hello-avatar"
            className="h-[100px] absolute md:relative md:h-full object-cover right-10 md:right-0 md:scale-110  lg:scale-100 "
          />
        </div>
        <div className="col-start-5  inline-block w-1/2 md:w-full shadow-md row-span-2 md:flex flex-col gap-5 justify-center items-center  row-start-4 bg-[#F7F7F7]  rounded-2xl">
          <h3 className="text-center  text-[13px] md:text-[16px] uppercase font-semibold tracking-wider">
            Social links
          </h3>
          <div className="flex gap-5 text-[20px] items-center justify-center  md:text-[25px] text-[#606261]">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/enesthedad"
            >
              <i className="fa-brands hover:text-[#B1DCC9] fa-github"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/enesthedad"
            >
              <i className="fa-brands hover:text-[#B1DCC9] fa-square-x-twitter"></i>
            </a>
            <a target="_blank" rel="noreferrer" href="/">
              <i className="fa-brands hover:text-[#B1DCC9] fa-linkedin"></i>
            </a>
          </div>
          <div className="flex gap-5  md:text-[25px] items-center justify-center  text-[20px]  text-[#606261]">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://dev.to/enesthedad"
            >
              <i className="fa-brands hover:text-[#B1DCC9] fa-dev "></i>
            </a>
            <a href="https://enesthedad.medium.com/">
              <i className="fa-brands hover:text-[#B1DCC9] fa-medium"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.upwork.com/freelancers/~01860b70312db13c3f"
            >
              <i className="fa-brands hover:text-[#B1DCC9] fa-upwork"></i>
            </a>
          </div>
        </div>
        <div className="col-span-2 my-5 md:m-0 shadow-md about-me flex gap-6 justify-center items-center flex-col col-start-4 row-span-3 row-start-1 bg-[#F7F7F7] lg:p-10 p-5 rounded-2xl">
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-wrap justify-center w-full text-[14px] gap-4 lg:grid-cols-3 md:grid-cols-2">
              <div className="flex flex-col  shadow-md gap-1 p-3 md:p-2 rounded-lg bg-[#eaeaea]">
                <p>English</p>
                <div className="flex gap-1">
                  <Rate size="lg" bg="#f28500" times="5" />
                </div>
              </div>
              <div className="flex  md:p-2 relative flex-col gap-1 p-3 rounded-lg shadow-md bg-[#eaeaea]">
                <p>Turkish</p>
                <span className="absolute px-2 py-1 rounded-lg text-[6px] top-[-5px] right-[-5px] bg-sky-500">
                  Native
                </span>
                <div className="flex gap-1">
                  <Rate size="lg" bg="#f28500" times="5" />
                </div>
              </div>
              <div className="flex  md:p-2 flex-col gap-1 p-3 rounded-lg shadow-md bg-[#eaeaea]">
                <p>Russian</p>
                <div className="flex gap-1">
                  <Rate size="lg" bg="#f28500" times="5" />
                </div>
              </div>
              <div className="flex flex-col  md:p-2 gap-1 p-3 rounded-lg shadow-md bg-[#eaeaea]">
                <p>German</p>
                <div className="flex gap-1">
                  <Rate size="lg" bg="#f28500" times="2" />
                  <Rate size="lg" bg="#f7f7f7" times="3" />
                </div>
              </div>
              <div className="flex  md:p-2 flex-col gap-1 p-3 rounded-lg shadow-md bg-[#eaeaea]">
                <p>Korean</p>
                <div className="flex gap-1">
                  <Rate size="lg" bg="#f28500" times="1" />
                  <Rate size="lg" bg="#f7f7f7" times="4" />
                </div>
              </div>
            </div>
          </div>

          <h5 className="text-[16px] tracking-wider md:text-[14px]  font-light">
            If you're looking to build, design and optimize a website or app,
            i'm here to help. Let's create something amazing and exciting
            together ✌🏻
          </h5>
        </div>
        <Slider />
        <div className="col-start-4 my-4 md:m-0 shadow-md row-span-2 overflow-hidden  row-start-4 flex justify-center items-center bg-[#f7f7f7]  rounded-2xl">
          <img
            src={rickandmorty}
            alt="rick-and-morty"
            className="object-cover h-full rounded-2xl"
          />
        </div>
        <div className="col-start-1 mb-4 lg:m-0 shadow-md row-start-3 font-semibold text-[48px] md:justify-center md:items-start lg:gap-2 md:gap-1 flex md:flex-col justify-between items-center rounded-2xl text-stone-800 bg-[#f7f7f7] lg:p-4 md:p-2 p-3">
          <div className=" flex text-[20px] md:text-[16px]  gap-2">
            <p>Resume</p>
          </div>
          <a
            href="/resume"
            className="text-[16px] xl:text-[16px] lg:text-[14px] flex gap-2 shadow-md  md:text-[12px] md:p-1  px-2 py-1 bg-[#FDFDE3] rounded-lg text-stone-700"
          >
            <p>
              <i className="fa-solid fa-file"></i>
            </p>
            See my resume
          </a>
        </div>
        <div className="col-start-1 mb-4 lg:m-0 shadow-md row-start-4 font-semibold text-[48px] md:justify-center md:items-start gap-2 flex md:flex-col justify-between items-center rounded-2xl text-stone-800 bg-[#f7f7f7] lg:p-4 md:p-2 p-3">
          <div className=" flex text-[20px] md:text-[16px] lg:text-[18px] gap-2">
            <p>Projects</p>
          </div>
          <AnchorLink
            href="#projects"
            className="text-[16px] xl:text-[16px] lg:text-[14px] flex gap-2 shadow-md  md:text-[10px] md:p-1  px-2 py-1  bg-[#CFF8E6] rounded-lg text-stone-700"
          >
            <button aria-label="see my projects">
              <p>
                <i className="fa-solid fa-face-smile"></i>
              </p>
            </button>
            See my projects
          </AnchorLink>
        </div>
        <div className="col-start-1 mb-4 lg:m-0 shadow-md row-start-5 font-semibold text-[48px] md:justify-center md:items-start gap-2 flex md:flex-col justify-between items-center rounded-2xl text-stone-800 bg-[#f7f7f7] lg:p-4 md:p-2 p-3">
          <div className=" flex text-[16px] md:text-[16px] lg:text-[18px] gap-2">
            <p>Blog</p>
          </div>
          <a
            href="/blog"
            className="text-[16px] xl:text-[16px] lg:text-[14px] flex gap-2 shadow-md  md:p-1 md:text-[12px]  px-2 py-1 bg-[#CCD0FF] rounded-lg text-stone-700"
          >
            <p>
              <i className="fa-solid fa-pencil"></i>
            </p>
            See my Blog
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
