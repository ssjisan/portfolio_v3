import { useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import { overrides } from "./overrides";
import { palette } from "./palette";
import { typography } from "./typography";

// ----------------------------------------------------------------------

export default function ThemeProvider({ children }) {
  // Get the initial mode from localStorage, default to 'light' if not found
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("themeMode");
    return savedMode ? savedMode : "light";
  });

  // Memoize the theme with the mode (light/dark)
  const memoizedValue = useMemo(
    () => ({
      palette: palette(mode), // Pass the mode to palette function to dynamically change colors
      breakpoints: {
        values: {
          xs: 0,
          sm: 540,
          md: 720,
          lg: 960,
          xl: 1140,
        },
      },
      typography,
    }),
    [mode] // Recalculate theme whenever mode changes
  );

  const theme = createTheme(memoizedValue);
  theme.components = overrides(theme);

  // Function to toggle the mode between 'light' and 'dark'
  const toggleMode = () => {
    setMode((prevMode) => {
      const newMode = prevMode === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", newMode); // Save the new mode to localStorage
      return newMode;
    });
  };

  // Ensure the mode is stored in localStorage when the component is initialized and when it changes
  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {/* Pass down the toggleMode function as a prop */}
      {children({ toggleMode, mode })}{" "}
    </MUIThemeProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.func.isRequired, // children should be a function to receive toggleMode
};
