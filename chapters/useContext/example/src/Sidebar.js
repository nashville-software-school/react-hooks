// TODO: Import useContext from 'react'
// TODO: Import ThemeContext

function Sidebar() {
  // TODO: Use the useContext hook to access theme
  const theme = 'light' // This should come from context
  
  return (
    <aside style={{
      backgroundColor: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#333' : '#fff',
      padding: '1rem',
      borderRadius: '8px',
      width: '200px'
    }}>
      <h3>Sidebar</h3>
      <ul style={{ 
        listStyle: 'none',
        padding: 0,
        margin: 0
      }}>
        <li style={{ marginBottom: '0.5rem' }}>Home</li>
        <li style={{ marginBottom: '0.5rem' }}>About</li>
        <li style={{ marginBottom: '0.5rem' }}>Contact</li>
      </ul>
      <div style={{
        marginTop: '1rem',
        padding: '0.5rem',
        backgroundColor: theme === 'light' ? '#f0f0f0' : '#222',
        borderRadius: '4px',
        fontSize: '0.875rem'
      }}>
        Theme affects all components!
      </div>
    </aside>
  )
}

export default Sidebar