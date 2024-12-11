import { ReactNode, useMemo } from "react"

// material-ui
import { useTheme } from "@mui/material/styles"
import { AppBar, Toolbar, useMediaQuery, AppBarProps } from "@mui/material"

// project import
import AppBarStyled from "./AppBarStyled"
import HeaderContent from "./HeaderContent/"

// assets
import InIconButton from "../../../../../../components/buttons/InIconButton"
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"

// ==============================|| MAIN LAYOUT - HEADER ||============================== //

interface Props {
  open: boolean
  handleDrawerToggle?: () => void
}

const Header = ({ open, handleDrawerToggle }: Props) => {
  const theme = useTheme()
  const matchDownMD = useMediaQuery(theme.breakpoints.down("lg"))

  // header content
  const headerContent = useMemo(() => <HeaderContent />, [])

  // common header
  const mainHeader: ReactNode = (
    <Toolbar className="py-4 ">
      <InIconButton
        onClick={handleDrawerToggle}
        sx={{ backgroundColor: "transparent " }}
      >
        {!open ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </InIconButton>

      {headerContent}
    </Toolbar>
  )

  // app-bar params
  const appBar: AppBarProps = {
    position: "fixed",
    color: "inherit",
    elevation: 0,
    sx: {
      borderBottom: `1px solid #938f99`,
    },
  }

  return (
    <>
      {!matchDownMD ? (
        <AppBarStyled open={open} {...appBar}>
          {mainHeader}
        </AppBarStyled>
      ) : (
        <AppBar {...appBar}>{mainHeader}</AppBar>
      )}
    </>
  )
}

export default Header
