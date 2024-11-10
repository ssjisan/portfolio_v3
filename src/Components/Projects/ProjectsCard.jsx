import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { DataContext } from "../../DataProcessing/DataProcessing";
import { useContext } from "react";
import Projects from "../../assets/Projcets.json";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectsCard() {
  const forBelow767 = useMediaQuery("(max-width:767px)");
  const { light, goToTop } = useContext(DataContext);
  const CardSx = { display: "flex", flexDirection: "column", gap: "40px" };
  const ImageSx = {
    width: "100%",
    borderRadius: { xs: "16px", sm: "32px", md: "48px" },
    overflow: "hidden",
    transition: "transform .5s ease-in-out",
    "&:hover img": {
      transform: "scale(1.10)", // Scale the image on hover
    },
  };
  const ContentBoxSx = {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  };
  const ChipSx = {
    borderRadius: "1000px",
    p: "4px 16px",
    height: "32px",
    // border: light ? "1.5px solid #fff" : "1.5px solid #111827",
    boxShadow: light ? "0px 0px 0px 1px #fff" : "0px 0px 0px 1px #000000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: "box-shadow 0.45s ease-in-out",
    "&:hover": {
      boxShadow: light ? "0px 0px 0px 2px #fff" : "0px 0px 0px 2px #000000",
    },
  };
  const ChipContainerSx = { display: "flex", gap: "16px", flexWrap: "wrap" };
  return (
    <Box>
      <Grid container spacing={4}>
        {Projects.map((data) => {
          const dynamicDelay = 50 * (data.id + 1);
          return (
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              key={data.id}
              onClick={goToTop}
            >
              <motion.div
                initial={{ y: dynamicDelay, opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                  },
                }}
                viewport={{ once: true }}
              >
                <Link
                  to={`/projects/${data.title}`}
                  style={{ textDecoration: "none" }}
                >
                  <Box sx={CardSx}>
                    <Box
                      sx={{
                        ...ImageSx,
                        height: forBelow767
                          ? "375px"
                          : data.id % 2 === 0
                          ? "450px"
                          : "580px",
                        mt: !forBelow767 && data.id % 2 === 0 && "64px",
                      }}
                    >
                      <img
                        src={data.imgUrl}
                        width="100%"
                        height="100%"
                        style={{
                          transition: "transform .5s ease-in-out",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                    <Box sx={ContentBoxSx}>
                      <Typography
                        variant="h4"
                        color={light ? "text.tertiary" : "text.primary"}
                      >
                        {data.title}
                      </Typography>
                      <Box sx={ChipContainerSx}>
                        {data.tags.map((data, i) => {
                          return (
                            <Box sx={ChipSx} key={i}>
                              <Typography
                                variant="subtitle2"
                                color={light ? "text.tertiary" : "text.primary"}
                              >
                                {data}
                              </Typography>
                            </Box>
                          );
                        })}
                      </Box>
                    </Box>
                  </Box>
                </Link>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
