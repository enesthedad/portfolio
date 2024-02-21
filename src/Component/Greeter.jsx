import React from "react";
import img1 from "../Imgs/paper_plane_flying-2.svg";
import img2 from "../Imgs/nature_world-1.svg";
import img3 from "../Imgs/science_atom_w3zLXnr.svg";
import img4 from "../Imgs/nature_space_planet-1_i28qwXR.svg";
import mainImg from "../Imgs/undraw_code_inspection_bdl7.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Greeter = () => {
  return (
    <div className="top-0 z-0 flex items-center justify-center w-full h-full bg-white">
      <div className="relative flex flex-col items-center w-full gap-5 p-2 lg:w-2/3 sm:p-5 text">
        <div className="flex flex-col items-center justify-center w-4/5 gap-5">
          <div className="text-[24px] sm:text-[48px]  md:text-[54px] lg:text-[48px] flex flex-col w-full gap-2 mt-20 items-center tracking-wider font-bold justify-center">
            <div className="flex items-center justify-center w-full gap-2 sm:gap-6 md:gap-8 lg:gap-10">
              <div className="">
                <img src={img1} className="h-12" alt="" />
              </div>
              <h2 className="flex justify-start text-center">i'm enes,</h2>
            </div>
            <div className="flex items-center justify-center w-full gap-4 sm:gap-6 md:gap-8 lg:gap-10">
              <h2 className="relative ">
                an engineer
                <div className="absolute left-0 w-full h-1 px-4 bg-red-500 top-1/2"></div>
              </h2>
              <div className="">
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
              <h2> developer</h2>
              <div className="">
                <img src={img4} className="h-12" alt="" />
              </div>
            </div>
          </div>
          <p className="text-stone-500 w-4/5 text-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px]">
            i design and develop fullstack apps to turn your dreams into reality
          </p>

          <a
            href="mailto: robinthelevi@gmail.com"
            className="px-4 py-2 font-bold text-white rounded-lg shadow-md md:mr-16 sm:mr-12 lg:mr-28 bg-emerald-500 shadow-stone-600"
          >
            get in touch
          </a>
        </div>
      </div>
      <div className="items-center justify-center hidden w-1/2 h-full bg-white lg:flex">
        <img className="w-4/5" src={mainImg} alt="" />
      </div>
    </div>
  );
};

export default Greeter;
