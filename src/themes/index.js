import * as React from 'react'
import DefaultTheme from './default'
import DarkTheme from './dark'
import { useState } from 'react'

export const Themes = {
  Default: DefaultTheme,
  Dark: DarkTheme,
}

const AppThemeContext = React.createContext()

export const AppThemeProvider = props => {
  const [activeTheme, setActiveTheme] = useState(Themes.Default)
  const setThemeRef = themeName => {
    const themeObject = Themes[themeName]

    if (!themeObject) {
      const ThemesAvailable = Object.keys(themeObject)
      throw new Error(`This theme is not available, themes are ${ThemesAvailable}.`)
    }

    setActiveTheme(themeObject)
  }

  return (
    <AppThemeContext.Provider
      value={{
        activeTheme,
        changeTheme: themeName => setThemeRef(themeName)
      }}
    >
      {props.children}
    </AppThemeContext.Provider>
  )
}

export function useTheme() {
  const context = React.useContext(AppThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a AppThemeProvider')
  }
  return { ...context.activeTheme, change: context.changeTheme }
}

export const AppThemeConsumer = AppThemeContext.Consumer