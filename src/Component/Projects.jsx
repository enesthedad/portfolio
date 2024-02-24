import React from "react";

const Projects = () => {
  return (
    <div
      id="projects"
      className="relative z-10 w-full min-h-screen bg-emerald-700"
    >
      <div className="w-full h-screen parent ">
        <div className="div1 bg-stone-800 flex flex-col text-white w-full h-full  justify-center items-center text-[20px] md:p-4 p-1 md:text-[28px] font-bold">
          <h2>PROJECTS</h2>
          <div className="flex gap-5 text-[20px] text-stone-500 links">
            <a
              href="https://github.com/enesthedad?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 hover:scale-125"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://twitter.com/enesthedad"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 hover:scale-125"
            >
              <i className="fa-brands fa-square-x-twitter"></i>
            </a>
          </div>
        </div>
        <div className="w-full h-full div2 project-1 bg-sky-500 ">
          <a
            target="_blank"
            rel="noreferrer"
            href="/"
            className="font-bold text-white opacity-1"
          >
            <div className="w-full flex justify-center text-[14px] md:text-[28px] items-center h-full hover:backdrop-blur-sm overlay-1">
              berkerkavsi.com
            </div>
          </a>
        </div>
        <div className="w-full h-full div3 project-3 bg-rose-400">
          <a
            href="https://grap-popcorn.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-white opacity-1"
          >
            <div className="w-full flex justify-center text-[14px] md:text-[28px] items-center h-full hover:backdrop-blur-sm overlay-3">
              grabpopcorn
            </div>
          </a>
        </div>
        <div className="w-full h-full bg-teal-500 div4">
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-white opacity-1"
          >
            <div className="w-full flex justify-center text-[14px] md:text-[28px] items-center h-full hover:backdrop-blur-sm overlay">
              yummy app
            </div>
          </a>
        </div>
        <div className="w-full h-full bg-purple-600 div5 project-5">
          <a
            href="https://enesthedad-todo.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-white shadow-lg opacity-1 shadow-stone-900"
          >
            <div className="w-full flex justify-center text-[14px] md:text-[28px] items-center h-full hover:backdrop-blur-sm overlay-5">
              tododoo
            </div>
          </a>
        </div>
        <div className="w-full h-full div6 bg-fuchsia-500">
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-white opacity-1"
          >
            <div className="w-full flex justify-center text-[14px] md:text-[28px] items-center h-full hover:backdrop-blur-sm overlay">
              project x
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
