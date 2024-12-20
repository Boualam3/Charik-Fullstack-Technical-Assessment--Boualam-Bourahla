import React from "react"
import CssBaseline from "@mui/material/CssBaseline"
import GlobalStyles from "@mui/material/GlobalStyles"
// import useMediaQuery from "@mui/material/useMediaQuery"
import { ThemeProvider, createTheme, ThemeOptions } from "@mui/material/styles"

import { color as ThemeColors } from "./index"
import { useMediaQuery } from "@mui/material"

export const ThemeContext = React.createContext({
  toggleColorMode: () => {},
  shuffleColorTheme: () => {},
})

type MyThemeProviderProps = {
  children?: React.ReactNode
}

export default function MyThemeProvider(props: MyThemeProviderProps) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")

  const savedMode = localStorage.getItem("mode")
  const savedTheme = localStorage.getItem("theme")

  const [mode, setMode] = React.useState<"light" | "dark">(
    savedMode === "light" || savedMode === "dark"
      ? savedMode
      : prefersDarkMode
      ? "dark"
      : "light"
  )

  // const [theme, setTheme] = React.useState<0 | 1 | 2 | 3>(0);

  const [theme, setTheme] = React.useState<0 | 1 | 2 | 3 | 4>(() => {
    if (savedTheme !== null) {
      const parsedTheme = parseInt(savedTheme, 10)
      if ([0, 1, 2, 3, 4].includes(parsedTheme)) {
        return parsedTheme as 0 | 1 | 2 | 3 | 4
      }
    }
    return 0 // Default value
  })

  // useEffect(() => {
  //   setMode(prefersDarkMode ? "dark" : "light");
  // }, [prefersDarkMode]);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
        localStorage.setItem("mode", mode === "light" ? "dark" : "light")
      },
      shuffleColorTheme: () => {
        setTheme((prevTheme) => ((prevTheme + 1) % 5) as 0 | 1 | 2 | 3 | 4)
        localStorage.setItem(
          "theme",
          (((theme + 1) % 5) as 0 | 1 | 2 | 3 | 4).toString()
        )
      },
    }),
    []
  )

  const _theme = React.useMemo(
    () =>
      createTheme({
        // direction: "ltr",
        ...(ThemeColors[theme][mode] as ThemeOptions),
      }),
    [mode, theme]
  )

  return (
    // CssBaseline use: [https://stackoverflow.com/a/59145819/17449710](https://stackoverflow.com/a/59145819/17449710)
    // GlobalStyles use:  [https://stackoverflow.com/a/69905540/17449710](https://stackoverflow.com/a/69905540/17449710)

    // Sure we will use our theme to provide colours to buttons and various components but we can’t change our App’s background and font color dynamically (technically that can be done but this is the MUI way).
    // CssBaseline provides this functionality to manage background and text color of our app automatically based on what theme we provide it. (ex body html tag)

    // GlobalStyles just retains the page’s default css that gets reset/removed by CssBaseline. (ex body has a margin of 8px by default .. or something)

    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={_theme}>
        <GlobalStyles styles={{}} />
        <CssBaseline enableColorScheme />
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
