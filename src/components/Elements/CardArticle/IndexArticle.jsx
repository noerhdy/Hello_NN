import React from "react";
import { Link } from "react-router-dom";

const IndexArticle = (props) => {
  const { name, desc, link } = props;
  return (
    <div className="grid grid-cols-1 me-4 mx-4 md:mx-0 md:me-4 ">
      <Link to={link} preventScrollReset={true}>
        <div className="  hover:bg-gray-200 dark:hover:bg-zinc-900 p-2 h-fit ps-4 rounded-md overflow-hidden dark:text-slate-50 cursor-pointer">
          <h3>{name}</h3>
          <p>{desc}</p>
        </div>
      </Link>
    </div>
  );
};

export default IndexArticle;
