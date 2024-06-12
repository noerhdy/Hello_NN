import IndexArticle from "@/components/Elements/CardArticle/IndexArticle";
import React from "react";

const ArticleSection = () => {
  return (
    <>
      <section className="mt-12 pb-20">
        <div className="col-start-1 col-end-4 mx-4 mb-2 space-y-2 ">
          <h2>Writting</h2>
        </div>
        {/* Article in here */}
        <IndexArticle name="Article" desc="hello" link="/article/first" />
        <IndexArticle name="Article" desc="hello" link="/article/first" />
      </section>
    </>
  );
};

export default ArticleSection;
