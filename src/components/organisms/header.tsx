/** @jsxImportSource @emotion/react */

import { AppBar, Box, Container, Toolbar, useTheme } from "@mui/material";
import { Nekodigi } from "../molecules/Nekodigi";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";

export const Header = () => {
  const theme = useTheme();

  return (
    <div>
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
