import { useState, useDeferredValue, useMemo } from 'react'
import './App.css'


// Simulated slow component to show the benefit of useDeferredValue
function SlowList({ label }) {

  const deferredLabel = useDeferredValue(label);

  const items = useMemo( () => {
    const elements = [];
    for (let i=0; i<20000; i++){
      elements.push(`${deferredLabel} ${i}`);
    }
    return elements;
  },[deferredLabel])

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
