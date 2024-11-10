import { Container, Grid } from '@mui/material'
import Experience from './Experience'
import Certification from './Certification'
import DownloadResume from './DownloadResume'

export default function ResumeBody() {
    return (
        <Container sx={{ mt: "40px", pb:"64px"}}>
            <Grid container spacing={3} sx={{ justifyContent: "center", mb: "80px" }}>
                <Grid item md={8}>
                    <Experience />
                    <Certification />
                </Grid>
            </Grid>
            <DownloadResume />
        </Container>
    )
}
