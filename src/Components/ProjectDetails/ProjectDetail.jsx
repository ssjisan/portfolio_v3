import { Container } from "@mui/material";
import ProjectDetailsCard from "./ProjectDetailsCard"
import PropTypes from 'prop-types';

export default function ProjectDetail({selectedProject}) {
    
    return (
        <Container>
            <ProjectDetailsCard selectedProject={selectedProject}/>
        </Container>
    )
}

ProjectDetail.propTypes = {
    selectedProject: PropTypes.shape({
        imgSet: PropTypes.arrayOf(PropTypes.string).isRequired,
        title: PropTypes.string.isRequired,
        link: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string)
    }),
};
