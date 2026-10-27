import React from "react";
import SkillPill from "./SkillPill";
import { skillCategories, skills } from "./constants";

const SkillSection = () => {
  return (
    <div className="flex flex-col gap-6 px-[3%] py-10 md:gap-5">
      {skillCategories.map((category) => (
        <div
          key={category}
          className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6"
        >
          <h3 className="text-secondary font-mono text-xs tracking-widest uppercase md:w-36 md:shrink-0">
            {category}
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills
              .filter((skill) => skill.category === category)
              .map((skill) => (
                <SkillPill
                  key={skill.name}
                  skillName={skill.name}
                  icon={skill.icon}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillSection;
