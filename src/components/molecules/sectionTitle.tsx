/** @jsxImportSource @emotion/react */

import { Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { SxProps } from "@mui/material/styles";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../contexts/theme";
import { themeLight } from "../../themes/light";
import { fontFamilies, fontSizes } from "../styles/fonts";

type SectionTitleProps = {
  title: string;
  subTitle?: string;
  body?: string;
  sx?: SxProps;
};
export const SectionTitle = (props: SectionTitleProps) => {
  const { title, subTitle, body, sx } = props;

  const { theme } = useContext(ThemeContext); //not applied measure

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={1}
      m={2}
      sx={{
        color: theme.palette.local.black,
      }}
    >
      <Typography
        css={[fontFamilies.Jp, fontSizes.px32]}
        style={{ fontWeight: 700 }}
        sx={sx}
      >
        {title}
      </Typography>
      {subTitle === undefined ? null : (
        <Typography
          css={[fontFamilies.Jp, fontSizes.px24]}
          style={{ fontWeight: 700 }}
          sx={sx}
        >
          {subTitle}
        </Typography>
      )}
      {body === undefined ? null : (
        <Typography
          css={[fontFamilies.Jp, fontSizes.px16]}
          style={{ fontWeight: 500 }}
          sx={sx}
        >
          {body}
        </Typography>
      )}
    </Box>
  );
};
