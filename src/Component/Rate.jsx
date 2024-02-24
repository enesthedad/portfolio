import React from "react";

const Rate = (props) => {
  const size = props.size;
  const color = props.bg;
  const times = Number(props.times);
  let divs = [];
  for (let index = 0; index < times; index++) {
    divs.push(
      <div
        key={index}
        style={{ background: color }}
        className={
          size === "lg"
            ? `lg:w-3 lg:h-3 md:h-2 md:w-2 h-[7px] w-[7px] rounded-full`
            : `w-3 h-3 rounded-full`
        }
      ></div>
    );
  }
  return divs;
};

export default Rate;
