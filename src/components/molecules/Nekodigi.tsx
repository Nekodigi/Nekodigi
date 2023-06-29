import { Box, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";
import Link from "../atoms/Link";

type NekodigiProps = {
  useLogo?: boolean;
};
export const Nekodigi = (props: NekodigiProps) => {
  const { theme } = useContext(ThemeContext);
  let { useLogo } = props;
  if (useLogo === undefined) useLogo = true;

  return (
    <Box position="relative" height={32}>
      {useLogo ? (
        <Link href="https://nekodigi.com">
          <Box
            component="img"
            src={
              theme.palette.mode === "light"
                ? "/icons/nekodigi/light.png"
                : "/icons/nekodigi/dark.png"
            }
            width={32}
          />
          <Typography
            sx={{
              position: "absolute",
              left: 27,
              top: 10,
              fontSize: 16,
              fontWeight: 700,
              fontFamily: "Roboto, sans-serif",
              lineHeight: "19px",
              color: theme.palette.local.black,
            }}
          >
            ekodigi
          </Typography>
        </Link>
      ) : (
        <Link href="https://nekodigi.com">
          <Typography
            sx={{
              position: "absolute",
              top: 7,
              left: 7,
              fontSize: 16,
              fontWeight: 700,
              fontFamily: "Roboto, sans-serif",
              lineHeight: "19px",
              color: theme.palette.local.black,
            }}
          >
            Nekodigi
          </Typography>
        </Link>
      )}
    </Box>
  );
};
