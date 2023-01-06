/** @jsxImportSource @emotion/react */

import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  useTheme,
  Typography,
} from "@mui/material";
import { Nekodigi } from "../molecules/Nekodigi";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";
import { FaGithub, FaYoutube, FaGooglePlay } from "react-icons/fa";
import { MdArticle } from "react-icons/md";

export const Footer = () => {
  const theme = useTheme();
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <AppBar
        position="relative"
        sx={{
          bgcolor: theme.palette.local.white,
        }}
        elevation={0}
      >
        <Container>
          <Toolbar
            sx={{
              py: 1.75,
              px: 2,
              color: theme.palette.local.black,

              borderTop: `1px solid`,
              borderColor: theme.palette.local.whiteDark,
            }}
          >
            <Nekodigi useLogo={false} />
            <Box flexGrow={1}></Box>
            <Box
              position="absolute"
              left={0}
              right={0}
              mx="auto"
              width="fit-content"
            >
              <Link href="/terms/privacy" underline="none">
                <Typography
                  css={[fontFamilies.Jp, fontSizes.px12]}
                  color={theme.palette.local.gray}
                  fontWeight={400}
                >
                  Privacy
                </Typography>
              </Link>
            </Box>
            <Box sx={{ display: { xs: "none", sm: "flex" } }} gap={2}>
              <IconButton href="https://github.com/Nekodigi">
                <FaGithub color={theme.palette.local.black} />
              </IconButton>
              <IconButton href="https://www.youtube.com/c/Nekodigi">
                <FaYoutube color={theme.palette.local.black} />
              </IconButton>
              <IconButton href="https://nekodigi.hatenablog.com/archive">
                <MdArticle color={theme.palette.local.black} />
              </IconButton>
              <IconButton href="https://play.google.com/store/apps/dev?id=8989861170574890555">
                <FaGooglePlay color={theme.palette.local.black} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

import { Button } from "@mui/material";
import { css, jsx } from "@emotion/react";

import TextField from "@mui/material/TextField";
import { fontFamilies, fontSizes } from "../styles/fonts";
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import Link from "../atoms/Link";

type TextButtonProps = {
  label: string;
};

export const TextButton = (props: TextButtonProps) => {
  const theme = useTheme();
  const { label } = props;

  return (
    <Button
      css={[fontFamilies.Jp, fontSizes.px16]} //, fontFamily: "Noto Sans JP"
      sx={{
        color: theme.palette.com.white,
        textTransform: "none",
        fontWeight: 400,
        fontSize: 16,
      }}
    >
      {label}
    </Button>
  );
};
