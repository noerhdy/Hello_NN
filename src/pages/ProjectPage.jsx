import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import "../index.css";
import { arrowHover } from "@/components/ProjectSection";
export const ctaSecond =
  "group flex flex-row  justify-between rounded-md   hover:bg-neutral-200  dark:hover:bg-zinc-800 cursor-pointer py-2";

const ProjectPage = () => {
  return (
    <>
      <section className="pt-20">
        <div className=" grid grid-cols-5 ">
          <div className="col-start-1 lg:col-end-5 grid-auto lg:col-start-2 col-end-6  mx-4">
            {/* Button link */}
            <div className="flex justify-start items-center  my-2">
              <Link to="/" className="flex items-center space-x-2 px-2 group">
                <ArrowLeft
                  size={22}
                  className=" group-hover:-translate-x-2 dark:text-[#37B59F] duration-150 ease-linear"
                />
                <h3>Back</h3>
              </Link>
            </div>

            <div className="flex flex-col space-y-4 my-6 mx-0 md:mx-20">
              <h3 className="font-bold text-4xl">All Projects</h3>

              {/* Card ctaSecond project 1  */}
              <Link to="/project/wedding" preventScrollReset={true}>
                <div className={`${ctaSecond}`}>
                  <div className="flex justify-center gap-2">
                    <img
                      className="w-10 h-10 rounded-md grayscale overflow-hidden mx-1 brightness-50  ease-in-out duration-300 group-hover:filter-none bg-cover "
                      src="/img/logo_project/icon-green.svg"
                    ></img>

                    <div className="flex flex-col justify-center items-start ">
                      <h3 className="tracking-wide">Wedding Invitation</h3>
                      <h4 className="text-zinc-500">
                        minimalist wedding website
                      </h4>
                    </div>
                  </div>
                  <ArrowUpRight className={`${arrowHover}`} />
                </div>
              </Link>

              {/* Card ctaSecond project 2  */}
              <div className={`${ctaSecond}`}>
                <div className="flex justify-center gap-2">
                  <img
                    className="w-10 h-10 rounded-md grayscale overflow-hidden mx-1 brightness-50  ease-in-out duration-300 group-hover:filter-none bg-cover "
                    src="/img/logo_project/react.svg"
                  ></img>

                  <div className="flex flex-col justify-center items-start ">
                    <h3 className="tracking-wide">title</h3>
                    <h4 className="text-zinc-500">description in here bro</h4>
                  </div>
                </div>
                <ArrowUpRight className={`${arrowHover}`} />
              </div>

              {/* Card ctaSecond project 3  */}
              <div className={`${ctaSecond}`}>
                <div className="flex justify-center gap-2">
                  <img
                    className="w-10 h-10 rounded-md grayscale overflow-hidden mx-1 brightness-50  ease-in-out duration-300 group-hover:filter-none bg-cover "
                    src="/img/logo_project/vite.svg"
                  ></img>

                  <div className="flex flex-col justify-center items-start ">
                    <h3 className="tracking-wide">title</h3>
                    <h4 className="text-zinc-500">description in here bro</h4>
                  </div>
                </div>
                <ArrowUpRight className={`${arrowHover}`} />
              </div>

              {/* Card ctaSecond project 4  */}
              <div className={`${ctaSecond}`}>
                <div className="flex justify-center gap-2">
                  <img
                    className="w-10 h-10 rounded-md grayscale overflow-hidden mx-1 brightness-50  ease-in-out duration-300 group-hover:filter-none bg-cover "
                    src="/img/logo_project/icon-green.svg"
                  ></img>

                  <div className="flex flex-col justify-center items-start ">
                    <h3 className="tracking-wide">title</h3>
                    <h4 className="text-zinc-500">description in here bro</h4>
                  </div>
                </div>
                <ArrowUpRight className={`${arrowHover}`} />
              </div>

              {/*  */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
