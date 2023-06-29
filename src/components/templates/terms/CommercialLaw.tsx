/** @jsxImportSource @emotion/react */

import { Box, Container, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { fontSize } from "@mui/system";
import { useTranslation } from "react-i18next";
import { InPageLink } from "../../molecules/inPageLink";
import { SectionTitle, SectionTitleProps } from "../../molecules/sectionTitle";
import { fontFamilies, fontSizes } from "../../styles/fonts";

export const CommercialLaw = () => {
  const { t } = useTranslation("terms");

  type UrlProps = {
    alt: string;
    url: string;
  };
  type TermsProps = SectionTitleProps & {
    urls?: UrlProps[];
  };
  const terms: TermsProps[] = t("commercialLaw.terms", {
    returnObjects: true,
  });

  return (
    <InPageLink id="commercialLaw">
      <Container sx={{ pt: 2, mb: 40 }}>
        <SectionTitle title={t("commercialLaw.title")!} sxBox={{ mb: 6 }} />
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
