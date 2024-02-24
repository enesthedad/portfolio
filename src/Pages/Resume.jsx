import React from "react";
import ResumeHeader from "../Component/Resume/ResumeHeader";
import ResumeAvatar from "../Component/Resume/ResumeAvatar";
import ResumeAbout from "../Component/Resume/ResumeAbout";
import WorkExperience from "../Component/Resume/WorkExperience";
import { data } from "../Component/Resume/resumeData";
import Skill from "../Component/Resume/Skill";
import Projects from "../Component/Resume/Projects";

const Resume = () => {
  const working = data[0];
  const education = data[1];
  const skills = data[2].skills;
  const languages = data[3].languages;
  const projects = data[4].projects;
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="flex flex-col w-full gap-2 bg-white 2xl:max-w-4xl xl:max-w-2xl md:max-w-xl md:py-8 lg:max-w-3xl lg:py-16">
        <div className="flex items-center justify-between gap-4">
          <ResumeHeader data={languages} />
          <ResumeAvatar />
        </div>
        <ResumeAbout />
        <WorkExperience
          experience={working}
          header="Working Experience"
          selector="working"
        />
        <WorkExperience
          experience={education}
          header="Education"
          selector="education"
        />
        <div className="flex gap-4 py-2">
          {skills.map((el, index) => (
            <Skill item={el} key={index} />
          ))}{" "}
        </div>
        <Projects data={projects} />
      </div>
    </div>
  );
};

export default Resume;
