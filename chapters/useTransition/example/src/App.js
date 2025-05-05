import { useState, useEffect } from 'react'
import './App.css'

// Simulated slow child component
function TabContent({ tabName }) {
  const [content, setContent] = useState(null)
  
  useEffect(() => {
    const startTime = performance.now()
      while (performance.now() - startTime < 1000) {
        // Simulate heavy computation
      }
      setContent(`Tab selected: ${tabName}`)
  }, [tabName])

  return (
    <div className="tab-content">
      {content}
    </div>
  )
}

function App() {
  const tabs = ['Posts', 'Photos', 'Contacts'];

  const [tabIndex, setTabIndex] = useState(0);
  const [tabContent, setTabContent] = useState("Posts");

  //TODO: use useTransition hook to make the tab change immediately, rather than being delayed
  const handleTabChange = (newTabIndex) => {
    setTabIndex(newTabIndex);
    setTabContent(tabs[newTabIndex])
  }

  return (
    <div className="app-container">
      <h1>useTransition Demo</h1>

      <div className="tab-buttons">
        {tabs.map((t, i) => (
          <button
            key={i}
            onClick={() => handleTabChange(i)}
            className={`tab-button ${tabIndex === i ? 'active' : 'inactive'}`}
          >
            {t}
          </button>
        ))}
      </div>

      {/*TODO: only show this while the tab content change is pending*/}
      <div className="loading-indicator">Loading...</div>

      <TabContent tabName={tabContent} />
    </div>
  )
}

export default App
