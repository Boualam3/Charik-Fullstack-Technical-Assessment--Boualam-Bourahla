// project import
import { Box } from "@mui/material";
import Navigation from "./Navigation";

// ==============================|| DRAWER CONTENT ||============================== //
// bg-[red] 
const DrawerContent = () => {

  return (
    <Box className="drower-scrollBar1 flex-1 flex flex-col justify-between"
      sx={{
        backgroundColor : "#244051",
        color : "white"
      }}
    >
      <Box className="">
        <Navigation />
      </Box>
  
      <Box className="pb-2">
        <Navigation type="settings" />
      </Box>
    </Box>
  )
}

export default DrawerContent;
