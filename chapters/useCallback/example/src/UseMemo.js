import React, { useState } from 'react';

const ExpensiveComponent = React.memo(({ value }) => {
  console.log('Rendering ExpensiveCalculation component');
  
  const start = performance.now()
while (performance.now() - start < 1000) { }
  const result = Math.random();
  
  return (
    <div className="expensive-component">
      <h3>Expensive Calculation</h3>
      <p>Input: {value}</p>
      <p>Result: {result}</p>
    </div>
  );
});

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(5);
  
  return (
    <div className="parent-component">
      <h2>Parent Component</h2>
      <p>Count: {count}</p>
      
      <div className="controls">
        <button onClick={() => setCount(count + 1)}>
          Increment Count (Won't Re-render Child)
        </button>
        <button onClick={() => setInputValue(inputValue + 1)}>
          Increment Input Value (Will Re-render Child)
        </button>
      </div>
      
      {/* This component only re-renders when inputValue changes */}
      <ExpensiveComponent value={inputValue} />
    </div>
  );
}

export default App
