import { ArrowUpRight } from "lucide-react";
import React from "react";

const CtaLink = (props) => {
  const { name, link } = props;
  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <button onClick={() => handleClick(link)} className="flex group space-x-1">
      <h3 className="text-zinc-100">{name}</h3>
      <ArrowUpRight
        size={22}
        className="text-zinc-100  duration-150 ease-linear"
      />
    </button>
  );
};

export default CtaLink;
