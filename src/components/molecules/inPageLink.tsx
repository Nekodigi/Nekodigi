import { Box } from "@mui/material";

type InPageLinkProps = {
  id: string;
  children: React.ReactNode;
};
export const InPageLink = (props: InPageLinkProps) => {
  const { id, children } = props;
  const offset = 6;
  return (
    <Box id={id} sx={{ mt: -offset, pt: offset }}>
      {children}
    </Box>
  );
};
