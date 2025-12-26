import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6D5DFE",
    },
    background: {
      default: "#0B0B12",
      paper: "#13131A",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});
