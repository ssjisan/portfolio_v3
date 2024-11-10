import { Box, Typography } from "@mui/material";
import { BulletPointIcon } from "../../assets/Icons";
import ExperienceData from "../../assets/Experience.json";
export default function Experience() {
  const IconSx = {
    display: "flex",
    width: "24px",
    height: "24px",
    padding: "2px",
    justifyContent: "center",
    alignItems: "center",
  };
  const BulletPointSx = {
    display: "flex",
    alignItems: "flex-start",
    gap: "8px",
    mb: "16px",
  };
  return (
    <Box>
      <Typography sx={{ mb: "40px" }} variant="h3" color="text.primary">
        Experience
      </Typography>
      {ExperienceData.map((data) => {
        return (
          <Box sx={{ mb: "64px" }} key={data.id}>
            <Box sx={{ mb: "24px" }}>
              <Typography variant="h5" color="text.secondary">
                {data.name}.{" "}
                <span style={{ fontWeight: 300, color: "#919EAB" }}>
                  {data.position}
                </span>
              </Typography>
              <Typography variant="h5" color="text.secondary">
                {data.time}.{" "}
                <span style={{ fontWeight: 300, color: "#919EAB" }}>
                  {data.location}
                </span>
              </Typography>
            </Box>
            {data.responsibilities.map((data, i) => {
              return (
                <Box sx={BulletPointSx} key={i}>
                  <Box sx={IconSx}>
                    <BulletPointIcon />
                  </Box>
                  <Typography variant="subtitle1" color="text.secondary">
                    {data}.
                  </Typography>
                </Box>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
}
