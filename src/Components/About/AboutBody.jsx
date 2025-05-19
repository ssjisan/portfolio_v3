import { Container, Grid, useMediaQuery } from "@mui/material";
import BasicInfo from "./BasicInfo";
import LinkedMedia from "./LinkedMedia";

export default function AboutBody() {
  const forBelow767 = useMediaQuery("(max-width:767px)");

  return (
    <Container>
      <Grid
        container
        spacing={3}
        sx={{ flexDirection: forBelow767 && "column-reverse" }}
      >
        <Grid item sm={12} md={6} sx={{ maxWidth: "100% !important" }}>
          <BasicInfo />
        </Grid>
        <Grid item md={6} lg={6}>
          <LinkedMedia />
        </Grid>
      </Grid>
    </Container>
  );
}
