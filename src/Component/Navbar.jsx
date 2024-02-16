import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import twitterIcon from "../Imgs/twitter.png";
import githubIcon from "../Imgs/github-svgrepo-com.svg";
import devIcon from "../Imgs/dev-to-svgrepo-com.svg";
import mediumIcon from "../Imgs/medium-svgrepo-com.svg";
const Navbar = () => {
  return (
    <div className="relative w-full " id="home">
      <div className="absolute top-0 flex items-center w-full px-6 py-6 bg-transparent shadow-lg backdrop-blur-md ">
        <div className="logo w-1/3 text-[36px] text-stone-700  font-bold justify-center flex">
          <a href="#">
            <div className="relative">
              e<span className="text-[#3B2AD4]">.</span>soyturk
              <p className="absolute right-0 bottom-[-10px] text-[14px]">
                엔<span className="text-red-500 ">에</span>스
              </p>
            </div>
          </a>
        </div>
        <div className="social-links w-1/3 text-[30px]  flex gap-5 justify-center text-stone-600 ">
          <a
            href="https://github.com/enesthedad"
            className="divide-x-2"
            target="_blank"
            rel="noreferrer"
          >
            <i class="hover:text-[#3B2AD4] fa-brands fa-github"></i>
          </a>
          <a
            href="https://twitter.com/enesthedad"
            target="_blank"
            rel="noreferrer"
          >
            <i class="hover:text-[#3B2AD4] fa-brands fa-square-x-twitter"></i>
          </a>
          <a
            href="https://medium.com/@robinthelevi"
            target="_blank"
            rel="noreferrer"
          >
            <i class="hover:text-[#3B2AD4] fa-brands fa-medium"></i>
          </a>
          <a href="https://dev.to/enesthedad" target="_blank" rel="noreferrer">
            <i class="hover:text-[#3B2AD4] fa-brands fa-dev"></i>
          </a>
        </div>
        <div className="flex items-center justify-center w-1/3 gap-3 font-semibold navigation text-stone-400">
          <a href="#" className="text-white">
            Home
          </a>
          <AnchorLink href="#about">
            <button>About Me</button>
          </AnchorLink>
          <AnchorLink href="#projects">
            <button>Projects</button>
          </AnchorLink>
          <a href="#" className=" bg-[#3B2AD4] px-2 py-1 rounded-md text-white">
            Connect Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
