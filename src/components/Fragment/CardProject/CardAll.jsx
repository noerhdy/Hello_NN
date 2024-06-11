import IndexCardAp from "@/components/Elements/CardAllProject/IndexCardAp";
import React from "react";

const CardAll = () => {
  return (
    <>
      <IndexCardAp
        name="dhome"
        desc="landing page"
        iconUrl="/img/logo_project/react.svg"
        link="https://dhome-landingpage.vercel.app/"
      />
      <IndexCardAp
        name="zen"
        desc="layout sample"
        iconUrl="/img/logo_project/vite.svg"
        link="https://zen-chi-plum.vercel.app"
      />
      <IndexCardAp
        name="zen"
        desc="layout sample"
        iconUrl="/img/logo_project/nuxt.svg"
        link="https://zen-chi-plum.vercel.app"
      />
      <IndexCardAp
        name="zen"
        desc="layout sample"
        iconUrl="/img/logo_project/vite.svg"
        link="https://zen-chi-plum.vercel.app"
      />
    </>
  );
};

export default CardAll;
