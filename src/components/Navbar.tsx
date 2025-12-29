import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useScroll } from "framer-motion";

import { scrollToSection } from "../utils/scrollToSection";

const Navbar = () => {
  const { scrollY } = useScroll();

  const bgOpacity =
    scrollY.get() > 50 ? "rgba(11,11,18,0.85)" : "rgba(11,11,18,0.6)";

  const sections = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact Me", id: "contact" },
  ];

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backdropFilter: "blur(12px)",
        backgroundColor: bgOpacity,
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography fontWeight={700} fontSize={20}>
          Vishal Verma
        </Typography>

        <Box display="flex" gap={2}>
          {sections.map((item) => (
            <Button
              key={item.id}
              color="inherit"
              onClick={() => scrollToSection(item.id)}
              sx={{
                textTransform: "none",
                opacity: 0.85,
                "&:hover": { opacity: 1 },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
