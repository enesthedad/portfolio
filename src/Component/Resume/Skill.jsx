import React from "react";

const Skill = ({ item }) => {
  return (
    <span className="px-3 py-1 text-white bg-gray-600 rounded-lg hover:bg-gray-500">
      {item.title}
    </span>
  );
};

export default Skill;
