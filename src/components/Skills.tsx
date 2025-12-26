import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";

const skills = [
  "React JS",
  "React Native",
  "Electron",
  "TypeScript",
  "Material UI",
  "Redux / Context API",
];

const Skills = () => {
  return (
    <Container sx={{ py: 10 }} id="skills">
      <AnimateOnScroll>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Skills
        </Typography>

        <Typography sx={{ opacity: 0.7, mb: 5 }}>
          Technologies I work with regularly
        </Typography>
      </AnimateOnScroll>

      <Grid container spacing={3}>
        {skills.map((skill, index) => (
          <Grid key={skill} size={{ xs: 12, sm: 6, md: 4 }}>
            <AnimateOnScroll delay={index * 0.1}>
              <Card
                component={motion.div}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                }}
                transition={{ type: "spring", stiffness: 250 }}
                sx={{
                  backgroundColor: "background.paper",
                  borderRadius: 3,
                  cursor: "pointer",
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight={600}>
                    {skill}
                  </Typography>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;
