/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";

import { Box, Container, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FlexGrid } from "../../molecules/flexGrid";
import { InPageLink } from "../../molecules/inPageLink";
import { SectionTitle } from "../../molecules/sectionTitle";
import { ProjectCard, ProjectCardProps } from "../../organisms/projectCard";

export const Projects = () => {
  const theme = useTheme();

  const { t } = useTranslation("top");
  const projects: ProjectCardProps[] = t("myProjects.projects", {
    returnObjects: true,
  });

  return (
    <InPageLink id="MyProjects">
      <Container sx={{ pt: 4, pb: 2 }}>
        <SectionTitle
          sx={{
            color: theme.palette.local.black,
            textShadow: "0px 0px 30px rgba(255, 255, 255, 0.5);",
          }}
          title={t("myProjects.title")!}
          // subTitle="Web App"
          body={t("myProjects.body")!}
        />
        <FlexGrid>
          {projects.map((project, i) => {
            if (i < 4) {
              return (
                <ProjectCard
                  title={project.title}
                  body={project.body}
                  url={project.url}
                  image={project.image}
                  key={i}
                />
              );
            } else {
              return (
                <Box
                  flex="1 1 250px"
                  maxWidth={336}
                  sx={{ display: { xs: "none", md: "flex" } }}
                  key={i}
                >
                  <ProjectCard
                    title={project.title}
                    body={project.body}
                    url={project.url}
                    image={project.image}
                  />
                </Box>
              );
            }
          })}
        </FlexGrid>
      </Container>
    </InPageLink>
  );
};
