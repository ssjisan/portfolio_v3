import { Grid, Container, Typography, Box } from "@mui/material";
import { Behances, Dribbbles } from "../../assets/Icons";
import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";

export default function MoreProject() {
    const { light } = useContext(DataContext)

    const BoxSx = {
        p: "80px 40px",
        background: light ? "#272A36" : "#F5F5F5",
        borderRadius: "16px",
        display: "flex",
        height: "120px",
        justifyContent: "center",
        alignItems: "center"
    }
    return (
        <Container sx={{ pt: "80px", pb: "80px" }}>
            <Box sx={{ mb: "64px", width: "100%", display: "flex", justifyContent: "center" }}>
                <Typography variant="h2" sx={{ width: "100%", maxWidth: "640px", textAlign: "center" }} color={light ? "text.tertiary" : "text.primary"}>Visit dribbble, behance for more project updates.</Typography>
            </Box>
            <Grid container spacing={3} sx={{ justifyContent: "center" }}>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <a href="https://www.behance.net/ssjisan" target="_blank">
                        <Box sx={BoxSx}>
                            <Behances />
                        </Box>
                    </a>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <a href="https://dribbble.com/ssjisan" target="_blank">
                        <Box sx={BoxSx}>
                            <Dribbbles />
                        </Box>
                    </a>
                </Grid>
            </Grid>
        </Container>
    )
}
