import { Container } from "@mui/material";
import HeroSection from "../Components/About/HeroSection";
import AboutBody from "../Components/About/AboutBody";
import GoToTop from "../Components/Common/GoToTop";
import "./style.css";
import AboutSlider from "../Components/About/AboutSlider";
export default function About() {
  return (
    <>
      <Container className="gradiant">
        <HeroSection />
        <AboutBody />
        <GoToTop />
      </Container>
      <AboutSlider />
    </>
  );
}
