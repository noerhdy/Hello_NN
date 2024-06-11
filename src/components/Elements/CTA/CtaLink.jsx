import { ArrowUpRight } from "lucide-react";
import React from "react";
import { arrowHover } from "../CardProject/TechTitle";

const CtaLink = (props) => {
  const { nameLink, link } = props;
  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <button onClick={() => handleClick(link)} className="flex group space-x-1">
      <h3 className="text-zinc-100">{nameLink}</h3>
      <ArrowUpRight className={`${arrowHover}`} />
    </button>
  );
};

export default CtaLink;
