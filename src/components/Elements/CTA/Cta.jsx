import { ArrowLeft } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Cta = (props) => {
  const { textCta, link } = props;
  return (
    <div className="flex justify-start items-center my-2">
      <Link to={link} className="flex items-center space-x-2 px-2 group">
        <ArrowLeft
          size={22}
          className=" group-hover:-translate-x-2 dark:text-[#37B59F] duration-150 ease-linear"
        />
        <h3>{textCta}</h3>
      </Link>
    </div>
  );
};

export default Cta;
