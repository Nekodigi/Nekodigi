import { Box, Container } from "@mui/material";
import { InPageLink } from "../../molecules/inPageLink";
import { SectionTitle } from "../../molecules/sectionTitle";

export const Contact = () => {
  return (
    <InPageLink id="Contact">
      <Container sx={{ pt: 2, mb: 20 }}>
        <SectionTitle
          title="Contact"
          body="Youtubeのコメントで連絡していただくと早く回答が得られます。Twitter、Emailを通しての連絡も可能です。"
        />
      </Container>
    </InPageLink>
  );
};
