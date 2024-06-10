import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./components/theme-provider";
import BlogPage from "./pages/BlogPage";
import ErorPage from "./pages/ErorPage";
import FourthPage from "./pages/FourthPage";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<ErorPage />} />
          <Route path="project" element={<ProjectPage />} />
          <Route path="/project/dhome" element={<FirstPage />} />
          <Route path="/project/zen" element={<SecondPage />} />
          <Route path="/project/wedding" element={<FourthPage />} />
          <Route path="/blogs/article-first" element={<BlogPage />} />
          <Route path="/blogs/article-second" element={<BlogPage />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
