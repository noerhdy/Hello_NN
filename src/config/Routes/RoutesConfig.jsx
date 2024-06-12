import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import { ThemeProvider } from "@/components/theme-provider";
import ArticleFirst from "@/pages/ArticlePage/ArticleFirst";
import ScrollToTop from "@/components/ScrollToTop";
import {
  HomePage,
  ProjectPage,
  AllProject,
  FirstPage,
  SecondPage,
  ErorPage,
} from "@/pages";
const RoutesConfig = () => {
  return (
    <Router>
      <ReactLenis root>
        <ScrollToTop />
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<ErorPage />} />
            <Route path="/project" element={<ProjectPage />}>
              <Route path="/project/dhome" element={<FirstPage />} />
              <Route path="/project/all-project" element={<AllProject />} />
              <Route path="/project/zen" element={<SecondPage />} />
            </Route>
            <Route path="/article/first" element={<ArticleFirst />} />
          </Routes>
        </ThemeProvider>
      </ReactLenis>
    </Router>
  );
};

export default RoutesConfig;
