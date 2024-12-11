// material-ui
import { ButtonBase, Chip, Typography } from "@mui/material"

import { Link } from "react-router-dom"
import { Box } from "@mui/material"
import logo from "../../../../assets/logo/logo.svg"

interface Props {
  open?: boolean
  to?: string
}

const Logo = ({ open, to }: Props) => (
  <Link to={!to ? "/" : to}>
    <ButtonBase
      disableRipple
      className={`flex flex-row gap-2 mt-5 mb-1 ${
        open ? "mr-2 ml-4" : "mx-auto"
      }`}
    >
      <Box className="flex flex-col items-center justify-center gap-2">
        <Box className="w-8 h-8">
          <img src={logo} className="w-full h-full object-contain text-xs" />
        </Box>
      </Box>
      {open ? (
        <Box className="flex items-end gap-2">
          <Typography component="h1">
            Boualam
            <Typography component="span" fontWeight={800}>
              BRH
            </Typography>
          </Typography>
          <Chip
            className="text-xs font-bold h-6"
            label="CRM"
            color="secondary"
            sx={{ fontSize: "0.75rem" }}
          />
        </Box>
      ) : (
        ""
      )}
    </ButtonBase>
  </Link>
)
// <Typography>
//   WeDort<Typography fontWeight={800}>Driver <Chip size="small" label="BETA" color="secondary" /></Typography>
// </Typography>

{
  /* <Typography className="text-5xl" fontWeight={300}>
            <Typography fontWeight={500} className="text-5xl inline-block">
              We
            </Typography>
            dort <Chip label="BETA" color="secondary" />
</Typography> */
}

export default Logo
