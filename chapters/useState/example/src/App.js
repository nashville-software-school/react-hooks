import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    // Use the functional update form to avoid issues with stale state
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}