import {
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
  Button,
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
      whileHover={{
        y: -10,
        boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
      }}
      transition={{ type: "spring", stiffness: 220 }}
      sx={{
        height: "100%",
        borderRadius: 3,
        backgroundColor: "background.paper",
      }}
    >
      <CardContent>
        <Typography variant="h6" fontWeight={700} gutterBottom>
          {project.title}
        </Typography>

        <Typography sx={{ opacity: 0.75, mb: 2 }}>
          {project.description}
        </Typography>

        {/* {project.highlights.map((point) => (
          <Typography key={point} sx={{ fontSize: 14, opacity: 0.7 }}>
            • {point}
          </Typography>
        ))} */}

        <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
          {project.tech.map((t) => (
            <Chip key={t} label={t} size="small" />
          ))}
        </Stack>

        <Stack direction="row" spacing={2}>
          {project.github && (
            <Button size="small" variant="outlined">
              GitHub
            </Button>
          )}
          {project.live && (
            <Button size="small" variant="contained">
              Live
            </Button>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
