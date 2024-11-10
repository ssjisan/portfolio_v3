import { Box, Typography, useMediaQuery } from "@mui/material";
import { Arrow } from "../../assets/Icons";
import { useLocation } from "react-router";
import { main } from "../../Layout/NavConfig";
import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";
import { Link } from "react-router-dom";

export default function BreadCrumb() {
    const forBelow768 = useMediaQuery("(max-width:768px)");

    const { light } = useContext(DataContext)
    const { pathname } = useLocation();
    const currentItem = main.find(item => item.link === pathname);
    const BreadcrumbSx = { p: forBelow768 ? "24px 0px" : "40px 0px", display: "flex", gap: "4px", justifyContent: "flex-start", alignItems: "center" }
    const IconBoxSx = { width: "24px", height: "24px", display: "flex", justifyContent: "center", alignItems: "center" }
    return (
        <Box sx={BreadcrumbSx}>
            <Link to="/" style={{ textDecoration: "none" }}>
                <Typography variant="subtitle2" color="text.secondary">Home</Typography>
            </Link>
            <Box sx={IconBoxSx}>
                <Arrow />
            </Box>
            <Typography variant="subtitle2" color={light ? "text.tertiary" : "text.primary"}>{currentItem.title}</Typography>
        </Box>
    )
}
