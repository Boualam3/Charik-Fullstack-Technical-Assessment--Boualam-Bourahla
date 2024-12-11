import { useSelector } from "react-redux";
// material-ui
import { Box, Typography } from "@mui/material";
// project import
import NavGroup from "./NavGroup";
import menuItem from "../../../../menu-items";


interface Props {
  type?: string;
}

const Navigation = ({ type }: Props) => {

  const drawerOpen = useSelector((state: any) => state.menu.drawerOpen);

  const navGroups =
    type === "settings"
      ? menuItem?.settings?.map((item) => {
          switch (item.type) {
            case "group":
              return <NavGroup key={item.id} item={item} />;
            default:
              return (
                <Typography
                  key={item.id}
                  variant="h6"
                  color="error"
                  align="center"
                >
                  Navigation Group Error
                </Typography>
              );
          }
        })
      : menuItem?.items.map((item) => {
          switch (item.type) {
            case "group":
              return <NavGroup key={item.id} item={item} />;
            default:
              return (
                <Typography
                  key={item.id}
                  variant="h6"
                  color="error"
                  align="center"
                >
                  Navigation Group Error
                </Typography>
              );
          }
        });

  return (
    <Box sx={{ 
      pt: drawerOpen ? 2 : 0, "& > ul:first-of-type": { mt: 0 } ,
      px: drawerOpen ? "10px" : 0 ,


      }}>
      {navGroups}
    </Box>
  );
};

export default Navigation;
