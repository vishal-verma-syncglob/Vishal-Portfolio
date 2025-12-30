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
import { type Project } from "../data/projects";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <Card
      component={motion.div}
      whileHover={{ y: -4 }}
      sx={(theme) => ({
        height: 320,
        borderRadius: 3,
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.divider}`,
        display: "flex",
        flexDirection: "column",
        transition: "0.25s ease",

        "&:hover": {
          borderColor: theme.palette.primary.main,
        },
        overflowY: "auto",
      })}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        {/* HEADER */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 1,
          }}
        >
          <Typography variant="h6" fontWeight={700}>
            {project.title}
          </Typography>

          {/* LIVE BUTTON */}
          {project.live && (
            <Button
              variant="contained"
              size="small"
              component="a"
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              sx={() => ({
                textTransform: "none",
                fontWeight: 600,
                minWidth: "auto",
                px: 2,
              })}
            >
              Live
            </Button>
          )}
        </Box>

        {/* DESCRIPTION */}
        <Typography
          sx={{
            opacity: 0.75,
            fontSize: 14,
            mb: 2,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.description}
        </Typography>

        {/* HIGHLIGHTS */}
        {project.highlights?.length > 0 && (
          <Box sx={{ mb: 2 }}>
            {project.highlights.map((h, i) => (
              <Typography
                key={i}
                variant="body2"
                sx={{ opacity: 0.75, fontSize: 13 }}
              >
                • {h}
              </Typography>
            ))}
          </Box>
        )}

        {/* TECH STACK */}
        <Stack direction="row" spacing={1} flexWrap="wrap" rowGap={1}>
          {project.tech.map((t) => (
            <Chip key={t} size="small" label={t} />
          ))}
        </Stack>
      </CardContent>

      {/* FOOTER CTA */}
      <Box
        sx={{
          px: 2,
          display: "flex",
          gap: 2,
        }}
      >
        {project.github && <Button variant="outlined">GitHub</Button>}
      </Box>
    </Card>
  );
};

export default ProjectCard;
