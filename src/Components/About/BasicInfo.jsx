import { Box, Typography, useMediaQuery } from "@mui/material";
import { Mail } from "../../assets/Icons";
import { MediaLink } from "../../assets/MediaLink";

export default function BasicInfo() {
  const forBelow767 = useMediaQuery("(max-width:767px)");

  const MediaListSx = {
    display: forBelow767 ? "flex" : "none",
    flexDirection: "column",
    gap: "16px",
  };
  const MediaLinkSx = {
    display: "flex",
    gap: "16px",
    alignItems: "center",
  };
  const IconBodySx = {
    width: "24px",
    height: "24px",
    display: "flex",
    jusitfyContent: "center",
    alignItems: "center",
  };
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: "24px", mb: "40px" }}
    >
      <Typography variant="h1" color="text.primary">
        I’m Sadman Sakib. <br />I live in Dhaka, where I shape the future.
      </Typography>
      <Typography variant="body2" color="text.secondary">
        I am filled with memories of my hometown in Khustia, Bangladesh. I was
        born on October 8, 1993, and grew up in a close-knit family of three,
        including my parents, & sister. In September 2021, I got married and
        added a new chapter to my life story. I completed my studies in
        Chittagong and now reside in Dhaka for professional purposes. Despite
        being far from my hometown, I always carry with me the love and values
        that were instilled in me during my upbringing in Khustia.
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Continuing my early life story, I received my education in Bangladesh.
        In 2009, I completed my school education at Housing & Settlement Public
        School. I then went on to complete my college education at BEPZA Public
        School & College. I am proud to say that I am a graduate of the
        University of Science and Technology Chittagong, where I studied
        Computer Science & Engineering. This education provided me with the
        foundation and skills necessary to pursue my professional goals.
      </Typography>
      <Typography variant="body2" color="text.secondary">
        I began my career as a support engineer at Antaranga Dot Com Limited in
        the end of 2018. I worked hard and was eventually promoted to a Network
        Operation Center Engineer in 2020.In 2021, I decided to change my career
        path and moved from being a network engineer to a front-end developer. I
        was hired by Techhack Canada as a front-end developer for a startup
        project. After successfully completing that project, I joined BYSL in
        2022 as a UI/UX Designer & Developer. I am proud of my professional
        journey and the opportunities I have had to grow and develop in my
        career. I am always seeking new challenges and ways to enhance my skills
        and knowledge in the field.
      </Typography>
      <Box sx={MediaListSx}>
        {MediaLink.map((data) => {
          return (
            <a
              href={data.link}
              target="_blank"
              key={data.id}
              style={{ textDecoration: "none" }}
            >
              <Box sx={MediaLinkSx}>
                <Box sx={IconBodySx}>{data.icon}</Box>
                <Typography color="text.secondary" variant="subtitle2">
                  Follow on {data.title}
                </Typography>
              </Box>
            </a>
          );
        })}
        <Box
          sx={{
            ...MediaLinkSx,
            pt: "24px",
            borderTop: "1px solid rgba(145, 158, 171, 0.48)",
          }}
        >
          <Box sx={IconBodySx}>
            <Mail />
          </Box>
          <Typography variant="subtitle2" color="text.secondary">
            ssjisan.dev@gmail.com
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
