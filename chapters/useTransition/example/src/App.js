import { useState } from 'react'
// TODO: Import useTransition from 'react'

// Simulated slow component to show the benefit of useTransition
function TabContent({ tab }) {
  // Artificial delay to simulate slow rendering
  const startTime = performance.now()
  while (performance.now() - startTime < 100) {
    // Simulate heavy computation
  }

  let content
  switch (tab) {
    case 'posts':
      content = Array.from({ length: 500 }, (_, i) => (
        <div 
          key={i}
          style={{
            padding: '20px',
            marginBottom: '10px',
            backgroundColor: '#f8f9fa',
            borderRadius: '4px'
          }}
        >
          <h3>Post {i + 1}</h3>
          <p>This is the content for post {i + 1}</p>
        </div>
      ))
      break
    case 'photos':
      content = Array.from({ length: 500 }, (_, i) => (
        <div 
          key={i}
          style={{
            padding: '10px',
            marginBottom: '10px',
            backgroundColor: '#e9ecef',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <div style={{
            width: '50px',
            height: '50px',
            backgroundColor: '#dee2e6',
            borderRadius: '4px'
          }} />
          <span>Photo {i + 1}</span>
        </div>
      ))
      break
    case 'contacts':
      content = Array.from({ length: 500 }, (_, i) => (
        <div 
          key={i}
          style={{
            padding: '15px',
            marginBottom: '10px',
            backgroundColor: '#f1f3f5',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#ced4da',
            borderRadius: '20px'
          }} />
          <div>
            <div>Contact {i + 1}</div>
            <div style={{ fontSize: '0.875em', color: '#6c757d' }}>
              contact{i + 1}@example.com
            </div>
          </div>
        </div>
      ))
      break
    default:
      content = <div>Select a tab</div>
  }

  return (
    <div style={{ 
      height: '600px', 
      overflowY: 'auto',
      padding: '20px',
      backgroundColor: 'white',
      borderRadius: '4px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      {content}
    </div>
  )
}

function App() {
  const [tab, setTab] = useState('posts')
  // TODO: Initialize useTransition hook
  // This will help keep the UI responsive during tab switches

  const handleTabChange = (newTab) => {
    // TODO: Wrap setTab in startTransition
    // This will mark the update as non-urgent
    setTab(newTab)
  }

  const tabs = ['posts', 'photos', 'contacts']

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>useTransition Demo</h1>

      <div style={{ marginBottom: '2rem' }}>
        <h3>Tasks to complete:</h3>
        <ul>
          <li>Import useTransition from React</li>
          <li>Initialize useTransition hook</li>
          <li>Wrap tab state updates in startTransition</li>
          <li>Add loading indicator during transitions</li>
        </ul>
      </div>

      <div style={{ 
        display: 'flex',
        gap: '10px',
        marginBottom: '20px'
      }}>
        {tabs.map(tabName => (
          <button
            key={tabName}
            onClick={() => handleTabChange(tabName)}
            style={{
              padding: '10px 20px',
              border: 'none',
              borderRadius: '4px',
              backgroundColor: tab === tabName ? '#007bff' : '#e9ecef',
              color: tab === tabName ? 'white' : 'black',
              cursor: 'pointer'
              // TODO: Add opacity during pending state
            }}
          >
            {tabName.charAt(0).toUpperCase() + tabName.slice(1)}
            {/* TODO: Add loading indicator */}
          </button>
        ))}
      </div>

      {/* TODO: Add loading indicator during transitions */}

      <TabContent tab={tab} />

      <div style={{ marginTop: '20px' }}>
        <p style={{ fontStyle: 'italic' }}>
          Note: This example includes artificial delays to simulate heavy computations.
          Currently, tab switches feel sluggish. Implement useTransition to improve this!
        </p>
      </div>
    </div>
  )
}

export default App
