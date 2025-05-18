import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useRef } from "react";

const items = [
  "/portfolio/1.jpg",
  "/portfolio/2.jpg",
  "/portfolio/3.jpg",
  "/portfolio/4.jpg",
  "/portfolio/5.jpg",
  "/portfolio/6.jpg",
  "/portfolio/7.jpg",
  "/portfolio/8.jpg",
  "/portfolio/9.jpg",
  "/portfolio/10.jpg",
  "/portfolio/11.jpg",
];

export default function AboutSlider() {
  const sliderRef = useRef(null);
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:960px)");

  // Define card width based on screen size
  const cardWidth = isMobile ? 280 : isTablet ? 300 : 360;

  const duplicatedItems = [...items, ...items];

  // Slight alternating rotation effect
  const rotationStyles = items.map((_, idx) => {
    const deg = (idx % 2 === 0 ? 1 : -1) * (1 + Math.floor(Math.random() * 3));
    return `rotate(${deg}deg)`;
  });

  useEffect(() => {
    let animationFrame;
    let position = 0;
    const speed = 2;

    const scroll = () => {
      position -= speed;
      if (sliderRef.current) {
        const scrollWidth = sliderRef.current.scrollWidth / 2;
        sliderRef.current.style.transform = `translateX(${position}px)`;
        if (Math.abs(position) >= scrollWidth) {
          position = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    scroll();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <Box sx={{ overflow: "hidden", width: "100%", py: 4 }}>
      <Box
        ref={sliderRef}
        sx={{
          display: "flex",
          width: "max-content",
          gap: 4,
        }}
      >
        {duplicatedItems.map((item, idx) => (
          <Box
            key={idx}
            sx={{
              flex: `0 0 ${cardWidth}px`,
              height: cardWidth,
              transform: rotationStyles[idx % rotationStyles.length],
              transition: "transform 0.3s",
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 3,
              background: "#fff",
            }}
          >
            <img
              src={item}
              alt={`img-${idx}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
