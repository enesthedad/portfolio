import React from "react";

const Rate = (props) => {
  const size = props.size;
  const color = props.bg;
  const times = Number(props.times);
  console.log(times);
  let divs = [];
  for (let index = 0; index < times; index++) {
    divs.push(
      <div
        style={{ background: color }}
        className={
          size === "lg" ? `w-4 h-4 rounded-full` : `w-3 h-3 rounded-full`
        }
      ></div>
    );
  }
  return divs;
};

export default Rate;
