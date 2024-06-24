import IndexCard from "@/components/Elements/CardProject/IndexCard";
import React from "react";

const CardProject = () => {
  return (
    <>
      <IndexCard
        titleProject="dhome"
        textProject="landing page"
        link="/project/dhome"
        dot=" bg-yellow-500"
        dotTitle="Javascript"
      />
      <IndexCard
        titleProject="zen"
        textProject="layout sample"
        link="/project/zen"
        dot=" bg-yellow-500"
        dotTitle="Javascript"
      />
      <IndexCard
        titleProject="norterra"
        textProject="Blog sample"
        link="/project/zen"
        dot=" bg-yellow-500"
        dotTitle="Javascript"
      />
      <IndexCard
        titleProject="wedding invitation"
        textProject="minimal wedding invitation"
        link="/project/wedding"
        dot=" bg-green-500"
        dotTitle="Vue"
      />
    </>
  );
};

export default CardProject;
