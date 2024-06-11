import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErorPage from "@/pages/ErorPage";
import HomePage from "@/pages/Home/HomePage";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "@/components/theme-provider";
import ProjectPage from "@/pages/ProjectPage/ProjectPage";
import FirstPage from "@/pages/ProjectPage/FirstPage";
import SecondPage from "@/pages/ProjectPage/SecondPage";
import AllProject from "@/pages/ProjectPage/AllProject";

const RoutesConfig = () => {
  return (
    <Router>
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
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default RoutesConfig;
