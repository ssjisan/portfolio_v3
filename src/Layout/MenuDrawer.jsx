import { useContext } from "react";
import {
  Box,
  Drawer,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { DataContext } from "../DataProcessing/DataProcessing";
import { Close, Facebook, LinkedIn, Whatsapp } from "../assets/Icons";
import { main } from "../Layout/NavConfig";
import { motion } from "framer-motion";
import Logo from "../assets/Logo";

export default function MenuDrawer() {
  const { toggleDrawer, open, handleDrawerClose, goToTop, mode } =
    useContext(DataContext);
  const forBelow768 = useMediaQuery("(max-width:768px)");
  const { pathname } = useLocation();
  // Configure Style Start

  const linkStyle = {
    textDecoration: "none",
    color: "#121120",
    width: "fit-content",
  };
  const DrawerSx = {
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "space-between",
    },
  };
  const TopBarSx = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: forBelow768 ? "16px" : "16px 40px",
  };
  const MenuOptionSx = {
    padding: forBelow768 ? "16px" : "16px 40px",
    mt: forBelow768 ? "40px" : "80px",
    height: "-webkit-fill-available",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  };
  const CloseButtonSx = {
    borderRadius: "8px",
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const BottomSx = {
    padding: forBelow768 ? "16px" : "16px 40px",
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
    justifyContent: forBelow768 ? "space-around" : "space-between",
    alignItems: "center",
  };
  const LogoSx = {
    width: forBelow768 ? "140px" : "196px",
  };
  const SocialMediaSx = {
    display: "flex",
    gap: "16px",
  };
  // Configure Style End

  return (
    <Drawer
      variant="temporary"
      anchor="top"
      open={open}
      onClose={toggleDrawer}
      sx={DrawerSx}
    >
      <Box sx={TopBarSx}>
        <Box sx={LogoSx} onClick={goToTop}>
          <Logo
            changeColor={mode === "dark" ? "#FFFFFF" : "#111827"}
            fixedColor="#909090"
          />
        </Box>
        <IconButton sx={CloseButtonSx} onClick={handleDrawerClose}>
          <Close />
        </IconButton>
      </Box>
      <Box sx={MenuOptionSx} onClick={goToTop}>
        {main.map((data) => {
          const dynamicDelay = 0.05 * (data.id + 1);
          return (
            <Link
              to={data.link}
              style={linkStyle}
              onClick={handleDrawerClose}
              key={data.id}
            >
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: dynamicDelay,
                }}
              >
                <Typography
                  variant="h1"
                  color="text.primary"
                  sx={{
                    cursor: "pointer",
                    textDecoration: pathname === data.link && "underline",
                  }}
                >
                  {data.title}
                </Typography>
              </motion.div>
            </Link>
          );
        })}
      </Box>
      <Box sx={BottomSx}>
        <Box>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
          >
            <Typography
              variant="h4"
              color={mode === "dark" ? "text.tertiary" : "text.primary"}
            >
              ssjisan.dev@gmail.com
            </Typography>
          </motion.div>
        </Box>
        <Box>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.25,
            }}
          >
            <Typography
              variant="h4"
              color={mode === "dark" ? "text.tertiary" : "text.primary"}
            >
              +880 1675 89 39 67
            </Typography>
          </motion.div>
        </Box>
        <Box sx={SocialMediaSx}>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.4,
            }}
          >
            <a href="https://www.linkedin.com/in/ssjisan/" target="_blank">
              <IconButton>
                <LinkedIn />
              </IconButton>
            </a>
            <a href="https://www.facebook.com/userjisan/" target="_blank">
              <IconButton>
                <Facebook />
              </IconButton>
            </a>
            <a href="https://wa.me/8801675893967" target="_blank">
              <IconButton>
                <Whatsapp />
              </IconButton>
            </a>
          </motion.div>
        </Box>
      </Box>
    </Drawer>
  );
}
