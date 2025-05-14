import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    // Use the functional update form to avoid issues with stale state
    const newCount = count+1;
    setCount(newCount);
  };

  return (
    <div>
      <button onClick={incrementCount}>Increment</button>
      <label>Count:</label>
      <input value={count}/>
    </div>
  );
}