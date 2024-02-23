import React from "react";

const Job = ({ data }) => {
  return (
    <div className="flex justify-between">
      <div className="">
        <h3 className="font-semibold text-[16px]">{data.title}</h3>
        <p className="font-light text-gray-600">{data.explain}</p>
      </div>
      <div className="">{data.time}</div>
    </div>
  );
};

export default Job;
