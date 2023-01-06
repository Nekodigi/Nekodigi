/** @jsxImportSource @emotion/react */

import { Box, Container, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { fontSize } from "@mui/system";
import { useTranslation } from "react-i18next";
import { InPageLink } from "../../molecules/InPageLink";
import { SectionTitle, SectionTitleProps } from "../../molecules/SectionTitle";
import { fontFamilies, fontSizes } from "../../styles/fonts";

export const Privacy = () => {
  const { t } = useTranslation("terms");

  type UrlProps = {
    alt: string;
    url: string;
  };
  type TermsProps = SectionTitleProps & {
    urls?: UrlProps[];
  };
  const terms: TermsProps[] = t("privacyPolicy.terms", {
    returnObjects: true,
  });

  return (
    <InPageLink id="PrivacyPolicy">
      <Container sx={{ pt: 2, mb: 40 }}>
        <SectionTitle
          title={t("privacyPolicy.title")!}
          body={t("privacyPolicy.body")!}
          sxBox={{ mb: 6 }}
        />
        {terms.map((term, i) => (
          <Box display="flex" flexDirection="column" gap={1} m={2} mb={4}>
            <Typography
              css={[fontFamilies.Jp, fontSizes.px18]}
              fontWeight={700}
            >
              {term.title}
            </Typography>
            <Typography
              css={[fontFamilies.Jp, fontSizes.px16]}
              fontWeight={400}
            >
              {term.body}
            </Typography>
            {term.urls &&
              term.urls.map((url) => (
                <Link css={[fontFamilies.Jp, fontSizes.px16]} href={url.url}>
                  {url.alt}
                </Link>
              ))}
            {/* <SectionTitle key={i} subTitle={term.title} body={term.body} /> */}
          </Box>
        ))}
      </Container>
    </InPageLink>
  );
};
