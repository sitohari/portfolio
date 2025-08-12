import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import NotFound from "./pages/404";
import {Layout } from "./layouts/Layout";

// Detail Projects
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (

    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/About" element={<About />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;
