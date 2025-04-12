# useState

`useState` is a React hook that lets you add a state variable to your component.

## Purpose and Explanation

The main purpose of `useState` is to allow functional components to have state, which can be updated and cause the component to re-render.

## Typical Usage

```javascript
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}
```

In this example, `useState` is used to create a `count` state variable, which is initialized to `0`. The `setCount` function is used to update the `count` state, which causes the component to re-render.

## When to Use

*   **Adding State to Functional Components:** Use `useState` when you need to add state to a functional component.
*   **Simple State Management:** `useState` is suitable for managing simple state values that don't require complex logic.

Overall, `useState` is a valuable tool for adding state to functional components, allowing them to be dynamic and interactive.
