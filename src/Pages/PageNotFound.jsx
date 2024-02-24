import React from "react";
import errGif from "../Imgs/404.gif";
import Logo from "../Component/Logo";
const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-[16px] min-h-screen p-4 page-404">
      <div className="absolute top-0 flex items-center justify-center w-full p-5 lg:p-6 md:p-4 bg-stone-800">
        <Logo />
      </div>
      <img
        src={errGif}
        alt=""
        className=" scale-[60%] lg:scale-[70%] md:scale-[60%] mb-[-48px]"
      />
      <h2 className="lg:text-[38px] text-stone-700 md:text-[48px] text-[36px] font-bold tracking-wider">
        Whooops!
      </h2>
      <p className="lg:text-[14px] text-[12px] text-stone-600">
        This page must have gotten lost in the editing process! Dive into other
        stories from my portfolio
      </p>
      <a href="/">
        <button className="px-5 py-3 text-[12px] font-semibold text-stone-800 rounded-full shadow-lg shadow-stone-500 border-[2px] border-stone-600 bg-[#B1DCC9]">
          Go back to my portfolio
        </button>
      </a>
    </div>
  );
};

export default PageNotFound;
