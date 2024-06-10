import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import "../index.css";
import { ReactLenis } from "lenis/react";
export const ctaSecond =
  "group flex flex-row  justify-between rounded-md   hover:bg-neutral-200  dark:hover:bg-zinc-800 cursor-pointer py-2";

const SecondPage = () => {
  return (
    <>
      <ReactLenis root>
        <article className="py-20 ">
          <div className=" grid grid-cols-5  ">
            <div className="col-start-1 lg:col-end-5 grid-auto lg:col-start-2 col-end-6 mx-4 ">
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
              <div className="flex flex-col space-y-8 my-6  mx-0 md:mx-10  ">
                <h3 className="font-medium text-2xl">Zen </h3>
                <img
                  className="aspect-video object-cover rounded-md   bg-cover bg-center "
                  src="/img/article/sec2.webp"
                ></img>

                <h3 className="font-medium text-2xl">Introduction</h3>
                <h5 className="dark:text-slate-300 text-justify leading-loose antialiased text-base font-normal indent-12">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem dolorum dolore labore officia, veniam quo accusamus
                  officiis quas, reprehenderit quibusdam praesentium facilis in
                  itaque cupiditate maxime eligendi inventore laboriosam,
                  perspiciatis provident ratione distinctio ipsam. Omnis
                  deserunt, mollitia, error dignissimos illo accusantium,
                  nesciunt magni ex corporis a dolorum voluptatum exercitationem
                  cum.
                </h5>
                <h3 className="font-medium text-2xl">Storytelling</h3>
                <h5 className=" dark:text-slate-300 text-justify leading-loose antialiased text-base font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem dolorum dolore labore officia, veniam quo accusamus
                  officiis quas, reprehenderit quibusdam praesentium facilis in
                  itaque cupiditate maxime
                  <br />
                  <br />
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                  doloremque velit perferendis distinctio porro facere beatae
                  molestiae accusantium, impedit minima hic eos maxime nobis
                  nesciunt, odit adipisci temporibus eligendi, nisi odio. Sunt.
                </h5>
              </div>
            </div>
          </div>
        </article>
      </ReactLenis>
    </>
  );
};

export default SecondPage;
