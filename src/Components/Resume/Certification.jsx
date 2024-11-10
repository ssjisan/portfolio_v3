import { Box, Typography } from "@mui/material";
import CertificationData from "../../assets/Certification.json"
import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";
export default function Certification() {
    const { light } = useContext(DataContext)
    return (
        <Box>
            <Typography sx={{ mb: "40px" }} variant="h3" color={light ? "text.tertiary" : "text.primary"}>Certification</Typography>
            {CertificationData.map((data) => {
                return (
                    <a href={data.link} key={data.id} style={{ textDecoration: "none" }} target="_blank">
                        <Box sx={{ mb: "16px" }}>
                            <Typography variant="h5" color={light ? "text.tertiary" : "text.primary"}>{data.name} <span style={{ fontWeight: 300, color: "#919EAB" }}>from {data.from}</span></Typography>
                        </Box>
                    </a>
                )
            })}
        </Box>
    )
}
