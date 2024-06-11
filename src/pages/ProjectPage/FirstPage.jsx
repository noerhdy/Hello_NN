import React from "react";
import "../index.css";
import { ReactLenis } from "lenis/react";
import Cta from "@/components/Elements/CTA/Cta";
import CtaLink from "@/components/Elements/CTA/CtaLink";

const FirstPage = () => {
  return (
    <>
      <ReactLenis root>
        <article className="py-20 ">
          <div className=" grid grid-cols-5  ">
            <div className="col-start-1 lg:col-end-5 grid-auto lg:col-start-2 col-end-6 mx-4 ">
              {/* Button link */}
              <Cta textCta="Back" link="/" />
              <div className="flex flex-col space-y-8 my-20 mx-0 md:mx-10  ">
                <h3 className="font-medium text-2xl">Dhome</h3>
                <div className="flex md:flex-nowrap flex-wrap ">
                  <h5 className="dark:text-zinc-200 antialiased font-normal ">
                    The first time I touched the JavaScript library, ReactJS. I
                    was trying to create a website landing page with a simple
                    design layout using the Tailwindcss framework. This is my
                    first time using reactJS and tailwindcss.
                  </h5>
                  <div className="flex flex-col my-12 md:my-0 ml-0  md:ml-12 space-y-4 dark:text-zinc-500">
                    <div className="flex gap-12  ">
                      <h4 className="font-medium ">Date</h4>
                      <h4 className="font-medium normal-nums text-zinc-100">
                        2024
                      </h4>
                    </div>
                    <div className="flex gap-12 ">
                      <h4 className="font-medium ">Link</h4>
                      <CtaLink
                        name="Dhome"
                        link="https://dhome-landingpage.vercel.app/"
                      />
                    </div>
                  </div>
                </div>
                <img
                  className="aspect-video object-cover rounded-md bg-cover bg-center "
                  src="/img/article/sec3.webp"
                ></img>
              </div>
            </div>
          </div>
        </article>
      </ReactLenis>
    </>
  );
};

export default FirstPage;
