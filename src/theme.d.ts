import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    whatsapp: Palette["primary"];
    linkedin: Palette["primary"];
    instagram: Palette["primary"];
    mail: Palette["primary"];
  }

  interface PaletteOptions {
    whatsapp?: PaletteOptions["primary"];
    linkedin?: PaletteOptions["primary"];
    instagram?: PaletteOptions["primary"];
    mail?: PaletteOptions["primary"];
  }
}
