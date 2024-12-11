import React from "react";
import PropTypes from "prop-types";
import { motion as m } from "framer-motion";
import { Box } from "@mui/material";
import logo from "../../assets/logo/logo.svg";


interface SplashScreenProps {
  sx?: React.CSSProperties;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ sx, ...other }) => {
  return (
    <Box
      sx={{
        right: 0,
        width: 1,
        bottom: 0,
        height: 1,
        zIndex: 9998,
        display: "flex",
        position: "fixed",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        ...sx,
      }}
      {...other}
    >
      <>
        <m.div
          animate={{
            scale: [1, 2, 1, 2, 1],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeatDelay: 1,
            repeat: Infinity,
          }}
        >
          {/* loading ... */}
          <img src={logo} className="w-12 h-12 object-contain text-xs" />
        </m.div>
      </>
    </Box>
  );
};

SplashScreen.propTypes = {
  sx: PropTypes.object,
};

export default SplashScreen;