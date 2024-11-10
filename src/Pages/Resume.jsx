import { Container } from "@mui/material";
import HeroSection from "../Components/About/HeroSection";
import ResumeBody from "../Components/Resume/ResumeBody";
import GoToTop from "../Components/Common/GoToTop";

export default function Resume() {
  return (
    <Container className="gradiant">
      <HeroSection />
      <ResumeBody />
      <GoToTop />
    </Container>
  );
}
