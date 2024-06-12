import React from "react";
import ArticleLayout from "@/components/Layout/ArticleLayout";
import { ReactLenis } from "lenis/react";

const ArticleFirst = () => {
  return (
    <ReactLenis root>
      <ArticleLayout title="Hellloooo Gaiz" imgpageUrl="/img/article/sec2.webp">
        <h3 className="font-medium text-2xl">Introduction</h3>
        <h5 className="dark:text-slate-300 text-justify leading-loose antialiased text-base font-normal indent-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          dolorum dolore labore officia, veniam quo accusamus officiis quas,
          reprehenderit quibusdam praesentium facilis in itaque cupiditate
          maxime eligendi inventore laboriosam, perspiciatis provident ratione
          distinctio ipsam. Omnis deserunt, mollitia, error dignissimos illo
          accusantium, nesciunt magni ex corporis a dolorum voluptatum
          exercitationem cum.
        </h5>
        <h3 className="font-medium text-2xl">Storytelling</h3>
        <h5 className=" dark:text-slate-300 text-justify leading-loose antialiased text-base font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          dolorum dolore labore officia, veniam quo accusamus officiis quas,
          reprehenderit quibusdam praesentium facilis in itaque cupiditate
          maxime
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
          doloremque velit perferendis distinctio porro facere beatae molestiae
          accusantium, impedit minima hic eos maxime nobis nesciunt, odit
          adipisci temporibus eligendi, nisi odio. Sunt.
        </h5>
      </ArticleLayout>
    </ReactLenis>
  );
};

export default ArticleFirst;
