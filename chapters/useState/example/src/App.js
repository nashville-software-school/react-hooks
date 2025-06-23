import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    
    // Don't ever set the state value directly!
    // count = count+1; <-- NO!

    // Often, we can just pass the new value to the setter function
    // setCount(count+1);

    // use the functional update form to avoid issues with stale state
    // - when the new value is based on the current one
    // - When updating multiple state values, 
    // - with async operations
    // - other more complex situations, 
    setCount(prevCount => prevCount + 1);

  };

  return (
    <div>
      <button onClick={incrementCount}>Increment</button>
      <label>Count:</label>
      <input value={count}/>
    </div>
  );
}