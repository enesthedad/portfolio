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
            : ` top-0 z-40 flex justify-between w-full lg:px-10 md:px-5 py-6 bg-stone-900 `
        }
      >
        <Logo />
        {/* FOR SMALL SCREENS */}

        <div className="text-white md:hidden absolute right-10  text-[24px]">
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
        <div className="hidden lg:social-links lg:w-1/3 md:text-[24px]  md:flex lg:gap-3 md:justify-center text-zinc-300 "></div>
        <div className="items-center  md:text-[12px] hidden pr-10 gap-3 font-semibold md:flex navigation lg:text-[14px] text-stone-600">
          <AnchorLink href="#home" className="text-white ">
            <button aria-label="Home page">Home</button>
          </AnchorLink>
          <AnchorLink href="#about">
            <button aria-label="about me">About Me</button>
          </AnchorLink>
          <AnchorLink href="#projects">
            <button aria-label="projects">Projects</button>
          </AnchorLink>
          <AnchorLink href="#connect" className="">
            <button aria-label="connect me">Connect Me</button>
          </AnchorLink>
          <a
            href="/resume"
            className="px-2 py-1   transition-all ease-in-out rounded-md bg-[#DBCDF0] text-stone-700"
          >
            Resume
          </a>
        </div>
      </div>
      <div
        className={
          navOpen
            ? `fixed top-0 z-0 pl-4 flex flex-col justify-center gap-4 right-0 h-screen duration-300 w-1/2 md:w-1/3 transition-transform ease-in-out  bg-black`
            : `absolute translate-x-[-100%] opacity-0 h-0  duration-300 transition-opacity ease-in-out`
        }
      >
        <div className=" flex flex-col gap-4 text-[12px] md:text-[17px] items-start font-semibold text-white upper-links">
          <AnchorLink href="#about" onClick={handleClick}>
            <button aria-label="home" className="hover:text[#CFF8E6]">
              Home
            </button>
          </AnchorLink>
          <AnchorLink onClick={handleClick} href="#about">
            <button aria-label="about me" className="hover:text[#CFF8E6]">
              About me
            </button>
          </AnchorLink>
          <AnchorLink onClick={handleClick} href="#projects">
            <button aria-label="projects" className="hover:text[#CFF8E6]">
              Projects
            </button>
          </AnchorLink>
          <AnchorLink onClick={handleClick} href="#connect">
            <button
              aria-label="connect with me"
              className="hover:text[#CFF8E6]"
            >
              Connect with me
            </button>
          </AnchorLink>

          <a
            href="/resume"
            className="px-2 py-1   transition-all ease-in-out rounded-md bg-[#DBCDF0] text-stone-700"
          >
            Resume
          </a>
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
            ? `fixed top-0 z-0 left-0 h-screen duration-300 w-1/2 md:w-2/3 transition-transform ease-in-out  bg-stone-800 opacity-40 `
            : `translate-x-[-100%] opacity-0  duration-300 transition-transform ease-in-out`
        }
      ></div>
    </div>
  );
};

export default Navbar;
