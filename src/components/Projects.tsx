import { useState } from "react";
import { Button, Container, Grid, Stack, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects, type ProjectCategory } from "../data/projects";

const filters: (ProjectCategory | "All")[] = [
  "All",
  "React",
  "React Native",
  "Electron",
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
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const Projects = () => {
  const [active, setActive] = useState<"All" | ProjectCategory>("All");

  const filteredProjects =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <Container sx={{ py: 10 }} id="projects">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Projects
        </Typography>

        <Typography sx={{ opacity: 0.7, mb: 5 }}>
          Some of the work I’ve built recently
        </Typography>
      </motion.div>

      {/* FILTERS */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Stack direction="row" spacing={1.5} mb={6} sx={{ flexWrap: "wrap" }}>
          {filters.map((f) => (
            <Button
              key={f}
              onClick={() => setActive(f)}
              variant={active === f ? "contained" : "outlined"}
              sx={{
                textTransform: "none",
                borderRadius: 20,
                px: 2.5,
                fontSize: 14,
                opacity: active === f ? 1 : 0.7,
              }}
            >
              {f}
            </Button>
          ))}
        </Stack>
      </motion.div>

      {/* PROJECT GRID */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Grid container spacing={4}>
          {filteredProjects.map((project) => (
            <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <motion.div variants={itemVariants}>
                <ProjectCard project={project} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      {/* OPTIONAL FOOT NOTE */}
      <Box mt={8}>
        <Typography align="center" sx={{ opacity: 0.5, fontSize: 14 }}>
          More projects available on request
        </Typography>
      </Box>
    </Container>
  );
};

export default Projects;
