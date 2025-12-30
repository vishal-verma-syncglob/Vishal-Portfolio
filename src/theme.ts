import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#7C6CFF",
      light: "#A599FF",
    },
    secondary: {
      main: "rgba(109, 93, 254, 0.25)",
    },
    whatsapp: {
      main: "#25D366",
    },
    linkedin: {
      main: "#0A66C2",
    },
    mail: {
      main: "#EA4335",
    },
    instagram: {
      main: "#E1306C",
    },
    background: {
      default: "#13131A",
      paper: "#13131A",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});
