import Navbar from "../Layout/Navbar";
import { Container } from "@mui/material";
import HeroSection from "../Components/ProjectDetails/HeroSection";
import { useLocation, useParams } from "react-router-dom";
import Projects from "../assets/Projcets.json";
import Error from "./Error";
import ProjectDetail from "../Components/ProjectDetails/ProjectDetail";
import projectsArray from "../assets/Projcets.json";
import GoToTop from "../Components/Common/GoToTop";

export default function ProjectDetails() {
  const { pathname } = useLocation();
  const { title } = useParams();
  const project = Projects.find((project) => project.title === title);
  // If the project is not found, render the NotFound component
  if (!project) {
    return <Error />;
  }
  const titleFromPath = pathname.split("/").pop().replace(/%20/g, " ");
  const selectedProject = projectsArray.find(
    (project) => project.title === titleFromPath
  );
  return (
    <Container className="gradiant" sx={{ pt: "120px" }}>
      <Navbar />
      <HeroSection selectedProject={selectedProject} />
      <ProjectDetail selectedProject={selectedProject} />
      <GoToTop/>
    </Container>
  );
}
