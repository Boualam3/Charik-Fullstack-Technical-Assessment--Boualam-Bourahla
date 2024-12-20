import { useEffect, ReactNode } from "react"
import { useDispatch } from "react-redux"

// material-ui
import { styled, useTheme, Theme } from "@mui/material/styles"
import { useMediaQuery, Box } from "@mui/material"

// project import
import Drawer from "./Drawer"
import { drawerWidth } from "@/config/layout-config"
import { openComponentDrawer } from "@/store/slices/menu"

// components content
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }: { theme: Theme; open: boolean }) => ({
    minHeight: `calc(100vh - 188px)`,
    width: `calc(100% - ${drawerWidth}px)`,
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.down("md")]: {
      paddingLeft: 0,
    },
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  })
)

// ==============================|| COMPONENTS LAYOUT ||============================== //

interface Props {
  children: ReactNode
  handleDrawerOpen: () => void
  componentDrawerOpen: boolean
}

const ComponentLayout = ({
  children,
  handleDrawerOpen,
  componentDrawerOpen,
}: Props) => {
  const theme = useTheme()
  const dispatch = useDispatch()
  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"))

  useEffect(() => {
    dispatch(openComponentDrawer({ componentDrawerOpen: !matchDownMd }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchDownMd])

  return (
    <Box
      sx={{
        display: "flex",
        pt: componentDrawerOpen ? { xs: 0, md: 3, xl: 5.5 } : 0,
      }}
    >
      <Drawer handleDrawerOpen={handleDrawerOpen} open={componentDrawerOpen} />
      <Main theme={theme} open={componentDrawerOpen}>
        {children}
      </Main>
    </Box>
  )
}

export default ComponentLayout
