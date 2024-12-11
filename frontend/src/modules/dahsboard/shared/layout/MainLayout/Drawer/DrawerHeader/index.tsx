// material-ui
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
// project import
import DrawerHeaderStyled from "./DrawerHeaderStyled";
import Logo from "../../../../../components/logo";

// ==============================|| DRAWER HEADER ||============================== //

interface Props {
  open: boolean;
}

const DrawerHeader = ({ open }: Props) => {
  const theme = useTheme();

  return (
    <DrawerHeaderStyled
      theme={theme}
      open={open}
      sx={{
        backgroundColor: "#244051",
        color: "white",
        height:"80px",
      }}
    >
      <Box className="w-8 h-8">
        <Logo open={open} />
      </Box>
    </DrawerHeaderStyled>
  );
};

export default DrawerHeader;
