import { Box, BoxProps, SxProps } from "@mui/material";

type flexGridProps = {
  step?: number;
  sx?: SxProps;
  boxProps?: BoxProps;
  children: React.ReactNode;
};
export const FlexGrid = (props: flexGridProps) => {
  const { step, sx, boxProps, children } = props;

  let maxWidth = { xs: 336, sm: 688, md: 1040 } as any;
  switch (step) {
    case 2:
      maxWidth = { xs: 336, sm: 688 };
      break;
    case 1:
      maxWidth = { xs: 336 };
      break;
    default:
      break;
  }

  return (
    <Box display="flex" justifyContent="center">
      <Box
        display="flex"
        flexWrap="wrap"
        sx={{ ...sx, maxWidth: maxWidth }}
        gap={2}
        mt={4}
        mb={1}
        {...boxProps}
      >
        {children}
      </Box>
    </Box>
  );
};
