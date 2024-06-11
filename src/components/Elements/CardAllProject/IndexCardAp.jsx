import React from "react";
import { arrowHover } from "../CardProject/TechTitle";
import { ArrowUpRight } from "lucide-react";
export const ctaSecond =
  "group flex flex-row  justify-between rounded-md   hover:bg-neutral-200  dark:hover:bg-zinc-800 cursor-pointer py-2";

const IndexCardAp = (props) => {
  const { iconUrl, name, desc, link } = props;
  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <button onClick={() => handleClick(link)}>
        <div className={`${ctaSecond}`}>
          <div className="flex justify-center gap-2">
            <img
              className="w-10 h-10 rounded-md grayscale overflow-hidden mx-1 brightness-50  ease-in-out duration-300 group-hover:filter-none bg-cover "
              src={iconUrl}
            ></img>

            <div className="flex flex-col justify-center items-start ">
              <h3 className="tracking-wide">{name}</h3>
              <h4 className="text-zinc-500">{desc}</h4>
            </div>
          </div>
          <ArrowUpRight className={`${arrowHover}`} />
        </div>
      </button>
    </>
  );
};

export default IndexCardAp;
