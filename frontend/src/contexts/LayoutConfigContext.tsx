import { createContext, ReactNode } from "react"

// project import
import defaultConfig from "../config/layout-config"
import {
  CustomizationProps,
  FontFamily,
  I18n,
  PresetColor,
  ThemeDirection,
  ThemeMode,
} from "../config/config"
import useLocalStorage from "../hooks/useLocalStorage"

// typesb

// initial state
const initialState: CustomizationProps = {
  ...defaultConfig,
  onChangeContainer: () => {},
  onChangeLocalization: (_lang: I18n) => {},
  onChangeMode: (_mode: ThemeMode) => {},
  onChangePresetColor: (_theme: PresetColor) => {},
  onChangeDirection: (_direction: ThemeDirection) => {},
  onChangeMiniDrawer: (_miniDrawer: boolean) => {},
  onChangeFontFamily: (_fontFamily: FontFamily) => {},
}

// ==============================|| CONFIG CONTEXT & PROVIDER ||============================== //

const ConfigContext = createContext(initialState)

type ConfigProviderProps = {
  children: ReactNode
}

function ConfigProvider({ children }: ConfigProviderProps) {
  const [config, setConfig] = useLocalStorage(
    "mantis-react-next-ts-config",
    initialState
  )

  const onChangeContainer = () => {
    setConfig({
      ...config,
      container: !config.container,
    })
  }

  const onChangeLocalization = (lang: I18n) => {
    setConfig({
      ...config,
      i18n: lang,
    })
  }

  const onChangeMode = (mode: ThemeMode) => {
    setConfig({
      ...config,
      mode,
    })
  }

  const onChangePresetColor = (theme: PresetColor) => {
    setConfig({
      ...config,
      presetColor: theme,
    })
  }

  const onChangeDirection = (direction: ThemeDirection) => {
    setConfig({
      ...config,
      themeDirection: direction,
    })
  }

  const onChangeMiniDrawer = (miniDrawer: boolean) => {
    setConfig({
      ...config,
      miniDrawer,
    })
  }

  const onChangeFontFamily = (fontFamily: FontFamily) => {
    setConfig({
      ...config,
      fontFamily,
    })
  }

  return (
    <ConfigContext.Provider
      value={{
        ...config,
        onChangeContainer,
        onChangeLocalization,
        onChangeMode,
        onChangePresetColor,
        onChangeDirection,
        onChangeMiniDrawer,
        onChangeFontFamily,
      }}
    >
      {children}
    </ConfigContext.Provider>
  )
}

export { ConfigProvider, ConfigContext }
