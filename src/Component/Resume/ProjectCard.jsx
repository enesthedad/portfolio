import React from "react";

const ProjectCard = ({ data }) => {
  return (
    <div className="border-[1px] w-full p-5 rounded-lg border-gray-300 shadow-md flex flex-col gap-3">
      <a target="_blank" rel="noreferrer" href={data.href}>
        <h4 className="font-semibold text-[20px]  flex items-center gap-2">
          {data.title}
        </h4>
        <p className="text-[14px]">{data.description}</p>
        <p className="flex flex-wrap gap-2">
          {data.tags.map((tag) =>
            tag === "wip" ? (
              <span className="px-2 py-1 text-white text-[10px] hover:bg-emerald-500 bg-emerald-600 rounded-lg">
                {tag}
              </span>
            ) : (
              <span className="px-2 py-1 text-white text-[10px] hover:bg-gray-500 bg-gray-600 rounded-lg">
                {tag}
              </span>
            )
          )}
        </p>
      </a>
    </div>
  );
};

export default ProjectCard;
