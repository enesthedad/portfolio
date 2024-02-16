import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="w-full min-h-screen bg-emerald-700">
      <div class="parent w-full h-screen  ">
        <div class="div1 bg-stone-800 flex flex-col text-white w-full h-full  justify-center items-center text-[48px] font-bold">
          <h2>PROJECTS</h2>
          <div className="flex gap-5 text-[30px] text-stone-500 links">
            <a href="" className="hover:text-emerald-400 hover:scale-125">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="" className="hover:text-emerald-400 hover:scale-125">
              <i class="fa-brands fa-square-x-twitter"></i>
            </a>
          </div>
        </div>
        <div class="div2 project-1  bg-blue-500  w-full h-full ">
          <a href="#" className="font-bold text-white opacity-1">
            <div className="w-full flex justify-center text-[48px] items-center h-full hover:backdrop-blur-sm overlay-1">
              berkerkavsi.com
            </div>
          </a>
        </div>
        <div class="div3 bg-orange-500  w-full h-full">
          <a href="#" className="font-bold text-white opacity-1">
            <div className="w-full flex justify-center text-[48px] items-center h-full overlay">
              grabpopcorn
            </div>
          </a>
        </div>
        <div class="div4 bg-amber-500  w-full h-full">
          <a href="#" className="font-bold text-white opacity-1">
            <div className="w-full flex justify-center text-[48px] items-center h-full overlay">
              yummy app
            </div>
          </a>
        </div>
        <div class="div5 bg-green-500  w-full h-full">
          <a href="#" className="font-bold text-white opacity-1">
            <div className="w-full flex justify-center text-[48px] items-center h-full overlay">
              tododoo
            </div>
          </a>
        </div>
        <div class="div6 bg-sky-500  w-full h-full">
          <a href="#" className="font-bold text-white opacity-1">
            <div className="w-full flex justify-center text-[48px] items-center h-full overlay">
              berkerkavsi.com
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
