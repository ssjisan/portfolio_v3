import { Container } from "@mui/material";
import ProjectsCard from "./ProjectsCard";

export default function ProjectList() {
    return (
        <Container sx={{ pt: "80px", pb: "80px" }}>
             <ProjectsCard />
        </Container>
    )
}
