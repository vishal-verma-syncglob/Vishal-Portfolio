import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Drawer,
  Stack,
  Divider,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import { useScroll } from "framer-motion";
import { useState } from "react";

import { scrollToSection } from "../utils/scrollToSection";
import { useActiveSection } from "../hooks/useActiveSection";

/* ----------------------------------
   CONFIG
----------------------------------- */

const sections = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact Me", id: "contact" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vishal-verma-b681052a7/",
    icon: <LinkedInIcon />,
    color: "#0A66C2",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/vishalverma7722/",
    icon: <InstagramIcon />,
    color: "#E1306C",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/917726898507",
    icon: <WhatsAppIcon />,
    color: "#25D366",
  },
  {
    label: "Email",
    href: "mailto:vishuv256@gmail.com",
    icon: <EmailIcon />,
    color: "#EA4335",
  },
] as const;

/* ----------------------------------
   COMPONENT
----------------------------------- */

const Navbar = () => {
  const { scrollY } = useScroll();
  const [open, setOpen] = useState(false);

  const activeSection = useActiveSection(sections.map((s) => s.id));

  /* NAV BUTTON */
  const NavButton = ({ label, id }: { label: string; id: string }) => (
    <Button
      onClick={() => scrollToSection(id)}
      sx={(theme) => ({
        textTransform: "none",
        fontWeight: activeSection === id ? 700 : 500,
        color:
          activeSection === id
            ? theme.palette.primary.main
            : theme.palette.text.primary,
        opacity: activeSection === id ? 1 : 0.75,
        "&:hover": { opacity: 1 },
      })}
    >
      {label}
    </Button>
  );

  /* SOCIAL ICON */
  const SocialIcon = ({
    label,
    href,
    icon,
    color,
  }: (typeof socials)[number]) => (
    <Tooltip title={label}>
      <IconButton
        component="a"
        href={href}
        target="_blank"
        sx={{
          color: "rgba(255,255,255,0.75)",
          transition: "color 0.25s ease",
          "&:hover": {
            color,
          },
        }}
      >
        {icon}
      </IconButton>
    </Tooltip>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={(theme) => ({
          backdropFilter: "blur(12px)",
          backgroundColor: alpha(
            theme.palette.background.paper,
            scrollY.get() > 50 ? 0.85 : 0.6
          ),
          borderBottom: `1px solid ${theme.palette.divider}`,
        })}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* LOGO */}
          <Typography fontWeight={700} fontSize={20}>
            Vishal Verma
          </Typography>

          {/* DESKTOP NAV */}
          <Box display={{ xs: "none", md: "flex" }} gap={2}>
            {sections.map((item) => (
              <NavButton key={item.id} {...item} />
            ))}
          </Box>

          {/* DESKTOP SOCIAL */}
          <Box display={{ xs: "none", md: "flex" }} gap={0.5}>
            {socials.map((item) => (
              <SocialIcon key={item.label} {...item} />
            ))}
          </Box>

          {/* MOBILE MENU ICON */}
          <IconButton
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: (theme) => ({
            width: 260,
            backgroundColor: theme.palette.background.paper,
          }),
        }}
      >
        <Box p={3}>
          <Typography fontWeight={700} mb={2}>
            Vishal Verma
          </Typography>

          <Stack spacing={2}>
            {sections.map((item) => (
              <Button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setOpen(false);
                }}
                sx={(theme) => ({
                  justifyContent: "flex-start",
                  textTransform: "none",
                  fontWeight: activeSection === item.id ? 700 : 500,
                  color:
                    activeSection === item.id
                      ? theme.palette.primary.main
                      : theme.palette.text.primary,
                })}
              >
                {item.label}
              </Button>
            ))}
          </Stack>

          <Divider sx={{ my: 3 }} />

          <Stack direction="row" spacing={1}>
            {socials.map((item) => (
              <IconButton
                key={item.label}
                component="a"
                href={item.href}
                target="_blank"
                sx={(theme) => ({
                  color: theme.palette.text.primary,
                  "&:hover": {
                    color: (theme.palette as any)[item.colorKey].main,
                  },
                })}
              >
                {item.icon}
              </IconButton>
            ))}
          </Stack>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
