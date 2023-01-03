import { Box, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";

export const Nekodigi = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Box position="relative" height={32}>
      <Box
        component="img"
        src={
          theme.palette.mode === "light"
            ? "icons/nekodigi/light.png"
            : "icons/nekodigi/dark.png"
        }
        width={32}
      />
      <Typography
        sx={{
          position: "absolute",
          left: 27,
          top: 10,
          fontSize: 16,
          fontWeight: 500,
          fontFamily: "Roboto",
          lineHeight: "19px",
        }}
      >
        ekodigi
      </Typography>
    </Box>
  );
};
