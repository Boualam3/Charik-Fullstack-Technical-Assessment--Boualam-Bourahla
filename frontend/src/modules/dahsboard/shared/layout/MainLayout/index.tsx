import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// material-ui
import { Box, Toolbar, useMediaQuery } from "@mui/material";

// project import
import Drawer from "./Drawer";
import Header from "./Header";


// types
// import { RootStateProps } from '@/types/root';

import useLayoutConfig from "../../../../../hooks/useLayoutConfig";
import { Outlet, useLocation } from "react-router-dom";
import { openDrawer } from "../../../../../store/slices/menu";

const MainLayout = () => {

  const { pathname } = useLocation();

  const matchDownLG = useMediaQuery('(max-width:1920px)');

  const { container, miniDrawer } = useLayoutConfig();
  const dispatch = useDispatch();

  const drawerOpen = useSelector((state: any) => state.menu.drawerOpen);

  // drawer toggler
  const [open, setOpen] = useState(!miniDrawer || drawerOpen);

  const handleDrawerToggle = () => {
    setOpen(!open);
    dispatch(openDrawer({ drawerOpen: !open }));
  };

  // set media wise responsive drawer
  useEffect(() => {
    if (!miniDrawer) {
      setOpen(!matchDownLG);
      dispatch(openDrawer({ drawerOpen: !matchDownLG }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchDownLG]);

  useEffect(() => {
    if (open !== drawerOpen) setOpen(drawerOpen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drawerOpen]);

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  }, [pathname]);

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Header open={open} handleDrawerToggle={handleDrawerToggle} />
      <Drawer open={open} handleDrawerToggle={handleDrawerToggle} />

      <Box
        component="main"
        sx={{ width: "calc(100% - 260px)", flexGrow: 1, p: { xs: 2, sm: 3 } }}
      >
        <Toolbar />
        {container && (
          <Box
            maxWidth="2000px"
            sx={{
              px: { xs: 0, sm: 2 },
              position: "relative",
              minHeight: "calc(100vh - 110px)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* <Breadcrumbs
              navigation={navigation}
              title
              titleBottom
              card={false}
              divider={false}
            /> */}

            <Outlet />
            {/* <Footer /> */}
          </Box>
        )}
        {!container && (
          <Box
            sx={{
              position: "relative",
              minHeight: "calc(100vh - 110px)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* <Breadcrumbs
              navigation={navigation}
              title
              titleBottom
              card={false}
              divider={false}
            /> */}

            <Outlet />
            {/* <Footer /> */}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default MainLayout;
