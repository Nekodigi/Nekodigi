import { useTheme } from "@mui/material";
import { Box, Container } from "@mui/material";

import { useTranslation } from "next-i18next";
import { Waves } from "../../atoms/waves";

import { SectionTitle } from "../../molecules/sectionTitle";

export const Intro = () => {
  const theme = useTheme();

  const { t } = useTranslation("top");

  const waveWidth = "100%";
  const waveHeight = 50;

  return (
    <Box
      sx={{ background: theme.palette.com.dawn }}
      position="relative"
      overflow="hidden"
    >
      <Container sx={{ pt: 8 }}>
        <SectionTitle
          sx={{
            color: theme.palette.com.white,
            textShadow: "0px 0px 30px rgba(255, 255, 255, 0.5);",
          }}
          title={t("intro.title")!} //"Programmer / Designer / Student"
          // subTitle={t("Common.title") as string}
          body={t("intro.body")!}
        />
      </Container>
      {/* <ShapesBackground width={1000} height={200} /> */}
      <Box
        sx={{
          mt: 6,
          height: waveHeight,
          // transform: "scale(1, 0.75)",
        }}
      >
        {/* wave logo https://codepen.io/goodkatz/
        pen/LYPGxQz */}
        <Waves width={waveWidth} height={waveHeight} />
      </Box>
    </Box>
  );
};
