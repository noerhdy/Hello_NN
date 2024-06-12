import React from "react";
import CardProject from "../CardProject/CardProject";
import CtaPage from "@/components/Elements/CTA/CtaPage";

export const arrowHover =
  "duration-300 origin-center rotate-45 opacity-0  group-hover:opacity-100  group-hover:transform-none mx-1";
const ProjectSection = () => {
  return (
    <>
      <section>
        {/* CardProject */}
        <div className="grid grid-cols-1 mx-4 gap-4 md:grid-cols-2 py-2">
          <CardProject />
        </div>
        {/* Button link */}
        {/* <CtaPage link="/project/all-project" textCta="All projects" /> */}
      </section>
    </>
  );
};

export default ProjectSection;
