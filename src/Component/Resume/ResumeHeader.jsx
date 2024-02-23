import React from "react";
import githubIcon from "../../Imgs/Resume/github-svgrepo-com.svg";
import mailIcon from "../../Imgs/Resume/mail-svgrepo-com.svg";
import twitterIcon from "../../Imgs/Resume/twitter-svgrepo-com.svg";
import linkedInIcon from "../../Imgs/Resume/linkedin-svgrepo-com.svg";
import locationIcon from "../../Imgs/Resume/world-svgrepo-com.svg";
import Language from "./Language";
const ResumeHeader = ({ data }) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-semibold text-[22px] flex items-center gap-2">
        Enes Soyturk <div className="w-2 h-2 bg-green-400 rounded-full"></div>
      </h2>
      <p className="font-light text-gray-700">
        Aspired Fullstack developer & full time learner.
      </p>
      <p className="flex justify-between text-gray-600">
        {data.map((el) => (
          <Language data={el} />
        ))}
      </p>{" "}
      <p className="flex items-center gap-2 italic tracking-wider text-gray-400 font-lighter">
        <img src={locationIcon} className="h-4" alt="" />
        Ankara, Turkey
      </p>
      <div className="flex gap-2 links">
        <a href="">
          <div className="p-1 hover:bg-gray-300 w-max rounded-lg border-[1px] border-stone-700">
            <img src={githubIcon} className="h-6" alt="" />
          </div>
        </a>
        <a href="">
          <div className="p-1 hover:bg-gray-300 w-max rounded-lg border-[1px] border-stone-700">
            <img src={linkedInIcon} className="h-6" alt="" />
          </div>
        </a>
        <a href="">
          <div className="p-1 hover:bg-gray-300 w-max rounded-lg border-[1px] border-stone-700">
            <img src={twitterIcon} className="h-6" alt="" />
          </div>
        </a>
        <a href="">
          <div className="p-1 hover:bg-gray-300 w-max rounded-lg border-[1px] border-stone-700">
            <img src={mailIcon} className="h-6" alt="" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ResumeHeader;
