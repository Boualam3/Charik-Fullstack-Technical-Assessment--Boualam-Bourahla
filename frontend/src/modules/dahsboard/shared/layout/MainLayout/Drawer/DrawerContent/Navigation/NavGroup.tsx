import { useSelector } from "react-redux";

// material-ui
import { useTheme } from "@mui/material/styles";
import { Box, List, Typography } from "@mui/material";

// project import
import NavItem from "./NavItem";
import NavCollapse from "./NavCollapse";

// types
import { NavItemType } from "../../../../../../../../types/menu";

// ==============================|| NAVIGATION - LIST GROUP ||============================== //

interface Props {
  item: NavItemType;
}

const NavGroup = ({ item }: Props) => {
  const theme = useTheme();
  const drawerOpen = useSelector((state: any) => state.menu.drawerOpen);

  const navCollapse = item.children?.map((menuItem:any) => {
    if (menuItem.hideChildren) {
      return <NavItem key={menuItem.id} item={menuItem} level={1} />;
    }
    switch (menuItem.type) {
      case "collapse":
        return <NavCollapse key={menuItem.id} menu={menuItem} level={1} />;
      case "item":
        return <NavItem key={menuItem.id} item={menuItem} level={1} />;
      default:
        return (
          <Typography
            key={menuItem.id}
            variant="h6"
            color="error"
            align="center"
          >
            Fix - Group Collapse or Items
          </Typography>
        );
    }
  });

  return (
    <List
      subheader={
        item.title &&
        drawerOpen && (
          <Box sx={{ pl: 3, mb: 1.5 }}>
            <Typography
              variant="caption"
              className="text-[10px] opacity-70"
              color={theme.palette.primary.contrastText}
            >
              {item.title as string}
            </Typography>
            {item.caption && (
              <Typography variant="caption" color="secondary">
                {item.caption}
              </Typography>
            )}
          </Box>
        )
      }
      sx={{ mt: drawerOpen && item.title ? 1.5 : 0, py: 0, zIndex: 0 }}
    >
      {navCollapse}
    </List>
  );
};

export default NavGroup;
