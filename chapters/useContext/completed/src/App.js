import { ThemeProvider } from './ThemeContext'
import ThemeToggle from './ThemeToggle'
import Content from './Content'
import Sidebar from './Sidebar'

function App() {
  return (
    <ThemeProvider>
      <div className="App app-container">
        <div className="toggle-container">
          <ThemeToggle />
        </div>
        <div className="content-layout">
          <Sidebar />
          <Content />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
