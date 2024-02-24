import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = ({ data }) => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-semibold text-[22px] flex items-center gap-2">
        Projects
      </h3>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        {data.map((proj, index) => (
          <ProjectCard key={index} data={proj} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
