import { ArrowUpRight } from "lucide-react";
import React from "react";
import { arrowHover } from "../CardProject/TechTitle";

const CtaLink = (props) => {
  const { nameLink, link } = props;
  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <button onClick={() => handleClick(link)} className="flex group space-x-1 ">
      <h3 className="dark:text-zinc-100 text-black ">{nameLink}</h3>
      <ArrowUpRight
        className={`text-black dark:dark:text-zinc-100 ${arrowHover}`}
      />
    </button>
  );
};

export default CtaLink;
