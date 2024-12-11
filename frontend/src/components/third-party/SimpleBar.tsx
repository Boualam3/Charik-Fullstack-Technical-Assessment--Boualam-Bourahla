import React from "react"
import SimpleBar from "simplebar-react"
import "simplebar-react/dist/simplebar.min.css"
import { SxProps, Theme } from "@mui/system"
import { Box } from "@mui/material"

interface SimpleBarScrollProps {
  children: React.ReactNode
  sx?: SxProps<Theme>
}

const SimpleBarScroll: React.FC<SimpleBarScrollProps> = ({ children, sx }) => {
  return (
    <Box
      component={SimpleBar}
      style={{ overflowX: "hidden" }}
      sx={{
        "& .simplebar-content": {
          display: "flex",
          flexDirection: "column",
        },
        ...sx,
      }}
    >
      {children}
    </Box>
  )
}

export default SimpleBarScroll
