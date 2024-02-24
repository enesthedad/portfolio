import React from "react";

const Language = ({ data }) => {
  const { title, full } = data;
  let skill = [];
  for (let index = 0; index < full; index++) {
    skill.push(<div className="w-2 h-2 bg-gray-600 rounded-full"></div>);
  }
  for (let index = 0; index < 5 - full; index++) {
    skill.push(<div className="w-2 h-2 rounded-full bg-stone-300"></div>);
  }
  return (
    <div>
      <span>{title}</span>
      <div className="flex gap-1">{skill.map((el, index) => el)}</div>
    </div>
  );
};

export default Language;
