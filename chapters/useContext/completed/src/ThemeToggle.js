import { useContext } from 'react'
import ThemeContext from './ThemeContext'

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  
  return (
    <button 
      onClick={toggleTheme}
      style={{
        padding: '8px 16px',
        backgroundColor: theme === 'light' ? '#333' : '#fff',
        color: theme === 'light' ? '#fff' : '#333',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
    >
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  )
}

export default ThemeToggle