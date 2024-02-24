import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Logo from "./Logo";
const Navbar = ({ handleClick, navOpen }) => {
  return (
    <div className="relative z-40 w-full shadow-md " id="home">
      <div
        className={
          navOpen
            ? `fixed top-0 z-40 flex justify-between w-full px-10 py-6 bg-stone-900 `
            : `absolute top-0 z-40 flex justify-between w-full px-10 py-6 bg-stone-900 `
        }
      >
        <Logo />
        {/* FOR SMALL SCREENS */}

        <div className="text-white lg:hidden absolute right-10  text-[24px]">
          <a
            href="/"
            onClick={handleClick}
            className="transition-transform duration-500 ease-in-out"
          >
            {navOpen ? (
              <i className="fa-solid fa-x"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </a>
        </div>
        <div className="hidden lg:social-links lg:w-1/3 lg:text-[24px]  lg:flex lg:gap-3 lg:justify-center text-zinc-300 "></div>
        <div className="items-center justify-center hidden w-1/3 gap-3 font-semibold lg:flex navigation lg:text-[14px] text-stone-600">
          <AnchorLink href="#home" className="text-white ">
            <button>Home</button>
          </AnchorLink>
          <AnchorLink href="#about">
            <button>About Me</button>
          </AnchorLink>
          <AnchorLink href="#projects">
            <button>Projects</button>
          </AnchorLink>
          <AnchorLink
            href="#connect"
            className="px-2 py-1   transition-all ease-in-out rounded-md bg-[#DBCDF0] text-stone-700 hover:bg-white hover:text-emerald-500"
          >
            <button>Connect Me</button>
          </AnchorLink>
        </div>
      </div>
      <div
        className={
          navOpen
            ? `fixed top-0 z-0 pl-4 flex flex-col justify-center gap-4 right-0 h-screen duration-300 w-1/2 md:w-1/3 transition-transform ease-in-out  bg-black`
            : `translate-x-[-100%] opacity-0 h-0  duration-300 transition-opacity ease-in-out`
        }
      >
        <div className=" flex flex-col gap-4 text-[12px] md:text-[17px] font-semibold text-white upper-links">
          <AnchorLink href="#about" onClick={handleClick}>
            <button className="hover:text[#CFF8E6]">Home</button>
          </AnchorLink>
          <AnchorLink onClick={handleClick} href="#about">
            <button className="hover:text[#CFF8E6]">About me</button>
          </AnchorLink>
          <AnchorLink onClick={handleClick} href="#projects">
            <button className="hover:text[#CFF8E6]">Projects</button>
          </AnchorLink>
          <AnchorLink onClick={handleClick} href="#connect">
            <button className="hover:text[#CFF8E6]">Connect with me</button>
          </AnchorLink>
        </div>
        <div className="down-links text-[20px] text-stone-300 flex gap-3">
          <a
            href="https://github.com/enesthedad"
            className="divide-x-2"
            target="_blank"
            rel="noreferrer"
          >
            <i className="transition-all ease-in-out hover:text-emerald-500 hover:scale-125 fa-brands fa-github"></i>
          </a>
          <a
            href="https://twitter.com/enesthedad"
            target="_blank"
            rel="noreferrer"
          >
            <i className="transition-all ease-in-out hover:text-emerald-500 hover:scale-125 fa-brands fa-square-x-twitter"></i>
          </a>
          <a
            href="https://medium.com/@robinthelevi"
            target="_blank"
            rel="noreferrer"
          >
            <i className="transition-all ease-in-out hover:text-emerald-500 hover:scale-125 fa-brands fa-medium"></i>
          </a>
          <a href="https://dev.to/enesthedad" target="_blank" rel="noreferrer">
            <i className="transition-all ease-in-out hover:text-emerald-500 hover:scale-125 fa-brands fa-dev"></i>
          </a>
        </div>
      </div>
      <div
        onClick={handleClick}
        className={
          navOpen
            ? `fixed top-0 z-0 left-0 h-screen duration-300 w-1/2 md:w-2/3 transition-transform ease-in-out  bg-black opacity-50`
            : `translate-x-[-100%] opacity-0  duration-300 transition-transform ease-in-out`
        }
      ></div>
    </div>
  );
};

export default Navbar;
