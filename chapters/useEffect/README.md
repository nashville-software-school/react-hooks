# useEffect

`useEffect` is a React hook that lets you perform side effects in function components. It's typically used to handle data fetching, subscriptions, timers, or manually changing the DOM. 

## How to Use It

The `useEffect` hook takes two arguments:

1.  **effect:** A function that contains the side effect logic. Optionally, this function can return a cleanup function, which will be executed when the component unmounts or before the effect is re-run.
2.  **dependencies (optional):** An array of dependencies. React will run the effect after the component initially mounts. And it will re-run the effect if one of the dependencies has changed since the last render. So an empty dependency array will cause the effect to be run only once. If you don't provide a dependency array, the effect will run on every render. This is rarely useful, so only do this if you know what you're doing.

`useEffect` doesn't return any value.

**Example:**

```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Fetch data from an API
    fetch('/api/data')
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
      {data ? data.name : 'Loading...'}
      <p>Count: {count}</p>
    </div>
  );
}
```

**Explanation of the Example:**

In this example, `useEffect` is used to fetch data from an API and set up a timer when the component mounts. The empty dependency array `[]` ensures that the effect only runs once. The effect function also returns a cleanup function. React will call this function when the component unmounts. In most cases, this isn't necessary. But here, we need it to stop the timer that is running.