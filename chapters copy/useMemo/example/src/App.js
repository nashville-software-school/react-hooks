import { useState, useMemo } from 'react'
import './App.css'

function App() {
  const [multiplier, setMultiplier] = useState(1)
  const [factor, setFactor] = useState(2)
  const [darkMode, setDarkMode] = useState(false)

  // Expensive computation memoized with useMemo
  const multipliedNumber = () => {
    console.log('Calculating multiplied numbers...')
    // Artificial delay to simulate expensive computation
    const start = performance.now()
    while (performance.now() - start < 200) { }
    return multiplier * factor
  };

  // Theme toggle doesn't trigger expensive recalculations
  const toggleTheme = () => {
    setDarkMode(prev => !prev)
  }

  return (
    <div className={`container ${darkMode ? 'dark' : 'light'}`}>
      <h1>Number Multiplier</h1>
      
        <button onClick={toggleTheme}>
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>

        <label>
          Multiplier:
          <input
            type="number"
            value={multiplier}
            onChange={ (e)=> {setMultiplier(e.target.value)} }
            className="multiplier-input"
          />
        </label>
        <label>
          Multiplier:
          <input
            type="number"
            value={factor}
            onChange={ (e)=> {setFactor(e.target.value)} }
            className="multiplier-input"
          />
        </label>
        
        <h3>Multiplied Number:{multipliedNumber}</h3>

    </div>
  )
}

export default App
