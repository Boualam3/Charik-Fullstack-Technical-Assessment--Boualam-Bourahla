import { createTheme } from "@mui/material/styles"
import { AppTheme } from ".."
import Itypography from "./Itypography"

const { palette } = createTheme()

export const theme: AppTheme = {
  dark: {
    palette: {
      mode: "dark",
      primary: palette.augmentColor({
        color: {
          main: "#58B224",
          contrastText: "#ffffff",
        },
      }),
      secondary: palette.augmentColor({
        color: {
          main: "#2F5E2F",
          contrastText: "#ffffff",
        },
      }),
      text: {
        primary: "#e6e1e6",
        secondary: "#b0a9b0",
        disabled: "#BDBDBD",
      },
      background: {
        default: "#121212",
        paper: "#1e1e1e",
      },
      error: palette.augmentColor({
        color: {
          main: "#FF4D4D",
          contrastText: "#ffffff",
        },
      }),
      success: palette.augmentColor({
        color: {
          main: "#4CAF50",
          contrastText: "#ffffff",
        },
      }),
      info: palette.augmentColor({
        color: {
          main: "#2196F3",
          contrastText: "#ffffff",
        },
      }),
      warning: palette.augmentColor({
        color: {
          main: "#FFC107",
          contrastText: "#000000",
        },
      }),
      divider: "#938f99",
      upvote: palette.augmentColor({
        color: {
          main: "#58B224",
          contrastText: "#ffffff",
        },
      }),
      downvote: palette.augmentColor({
        color: {
          main: "#FF4D4D",
          contrastText: "#ffffff",
        },
      }),
      containerPrimary: palette.augmentColor({
        color: {
          main: "#2F2F4F",
          contrastText: "#ffffff",
        },
      }),
      containerSecondary: palette.augmentColor({
        color: {
          main: "#494458",
          contrastText: "#e7dff8",
        },
      }),
    },
    typography: Itypography,
  },
  light: {
    palette: {
      mode: "light",
      primary: palette.augmentColor({
        color: {
          main: "#58B224",
          contrastText: "#ffffff",
        },
      }),
      secondary: palette.augmentColor({
        color: {
          main: "#2F5E2F",
          contrastText: "#ffffff",
        },
      }),
      text: {
        primary: "#1c1b1e",
        secondary: "#707070",
        disabled: "#BDBDBD",
      },
      background: {
        default: "#f9f9f9",
        paper: "#ffffff",
      },
      error: palette.augmentColor({
        color: {
          main: "#FF4D4D",
          contrastText: "#ffffff",
        },
      }),
      success: palette.augmentColor({
        color: {
          main: "#4CAF50",
          contrastText: "#ffffff",
        },
      }),
      info: palette.augmentColor({
        color: {
          main: "#2196F3",
          contrastText: "#ffffff",
        },
      }),
      warning: palette.augmentColor({
        color: {
          main: "#FFC107",
          contrastText: "#000000",
        },
      }),
      divider: "#0000002f",
      upvote: palette.augmentColor({
        color: {
          main: "#58B224",
          contrastText: "#ffffff",
        },
      }),
      downvote: palette.augmentColor({
        color: {
          main: "#FF4D4D",
          contrastText: "#ffffff",
        },
      }),
      containerPrimary: palette.augmentColor({
        color: {
          main: "#E0E0E0",
          contrastText: "#1c0062",
        },
      }),
      containerSecondary: palette.augmentColor({
        color: {
          main: "#f2f2f2",
          contrastText: "#1d192b",
        },
      }),
    },
    typography: Itypography,
  },
}