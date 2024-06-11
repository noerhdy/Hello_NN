import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const CtaPage = (props) => {
  const { textCta, link } = props;
  return (
    <div className="flex justify-end items-center mx-4 my-2">
      <Link
        to={link}
        className="flex items-center space-x-2 px-2 group"
        preventScrollReset={true}
      >
        <h3>{textCta}</h3>
        <ArrowRight
          size={22}
          className="group-hover:translate-x-2 dark:text-[#37B59F] duration-150 ease-linear"
        />
      </Link>
    </div>
  );
};

export default CtaPage;
