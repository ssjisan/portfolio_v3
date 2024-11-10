import {
  Avatar,
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";
import { motion } from "framer-motion";

export default function HeroSection() {
  const { light, mode } = useContext(DataContext);
  const forBelow767 = useMediaQuery("(max-width:767px)");
  console.log(mode);

  const ContainerSx = {
    height: "99vh",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
  };
  const ImageContainerSx = {
    width: forBelow767 ? "150px" : "230px",
    height: forBelow767 ? "150px" : "230px",
    borderRadius: "1000px",
    opacity: "0.8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    filter: "blur(16px)",
  };
  return (
    <Container sx={ContainerSx}>
      <Box
        sx={{
          position: "relative",
          mt: forBelow767 ? "15vh" : "20vh",
        }}
      >
        <Box sx={ImageContainerSx}></Box>
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
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: forBelow767 ? "130px" : "200px",
              height: forBelow767 ? "130px" : "200px",
              display: "flex",
              background:
                mode === "dark"
                  ? "rgba(255,255,255, .08)"
                  : "rgba(28, 22, 47, .08)",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "100%",
            }}
          >
            <Avatar
              src="/pp.webp"
              sx={{
                width: forBelow767 ? "120px" : "180px",
                height: forBelow767 ? "120px" : "180px",
              }}
            />
          </Box>
        </motion.div>
      </Box>
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "tween",
          delay: 0.1,
        }}
      >
        <Stack justifyContent="center" sx={{ textAlign: "center" }} gap="24px">
          <Typography
            variant="h2"
            color={light ? "text.tertiary" : "text.primary"}
          >
            Hey, I&apos;m Jisan <br /> An UI/UX Engineer with over 3 years of
            experience.
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ width: "100%", maxWidth: "780px" }}
          >
            Currently, I&apos;m applying my expertise at Aarong, where I
            specialize in crafting seamless user experiences with a passion for
            clean and intuitive design.
          </Typography>
        </Stack>
      </motion.p>
    </Container>
  );
}
