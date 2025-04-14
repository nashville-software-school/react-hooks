// TODO: Import createContext and useState from 'react'

// TODO: Create a context for theme using createContext

// TODO: Create a ThemeProvider component that:
// 1. Manages theme state (light/dark)
// 2. Provides a toggleTheme function
// 3. Wraps children with ThemeContext.Provider

function ThemeProvider({ children }) {
  // TODO: Initialize theme state
  const theme = 'light' // This should use useState
  
  // TODO: Create toggleTheme function
  const toggleTheme = () => {} // This should toggle the theme

  // TODO: Create value object with theme and toggleTheme
  const value = {
    theme,
    toggleTheme
  }

  return (
    // TODO: Wrap children with ThemeContext.Provider and pass value
    children
  )
}

// TODO: Export ThemeContext and ThemeProvider