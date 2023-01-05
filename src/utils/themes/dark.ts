import { createTheme } from "@mui/material/styles";
import { themeCommon } from "./theme";

export const themeDark = createTheme(themeCommon, {
  palette: {
    mode: "dark",
    local: {
      white: "#252525",
      black: "#FFFFFF",
    },
    text: {
      primary: "#000000",
    },
  },
});
