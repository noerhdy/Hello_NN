import "../index.css";
import { ThemeProvider } from "@/components/theme-provider";
import HeaderSection from "../components/HeaderSection.jsx";
import HeroSection from "../components/HeroSection";
import BlogSection from "../components/BlogSection";
import ProjectSection from "../components/ProjectSection";
import NavDoc from "@/components/NavDoc";
import { ReactLenis } from "lenis/react";

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
              <BlogSection />
              <NavDoc />
            </div>
          </div>
        </ThemeProvider>
      </ReactLenis>
    </>
  );
}

export default HomePage;
