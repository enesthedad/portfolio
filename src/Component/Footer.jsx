import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Logo from "./Logo";
const Footer = () => {
  return (
    <div className="w-full bg-stone-900 flex md:flex-row flex-col min-h-[300px]">
      <div className="flex flex-col content-between justify-between gap-3 lg:p-10 p-4 text-[#F5F1E6] md:w-1/2 left">
        <h3 className="text-[24px] flex  font-bold items-center justify-start">
          <Logo type="footer" />
        </h3>
        <p className="py-4 text-stone-400">
          I’m a Full-Stack Developer who loves working with React.js, Node.js,
          and MongoDB. I also have a knack for designing awesome web and app
          experiences using Figma and Framer. How about we team up to boost your
          online presence and create some amazing digital experiences? Let’s
          make something great together!
        </p>
        <div className="flex gap-2 links text-[16px] flex-wrap">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/enesthedad"
            className="flex items-center justify-center w-8 h-8 p-5 text-white transition-all rounded-full hover:bg-[#CFF8E6] hover:text-stone-700 bg-stone-600"
          >
            <i className="fa-brands fa-square-github"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="/"
            className="flex items-center justify-center w-8 h-8 p-5 text-white transition-all rounded-full hover:bg-[#CFF8E6] hover:text-stone-700 bg-stone-600"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/enesthedad"
            className="flex items-center justify-center w-8 h-8 p-5 text-white transition-all rounded-full hover:bg-[#CFF8E6] hover:text-stone-700 bg-stone-600"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:robinthelevi@gmail.com"
            className="flex items-center justify-center w-8 h-8 p-5 text-white transition-all rounded-full hover:bg-[#CFF8E6] hover:text-stone-700 bg-stone-600"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://dev.to/enesthedad"
            className="flex items-center justify-center w-8 h-8 p-5 text-white transition-all rounded-full hover:bg-[#CFF8E6] hover:text-stone-700 bg-stone-600"
          >
            <i className="fa-brands fa-dev"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://enesthedad.medium.com/"
            className="flex items-center justify-center w-8 h-8 p-5 text-white transition-all rounded-full hover:bg-[#CFF8E6] hover:text-stone-700 bg-stone-600"
          >
            <i className="fa-brands fa-medium"></i>
          </a>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-2 p-4 font-bold text-white md:grid-cols-2 lg:grid-cols-3 lg:p-10 md:flex-row right">
        <div className="flex flex-col gap-2 lg:p-6">
          <h3>Page Links</h3>
          <AnchorLink
            className="font-light text-stone-400 hover:text-[#CFF8E6]"
            href="#home"
          >
            Home
          </AnchorLink>
          <AnchorLink
            className="font-light text-stone-400 hover:text-[#CFF8E6]"
            href="#about"
          >
            About me
          </AnchorLink>
          <AnchorLink
            className="font-light text-stone-400 hover:text-[#CFF8E6]"
            href="#projects"
          >
            Projects
          </AnchorLink>
          <AnchorLink
            className="font-light text-stone-400 hover:text-[#CFF8E6]"
            href="#connect"
          >
            Connect with me
          </AnchorLink>
        </div>
        <div className="flex flex-col gap-2 lg:p-6">
          <h3>Pages</h3>
          <AnchorLink href="#home">
            <button className="font-light text-stone-400 hover:text-[#CFF8E6]">
              Home
            </button>
          </AnchorLink>
          <a
            className="font-light text-stone-400 hover:text-[#CFF8E6]"
            href="#about-me"
          >
            Blog
          </a>
          <a
            className="font-light text-stone-400 hover:text-[#CFF8E6]"
            href="#projects"
          >
            Resume
          </a>
        </div>
        <div className="flex flex-col gap-2 lg:p-6">
          <h3>Contacts</h3>
          <div className="flex items-center gap-2 font-normal text-[14px] text-stone-400 links">
            <i className="fa-regular fa-envelope"></i>
            <p>robinthelevi@gmail.com</p>
          </div>

          <div className="flex items-center gap-1 font-normal text-[14px] text-stone-400 links">
            <i className="fa-solid fa-phone"></i>
            <p>Ask through mail</p>
          </div>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/enesthedad"
            className="flex items-center gap-2 font-normal text-[14px] text-stone-400 links"
          >
            <i className="fa-brands fa-x-twitter"></i>
            <p>@enesthedad</p>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/enesthedad"
            className="flex items-center gap-2 font-normal text-[14px] text-stone-400 links"
          >
            <i className="fa-brands fa-github"></i>
            <p>@enesthedad</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
