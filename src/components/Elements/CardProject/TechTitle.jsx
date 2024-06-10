import React from "react";
import { ArrowUpRight } from "lucide-react";

export const arrowHover =
  "duration-300 origin-center rotate-45 opacity-0 group-hover:opacity-100 group-hover:transform-none mx-1";

const TechTitle = (props) => {
  const { titleProject, textProject } = props;
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col">
        <h2>{titleProject}</h2>
        <p>{textProject}</p>
      </div>
      <ArrowUpRight className={arrowHover} />
    </div>
  );
};

export default TechTitle;
