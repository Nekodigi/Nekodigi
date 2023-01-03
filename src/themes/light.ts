import { createTheme } from "@mui/material/styles";
import { themeCommon } from "./theme";

export const themeLight = createTheme(themeCommon, {
  palette: {
    mode: "light",
    text: {
      primary: "#000000",
    },
  },
});
