import React from "react";
import linkIcon from "../Imgs/route-svgrepo-com.svg";
const ProjectCard = () => {
  return (
    <div className="flex w-4/5 gap-20 px-5 py-10 mx-auto rounded-lg bg-stone-50">
      <div className="w-2/3 px-8 py-4 bg-white rounded-lg wide-card">
        <div className="flex items-center justify-between p-4 header">
          <div className="flex flex-col gap-3 px-4 py-8 left">
            <h3 className="text-xl font-semibold text-stone-700">
              project name
            </h3>
            <p className="text-stone-600">explain project</p>
          </div>
          <div className="right">
            <img src={linkIcon} className="h-10" alt="" />
          </div>
        </div>
        <div className="flex justify-center p-10 rounded-md project-img bg-slate-500">
          <img
            src="https://placehold.co/600x400"
            className="h-[200px] w-full object-cover"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-start w-1/3 p-10 bg-white rounded-md little-card">
        <div className="flex gap-10 p-4 m-8 border-2 header bg-stone-100 rounded-xl">
          <img
            src="data:image/png;base64,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"
            alt=""
            className="h-10"
          />
          <img
            src="data:image/png;base64,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"
            alt=""
            className="h-10"
          />
        </div>
        <div className="flex flex-col justify-between w-full h-full p-10 rounded-md body bg-slate-500">
          <div className="flex flex-col items-center w-full gap-5 p-2 project-img">
            <h2>Project was about</h2>
            <div className="flex gap-2 tags ">
              <p className="px-2 py-1 rounded-md bg-emerald-500">tag</p>
              <p className="px-2 py-1 rounded-md bg-sky-500">tag</p>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 source">
            <h2>source code</h2>
            <a
              href="https://github.com/enesthedad"
              className="px-3 py-1 rounded-md bg-zinc-600 text-stone-200"
            >
              github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
