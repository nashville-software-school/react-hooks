import { useState, useMemo } from 'react'
// TODO: Import useDeferredValue from 'react'

// Simulated slow component to show the benefit of useDeferredValue
function SlowList({ searchQuery }) {
  // Create a large array of items for demonstration
  const items = useMemo(() => {
    const result = []
    for (let i = 0; i < 10000; i++) {
      result.push(`Item ${i + 1}`)
    }
    return result
  }, [])

  // Filter items based on search query
  const filteredItems = useMemo(() => {
    // Artificial delay to simulate slow rendering
    const startTime = performance.now()
    while (performance.now() - startTime < 100) {
      // Simulate heavy computation
    }

    return items.filter(item => 
      item.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [items, searchQuery])

  return (
    <ul style={{ 
      height: '400px', 
      overflowY: 'auto',
      border: '1px solid #ccc',
      padding: '10px',
      borderRadius: '4px'
    }}>
      {filteredItems.map(item => (
        <li 
          key={item}
          style={{
            padding: '8px',
            borderBottom: '1px solid #eee',
            backgroundColor: item.toLowerCase().includes(searchQuery.toLowerCase()) 
              ? '#e6f3ff' 
              : 'transparent'
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  
  // TODO: Create deferred value for search query using useDeferredValue
  // This will help prevent the slow list from blocking the input

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>useDeferredValue Demo</h1>

      <div style={{ marginBottom: '2rem' }}>
        <h3>Tasks to complete:</h3>
        <ul>
          <li>Import useDeferredValue from React</li>
          <li>Create a deferred value from searchQuery</li>
          <li>Pass the deferred value to SlowList</li>
          <li>Compare the performance difference</li>
        </ul>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search items... (currently sluggish)"
          style={{
            padding: '8px',
            fontSize: '16px',
            width: '100%',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <p>
          Search query: {searchQuery}
          {/* TODO: Show deferred value status */}
        </p>
      </div>

      {/* TODO: Pass deferred query instead of searchQuery */}
      <SlowList searchQuery={searchQuery} />

      <div style={{ marginTop: '20px' }}>
        <p style={{ fontStyle: 'italic' }}>
          Note: This example includes artificial delays to simulate heavy computations.
          Currently, typing feels sluggish because the list updates are blocking the input.
          Implement useDeferredValue to fix this!
        </p>
      </div>
    </div>
  )
}

export default App
