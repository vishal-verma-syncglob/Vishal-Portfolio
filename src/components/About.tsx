import { Container, Typography } from "@mui/material";
import AnimateOnScroll from "./AnimateOnScroll";

const About = () => {
  return (
    <Container sx={{ py: 10 }}>
      <AnimateOnScroll>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          About Me
        </Typography>

        <Typography sx={{ opacity: 0.8, maxWidth: 700 }}>
          I’m Vishal, a frontend-focused developer building scalable web,
          mobile, and desktop apps using React, React Native, and Electron with
          clean architecture and smooth UX.
        </Typography>
      </AnimateOnScroll>
    </Container>
  );
};

export default About;
