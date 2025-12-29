import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

const skills = [
  "React JS",
  "React Native",
  "Electron",
  "TypeScript",
  "Material UI",
  "Redux / Context API",
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <Container sx={{ py: 10 }} id="skills">
      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Skills
        </Typography>

        <Typography sx={{ opacity: 0.7, mb: 6 }}>
          Technologies I work with regularly
        </Typography>
      </motion.div>

      {/* SKILLS GRID */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Grid container spacing={3}>
          {skills.map((skill) => (
            <Grid key={skill} size={{ xs: 12, sm: 6, md: 4 }}>
              <motion.div variants={itemVariants}>
                <Card
                  component={motion.div}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 260 }}
                  sx={{
                    backgroundColor: "background.paper",
                    borderRadius: 2,
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",

                    /* LEFT ACCENT BAR */
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 4,
                      height: "100%",
                      backgroundColor: "primary.main",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    },

                    "&:hover::before": {
                      opacity: 1,
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" fontWeight={600}>
                      {skill}
                    </Typography>

                    <Typography sx={{ opacity: 0.6, fontSize: 14 }}>
                      Practical experience
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Skills;
