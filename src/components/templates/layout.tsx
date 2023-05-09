import { Box, useTheme } from "@mui/material";
import React from "react";
import { Footer } from "../organisms/footer";
import { Header } from "../organisms/header";

export const Layout = (props: { children: React.ReactNode }) => {
  const { children } = props;
  const theme = useTheme();
  return (
    <Box sx={{ background: theme.palette.local.white, whiteSpace: "pre-wrap" }}>
      <Header />
      <main style={{ minHeight: 1000 }}>{children}</main>
      <Footer />
    </Box>
  );
};
