import {
  Box,
  Container,
  Divider,
  IconButton,
  Stack,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../DataProcessing/DataProcessing";
import { Menu, Moon, Sun } from "../assets/Icons";
import MenuDrawer from "./MenuDrawer";
import { motion } from "framer-motion";
import Logo from "../assets/Logo";
import PropTypes from "prop-types"; // Import PropTypes

export default function Navbar() {
  const { goToTop, toggleDrawer, open, toggleMode, mode } =
    useContext(DataContext);
  const forBelow767 = useMediaQuery("(max-width:767px)");
  const { pathname } = useLocation(); // Get the current path

  // Configure Style Start

  const NavSx = {
    p: "10px 16px",
    mt: "24px",
    mb: "24px",
    background:
      mode === "dark" ? "rgba(28, 22, 47, .3)" : "rgba(255,255,255,.3)",
    backdropFilter: "blur(16px)",
    borderRadius: "12px",
  };
  const LogoSx = {
    width: "140px",
    display: "flex",
  };

  const MenuButtonSx = {
    display: "flex",
    height: "36px",
    width: "36px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
  };
  const activeMenuSx = {
    background:
      "linear-gradient(90.42deg, #4AB1F1 0.58%, #566CEC 37.22%, #D749AF 73.87%, #FF7C51 112.26%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "bold",
  };
  // Configure Style End

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Resume", path: "/resume" },
  ];
  return (
    <motion.div
      initial={{ y: -100, opacity: 0.5 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
    >
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          display: "flex",
          justifyContent: "center", // Center the Container
        }}
      >
        <Container>
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            sx={NavSx}
          >
            <Link to="/">
              <Box sx={LogoSx} onClick={goToTop}>
                <Logo
                  changeColor={mode === "dark" ? "#FFFFFF" : "#111827"}
                  fixedColor="#909090"
                />
              </Box>
            </Link>
            <Stack flexDirection="row" gap="16px" alignItems="center">
              {!forBelow767 &&
                menuItems.map((item) => (
                  <Typography
                    key={item.path}
                    variant="subtitle2"
                    component={Link}
                    to={item.path}
                    color="text.primary"
                    sx={[
                      (pathname === item.path ||
                        pathname.startsWith("project")) &&
                        activeMenuSx, // Active styles for specific paths
                      {
                        textDecoration: "none", // Remove underline for all items
                      },
                    ]}
                  >
                    {item.label}
                  </Typography>
                ))}
              {!forBelow767 && (
                <Divider
                  orientation="vertical"
                  flexItem
                  variant="middle"
                  sx={{
                    height: "24px",
                    background:
                      mode === "dark"
                        ? "rgba(255, 255, 255, .1)"
                        : "rgba(48,52,77,.1)",
                  }}
                />
              )}
              <Stack flexDirection="row" gap="8px">
                {mode === "dark" ? (
                  <Tooltip title="Go Light">
                    <IconButton sx={MenuButtonSx} onClick={toggleMode}>
                      <Sun />
                    </IconButton>
                  </Tooltip>
                ) : (
                  <Tooltip title="Go Dark">
                    <IconButton sx={MenuButtonSx} onClick={toggleMode}>
                      <Moon />
                    </IconButton>
                  </Tooltip>
                )}
                {forBelow767 && (
                  <Tooltip title="Menu">
                    <IconButton
                      sx={{
                        ...MenuButtonSx,
                        background:
                          mode === "dark"
                            ? "rgba(255, 255, 255, 0.12)"
                            : "rgba(17, 24, 39, 0.08)",
                      }}
                      onClick={toggleDrawer}
                    >
                      <Menu />
                    </IconButton>
                  </Tooltip>
                )}
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <MenuDrawer open={open} />
    </motion.div>
  );
}

Navbar.propTypes = {
  toggleMode: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};
