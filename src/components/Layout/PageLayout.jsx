import React from "react";
import { ReactLenis } from "lenis/react";
import Cta from "../Elements/CTA/Cta";
import SideDetail from "../Fragment/Project/SideDetail";

const PageLayout = (props) => {
  const { title, nameLink, date, link, description, imgpageUrl } = props;
  return (
    <>
      <ReactLenis root>
        <article className="py-20 ">
          <div className=" grid grid-cols-5  ">
            <div className="col-start-1 lg:col-end-5 grid-auto lg:col-start-2 col-end-6 mx-4 ">
              <Cta textCta="Back" link="/" />
              <div className="flex flex-col space-y-8 my-20 mx-0 md:mx-10  ">
                <h3 className="font-medium text-4xl">{title}</h3>
                <SideDetail
                  nameLink={nameLink}
                  date={date}
                  link={link}
                  description={description}
                />
                <img
                  className="aspect-video object-cover rounded-md bg-cover bg-center "
                  src={imgpageUrl}
                ></img>
              </div>
            </div>
          </div>
        </article>
      </ReactLenis>
    </>
  );
};

export default PageLayout;
