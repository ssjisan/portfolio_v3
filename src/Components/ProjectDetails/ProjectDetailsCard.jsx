import { Box, ImageList, ImageListItem } from "@mui/material";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";

const imageVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ProjectDetailsCard({ selectedProject }) {
  const { light } = useContext(DataContext);
  const { imgSet } = selectedProject;

  return (
    <Box sx={{ pb: "48px", display: "flex", flexDirection: "column", gap: 4 }}>
      {imgSet?.map((data, i) => (
        <motion.div
          key={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageVariants}
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
            <ImageListItem>
              <img
                srcSet={`${data}?w=800&auto=format&dpr=2 2x`}
                src={`${data}?w=800&auto=format`}
                alt=""
                loading="lazy"
              />
            </ImageListItem>
          </ImageList>
        </motion.div>
      ))}
    </Box>
  );
}

ProjectDetailsCard.propTypes = {
  selectedProject: PropTypes.shape({
    imgSet: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};
