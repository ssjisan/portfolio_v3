import { Box, Container, Typography } from "@mui/material";
import BreadCrumb from "../Common/BreadCrumb";
import { DataContext } from "../../DataProcessing/DataProcessing";
import { useContext } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const { light } = useContext(DataContext);

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "linear",
          duration: 1,
        }}
      >
        <Box
          sx={{
            pt: "72px",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
          }}
        >
          <BreadCrumb />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              width: "100%",
              maxWidth: "640px",
            }}
          >
            <Typography
              variant="h3"
              color={light ? "text.tertiary" : "text.primary"}
            >
              Designing paths for digital change and innovation in every pixel.
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Exploring My Professional Journey Through Impactful Roles,
              Projects, and Contributions That Shaped My Career.
            </Typography>
          </Box>
        </Box>
      </motion.div>
    </Container>
  );
}
