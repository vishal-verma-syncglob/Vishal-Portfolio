import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

import { scrollToSection } from "../utils/scrollToSection";
import profileImage from "../assets/profile.png";
import TypewriterName from "./Typewriter";

const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Vishal_Verma_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      sx={(theme) => ({
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: theme.palette.background.default,
        overflow: "hidden",
        pt: { xs: 10, md: 10 },
      })}
      id="about"
    >
      {/*  BACKGROUND GLOW */}
      <Box
        sx={(theme) => ({
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: 420,
          height: 420,
          borderRadius: "50%",
          backgroundColor: theme.palette.secondary.main,
          filter: "blur(140px)",
          animation: "float 12s ease-in-out infinite",
        })}
      />

      <Box
        sx={(theme) => ({
          position: "absolute",
          bottom: "-25%",
          right: "-10%",
          width: 520,
          height: 520,
          borderRadius: "50%",
          backgroundColor: theme.palette.primary.light,
          filter: "blur(160px)",
          animation: "float 16s ease-in-out infinite reverse",
          opacity: 0.5,
        })}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 6, md: 8 }}
          alignItems="center"
        >
          <Box
            component={motion.div}
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            sx={{
              flexShrink: 0,
              width: { xs: 140, sm: 180, md: 320 },
              height: { xs: 140, sm: 180, md: 380 },
              borderRadius: { xs: "50%", md: 3 },
              overflow: "hidden",
              display: { xs: "none", md: "flex" },
            }}
          >
            <Box
              component="img"
              src={profileImage}
              alt="Vishal Verma"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>

          {/* CONTENT */}
          <Box textAlign={{ xs: "center", md: "left" }} maxWidth={560}>
            <Typography
              sx={{
                fontSize: "clamp(20px, 4vw, 28px)",
                fontWeight: 700,
                mb: 1,
              }}
            >
              Hi, I’m
            </Typography>

            {/* TYPEWRITER */}
            <Typography
              sx={(theme) => ({
                fontSize: "clamp(34px, 7vw, 52px)",
                fontWeight: 900,
                lineHeight: 1.1,
                mb: 2,
                minHeight: "1.2em", // prevents jump
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              })}
            >
              <TypewriterName />
            </Typography>

            <Typography
              sx={{
                fontSize: "clamp(16px, 2.5vw, 20px)",
                opacity: 0.85,
                mb: 3,
              }}
            >
              React JS • React Native • Electron Developer
            </Typography>

            <Typography sx={{ opacity: 0.7, mb: 4 }}>
              I build high-performance web, mobile & desktop applications with
              modern UI, clean architecture, and scalable code.
            </Typography>

            {/* CTA */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent={{ xs: "center", md: "flex-start" }}
              pb={2}
            >
              <Button
                variant="contained"
                size="large"
                component={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("projects")}
                sx={{ textTransform: "none", px: 4 }}
              >
                View Projects
              </Button>

              <Button
                variant="outlined"
                size="large"
                component={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                sx={{ textTransform: "none", px: 4 }}
              >
                Download CV
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;
