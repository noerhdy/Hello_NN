import "../index.css";
import NavDoc from "@/components/NavDoc";
import { ReactLenis } from "lenis/react";
import { ThemeProvider } from "@/components/theme-provider";
import {
  ArticleSection,
  HeaderSection,
  HeroSection,
  ProjectSection,
} from "@/components/Fragment/IndexHome";

function HomePage() {
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

export default HomePage;
