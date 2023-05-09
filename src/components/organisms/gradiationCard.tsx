/** @jsxImportSource @emotion/react */

import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FlexItem } from "../molecules/flexItem";
import { fontFamilies, fontSizes } from "../styles/fonts";

export type GradationCardProps = {
  url: string;
  title: string;
  body: string;
  color: string;
};
export const GradationCard = (props: GradationCardProps) => {
  const { url, title, body, color } = props;
  const theme = useTheme();
  return (
    <FlexItem
      url={url}
      sx={{
        background: color,
        color: theme.palette.com.white,
        p: 1.5,
        gap: 1,
      }}
    >
      <Typography
        css={[fontFamilies.Jp, fontSizes.px18]}
        sx={{ fontWeight: 700 }}
      >
        {title}
      </Typography>
      <Typography
        css={[fontFamilies.Jp, fontSizes.px14]}
        sx={{ fontWeight: 500 }}
      >
        {body}
      </Typography>
    </FlexItem>
  );
};
