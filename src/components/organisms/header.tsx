/** @jsxImportSource @emotion/react */

import { AppBar, Box, Container, Toolbar, useTheme } from "@mui/material";
import { Nekodigi } from "../molecules/Nekodigi";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";

export const Header = () => {
  const theme = useTheme();

  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6199893310019553"
        crossOrigin="anonymous"
      ></script>

      <AppBar
        sx={{
          bgcolor: theme.palette.local.white,
        }}
      >
        <Container>
          <Toolbar sx={{ py: 1.75, px: 2, color: theme.palette.local.black }}>
            <Nekodigi />
            <Box flexGrow={1}></Box>
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              <TextButton href="/#MyProjects" label="My Projects" />
              <TextButton href="/#SocialMedia" label="Social Media" />
              <TextButton href="/#Contact" label="Contact" />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </div>
  );
};

import { Button } from "@mui/material";
import { css, jsx } from "@emotion/react";

import TextField from "@mui/material/TextField";
import { fontFamilies, fontSizes } from "../styles/fonts";
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import LanguageSwitchLink from "../atoms/LanguageSwitchLink";
import Link from "../atoms/Link";

type TextButtonProps = {
  href: string;
  label: string;
};

export const TextButton = (props: TextButtonProps) => {
  const theme = useTheme();
  const { href, label } = props;

  return (
    <Link href={href} underline={"none"}>
      <Button
        css={[fontFamilies.Jp, fontSizes.px16]} //, fontFamily: "Noto Sans JP"
        sx={{
          color: theme.palette.local.black,
          textTransform: "none",
          fontWeight: 400,
          fontSize: 16,
        }}
      >
        {label}
      </Button>
    </Link>
  );
};
