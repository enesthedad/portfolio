import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import okIcon from "../Imgs/okAvatar.png";
const Footer = () => {
  return (
    <div className="w-full bg-stone-900 flex md:flex-row flex-col min-h-[300px]">
      <div className="flex flex-col content-between justify-between gap-3 p-10 text-[#F5F1E6] md:w-1/2 left">
        <h3 className="text-[24px] flex gap-2 font-bold items-center justify-start">
          <img src={okIcon} className="h-16" alt="" />
          <a href="#">
            <div className="relative">
              e<span className="text-[#FE7D91]">.</span>soyturk
              <p className="absolute right-0 bottom-[-16px] text-[14px]">
                엔<span className="text-[#B1DCC9]">에</span>스
              </p>
            </div>
          </a>
        </h3>
        <p className="py-4 text-stone-400">
          I’m a Full-Stack Developer who loves working with React.js, Node.js,
          and MongoDB. I also have a knack for designing awesome web and app
          experiences using Figma and Framer. How about we team up to boost your
          online presence and create some amazing digital experiences? Let’s
          make something great together!
        </p>
        <div className="flex gap-2 links text-[16px] ">
          <a
            href=""
            className="flex items-center justify-center w-8 h-8 p-5 text-white transition-all rounded-full hover:text-emerald-500 hover:scale-125 bg-stone-600"
          >
            <i class="fa-brands fa-square-github"></i>
          </a>
          <a
            href=""
            className="flex items-center justify-center w-8 h-8 p-5 text-white transition-all rounded-full hover:text-emerald-500 hover:scale-125 bg-stone-600"
          >
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href=""
            className="flex items-center justify-center w-8 h-8 p-5 text-white transition-all rounded-full hover:text-emerald-500 hover:scale-125 bg-stone-600"
          >
            <i class="fa-brands fa-x-twitter"></i>
          </a>
          <a
            href=""
            className="flex items-center justify-center w-8 h-8 p-5 text-white transition-all rounded-full hover:text-emerald-500 hover:scale-125 bg-stone-600"
          >
            <i class="fa-solid fa-envelope"></i>
          </a>
          <a
            href=""
            className="flex items-center justify-center w-8 h-8 p-5 text-white transition-all rounded-full hover:text-emerald-500 hover:scale-125 bg-stone-600"
          >
            <i class="fa-brands fa-dev"></i>
          </a>
          <a
            href=""
            className="flex items-center justify-center w-8 h-8 p-5 text-white transition-all rounded-full hover:text-emerald-500 hover:scale-125 bg-stone-600"
          >
            <i class="fa-brands fa-medium"></i>
          </a>
        </div>
      </div>
      <div className="flex flex-col w-full gap-2 p-10 font-bold text-white md:flex-row right">
        <div className="flex flex-col gap-2 p-6 lg:w-1/3 ">
          <h3>Page Links</h3>
          <AnchorLink className="font-thin text-stone-100" href="#home">
            Home
          </AnchorLink>
          <AnchorLink className="font-thin text-stone-100" href="#about">
            About me
          </AnchorLink>
          <AnchorLink className="font-thin text-stone-100" href="#projects">
            Projects
          </AnchorLink>
          <AnchorLink className="font-thin text-stone-100" href="#connect">
            Connect with me
          </AnchorLink>
        </div>
        <div className="flex flex-col gap-2 p-6 lg:w-1/3">
          <h3>Pages</h3>
          <AnchorLink href="#home">
            <button className="font-thin text-stone-100">Home</button>
          </AnchorLink>
          <a className="font-thin text-stone-100" href="#about-me">
            Blog
          </a>
          <a className="font-thin text-stone-100" href="#projects">
            Resume
          </a>
          <a className="font-thin text-stone-100" href="#connect">
            Connect with me
          </a>
        </div>
        <div className="w-1/3 p-6">
          <h3>Contacts</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
