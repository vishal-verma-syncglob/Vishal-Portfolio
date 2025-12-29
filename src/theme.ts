import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6D5DFE",
      light: "#a99cffff",
    },
    secondary: {
      main: "rgba(109, 93, 254, 0.25)",
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
