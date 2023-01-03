/** @jsxImportSource @emotion/react */

import { Box, Typography } from "@mui/material";
import { fontFamilies, fontSizes } from "../styles/fonts";

type IconBadgeProps = {
  goldenRatio?: boolean;
  image: string;
  name: string;
};

export const IconBadge = (props: IconBadgeProps) => {
  let { goldenRatio, image, name } = props;

  goldenRatio = goldenRatio != undefined ? goldenRatio : true;
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width={88}
      height={88}
    >
      <Box width={64} height={64} display="flex">
        <img
          style={{ margin: "auto", objectFit: "contain" }}
          width={goldenRatio ? 40 : 64}
          height={goldenRatio ? 40 : 64}
          src={image}
        />
      </Box>

      <Typography
        css={[fontFamilies.Jp, fontSizes.px16]}
        sx={{ fontWeight: 500 }}
      >
        {name}
      </Typography>
    </Box>
  );
};
