/** @jsxImportSource @emotion/react */

import { Typography, Box, useTheme } from "@mui/material";
import { FlexItem } from "../molecules/flexItem";
import { fontFamilies, fontSizes } from "../styles/fonts";

//https://cdn.image.st-hatena.com/image/scale/1c16276692b8a1ab7352a702c9e1ccf1112fc3b6/backend=imager;height=500;quality=80;version=1;width=500/https%3A%2F%2Fcdn-ak.f.st-hatena.com%2Fimages%2Ffotolife%2FN%2FNekodigi%2F20221213%2F20221213092155.png
type ProjectCardProps = {
  url: string;
  image: string;
  title: string;
  body: string;
};
export const ProjectCard = (props: ProjectCardProps) => {
  const { url, image, title, body } = props;
  const theme = useTheme();
  return (
    <FlexItem url={url}>
      <img src={image} width="100%" style={{ borderRadius: 8 }}></img>
      <Box
        display="flex"
        flexDirection="column"
        gap={1}
        mx={1.5}
        my={1}
        sx={{ color: theme.palette.local.black }}
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
      </Box>
    </FlexItem>
  );
};
