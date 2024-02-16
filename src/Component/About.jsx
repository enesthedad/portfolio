import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center w-full h-screen p-10 bg-stone-800"
    >
      <div className="text-white font-bold text-[48px] text-center">
        ABOUT ME
      </div>
      <p className="text-stone-400 text-[40px] mt-5 w-2/3 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        blanditiis, repudiandae fugit inventore quod minima eaque non
        exercitationem rem at est commodi. Illum, consequatur natus quia ipsam
        veniam adipisci laborum.
      </p>
      <div className="flex gap-10 mt-5">
        <a
          href="#"
          className="text-white bg-orange-500 mt-5 rounded-md px-5 py-2 text-[28px]"
        >
          Resume
        </a>
        <AnchorLink
          href="#projects"
          className="text-white bg-emerald-500 mt-5 rounded-md px-5 py-2 text-[28px]"
        >
          <button>Projects</button>
        </AnchorLink>
        <a
          href="#"
          className="text-white bg-sky-500 mt-5 rounded-md px-5 py-2 text-[28px]"
        >
          Blog
        </a>
      </div>
    </div>
  );
};

export default About;
