import { Container, Typography, Box, Stack } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AnimateOnScroll from "./AnimateOnScroll";
import profileImg from "../assets/experience.png";

const Experience = () => {
  return (
    <Container sx={{ py: 10, mt: { xs: 6, md: 10 } }} id="experience">
      <AnimateOnScroll>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1.2fr 0.8fr",
            },
            gap: { xs: 6, md: 10 },
            alignItems: "center",
          }}
        >
          {/* LEFT CONTENT */}
          <Box>
            <Typography variant="h4" fontWeight={700} gutterBottom>
              Experience
            </Typography>

            <Typography sx={{ opacity: 0.8, maxWidth: 720, mb: 3 }}>
              I’m <b>Vishal Verma</b>, a frontend-focused developer with
              hands-on <b>3+ year</b> experience building and maintaining
              production-ready applications across web, mobile, and desktop
              platforms.
            </Typography>

            {/* CHECKLIST */}
            <Stack spacing={1.6}>
              {[
                "Built scalable applications using React, React Native, and Electron.",
                "Worked on healthcare platforms, admin dashboards, and internal systems.",
                "Implemented dynamic forms, conditional flows, and role-based access.",
                "Integrated REST APIs with complex UI state management.",
                "Focused on performance, maintainability, and clean user experience.",
                "Collaborated closely with backend teams and product stakeholders.",
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 1.5,
                  }}
                >
                  <CheckCircleOutlineIcon
                    sx={{
                      fontSize: 20,
                      mt: "3px",
                      opacity: 0.7,
                    }}
                  />
                  <Typography sx={{ opacity: 0.78 }}>{item}</Typography>
                </Box>
              ))}
            </Stack>
          </Box>

          {/* RIGHT IMAGE WITH BG GLOW */}
          <Box
            sx={{
              position: "relative",
              justifyContent: "center",
              alignItems: "center",
              overflow: "visible",
              display: { xs: "none", md: "flex" },
            }}
          >
            {/* BACKGROUND GLOW */}
            <Box
              sx={(theme) => ({
                position: "absolute",
                width: { xs: 280, md: 420 },
                height: { xs: 280, md: 420 },
                borderRadius: "50%",
                background: theme.palette.primary.main,
                opacity: 0.25,
                filter: "blur(120px)",
                zIndex: 0,
              })}
            />

            {/* IMAGE */}
            <Box
              sx={{
                width: { xs: 180, md: 250 },
                height: { xs: 180, md: 250 },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                zIndex: 1,
              }}
            >
              <Box
                component="img"
                src={profileImg}
                alt="Vishal Verma"
                sx={{
                  width: "200%",
                  height: "200%",
                  objectFit: "contain",
                  borderRadius: "50%",
                }}
              />
            </Box>
          </Box>
        </Box>
      </AnimateOnScroll>
    </Container>
  );
};

export default Experience;
