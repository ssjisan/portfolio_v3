import { Container } from "@mui/material";
import "./style.css";
import HeroSection from "../Components/Home/HeroSection";
export default function Home() {
  return (
    <Container className="gradiant" sx={{ pt: "120px" }}>
      <HeroSection/>
    </Container>
  );
}
