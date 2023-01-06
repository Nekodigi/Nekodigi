import { createTheme } from "@mui/material/styles";
import { themeCommon } from "./theme";

export const themeLight = createTheme({
  palette: {
    mode: "light",
    com: themeCommon,
    local: {
      black: "#000000",
      white: "#FFFFFF",
      gray: "#8C8C8C",
      whiteDark: "#D1D1D1",
    },
  },
});
