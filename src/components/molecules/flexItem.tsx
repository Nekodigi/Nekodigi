import {  Link, SxProps } from "@mui/material";

type flexItemProps = {
  url?: string;
  sx?: SxProps;
  children: React.ReactNode;
};
export const FlexItem = (props: flexItemProps) => {
  const { url, sx, children } = props;
  return (
    <Link
      flex="1 1 250px"
      maxWidth={336}
      display="flex"
      flexDirection="column"
      borderRadius={2}
      overflow="hidden"
      underline="none"
      href={url}
      sx={sx}
    >
      {children}
    </Link>
  );
};
