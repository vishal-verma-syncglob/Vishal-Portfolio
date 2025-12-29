import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6D5DFE",
    },
    secondary: {
      main: "#6D5DFE",
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
