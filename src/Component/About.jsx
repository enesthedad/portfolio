import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import laptopAvatar from "../Imgs/laptopAvatar.png";
import helloAvatar from "../Imgs/hiAvatar.png";
import rickandmorty from "../Imgs/can_do.gif";
import office from "../Imgs/the-office.gif";
import "./About.css";
import Slider from "./Slider";
import Rate from "./Rate";
const About = () => {
  return (
    <div
      id="about"
      className="relative z-10 flex flex-col items-center w-full h-screen py-10 px-10 bg-[#EBEBEB]"
    >
      <div className="grid w-full h-full grid-cols-5 grid-rows-5 gap-4">
        <div className="col-span-2 shadow-md  about-me flex justify-center items-center row-span-2 bg-[#F7F7F7] p-10 rounded-2xl">
          <p>
            <p className="text-[16px] tracking-wider  font-light">
              A full-stack developer with a passion for creating dynamic and
              user-friendly websites.Originally an automation engineer. My skill
              set includes Html, Css,Tailwind, Javascript, React.js, Node.js,
              express.js, MongoDb and proficiency in web and app design using
              Figma and Framer. Beyond my tech skills, i'm friendly, ambitious
              and always open to learning.
            </p>
          </p>
        </div>
        <div className="flex shadow-md items-center justify-center col-start-3 row-span-2 bg-[#f7f7f7] overflow-hidden rounded-2xl">
          <img src={helloAvatar} alt="" className="scale-100" />
        </div>
        <div className="col-start-5 shadow-md row-span-2 flex flex-col gap-5 justify-center items-center  row-start-4 bg-[#F7F7F7]  rounded-2xl">
          <h3 className="text-center  text-[28px] uppercase font-semibold tracking-wider">
            Social links
          </h3>
          <div className="flex gap-5 text-[48px] text-[#606261]">
            <a href="">
              <i className="fa-brands hover:text-[#B1DCC9] fa-github"></i>
            </a>
            <a href="">
              <i className="fa-brands hover:text-[#B1DCC9] fa-square-x-twitter"></i>
            </a>
            <a href="">
              <i className="fa-brands hover:text-[#B1DCC9] fa-linkedin"></i>
            </a>
          </div>
          <div className="flex gap-5  text-[48px] text-[#606261]">
            <a href="">
              <i className="fa-brands hover:text-[#B1DCC9] fa-dev "></i>
            </a>
            <a href="">
              <i className="fa-brands hover:text-[#B1DCC9] fa-medium"></i>
            </a>
            <a href="">
              <i className="fa-brands hover:text-[#B1DCC9] fa-upwork"></i>
            </a>
          </div>
        </div>
        <div className="col-span-2 shadow-md about-me flex gap-6 justify-center items-center flex-col col-start-4 row-span-3 row-start-1 bg-[#F7F7F7] p-10 rounded-2xl">
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-4">
              <div className="flex flex-col shadow-md gap-1 p-3 rounded-lg bg-[#eaeaea]">
                <p>English</p>
                <div className="flex gap-1">
                  <Rate size="lg" bg="#FED2B5" times="5" />
                </div>
              </div>
              <div className="flex relative flex-col gap-1 p-3 rounded-lg shadow-md bg-[#eaeaea]">
                <p>Turkish</p>
                <span className="absolute px-2 py-1 rounded-lg text-[6px] top-[-5px] right-[-5px] bg-sky-500">
                  Native
                </span>
                <div className="flex gap-1">
                  <Rate size="lg" bg="#FED2B5" times="5" />
                </div>
              </div>
              <div className="flex flex-col gap-1 p-3 rounded-lg shadow-md bg-[#eaeaea]">
                <p>Russian</p>
                <div className="flex gap-1">
                  <Rate size="lg" bg="#FED2B5" times="5" />
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-1 p-3 rounded-lg shadow-md bg-[#eaeaea]">
                <p>German</p>
                <div className="flex gap-1">
                  <Rate size="lg" bg="#FED2B5" times="2" />
                  <Rate size="lg" bg="#f7f7f7" times="3" />
                </div>
              </div>
              <div className="flex flex-col gap-1 p-3 rounded-lg shadow-md bg-[#eaeaea]">
                <p>Korean</p>
                <div className="flex gap-1">
                  <Rate size="lg" bg="#FED2B5" times="1" />
                  <Rate size="lg" bg="#f7f7f7" times="4" />
                </div>
              </div>
            </div>
          </div>

          <p className="text-[16px] tracking-wider   font-light">
            If you're looking to build, design and optimize a website or app,
            i'm here to help. Let's create something amazing and exciting
            together ✌🏻
          </p>
        </div>
        <Slider />
        <div className="col-start-4 shadow-md row-span-2 overflow-hidden  row-start-4 flex justify-center items-center bg-[#f7f7f7]  rounded-2xl">
          <img
            src={rickandmorty}
            alt=""
            className="object-cover w-full h-full rounded-2xl"
          />
        </div>
        <div className="col-start-1 shadow-md row-start-3 font-semibold text-[48px] justify-center items-start gap-2 flex flex-col rounded-2xl text-stone-800 bg-[#f7f7f7] p-4">
          <div className=" flex text-[20px]  gap-2">
            <p>Resume</p>
          </div>
          <a
            href=""
            className="text-[18px] shadow-md flex gap-2 px-3 py-2 bg-[#FDFDE3] rounded-lg text-stone-700"
          >
            <p>
              <i class="fa-solid fa-file"></i>
            </p>
            See my resume
          </a>
        </div>
        <div className="col-start-1 shadow-md row-start-4 bg-[#f7f7f7] p-4 rounded-2xl font-semibold text-[48px] justify-center items-start gap-2 flex flex-col rounded-2xl bg-[#F7F7F7] p-4">
          <div className=" flex text-[20px] gap-2">
            <p>Projects</p>
          </div>
          <a
            href=""
            className="text-[18px] shadow-md flex gap-2 px-2 py-1 bg-[#CFF8E6] rounded-lg text-stone-700"
          >
            <p>
              <i class="fa-solid fa-face-smile"></i>
            </p>
            See my projects
          </a>
        </div>
        <div className="row-start-5 shadow-md bg-[#f7f7f7] p-4 rounded-2xl font-semibold text-[48px] justify-center items-start gap-2 flex flex-col rounded-2xl bg-[#F7F7F7] p-4">
          <div className=" flex text-[20px] gap-2">
            <p>Blog</p>
          </div>
          <a
            href=""
            className="text-[18px] flex gap-2 shadow-md px-2 py-1 bg-[#CCD0FF] rounded-lg text-stone-700"
          >
            <p>
              <i class="fa-solid fa-pencil"></i>
            </p>
            See my Blog
          </a>
        </div>
        <div className="rounded-2xl col-span-2 row-start-5 flex gap-4 shadow-md justify-center items-center bg-[#F7F7F7] p-4 font-bold text-[56px]">
          <img
            src={laptopAvatar}
            alt=""
            className="overflow-hidden bg-[#ebebeb] rounded-full h-20"
          />
          <p>ABOUT ME</p>
        </div>
      </div>
    </div>
  );
};

export default About;
