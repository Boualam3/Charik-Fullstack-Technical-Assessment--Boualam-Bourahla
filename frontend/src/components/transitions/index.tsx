import { forwardRef, ReactNode } from "react";
import { Box, Grow, Fade, BoxProps } from "@mui/material";

// Type for props
type TransitionsProps = {
  children?: ReactNode;
  type?: "grow" | "fade" | "collapse" | "slide" | "zoom";
  position?:
    | "top-left"
    | "top-right"
    | "top"
    | "bottom-left"
    | "bottom-right"
    | "bottom";
};

// ==============================|| TRANSITIONS ||============================== //

const Transitions = forwardRef<HTMLDivElement, TransitionsProps>(
  (
    {
      children,
      type = "grow",
      position = "top-left",
      ...others
    }: TransitionsProps,
    ref
  ) => {
    let positionSX: BoxProps["sx"] = {
      transformOrigin: "0 0 0",
    };

    switch (position) {
      case "top-right":
      case "top":
      case "bottom-left":
      case "bottom-right":
      case "bottom":
      case "top-left":
      default:
        positionSX = {
          transformOrigin: "0 0 0",
        };
        break;
    }

    return (
      <Box ref={ref}>
        {type === "grow" && (
          <Grow {...others}>
            <Box sx={positionSX}>{children}</Box>
          </Grow>
        )}
        {type === "fade" && (
          <Fade
            {...others}
            timeout={{
              appear: 0,
              enter: 300,
              exit: 150,
            }}
          >
            <Box sx={positionSX}>{children}</Box>
          </Fade>
        )}
      </Box>
    );
  }
);

Transitions.defaultProps = {
  type: "grow",
  position: "top-left",
};

export default Transitions;
