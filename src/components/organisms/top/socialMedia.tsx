import { Box, Container, useTheme } from "@mui/material";
import { FlexGrid } from "../../molecules/flexGrid";
import { InPageLink } from "../../molecules/inPageLink";
import { SectionTitle } from "../../molecules/sectionTitle";
import { GradiationCard } from "../gradiationCard";

export const SocialMeadia = () => {
  const theme = useTheme();

  return (
    <InPageLink id="SocialMedia">
      <Container sx={{ pt: 2 }}>
        <SectionTitle
          sx={{
            color: theme.palette.local.black,
            textShadow: "0px 0px 30px rgba(255, 255, 255, 0.5);",
          }}
          title="Social Media"
          // subTitle="App / Art / Game"
          body={
            "YoutubeやGithubなどのソーシャルメディアでは、ここで紹介した何百倍ものコンテンツを発表しています！\nこの活動が面白そうだと思った方は、ぜひ訪れてください👍"
          }
        />

        <FlexGrid step={2}>
          <GradiationCard
            url="https://www.youtube.com/c/Nekodigi"
            title="Youtube"
            body="見た目や技術的な面白さにこだわったアートを投稿。"
            color="linear-gradient(117.75deg, #FF0000 16.15%, #FFB199 87.96%);"
          />
          <GradiationCard
            url="https://github.com/Nekodigi"
            title="Github"
            body="Webアプリ/アートなどほぼすべての作品のソースコードを無料公開。"
            color="linear-gradient(117.75deg, #CC208E 16.15%, #6713D2 87.96%);"
          />
          <GradiationCard
            url="https://nekodigi.hatenablog.com/archive"
            title="Blog"
            body="Webアプリなどの作品の紹介に加え、開発の裏側やその他の趣味などを幅広く。"
            color="linear-gradient(108.57deg, #4481EB 23.52%, #04BEFE 71.41%);"
          />
          <GradiationCard
            url="https://play.google.com/store/apps/dev?id=8989861170574890555"
            title="Google Play"
            body="Webアプリ/動画では味わえないインタラクティブな体験にこだわった作品。"
            color="linear-gradient(117.75deg, #9BE15D 16.15%, #00E3AE 87.96%);"
          />
        </FlexGrid>
      </Container>
    </InPageLink>
  );
};
