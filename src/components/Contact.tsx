import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

import AnimateOnScroll from "./AnimateOnScroll";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [toast, setToast] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error" | "warning";
  }>({
    open: false,
    message: "",
    severity: "success",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setToast({
        open: true,
        message: "Please fill all fields",
        severity: "warning",
      });
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
          time: new Date().toLocaleString(),
          to_email: "vishuv256@gmail.com",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setToast({
        open: true,
        message: "Message sent successfully",
        severity: "success",
      });

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setToast({
        open: true,
        message: "Failed to send message ",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container sx={{ pt: 10, pb: 6 }} id="contact">
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Contact Me
      </Typography>

      <AnimateOnScroll>
        <Paper
          elevation={0}
          sx={(theme) => ({
            p: { xs: 4, md: 6 },
            borderRadius: 4,
            background: `linear-gradient(
              135deg,
              ${theme.palette.secondary.main},
              ${theme.palette.background.paper}
            )`,
            border: `1px solid ${theme.palette.divider}`,
          })}
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
                📧 vishuv256@gmail.com
                <br />
                📞 +91 7726898507
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
                <TextField
                  label="Your Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  fullWidth
                />

                <TextField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  fullWidth
                />

                <TextField
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  fullWidth
                />

                <Button
                  component={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variant="contained"
                  size="large"
                  disabled={loading}
                  sx={{
                    textTransform: "none",
                    borderRadius: 2,
                    py: 1.5,
                  }}
                  onClick={handleSubmit}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Paper>
      </AnimateOnScroll>

      <Snackbar
        open={toast.open}
        autoHideDuration={4000}
        onClose={() => setToast((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          severity={toast.severity}
          variant="standard"
          onClose={() => setToast((prev) => ({ ...prev, open: false }))}
          sx={{ borderRadius: 2 }}
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;
