import {
  forwardRef,
  useEffect,
  ForwardRefExoticComponent,
  RefAttributes,
} from "react"
import { useDispatch, useSelector } from "react-redux"

// next
// import Link from 'next/link';

// material-ui
import { useTheme } from "@mui/material/styles"
import {
  useMediaQuery,
  Avatar,
  Chip,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material"

// types
import { LinkTarget, NavItemType } from "@/types/menu"
// import { RootStateProps } from '@/types/extended/';
import { activeComponent, openComponentDrawer } from "@/store/slices/menu"
import { Link } from "react-router-dom"
import { RootState } from "@/store/config"

// ==============================|| NAVIGATION - LIST ITEM ||============================== //

interface Props {
  item: NavItemType
  level?: number
}

const NavItem = ({ item }: Props) => {
  const theme = useTheme()
  const dispatch = useDispatch()
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"))

  const menu = useSelector((state: RootState) => state.menu)
  const { openComponent } = menu

  let itemTarget: LinkTarget = "_self"
  if (item.target) {
    itemTarget = "_blank"
  }

  let listItemProps: {
    component:
      | ForwardRefExoticComponent<RefAttributes<HTMLAnchorElement>>
      | string
    href?: string
    target?: LinkTarget
  } = {
    component: forwardRef((props, ref) => (
      <Link to={item.url!} {...props} ref={ref}>
        {/* <a {...props} target={itemTarget} /> */}
      </Link>
    )),
  }
  if (item?.external) {
    listItemProps = { component: "a", href: item.url, target: itemTarget }
  }

  const itemHandler = (id: string) => {
    dispatch(activeComponent({ openComponent: id }))
    if (matchesMD) dispatch(openComponentDrawer({ componentDrawerOpen: false }))
  }

  // active menu item on page load
  useEffect(() => {
    const currentIndex = document.location.pathname
      .toString()
      .split("/")
      .findIndex((id) => id === item.id)
    if (currentIndex > -1) {
      dispatch(activeComponent({ openComponent: item.id }))
    }
    // eslint-disable-next-line
  }, [])

  const textColor = theme.palette.mode === "dark" ? "grey.400" : "text.primary"
  const iconSelectedColor =
    theme.palette.mode === "dark" ? "text.primary" : "primary.main"

  return (
    <ListItemButton
      {...listItemProps}
      disabled={item.disabled}
      onClick={() => itemHandler(item.id!)}
      selected={openComponent === item.id}
      sx={{
        pl: 4,
        py: 1,
        mb: 0.5,
        "&:hover": {
          bgcolor:
            theme.palette.mode === "dark" ? "divider" : "primary.lighter",
        },
        "&.Mui-selected": {
          bgcolor:
            theme.palette.mode === "dark" ? "divider" : "primary.lighter",
          borderRight: `2px solid ${theme.palette.primary.main}`,
          "&:hover": {
            bgcolor:
              theme.palette.mode === "dark" ? "divider" : "primary.lighter",
          },
        },
      }}
    >
      <ListItemText
        primary={
          <Typography
            variant="h6"
            sx={{
              color: openComponent === item.id ? iconSelectedColor : textColor,
            }}
          >
            {item.title}
          </Typography>
        }
      />
      {item.chip && (
        <Chip
          color={item.chip.color}
          variant={item.chip.variant}
          size={item.chip.size}
          label={item.chip.label}
          avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
        />
      )}
    </ListItemButton>
  )
}

export default NavItem
