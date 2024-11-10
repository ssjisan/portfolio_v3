import { Container } from "@mui/material";
import HeroSection from "../Components/Projects/HeroSection";
import ProjectList from "../Components/Projects/ProjectList";
import MoreProject from "../Components/Projects/MoreProject";
import GoToTop from "../Components/Common/GoToTop";

export default function Projects() {

  return (
    <Container className="gradiant">
      <HeroSection />
      <ProjectList />
      <MoreProject />
      <GoToTop/>
    </Container>
  );
}
