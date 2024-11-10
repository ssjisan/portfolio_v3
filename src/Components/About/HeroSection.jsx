import { Box, Container } from "@mui/material";
import BreadCrumb from "../Common/BreadCrumb";

export default function HeroSection() {
  return (
    <Container>
      <Box sx={{ pt: "72px" }}>
        <BreadCrumb />
      </Box>
    </Container>
  );
}
