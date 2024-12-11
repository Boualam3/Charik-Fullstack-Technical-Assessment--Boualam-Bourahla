import { theme as green } from "./presets/green"
import { theme as blue } from "./presets/blue"
import { theme as _default } from "./presets/default"
import { theme as red } from "./presets/red"
import { theme as theme1 } from "./presets/theme1"
import { theme as wedort } from "./presets/wedort"

// Import necessary types from MUI
import {
  Palette,
  PaletteColor,
  PaletteOptions,
  Shadows,
  TransitionsOptions,
} from "@mui/material/styles"
import {
  Typography,
  TypographyOptions,
} from "@mui/material/styles/createTypography"
import { ZIndexOptions } from "@mui/material/styles/zIndex"
import { ThemeOptions as SystemThemeOptions } from "@mui/system"

declare module "@mui/material/styles" {
  interface Palette {
    upvote?: PaletteColor
    downvote?: PaletteColor
    containerPrimary?: PaletteColor
    containerSecondary?: PaletteColor
  }

  interface PaletteOptions {
    upvote?: PaletteColor
    downvote?: PaletteColor
    containerPrimary?: PaletteColor
    containerSecondary?: PaletteColor
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    upvote: true
    downvote: true
  }
}

declare module "@mui/material/CircularProgress" {
  interface CircularProgressPropsColorOverrides {
    upvote: true
    downvote: true
  }
}

// Define a more structured AppTheme
export interface AppTheme {
  dark: {
    palette: Partial<Palette>
    typography?: Partial<Typography>
  }
  light: {
    palette: Partial<Palette>
    typography?: Partial<Typography>
  }
}

// Color presets
export const color = {
  0: wedort,
  1: _default,
  2: green,
  3: blue,
  4: red,
  5: theme1,
  // wedort preset
}

// ThemeOptions interface
export interface ThemeOptions extends Omit<SystemThemeOptions, "zIndex"> {
  mixins?: Record<string, unknown>
  components?: Record<string, unknown>
  palette?: PaletteOptions
  shadows?: Shadows

  transitions?: TransitionsOptions
  typography?: TypographyOptions | ((palette: Palette) => TypographyOptions)
  zIndex?: ZIndexOptions
  unstable_strictMode?: boolean
}
