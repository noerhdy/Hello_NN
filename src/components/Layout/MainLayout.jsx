import React from "react";
import {
  ArticleSection,
  HeaderSection,
  HeroSection,
  ProjectSection,
} from "../Fragment/IndexHome";
import { ReactLenis } from "lenis/react";

export const MainLayout = () => {
  return (
    <>
      <ReactLenis root>
        <div className=" grid grid-cols-5 ">
          <div className="col-start-1 lg:col-end-5 grid-auto lg:col-start-2 col-end-6">
            <HeaderSection />
            <HeroSection />
            <ProjectSection />
            <ArticleSection />
          </div>
        </div>
      </ReactLenis>
    </>
  );
};
