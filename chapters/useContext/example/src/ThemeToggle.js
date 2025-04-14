// TODO: Import useContext from 'react'
// TODO: Import ThemeContext

function ThemeToggle() {
  // TODO: Use the useContext hook to access theme and toggleTheme
  const theme = 'light' // This should come from context
  const toggleTheme = () => {} // This should come from context
  
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