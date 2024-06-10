import React from "react";
import { ArrowRight } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import IndexCta from "./Elements/CardProject/IndexCta";

export const ctaFirst =
  "group text-start flex-col bg-gray-100 hover:bg-neutral-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 p-4 h-fit px-4 rounded-md overflow-hidden dark:text-slate-50 drop-shadow";
export const arrowHover =
  "duration-300 origin-center rotate-45 opacity-0  group-hover:opacity-100  group-hover:transform-none mx-1";
export const dotJs = "flex h-2 w-2 rounded-full bg-yellow-500";
export const dotvue = "flex h-2 w-2 rounded-full bg-green-500";
const ProjectSection = () => {
  return (
    <>
      <section>
        <div className="grid grid-cols-1 mx-4 gap-4 md:grid-cols-2 py-2">
          <IndexCta
            titleProject="hello"
            textProject="hello again"
            link="/project/dhome"
            dot=" bg-blue-500"
            dotTitle="hellos"
          />
          {/* Card ctaFirst component project 1 */}
          <button>
            <div className={`${ctaFirst}`}>
              <Link to="/project/dhome" preventScrollReset={true}>
                <div className="flex flex-row justify-between ">
                  <div className="flex flex-col ">
                    <h2>dhome</h2>
                    <p>layout sample</p>
                  </div>
                  <ArrowUpRight className={`${arrowHover}`} />
                </div>

                <div className="flex items-center mt-6  space-x-2">
                  <span className={`${dotJs}`} />
                  <p>Javascript</p>
                </div>
              </Link>
            </div>
          </button>

          {/* Card ctaFirst component project 2 */}
          <button>
            <div className={`${ctaFirst}`}>
              <Link to="/project/zen" preventScrollReset={true}>
                <div className="flex flex-row justify-between ">
                  <div className="flex flex-col ">
                    <h2>zen</h2>
                    <p>layout sample</p>
                  </div>
                  <ArrowUpRight className={`${arrowHover}`} />
                </div>

                <div className="flex items-center mt-6  space-x-2">
                  <span className={`${dotJs}`} />
                  <p>Javascript</p>
                </div>
              </Link>
            </div>
          </button>

          {/* Card ctaFirst component project 3 */}
          <button>
            <div className={`${ctaFirst}`}>
              <div className="flex flex-row justify-between ">
                <div className="flex flex-col ">
                  <h2>flau </h2>
                  <p>"description"</p>
                </div>
                <ArrowUpRight className={`${arrowHover}`} />
              </div>

              <div className="flex items-center mt-6  space-x-2">
                <span className="flex h-2 w-2 rounded-full bg-yellow-500" />
                <p>Javascript</p>
              </div>
            </div>
          </button>

          {/* Card ctaFirst component project 4 */}
          <button>
            <div className={`${ctaFirst}`}>
              <Link to="/project/wedding" preventScrollReset={true}>
                <div className="flex flex-row justify-between ">
                  <div className="flex flex-col ">
                    <h2>wedding invitation</h2>
                    <p>minimal wedding invitation</p>
                  </div>
                  <ArrowUpRight className={`${arrowHover}`} />
                </div>

                <div className="flex items-center mt-6  space-x-2">
                  <span className="flex h-2 w-2 rounded-full bg-green-500" />
                  <p>Vue</p>
                </div>
              </Link>
            </div>
          </button>
        </div>

        {/* Button link */}
        <div className="flex justify-end items-center mx-4 my-2">
          <Link
            to="Project"
            className="flex items-center space-x-2 px-2 group"
            preventScrollReset={true}
          >
            <h3> All projects</h3>
            <ArrowRight
              size={22}
              className="group-hover:translate-x-2 dark:text-[#37B59F] duration-150 ease-linear"
            />
          </Link>
        </div>
      </section>
    </>
  );
};

export default ProjectSection;
