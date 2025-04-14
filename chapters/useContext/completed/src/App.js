import { ThemeProvider } from './ThemeContext'
import ThemeToggle from './ThemeToggle'
import Content from './Content'
import Sidebar from './Sidebar'

function App() {
  return (
    <ThemeProvider>
      <div className="App" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ marginBottom: '20px' }}>
          <ThemeToggle />
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Sidebar />
          <Content />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
