import { useMemo, useState } from "react";
import { Button, Container, Grid, Stack, Typography, Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects, type ProjectCategory } from "../data/projects";

type Filter = "All" | ProjectCategory;

const Projects = () => {
  const [active, setActive] = useState<Filter>("All");

  /* DYNAMIC FILTER LIST */
  const filters = useMemo<Filter[]>(() => {
    const categories = Array.from(new Set(projects.map((p) => p.category)));
    return ["All", ...categories];
  }, []);

  /* FILTERED PROJECTS */
  const filteredProjects = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <Box id="projects" sx={{ scrollMarginTop: 96 }}>
      <Container sx={{ py: 5 }}>
        {/* HEADER */}
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Projects
        </Typography>

        <Typography sx={{ opacity: 0.7, mb: 5 }}>
          Some of the work I’ve built recently
        </Typography>

        {/* FILTERS */}
        <Stack direction="row" spacing={1.5} mb={6} flexWrap="wrap" rowGap={1}>
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
                opacity: active === f ? 1 : 0.75,
              }}
            >
              {f}
            </Button>
          ))}
        </Stack>

        {/* PROJECT GRID */}
        <Grid container spacing={4}>
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.25 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              </Grid>
            ))}
          </AnimatePresence>
        </Grid>

        {/* FOOTER */}
        <Box mt={8}>
          <Typography align="center" sx={{ opacity: 0.5, fontSize: 14 }}>
            More projects available on request
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
