import React from "react";
import "../index.css";
import Cta from "@/components/Elements/CTA/Cta";
import CardAll from "@/components/Fragment/CardProject/CardAll";

const AllProject = () => {
  return (
    <>
      <section className="pt-20">
        <div className=" grid grid-cols-5 ">
          <div className="col-start-1 lg:col-end-5 grid-auto lg:col-start-2 col-end-6  mx-4">
            {/* Button link */}
            <Cta textCta="Back" link="/" />
            <div className="flex flex-col space-y-4 my-6 mx-0 md:mx-20">
              <h3 className="font-bold text-4xl">All Projects</h3>
              <CardAll />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProject;
