import React from "react"
import { Box, Typography, IconButton } from "@mui/material"
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded"

interface FormHeaderProps {
  title: string
  subtitle: string
  onBack?: () => void
}

const FormHeader: React.FC<FormHeaderProps> = ({ title, subtitle, onBack }) => {
  return (
    <Box className="w-full flex flex-row items-baseline gap-[1rem] justify-start">
      {!!onBack && (
        <IconButton size="small" onClick={onBack}>
          <ArrowBackRoundedIcon className="w-8 h-8 cursor-pointer" />
        </IconButton>
      )}

      <Box className="w-full flex flex-col gap-4">
        <Typography
          sx={{ fontSize: "2rem" }}
          className="text-[#244051] lg:text-4xl w-full"
          fontWeight={600}
        >
          {title}
        </Typography>
        <Typography
          className="text-md text-[#244051] font-bold"
          fontWeight={400}
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  )
}

export default FormHeader
