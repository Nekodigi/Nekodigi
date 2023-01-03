import { Box, useTheme } from "@mui/material";
import React from "react";
import { Footer } from "../organisms/footer";
import { Header } from "../organisms/header";

export const Layout = (props: { children: React.ReactNode }) => {
  const { children } = props;
  const theme = useTheme();
  return (
    <Box sx={{ background: theme.palette.local.white }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </Box>
  );
};
