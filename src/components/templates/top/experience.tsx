import { Box, Container, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FlexGrid } from "../../molecules/flexGrid";
import { InPageLink } from "../../molecules/inPageLink";
import { SectionTitle } from "../../molecules/sectionTitle";
import {
  GradationCard,
  GradationCardProps,
} from "../../organisms/gradiationCard";
import Markdown from "react-markdown";
import { fontFamilies, fontSizes } from "../../styles/fonts";

export const Experience = () => {
  const theme = useTheme();
  const { t } = useTranslation("top");

  return (
    <InPageLink id="Experience">
      <Container sx={{ pt: 2 }}>
        <SectionTitle
          sx={{
            color: theme.palette.local.black,
            textShadow: "0px 0px 30px rgba(255, 255, 255, 0.5);",
          }}
          title={t("experience.title")!}
          // subTitle="App / Art / Game"
          body={t("experience.body")!}
        />
        <Markdown
          css={[
            fontFamilies.Jp,
            fontSizes.px16,
            {
              fontWeight: 500,
              margin: 16,
              lineHeight: 1.6,
              whiteSpace: "normal",
            },
          ]}
        >
          {t("experience.markdown")!}
        </Markdown>
      </Container>
    </InPageLink>
  );
};
