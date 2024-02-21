import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const About = () => {
  return (
    <div
      id="about"
      className="relative z-10 flex flex-col items-center w-full h-screen py-10 bg-stone-800"
    >
      <div className="text-white font-bold text-[16px] text-center">
        ABOUT ME
      </div>
      <p className="text-stone-400 text-[18px] mt-5 w-2/3 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        blanditiis, repudiandae fugit inventore quod minima eaque non
        exercitationem rem at est commodi. Illum, consequatur natus quia ipsam
        veniam adipisci laborum.
      </p>
      <div className="relative z-30 flex flex-col gap-10 mt-5 md:flex-row">
        <a
          href="#"
          className="text-white bg-orange-500 mt-5 rounded-md shadow-lg shadow-stone-800 px-2 py-2 text-[16px]"
        >
          Resume
        </a>
        <AnchorLink
          href="#projects"
          className="text-white bg-emerald-500 mt-5 rounded-md shadow-lg shadow-stone-800 px-5 py-2 text-[16px]"
        >
          <button>Projects</button>
        </AnchorLink>
        <a
          href="#"
          className="text-white bg-sky-500 mt-5 rounded-md shadow-lg shadow-stone-800 px-5 py-2 text-[16px]"
        >
          Blog
        </a>
      </div>
    </div>
  );
};

export default About;
