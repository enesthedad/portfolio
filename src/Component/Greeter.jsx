import React from "react";
import img1 from "../Imgs/paper_plane_flying-2.svg";
import img2 from "../Imgs/nature_world-1.svg";
import img3 from "../Imgs/science_atom_w3zLXnr.webp";
import img4 from "../Imgs/nature_space_planet-1_i28qwXR.svg";
import avatar from "../Imgs/hello.webp";
const Greeter = () => {
  return (
    <div className="top-0 z-0 flex  lg:px-[100px] w-full min-h-full justify-center lg:items-center lg:pb-10 md:items-center md:pb-20 items-center bg-[#EBEBEB]">
      <div className="relative flex flex-col items-center justify-start w-full h-fit lg:w-2/3 text">
        <div className="flex flex-col w-4/5 text-[#383838] gap-2 rounded-xl h-fit ">
          <div className="text-[24px]  sm:text-[48px]  md:text-[64px] lg:text-[30px] xl:text-[26px] 2xl:text-[32px]  flex flex-col w-full gap-1 tracking-wider font-bold">
            <div className="flex items-center justify-center w-full gap-2 sm:gap-6 md:gap-8 lg:gap-6">
              <div className="">
                <img src={img1} className="h-12" alt="icon-1" />
              </div>
              <h2 className="flex justify-start text-center">i'm enes,</h2>
            </div>
            <div className="flex items-center justify-center w-full gap-4 sm:gap-6 md:gap-8 lg:gap-4">
              <h2 className="relative text-animation">
                an engineer
                <div className="absolute left-0 w-full h-1 px-10 bg-[#FE7D91] top-1/2"></div>
              </h2>
              <div className="p-2 bg-red-200 rounded-full">
                <img src={img2} className="h-12" alt="icon-2" />
              </div>
            </div>
            <div className="flex items-center justify-center w-full gap-4 sm:gap-6 md:gap-8 lg:gap-10">
              <div className="">
                <img src={img3} className="h-12" alt="icon-3" />
              </div>
              <h2> a fullstack</h2>
            </div>
            <div className="flex items-center justify-center w-full gap-4 sm:gap-6 md:gap-8 lg:gap-10">
              <h2 className="px-4 rounded-full bg-[#CFF8E6]"> developer</h2>
              <div className="p-2 bg-[#FFE4CF] rounded-full">
                <img src={img4} className="h-12" alt="icon-4" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <h3 className="text-stone-500 w-4/5 text-center text-[14px] sm:text-[16px] md:text-[25px] lg:text-[20px] xl:text-[16px] 2xl:text-[18px]">
                i design and develop fullstack apps to turn your dreams into
                reality
              </h3>

              <a
                href="mailto: robinthelevi@gmail.com"
                className="self-center px-4 py-2 font-bold lg:text-[24px] lg:mt-5 xl:text-[18px] 2xl:text-[16px] md:text-[24px] text-stone-700 rounded-lg shadow-md bg-[#DBCDF0] shadow-stone-600"
              >
                get in touch
              </a>
            </div>
            <div className="lg:flex hidden text-[24px] xl:text-[32px] 2xl:text-[30px] lg:mt-3 md:hidden flex-col">
              <div className="flex justify-center gap-4 px-4 py-2 rounded-full text-stone-500 links">
                <a
                  href="https://github.com/enesthedad"
                  className="divide-x-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="transition-all ease-in-out hover:text-[#212022] hover:scale-125 fa-brands fa-github"></i>
                </a>
                <a
                  href="https://twitter.com/enesthedad"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="transition-all ease-in-out hover:text-[#212022] hover:scale-125 fa-brands fa-square-x-twitter"></i>
                </a>
                <a
                  href="https://medium.com/@robinthelevi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="transition-all ease-in-out hover:text-[#212022] hover:scale-125 fa-brands fa-medium"></i>
                </a>
                <a
                  href="https://dev.to/enesthedad"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="transition-all ease-in-out hover:text-[#212022] hover:scale-125 fa-brands fa-dev"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="items-center justify-center hidden w-1/2 h-full bg-[#ebebeb] lg:flex">
        <img
          src={avatar}
          className=" lg:h-[300px] xl:h-[350px] 2xl:h-[400px] rounded-[35%] bg-stone-700 "
          alt="hero-avatar"
        />
      </div>
    </div>
  );
};

export default Greeter;
