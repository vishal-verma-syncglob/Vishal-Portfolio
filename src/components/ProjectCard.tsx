import {
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import type { Project } from "../data/projects";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <Card
      component={motion.div}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 220 }}
      sx={{
        height: "100%",
        borderRadius: 3,
        backgroundColor: "background.paper",
        position: "relative",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.06)",
        transition: "all 0.3s ease",

        /* HOVER SHADOW */
        "&:hover": {
          boxShadow: "0 25px 50px rgba(0,0,0,0.45)",
          borderColor: "rgba(109,93,254,0.4)",
        },

        /* BACKGROUND GRADIENT EFFECT */
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(120deg, rgba(109,93,254,0.18), transparent 60%)",
          opacity: 0,
          transition: "opacity 0.3s ease",
        },

        "&:hover::before": {
          opacity: 1,
        },
      }}
    >
      {/* CONTENT (ABOVE BG EFFECT) */}
      <CardContent
        sx={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h6"
          fontWeight={700}
          gutterBottom
          sx={{ lineHeight: 1.3 }}
        >
          {project.title}
        </Typography>

        <Typography
          sx={{
            opacity: 0.7,
            mb: 2,
            fontSize: 14,
            lineHeight: 1.6,
          }}
        >
          {project.description}
        </Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap" mb={3}>
          {project.tech.map((t) => (
            <Chip
              key={t}
              label={t}
              size="small"
              sx={{
                backgroundColor: "rgba(255,255,255,0.06)",
                fontSize: 12,
              }}
            />
          ))}
        </Stack>

        <Box sx={{ mt: "auto" }}>
          <Stack direction="row" spacing={2}>
            {project.github && (
              <Button
                size="small"
                variant="outlined"
                sx={{ textTransform: "none" }}
              >
                GitHub
              </Button>
            )}

            {project.live && (
              <Button
                size="small"
                variant="contained"
                sx={{ textTransform: "none" }}
              >
                Live
              </Button>
            )}
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
