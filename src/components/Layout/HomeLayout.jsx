import "../index.css";
import NavDoc from "@/components/NavDoc";
import { ReactLenis } from "lenis/react";
import {
  ArticleSection,
  HeaderSection,
  HeroSection,
  ProjectSection,
} from "../Fragment/IndexHome";
import { ThemeProvider } from "../theme-provider";

function HomeLayout() {
  return (
    <>
      <ReactLenis root>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <div className=" grid grid-cols-5 ">
            <div className="col-start-1 lg:col-end-5 grid-auto lg:col-start-2 col-end-6">
              <HeaderSection />
              <HeroSection />
              <ProjectSection />
              <ArticleSection />
              <NavDoc />
            </div>
          </div>
        </ThemeProvider>
      </ReactLenis>
    </>
  );
}

export default HomeLayout;
