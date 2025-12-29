import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";

const Contact = () => {
  return (
    <Container sx={{ py: 12 }} id="contact">
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Contact Me
      </Typography>
      <AnimateOnScroll>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: 4,
            background:
              "linear-gradient(135deg, rgba(109,93,254,0.15), rgba(19,19,26,1))",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={6}
            alignItems="center"
          >
            {/* LEFT CONTENT */}
            <Box flex={1}>
              <Typography variant="h4" fontWeight={700} gutterBottom>
                Let’s Work Together
              </Typography>

              <Typography sx={{ opacity: 0.75, mb: 3, maxWidth: 420 }}>
                Have a project idea or need help with a React, React Native, or
                Electron application? I’m always open to discussing new
                opportunities.
              </Typography>

              <Typography sx={{ opacity: 0.6 }}>
                📧 vishal@email.com
                <br />
                🌍 Available for freelance & full-time roles
              </Typography>
            </Box>

            {/* RIGHT FORM */}
            <Box
              flex={1}
              component={motion.div}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <Stack spacing={3}>
                <TextField label="Your Name" fullWidth variant="outlined" />
                <TextField
                  label="Email Address"
                  type="email"
                  fullWidth
                  variant="outlined"
                />
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  fullWidth
                  variant="outlined"
                />

                <Button
                  component={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variant="contained"
                  size="large"
                  sx={{
                    textTransform: "none",
                    borderRadius: 2,
                    py: 1.5,
                  }}
                >
                  Send Message
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Paper>
      </AnimateOnScroll>
    </Container>
  );
};

export default Contact;
