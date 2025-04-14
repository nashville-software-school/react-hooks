// TODO: Import useContext from 'react'
// TODO: Import ThemeContext

function Content() {
  // TODO: Use the useContext hook to access theme
  const theme = 'light' // This should come from context
  
  return (
    <main style={{
      backgroundColor: theme === 'light' ? '#f0f0f0' : '#222',
      color: theme === 'light' ? '#333' : '#fff',
      padding: '2rem',
      margin: '1rem 0',
      borderRadius: '8px',
      minHeight: '200px'
    }}>
      <h2>Welcome to the App</h2>
      <p>This content adapts to the current theme using useContext.</p>
      <p>Current theme: {theme}</p>
      <div style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        padding: '1rem',
        marginTop: '1rem',
        borderRadius: '4px'
      }}>
        <h3>Nested Content</h3>
        <p>This box also adapts to the theme!</p>
      </div>
    </main>
  )
}

export default Content