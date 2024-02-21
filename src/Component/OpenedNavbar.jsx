import React from "react";
import Navbar from "./Navbar";
import AnchorLink from "react-anchor-link-smooth-scroll";
const OpenedNavbar = ({ handleClick, navOpen }) => {
  return (
    <div>
      <div className="relative z-40 w-full" id="home">
        <div className="absolute top-0 flex justify-between w-full px-10 py-6 bg-stone-900 ">
          <div className="logo w-1/3 text-[20px] md:text-[24px] text-white  font-bold justify-center flex">
            <a href="#">
              <div className="relative">
                e<span className="text-red-500">.</span>soyturk
                <p className="absolute right-0 bottom-[-16px] text-[14px]">
                  엔<span className="text-emerald-500 ">에</span>스
                </p>
              </div>
            </a>
          </div>
          {/* FOR SMALL SCREENS */}
          <div className="text-white   text-[24px]">
            <a href="" onClick={handleClick}>
              <i class="fa-solid fa-x"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="flex w-full h-screen">
        <div className="w-1/2 h-full md:w-2/3 left bg-stone-800"></div>
        <div className="w-1/2 h-full md:w-1/3 bg-stone-900 right">
          <div className="p-10 mt-20 flex flex-col gap-3 text-[18px] font-semibold text-white upper-links">
            <a href="">Home</a>
            <a href="">Projects</a>
            <a href="">About me</a>
            <a href="">Connect with me</a>
          </div>
          <div className="p-10 down-links text-[20px] text-stone-300 flex gap-3">
            <a
              href="https://github.com/enesthedad"
              className="divide-x-2"
              target="_blank"
              rel="noreferrer"
            >
              <i class="hover:text-emerald-500 hover:scale-125 fa-brands fa-github   transition-all ease-in-out"></i>
            </a>
            <a
              href="https://twitter.com/enesthedad"
              target="_blank"
              rel="noreferrer"
            >
              <i class="hover:text-emerald-500 hover:scale-125 fa-brands fa-square-x-twitter  transition-all ease-in-out"></i>
            </a>
            <a
              href="https://medium.com/@robinthelevi"
              target="_blank"
              rel="noreferrer"
            >
              <i class="hover:text-emerald-500 hover:scale-125 fa-brands fa-medium   transition-all ease-in-out"></i>
            </a>
            <a
              href="https://dev.to/enesthedad"
              target="_blank"
              rel="noreferrer"
            >
              <i class="hover:text-emerald-500 hover:scale-125 fa-brands fa-dev   transition-all ease-in-out"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenedNavbar;
