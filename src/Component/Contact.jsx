import React from "react";
import helloImg from "../Imgs/undraw_mello_otq1.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Contact = () => {
  return (
    <div className="relative w-full min-h-screen p-10 bg-white px-36">
      <h2 className="text-[48px] font-bold text-stone-800 text-center p-1 mb-10">
        Connect with me
      </h2>
      <div className="bg-[#E8E8F2] flex rounded-xl  overflow-hidden items-center  p-5">
        <div className="w-1/2 p-10 left">
          <h4 className="text-[40px] flex flex-col align-middle justify-center font-bold p-5">
            Building fullstack apps, sites,{" "}
            <span className="text-[#3B2AD4] flex align-middle">
              <i class="fa-solid fa-wand-sparkles bg-[#3B2AD4] text-white mx-2 text-[20px] p-5 rounded-full"></i>{" "}
              dreams
            </span>
          </h4>
          <p className="px-5 text-lg text-stone-600">
            a friendly passionate full stack developer in Turkey. I specialize
            in responsive Web Design
          </p>
          <form action="submit" className="p-5">
            <input
              type="text"
              placeholder="E-mail address"
              className="px-4 py-2 w-[250px]"
            />
            <button
              type="submit"
              className="bg-[#3B2AD4] text-white  py-2 px-4"
            >
              Connect With Me
            </button>
          </form>
        </div>
        <div className="relative w-1/2 p-0">
          <img src={helloImg} className="scale-125" alt="" />
        </div>
      </div>
      <AnchorLink href="#home">
        <button className="absolute w-16 h-16 bottom-10 right-10 bg-[#3B2AD4] text-white rounded-full text-[36px]">
          <i class="fa-solid fa-chevron-up"></i>
        </button>
      </AnchorLink>
    </div>
  );
};

export default Contact;
