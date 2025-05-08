import { useState, useMemo } from 'react'
import './App.css'


// Simulated slow component to show the benefit of useDeferredValue
// use useDeferredValue with the label prop to batch rerenders, so it doesn't affect the input
function SlowList({ label }) {

  const items = useMemo( () => {
    const elements = [];
    for (let i=0; i<20000; i++){
      elements.push(`${label} ${i}`);
    }
    return elements;
  },[label])

  return (
    <ul className="item-list">
      {items.map(item => (
        <li key={item}> {item} </li>
      ))}
    </ul>
  )
}

 
function App() {
  const [label, setLabel] = useState('')

  return (
    <div className="app-container">
      <h1>useDeferredValue Demo</h1>

      <div className="button-container">
        <input onChange={(e)=>{setLabel(e.target.value)}} />
        <SlowList label={label} />
      </div>
    </div>
  )
}

export default App
