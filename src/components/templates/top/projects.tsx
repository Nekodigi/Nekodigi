/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";

import { Box, Container, useTheme } from "@mui/material";
import { FlexGrid } from "../../molecules/flexGrid";
import { InPageLink } from "../../molecules/inPageLink";
import { SectionTitle } from "../../molecules/sectionTitle";
import { ProjectCard } from "../../organisms/projectCard";

export const Projects = () => {
  const theme = useTheme();
  return (
    <InPageLink id="MyProjects">
      <Container sx={{ pt: 4, pb: 2 }}>
        <SectionTitle
          sx={{
            color: theme.palette.local.black,
            textShadow: "0px 0px 30px rgba(255, 255, 255, 0.5);",
          }}
          title="My Projects"
          // subTitle="Web App"
          body={
            "Webですぐに試せるアプリを紹介します！\nすべての作品が見たい方はYoutubeやブログからご覧ください。"
          }
        />
        <FlexGrid>
          <ProjectCard
            url="https://nekodigi.github.io/genshin-score-simulator/"
            image="https://cdn.image.st-hatena.com/image/scale/1c16276692b8a1ab7352a702c9e1ccf1112fc3b6/backend=imager;height=500;quality=80;version=1;width=500/https%3A%2F%2Fcdn-ak.f.st-hatena.com%2Fimages%2Ffotolife%2FN%2FNekodigi%2F20221213%2F20221213092155.png"
            title="Artifact Score Simulator"
            body="聖遺物の最終スコアを予測。現在のスコアだけでなく未来のスコアもわかる。"
          />
          <ProjectCard
            url="https://foodbankbotdev.web.app/archive/all/1"
            image="https://cdn.image.st-hatena.com/image/scale/06c1e00537bd11d8a7e1975064f343bc2c278739/backend=imager;height=500;quality=80;version=1;width=500/https%3A%2F%2Fcdn-ak.f.st-hatena.com%2Fimages%2Ffotolife%2FN%2FNekodigi%2F20221027%2F20221027225011.png"
            title="Chat Blog"
            body="LINEからみんなで投稿できるWebサイト。企業やコミュニティの情報発信に使える。"
          />
          <ProjectCard
            url="https://bushub-d4562.web.app/"
            image="https://cdn.image.st-hatena.com/image/scale/07ba2d2ce4177dfa8efaf4fcf26d3227ab74dd6a/backend=imager;height=500;quality=80;version=1;width=500/https%3A%2F%2Fcdn-ak.f.st-hatena.com%2Fimages%2Ffotolife%2FN%2FNekodigi%2F20221213%2F20221213115244.png"
            title="Bus Train"
            body="バスの遅延を反映し乗り継ぎ案内をしてくれるアプリ。"
          />
          <ProjectCard
            url="https://nekodigi.github.io/Weather-Room-Frontend/"
            image="https://cdn.image.st-hatena.com/image/scale/f853e76cd5de96dc647245aaee005bfc9abe0554/backend=imager;height=500;quality=80;version=1;width=500/https%3A%2F%2Fcdn-ak.f.st-hatena.com%2Fimages%2Ffotolife%2FN%2FNekodigi%2F20221228%2F20221228202651.png"
            title="Weather Room"
            body="温度や湿度をグラフで表示。いつでも快適な環境をキープ。"
          />
          <Box
            flex="1 1 250px"
            maxWidth={336}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <ProjectCard
              url="https://nekodigi.github.io/genshin-score-simulator/"
              image="https://cdn.image.st-hatena.com/image/scale/1c16276692b8a1ab7352a702c9e1ccf1112fc3b6/backend=imager;height=500;quality=80;version=1;width=500/https%3A%2F%2Fcdn-ak.f.st-hatena.com%2Fimages%2Ffotolife%2FN%2FNekodigi%2F20221213%2F20221213092155.png"
              title="Artifact Score Simulator"
              body="聖遺物の最終スコアを予測。現在のスコアだけでなく未来のスコアもわかる。"
            />
          </Box>
          <Box
            flex="1 1 250px"
            maxWidth={336}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <ProjectCard
              url="https://nekodigi.github.io/genshin-score-simulator/"
              image="https://cdn.image.st-hatena.com/image/scale/1c16276692b8a1ab7352a702c9e1ccf1112fc3b6/backend=imager;height=500;quality=80;version=1;width=500/https%3A%2F%2Fcdn-ak.f.st-hatena.com%2Fimages%2Ffotolife%2FN%2FNekodigi%2F20221213%2F20221213092155.png"
              title="Artifact Score Simulator"
              body="聖遺物の最終スコアを予測。現在のスコアだけでなく未来のスコアもわかる。"
            />
          </Box>
        </FlexGrid>
      </Container>
    </InPageLink>
  );
};
