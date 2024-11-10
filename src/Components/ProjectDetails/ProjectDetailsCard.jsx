import { Box, ImageList, ImageListItem } from "@mui/material";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";

export default function ProjectDetailsCard({ selectedProject }) {
  const { light } = useContext(DataContext);
  const { imgSet } = selectedProject;

  return (
    <Box sx={{ pb: "48px", display: "flex", flexDirection: "column" }}>
      {imgSet?.map((data, i) => {
        return (
          <motion.div
            key={i}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
              },
            }}
            viewport={{ once: true }}
          >
            <ImageList
              sx={{
                width: "100%",
                height: "100%",
                boxShadow:
                  !light && "rgba(145, 158, 171, 0.16) 0px 20px 40px -4px",
                borderRadius: { xs: "8px", sm: "24px", md: "32px" },
                overflow: "hidden",
              }}
              cols={1}
            >
              <ImageListItem key={i}>
                <img
                  srcSet={`${data}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${data}?w=164&h=164&fit=crop&auto=format`}
                  alt="{item.title}"
                  loading="lazy"
                />
              </ImageListItem>
            </ImageList>
          </motion.div>
        );
      })}
    </Box>
  );
}

ProjectDetailsCard.propTypes = {
  selectedProject: PropTypes.shape({
    imgSet: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};
