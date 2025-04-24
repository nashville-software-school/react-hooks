// TODO: Create a context for theme using createContext

function ThemeProvider({ children }) {
  
  // TODO: Initialize theme state
  const theme = 'light'
  
  // TODO: Create toggleTheme function
  const toggleTheme = () => {}

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