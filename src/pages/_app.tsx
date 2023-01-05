/** @jsxImportSource @emotion/react */

import type { AppProps } from "next/app";
import { Layout } from "../components/templates/layout";
import { ThemeContext } from "../contexts/theme";
import { useEffect, useState } from "react";
import { CssBaseline, Theme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themeLight } from "../utils/themes/light";
import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<Theme>(themeLight);
  const themeValue = { theme, setTheme };

  //wait for hydration for : Error: Text content does not match server-rendered HTML
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  }

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

export default appWithTranslation(App);
