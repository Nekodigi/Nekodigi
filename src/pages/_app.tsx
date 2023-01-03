/** @jsxImportSource @emotion/react */

import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/templates/layout";
import { ThemeContext } from "../contexts/theme";
import { useState } from "react";
import { CssBaseline, Theme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themeLight } from "../themes/light";
import { themeCommon } from "../themes/theme";
import { Header } from "../components/organisms/header";
import { themeDark } from "../themes/dark";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<Theme>(themeLight);
  const themeValue = { theme, setTheme };

  return (
    <ThemeContext.Provider value={themeValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
