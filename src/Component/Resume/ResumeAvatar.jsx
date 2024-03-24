import React from "react";
import resumeAvatar from "../../Imgs/hello.webp";
const ResumeAvatar = () => {
  return (
    <div className="h-[150px] w-[150px] flex items-center justify-center overflow-hidden ">
      <img
        src={resumeAvatar}
        alt=""
        className="object-cover bg-gray-100 rounded-lg border-[1px] border-gray-300 shadow-md overflow"
      />
    </div>
  );
};

export default ResumeAvatar;
