import { createTheme } from "@mui/material/styles";
import { themeCommon } from "./theme";

//themeCommon,
export const themeDark = createTheme({
  palette: {
    mode: "dark",
    com: themeCommon,
    local: {
      white: "#252525",
      black: "#E9E9E9",
      gray: "#BCBCBC",
      whiteDark: "#6F6F6F",
    },
    text: {
      primary: "#E9E9E9",
    },
  },
});
