import React from "react";
import { Link } from "react-router-dom";

const ArticleSection = () => {
  return (
    <>
      <section className=" mt-12 ">
        <div className="col-start-1 col-end-4 mx-4 mb-2 space-y-2 ">
          <h2>Writting</h2>
        </div>
        {/* Article in here */}
        <div className="grid grid-cols-1 me-4 mx-4 md:mx-0 md:me-4 ">
          <Link to="/blogs/article-first" preventScrollReset={true}>
            <div className="  hover:bg-gray-200 dark:hover:bg-zinc-900 p-2 h-fit ps-4 rounded-md overflow-hidden dark:text-slate-50 cursor-pointer">
              <h3>Article</h3>
              <p>something add description in here ok</p>
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-1 mx-4 md:mx-0 md:me-4 ">
          <Link to="/blogs/article-second" preventScrollReset={true}>
            <div className="  hover:bg-gray-200 dark:hover:bg-zinc-900 p-2 h-fit ps-4  rounded-md overflow-hidden dark:text-slate-50 cursor-pointer">
              <h3>Article</h3>
              <p>something add description in here ok</p>
            </div>
          </Link>
        </div>
      </section>
      <footer>
        <div className="flex justify-end items-center p-6">
          <h4 className="text-zinc-300 text-[8px]">Thanks for stopping by.</h4>
        </div>
      </footer>
    </>
  );
};

export default ArticleSection;
