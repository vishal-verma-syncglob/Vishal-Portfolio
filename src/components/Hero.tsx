import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background:
          "radial-gradient(circle at top right, #1a1a2e 0%, #0b0b12 60%)",
      }}
    >
      <Container maxWidth="lg">
        <Stack direction={{ xs: "column", md: "row" }} spacing={6}>
          {/* LEFT CONTENT */}
          <Box flex={1}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h3" fontWeight={800} gutterBottom>
                Hi, I’m <span style={{ color: "#6D5DFE" }}>Vishal</span>
              </Typography>

              <Typography variant="h5" sx={{ opacity: 0.85, mb: 3 }}>
                React • React Native • Electron Developer
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
                  }}
                  component={motion.button}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
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
                  }}
                  component={motion.button}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Download Resume
                </Button>
              </Stack>
            </motion.div>
          </Box>

          {/* RIGHT DECOR / IMAGE PLACEHOLDER */}
          <Box
            flex={1}
            display={{ xs: "none", md: "flex" }}
            justifyContent="center"
            alignItems="center"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{
                width: 280,
                height: 280,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #6D5DFE, #8E7CFF)",
                opacity: 0.85,
              }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
