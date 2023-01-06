import { Box, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { InPageLink } from "../../molecules/InPageLink";
import { SectionTitle } from "../../molecules/SectionTitle";

export const Contact = () => {
  const { t } = useTranslation("top");

  return (
    <InPageLink id="Contact">
      <Container sx={{ pt: 2, mb: 40 }}>
        <SectionTitle title={t("contact.title")!} body={t("contact.body")!} />
      </Container>
    </InPageLink>
  );
};
