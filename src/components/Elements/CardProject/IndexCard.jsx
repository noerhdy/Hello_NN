import React from "react";
import TechTitle from "./TechTitle";
import TechDesc from "./TechDesc";
import { Link } from "react-router-dom";

export const ctaFirst =
  "group text-start flex-col bg-gray-100 hover:bg-neutral-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 p-4 h-fit px-4 rounded-md overflow-hidden dark:text-slate-50 drop-shadow";

const IndexCard = (props) => {
  const { titleProject, textProject, dot, link, dotTitle } = props;
  return (
    <div>
      <div className={ctaFirst}>
        <Link to={link}>
          <TechTitle titleProject={titleProject} textProject={textProject} />
          <TechDesc dot={dot} dotTitle={dotTitle} />
        </Link>
      </div>
    </div>
  );
};

export default IndexCard;
