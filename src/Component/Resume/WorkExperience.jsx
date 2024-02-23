import React from "react";
import Job from "./Job";

const WorkExperience = (props) => {
  const selector = props.selector;
  const data = props.experience[selector];
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-[22px] font-semibold">{props.header}</h2>
      <div className="flex flex-col gap-3">
        {data.map((el, index) => (
          <Job key={index} data={el} />
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
