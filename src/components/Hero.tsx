import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

import { scrollToSection } from "../utils/scrollToSection";
import profileImage from "../assets/profile.png";

const Hero = () => {
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
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "background.default",
      }}
    >
      {/* BACKGROUND GLOW EFFECTS */}
      <Box
        sx={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "rgba(109,93,254,0.25)",
          filter: "blur(140px)",
          animation: "float 12s ease-in-out infinite",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: "-20%",
          right: "-10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "rgba(141, 124, 255, 0.5)",
          filter: "blur(160px)",
          animation: "float 16s ease-in-out infinite reverse",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* YOUR EXISTING STACK GOES HERE */}

        <Stack direction={{ xs: "column", md: "row" }} spacing={6}>
          {/* LEFT DECOR */}
          <Box
            flex={1}
            display={{ xs: "none", md: "flex" }}
            justifyContent="center"
            alignItems="center"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{
                width: "100%",
                maxWidth: 460,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                overflow: "hidden",
              }}
            >
              <img
                src={profileImage}
                alt="Vishal"
                style={{
                  width: "100%",
                  maxWidth: 460,
                  height: 470,
                  objectFit: "cover",
                  objectPosition: "top center",
                  filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.6))",
                }}
              />
            </motion.div>
          </Box>

          {/* RIGHT DECOR */}
          <Box flex={2} alignItems={"center"} display={"flex"}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h4" fontWeight={800} gutterBottom>
                Hi, I’m{" "}
                <Typography
                  component="span"
                  color="primary"
                  fontWeight={800}
                  variant="h3"
                  sx={{
                    background: "linear-gradient(135deg, #6D5DFE, #a99cffff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Vishal Verma
                </Typography>
              </Typography>

              <Typography variant="h5" sx={{ opacity: 0.85, mb: 3 }}>
                React JS • React Native • Electron Developer
              </Typography>

              <Typography sx={{ opacity: 0.7, mb: 4, maxWidth: 520 }}>
                I build high-performance web, mobile & desktop applications with
                modern UI, clean architecture, and scalable code.
              </Typography>

              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    textTransform: "none",
                    px: 4,
                    borderRadius: 2,
                    boxShadow: "0 10px 30px rgba(109, 93, 254, 0.25)",
                  }}
                  component={motion.button}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => scrollToSection("projects")}
                >
                  View Projects
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    textTransform: "none",
                    px: 4,
                    borderRadius: 2,
                    boxShadow: "0 10px 30px rgba(109, 93, 254, 0.25)",
                  }}
                  component={motion.button}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={handleDownload}
                >
                  Download CV
                </Button>
              </Stack>
            </motion.div>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
