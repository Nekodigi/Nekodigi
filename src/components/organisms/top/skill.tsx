import { Box, Container, useTheme } from "@mui/material";
import { IconBadge } from "../../molecules/IconBadge";
import { SectionTitle } from "../../molecules/sectionTitle";

export const Skill = () => {
  const theme = useTheme();
  return (
    <Container sx={{ py: 2 }}>
      <SectionTitle
        title="Skill"
        // subTitle="Fullstack / IoT / Art"
        body="こちらは開発で使用している技術一覧です。
ご自身の開発や仕事依頼の参考にお使いください。"
      />
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={2}
        sx={{ color: theme.palette.local.black }}
      >
        <IconBadge name="Figma" image="icons/skill/figma.png" />
        <IconBadge
          goldenRatio={false}
          name="Firebase"
          image="icons/skill/firebase.png"
        />
        <IconBadge name="JavaScript" image="icons/skill/javaScript.png" />
        <IconBadge name="React" image="icons/skill/react.png" />
        <IconBadge name="Material Ui" image="icons/skill/mui.png" />
        <IconBadge name="Photoshop" image="icons/skill/photoshop.png" />
        <IconBadge name="TypeScript" image="icons/skill/typeScript.png" />
        <IconBadge name="Node.js" image="icons/skill/nodeJS.png" />
        <IconBadge name="Emotion" image="icons/skill/emotion.png" />
        <IconBadge name="Sass" image="icons/skill/sass.png" />
        <IconBadge name="Processing" image="icons/skill/processing.png" />
        <IconBadge name="Java" image="icons/skill/java.png" />
        <IconBadge name="C#" image="icons/skill/cSharp.png" />
        <IconBadge name="Unity" image="icons/skill/unity.png" />
        <IconBadge name="Python" image="icons/skill/python.png" />
      </Box>
    </Container>
  );
};
