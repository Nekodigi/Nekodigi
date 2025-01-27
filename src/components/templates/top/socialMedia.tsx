import { Box, Container, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FlexGrid } from "../../molecules/flexGrid";
import { InPageLink } from "../../molecules/inPageLink";
import { SectionTitle } from "../../molecules/sectionTitle";
import {
  GradationCard,
  GradationCardProps,
} from "../../organisms/gradiationCard";

export const SocialMedia = () => {
  const theme = useTheme();
  const { t } = useTranslation("top");

  const colors = [
    "linear-gradient(117.75deg, #FF0000 16.15%, #FFB199 87.96%);",
    "linear-gradient(117.75deg, #CC208E 16.15%, #6713D2 87.96%);",
    "linear-gradient(108.57deg, #4481EB 23.52%, #04BEFE 71.41%);",
    "linear-gradient(117.75deg, #0BA360 16.15%, #3CBA92 87.96%);",
    "linear-gradient(117.75deg, #6A11AB 16.15%, #2575FC 87.96%);",
    //"linear-gradient(117.75deg, #C471F5 16.15%, #FA71CD 87.96%);",
    "linear-gradient(117.75deg, #09203f 0%, #537895 100%);",
  ];

  const socialMedias: GradationCardProps[] = t("socialMedia.socialMedias", {
    returnObjects: true,
  });

  return (
    <InPageLink id="SocialMedia">
      <Container sx={{ pt: 2 }}>
        <SectionTitle
          sx={{
            color: theme.palette.local.black,
            textShadow: "0px 0px 30px rgba(255, 255, 255, 0.5);",
          }}
          title={t("socialMedia.title")!}
          // subTitle="App / Art / Game"
          body={t("socialMedia.body")!}
        />

        <FlexGrid step={2}>
          {socialMedias.map((socialMedia, i) => (
            <GradationCard
              title={socialMedia.title}
              body={socialMedia.body}
              url={socialMedia.url}
              color={colors[i % 6]}
            />
          ))}
        </FlexGrid>
      </Container>
    </InPageLink>
  );
};
