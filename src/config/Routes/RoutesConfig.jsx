import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErorPage from "@/pages/ErorPage";
import HomePage from "@/pages/Home/HomePage";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "@/components/theme-provider";

const RoutesConfig = () => {
  return (
    <Router>
      <ScrollToTop />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<ErorPage />} />
          {/* <Route path="project" element={<ProjectPage />} /> */}
          {/* <Route path="/project/dhome" element={<FirstPage />} /> */}
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default RoutesConfig;
