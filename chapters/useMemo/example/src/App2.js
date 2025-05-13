import { useState, useMemo } from 'react';

export default function App({ seed }) {
  const [count, setCount] = useState(0);

  const doCalculation = () => {
    console.log('Calculating result...');

    //generate an array
    const array = [];
    for (let i=0; i<100000; i++){
      array.push(i);
    }
    //reverse it a couple times
    array.sort((a, b) => a - b);
    array.sort((a, b) => a - b);
    
    //linear search to find the seed value
    let output =0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === seed) {
        output = i;
      }
    }
    return output
  }

  const expensiveValue = doCalculation();

  return (
    <div>
      <p>Count: {count}</p>
      <p>Value: {expensiveValue}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment Count</button>
    </div>
  );
}