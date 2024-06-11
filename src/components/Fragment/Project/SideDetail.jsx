import CtaLink from "@/components/Elements/CTA/CtaLink";
import React from "react";

const SideDetail = (props) => {
  const { description, nameLink, link, date } = props;
  return (
    <div className="flex md:flex-nowrap flex-wrap ">
      <h5 className="dark:text-zinc-200 antialiased font-normal leading-9 text-balance ">
        {description}
      </h5>
      <div className="flex flex-col my-12 md:my-0 ml-0 md:ml-12 space-y-4 dark:text-zinc-500">
        <div className="flex gap-12">
          <h4 className="font-medium">Date</h4>
          <h4 className="font-medium normal-nums text-zinc-100">{date}</h4>
        </div>
        <div className="flex gap-12 ">
          <h4 className="font-medium">Link</h4>
          <CtaLink nameLink={nameLink} link={link} />
        </div>
      </div>
    </div>
  );
};

export default SideDetail;
