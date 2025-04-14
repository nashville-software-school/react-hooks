import { useState, useMemo } from 'react'

function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  const [multiplier, setMultiplier] = useState(2)
  const [darkMode, setDarkMode] = useState(false)

  // Expensive computation memoized with useMemo
  const multipliedNumbers = useMemo(() => {
    console.log('Calculating multiplied numbers...')
    // Artificial delay to simulate expensive computation
    const start = performance.now()
    while (performance.now() - start < 100) {
      // Simulate heavy processing
    }
    return numbers.map(num => num * multiplier)
  }, [numbers, multiplier]) // Only recalculate when numbers or multiplier changes

  // Calculate sum of multiplied numbers
  const sum = useMemo(() => {
    console.log('Calculating sum...')
    return multipliedNumbers.reduce((acc, curr) => acc + curr, 0)
  }, [multipliedNumbers])

  const addNumber = () => {
    setNumbers(prev => [...prev, prev.length + 1])
  }

  const removeNumber = () => {
    setNumbers(prev => prev.slice(0, -1))
  }

  const handleMultiplierChange = (event) => {
    setMultiplier(Number(event.target.value))
  }

  // Theme toggle doesn't trigger expensive recalculations
  const toggleTheme = () => {
    setDarkMode(prev => !prev)
  }

  const styles = {
    container: {
      padding: '20px',
      backgroundColor: darkMode ? '#333' : '#fff',
      color: darkMode ? '#fff' : '#333',
      minHeight: '100vh'
    },
    numberBox: {
      padding: '10px',
      margin: '5px',
      backgroundColor: darkMode ? '#444' : '#f0f0f0',
      display: 'inline-block',
      borderRadius: '5px'
    }
  }

  return (
    <div style={styles.container}>
      <h1>Number Multiplier</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <button onClick={toggleTheme}>
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
        <p>(Theme changes won't trigger recalculations)</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label>
          Multiplier: 
          <input 
            type="number" 
            value={multiplier} 
            onChange={handleMultiplierChange}
            style={{ margin: '0 10px' }}
          />
        </label>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <button onClick={addNumber} style={{ marginRight: '10px' }}>
          Add Number
        </button>
        <button onClick={removeNumber}>
          Remove Number
        </button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Original Numbers:</h3>
        {numbers.map(num => (
          <span key={num} style={styles.numberBox}>{num}</span>
        ))}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Multiplied Numbers:</h3>
        {multipliedNumbers.map(num => (
          <span key={num} style={styles.numberBox}>{num}</span>
        ))}
      </div>

      <div>
        <h3>Sum of Multiplied Numbers: {sum}</h3>
      </div>

      <div style={{ marginTop: '20px' }}>
        <p>Open console to see when calculations occur</p>
        <p>Notice that changing the theme doesn't trigger recalculations</p>
      </div>
    </div>
  )
}

export default App
