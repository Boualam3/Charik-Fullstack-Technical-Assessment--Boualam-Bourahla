import {
  forwardRef,
  useEffect,
  ForwardRefExoticComponent,
  RefAttributes,
} from "react";
import {  useDispatch, useSelector } from "react-redux";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Avatar,
  Box,
  Chip,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

// project import
import { activeItem } from "../../../../../../../../store/slices/menu";

// types
import { LinkTarget, NavItemType } from "../../../../../../../../types/menu";
import { Link, useLocation, useParams } from "react-router-dom";
import { isObjectNotEmpty } from "../../../../../../../../helpers/data.helper";




// ==============================|| NAVIGATION - LIST ITEM ||============================== //

interface Props {
  item: NavItemType;
  level: number;
}

const NavItem = ({ item, level }: Props) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const {drawerOpen, openItem} = useSelector((state: any) => state.menu);
  

  let itemTarget: LinkTarget = "_self";
  if (item.target) {
    itemTarget = "_blank";
  }

  let listItemProps: {
    component:
      | ForwardRefExoticComponent<RefAttributes<HTMLAnchorElement>>
      | string;
    href?: string;
    target?: LinkTarget;
  } = {
    component: forwardRef((props, ref) => (
      <Link to={item.url!} {...props} target={itemTarget} ref={ref}></Link>
    )),
  };
  if (item?.external) {
    listItemProps = { component: "a", href: item.url, target: itemTarget };
  }

  const Icon = item.icon!;
  const itemIcon = item.icon ? (
    <Icon style={{ fontSize: drawerOpen ? "1rem" : "1.25rem" }}  />
  ) : (
    false
  );

  const isSelected = openItem.findIndex((id: any) => id === item.id) > -1;

  const { pathname } = useLocation();
  const params = useParams();

  useEffect(() => {
    if (pathname === item.url) {
      dispatch(activeItem({ openItem: [item.id] }));
      return;
    } else if (
      pathname.split("/").slice(0, -1).join("/") === item.url &&
      isObjectNotEmpty(params)
    ) {
      dispatch(activeItem({ openItem: [item.id] }));
    }
  }, [pathname]);

  const textColor = theme.palette.primary.contrastText;
  const iconSelectedColor = theme.palette.primary.contrastText;
  
  return (
    <ListItemButton
      {...listItemProps}
      disabled={item.disabled}
      selected={isSelected}
      sx={{
        zIndex: 1201,
        pl: drawerOpen ? `${level * 28}px` : 1.5,
        py: !drawerOpen && level === 1 ? 1.25 : 1,
        borderRadius: "20px",
        
        ...(drawerOpen && level === 1
          ? {
              bgcolor: "transparent",
              "&:hover": {
                bgcolor: {
                  bgcolor: theme.palette.mode === 'dark' ? 'divider' : 'primary.lighter'
                }
              },
              '&.Mui-selected': {
                bgcolor: "#00658d",
                opacity:"90%",
                borderRight: `2px solid ${theme.palette.primary.main}`,
                transition: "0.3s",
                '&:hover': {
                  bgcolor: "#00658d",
                  opacity:"100%",
                }
              },
            }
          : {
              // "&:hover": {
              //   bgcolor:"transparent",
              // },
              "&.Mui-selected": {
                bgcolor: "transparent",
                "&:hover": {
                  bgcolor: "transparent",
                },
              },
            }),

        ...(!drawerOpen && {
          "&:hover": {
            bgcolor: "transparent",
          },
          "&.Mui-selected": {
            "&:hover": {
              bgcolor: "transparent",
            },
            bgcolor: "transparent",
          },
        }),
      }}
      className={item?.disabledInNavigation ? "hidden" : ""}
    >
      {itemIcon && (
        <ListItemIcon
          sx={{
            minWidth: 28,
            color: isSelected ? iconSelectedColor : textColor,
            ...(!drawerOpen && {
              borderRadius: 1.5,
              width: 36,
              height: 36,
              alignItems: "center",
              justifyContent: "center",
              "&:hover": {
                bgcolor:
                  theme.palette.mode === "dark"
                    ? "secondary.light"
                    : "secondary.lighter",
              },
            }),
            ...(!drawerOpen &&
              isSelected && {
                bgcolor:
                  theme.palette.mode === "dark"
                    ? "primary.900"
                    : "primary.lighter",
                "&:hover": {
                  bgcolor:
                    theme.palette.mode === "dark"
                      ? "primary.darker"
                      : "primary.lighter",
                },
              }),
          }}
        >
          {itemIcon}
        </ListItemIcon>
      )}
      {(drawerOpen || (!drawerOpen && level !== 1)) && (
        <ListItemText
          primary={
            <>
              {level === 1 ? (
                <Typography
                  variant="body2"
                  sx={{ color: isSelected ? iconSelectedColor : textColor }}
                >
                  {item.title as string}
                </Typography>
              ) : (
                <Box className="flex gap-4 items-center">
                  <Box
                    className={`w-1.5 h-1.5 aspect-square rounded-full transition duration-1000 ${
                      isSelected ? "scale-150" : "scale-100"
                    }`}
                    sx={{
                      background: isSelected
                        ? theme.palette.primary.main
                        : textColor,
                    }}
                  ></Box>

                  <Typography
                    variant="body2"
                    className="whitespace-break-spaces"
                    sx={{ color: isSelected ? iconSelectedColor : textColor }}
                  >
                    {item.title as string}
                  </Typography>
                </Box>
              )}
            </>
          }
        />
      )}
      {(drawerOpen || (!drawerOpen && level !== 1)) && item.chip && (
        <Chip
          color={item.chip.color}
          variant={item.chip.variant}
          size={item.chip.size}
          label={item.chip.label}
          avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
        />
      )}
    </ListItemButton>
  );
};

export default NavItem;
