import React from "react";
import img1 from "../Imgs/paper_plane_flying-2.svg";
import img2 from "../Imgs/nature_world-1.svg";
import img3 from "../Imgs/science_atom_w3zLXnr.svg";
import img4 from "../Imgs/nature_space_planet-1_i28qwXR.svg";
import avatar from "../Imgs/hello.png";
const Greeter = () => {
  return (
    <div className="top-0 z-0 flex  lg:px-[100px] w-full min-h-full justify-center lg:items-end lg:pb-10 md:items-end md:pb-20 items-center bg-[#EBEBEB]">
      <div className="relative flex flex-col items-center justify-center w-full h-fit lg:w-2/3 text">
        <div className="flex flex-col w-4/5 text-[#383838] gap-2 rounded-xl h-fit ">
          <div className="text-[24px]  sm:text-[48px]  md:text-[38px] lg:text-[40px]  flex flex-col w-full gap-1 tracking-wider font-bold">
            <div className="flex items-center justify-center w-full gap-2 sm:gap-6 md:gap-8 lg:gap-6">
              <div className="">
                <img src={img1} className="h-12" alt="" />
              </div>
              <h2 className="flex justify-start text-center">i'm enes,</h2>
            </div>
            <div className="flex items-center justify-center w-full gap-4 sm:gap-6 md:gap-8 lg:gap-4">
              <h2 className="relative text-animation">
                an engineer
                <div className="absolute left-0 w-full h-1 px-10 bg-[#FE7D91] top-1/2"></div>
              </h2>
              <div className="p-2 bg-red-200 rounded-full">
                <img src={img2} className="h-12" alt="" />
              </div>
            </div>
            <div className="flex items-center justify-center w-full gap-4 sm:gap-6 md:gap-8 lg:gap-10">
              <div className="">
                <img src={img3} className="h-12" alt="" />
              </div>
              <h2> a fullstack</h2>
            </div>
            <div className="flex items-center justify-center w-full gap-4 sm:gap-6 md:gap-8 lg:gap-10">
              <h2 className="px-4 rounded-full bg-[#CFF8E6]"> developer</h2>
              <div className="p-2 bg-[#FFE4CF] rounded-full">
                <img src={img4} className="h-12" alt="" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <p className="text-stone-500 w-4/5 text-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[14px]">
                i design and develop fullstack apps to turn your dreams into
                reality
              </p>

              <a
                href="mailto: robinthelevi@gmail.com"
                className="self-center px-4 py-2 font-bold text-stone-700 rounded-lg shadow-md bg-[#DBCDF0] shadow-stone-600"
              >
                get in touch
              </a>
            </div>
            <div className="lg:flex hidden text-[24px] md:hidden flex-col">
              <div className="flex border-[2px] border-stone-400 py-2 px-4 rounded-full  justify-center gap-4 text-stone-500 links">
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
                <a
                  href="https://dev.to/enesthedad"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="transition-all ease-in-out hover:text-emerald-500 hover:scale-125 fa-brands fa-dev"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="items-center justify-center hidden w-1/2 h-full bg-[#ebebeb] lg:flex">
        <img
          src={avatar}
          className="h-[350px] rounded-[35%] bg-stone-700 mb-[100px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default Greeter;
