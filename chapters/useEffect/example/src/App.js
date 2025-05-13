import { useState, useEffect } from 'react';

export default function App() {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Fetch data from an API
    fetch('https://fake-json-api.mock.beeceptor.com/users')
      .then(response => response.json())
      .then(data => setData(data));

    // Set up a timer
    const timer = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    // Clean up the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <div>
      {data ? data.length+" users" : 'Loading...'}
      <p>Count: {count}</p>
    </div>
  );
}