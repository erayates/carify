import { memo, forwardRef } from "react";

import Box from "@mui/material/Box";

import { StyledScrollbar, StyledRootScrollbar } from "./styles";

// ----------------------------------------------------------------------

export const Scrollbar = forwardRef(
  (
    {
      children,
      sx,
      ...other
    }: { children: React.ReactNode; sx?: object },
    ref
  ) => {
    const userAgent =
      typeof navigator === "undefined" ? "SSR" : navigator.userAgent;

    const mobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      );

    if (mobile) {
      return (
        <Box ref={ref} sx={{ overflow: "auto", ...sx }} {...other}>
          {children}
        </Box>
      );
    }

    return (
      <StyledRootScrollbar>
        <StyledScrollbar
          scrollableNodeProps={{
            ref,
          }}
          clickOnTrack={false}
          sx={sx}
          {...other}
        >
          {children}
        </StyledScrollbar>
      </StyledRootScrollbar>
    );
  }
);

export default memo(Scrollbar);
