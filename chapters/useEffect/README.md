# useEffect

`useEffect` is a React hook that lets you perform side effects in function components.

## Purpose and Explanation

The main purpose of `useEffect` is to handle side effects such as data fetching, subscriptions, or manually changing the DOM. It is called with two arguments. The first argument is an anonymous function that defines what side effects should happen. The second argument is an array that determines when that function runs.

*   If the dependency array is empty (`[]`), the effect function runs only once, after the initial render of the component.
*   If the dependency array contains one or more values, the effect function runs after the initial render and whenever any of the values in the dependency array change.
*   If a dependency array is not provided, the effect function runs after every render of the component. This is risky and very seldom what you want. Don't do this unless you really know what you're doing.

## Typical Usage

```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from an API
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <div>
      {data ? data.name : 'Loading...'}
    </div>
  );
}
```

In this example, `useEffect` is used to fetch data from an API when the component mounts. The empty dependency array `[]` ensures that the effect only runs once.

## When to Use

*   **Data Fetching:** Use `useEffect` to fetch data from APIs or other data sources.
*   **Subscriptions:** `useEffect` can be used to set up subscriptions to external events or data streams.
*   **Manual DOM Manipulation:** Use `useEffect` to manually change the DOM, such as setting focus on an element.

To sum it up, `useEffect` is a valuable tool for performing side effects in function components, such as data fetching, subscriptions, and manual DOM manipulation. The dependency array controls when the effect function runs, allowing you to optimize performance and avoid unnecessary re-renders.
