import { createContext } from "react";
import PropTypes from "prop-types";
import MenuDrawerController from "./Components/MenuDrawerController";

export const DataContext = createContext();

export default function DataProcessing({ children,mode,toggleMode }) {
  const { toggleDrawer, open, handleDrawerClose, goToTop } =
    MenuDrawerController();

  return (
    <DataContext.Provider
      value={{
        toggleDrawer,
        open,
        handleDrawerClose,
        goToTop,
        mode,
        toggleMode
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
// Prop types validation
DataProcessing.propTypes = {
  children: PropTypes.node.isRequired,
  mode: PropTypes.string.isRequired, // Add prop type for mode
  toggleMode: PropTypes.func.isRequired,
};
