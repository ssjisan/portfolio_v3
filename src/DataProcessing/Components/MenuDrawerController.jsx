import { useState } from "react";

export default function MenuDrawerController() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    }
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        {
            toggleDrawer, open, handleDrawerClose, goToTop
        }
    )
}
