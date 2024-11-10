import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Navbar from "../Layout/Navbar";
import About from "../Pages/About";
import Projects from "../Pages/Projects";
import Resume from "../Pages/Resume";
import ProjectDetails from "../Pages/ProjectDetails";

export default function MainRouter() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects/:title" element={<ProjectDetails />} />
      </Routes>
    </>
  );
}
