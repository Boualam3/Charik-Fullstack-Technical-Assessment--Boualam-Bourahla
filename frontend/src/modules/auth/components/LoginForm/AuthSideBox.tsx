import logo from "../../../../assets/logo/logo.svg"
import { Box, Chip, Typography } from "@mui/material"

export default function AuthSideBox() {
  return (
    <Box className="w-full md:w-1/2 md:flex h-full min-h-screen p-16 hidden flex-col gap-36 relative bg-[#ededed]">
      <Box className={`flex flex-row gap-4 mt-5 mb-1 z-3`}>
        <Box className="w-12 h-12">
          <img src={logo} className="w-full h-full object-contain text-xs" />
        </Box>
        <Typography className="text-5xl" fontWeight={300} component="div">
          <Typography
            component="span"
            sx={{ fontSize: "3rem" }}
            className=" flex text-[#244051]"
          >
            Boualam
          </Typography>
          <Chip
            label="CRM"
            sx={{ backgroundColor: "#e66d3d", color: "#fff" }}
          />
        </Typography>
      </Box>

      <Typography
        className="z-[3] text-[#244051] text-5xl"
        variant="h3"
        sx={{ fontWeight: "bold" }}
        fontWeight={500}
      >
        Unlock the Potential of Your CRM
      </Typography>

      <Box className="w-72 h-72 absolute bottom-0 right-0 z-[1]">
        <img src={logo} className="w-full h-full object-contain text-xs" />
      </Box>
    </Box>
  )
}
