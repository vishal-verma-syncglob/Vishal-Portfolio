import { useState } from "react";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";
import ProjectCard from "./ProjectCard";
import { projects, type ProjectCategory } from "../data/projects";

const filters: (ProjectCategory | "All")[] = [
  "All",
  "React",
  "React Native",
  "Electron",
];

const Projects = () => {
  const [active, setActive] = useState<"All" | ProjectCategory>("All");

  const filteredProjects =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <Container sx={{ py: 10 }} id="projects">
      <AnimateOnScroll>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Projects
        </Typography>

        <Typography sx={{ opacity: 0.7, mb: 4 }}>
          Some of the work I’ve built recently
        </Typography>
      </AnimateOnScroll>

      {/* FILTERS */}
      <Stack direction="row" spacing={2} mb={5}>
        {filters.map((f) => (
          <Button
            key={f}
            variant={active === f ? "contained" : "outlined"}
            onClick={() => setActive(f)}
            sx={{ textTransform: "none" }}
          >
            {f}
          </Button>
        ))}
      </Stack>

      {/* PROJECT GRID */}
      <Grid container spacing={3}>
        {filteredProjects.map((project, index) => (
          <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
