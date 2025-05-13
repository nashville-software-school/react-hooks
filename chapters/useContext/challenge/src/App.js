import ThemeToggle from './ThemeToggle'
import Content from './Content'
import Sidebar from './Sidebar'

function App() {
  return (
    // TODO: Wrap the app content with ThemeProvider
    <div className="App app-container">
      <div className="toggle-container">
        <ThemeToggle />
      </div>
      <div className="content-layout">
        <Sidebar />
        <Content />
      </div>
    </div>
  )
}

export default App
