# useCallback

`useCallback` is a React hook that lets you memoize a function definition.

## Purpose and Explanation

The main purpose of `useCallback` is to optimize performance by preventing unnecessary re-renders of child components. It's useful when passing callbacks to child components that rely on referential equality to avoid re-rendering.

## Typical Usage

```javascript
import React, { useCallback } from 'react';

function MyComponent({ onButtonClick }) {
  // Memoize the onButtonClick function
  const handleClick = useCallback(() => {
    onButtonClick('Button was clicked!');
  }, [onButtonClick]); // Only re-create the function if onButtonClick changes

  return (
    <button onClick={handleClick}>Click me</button>
  );
}
```

In this example, `handleClick` is only re-created if `onButtonClick` prop changes. This ensures that the child component receiving `handleClick` as a prop doesn't re-render unless `onButtonClick` actually changes.

## When to Use

*   **Optimizing Performance:** Use `useCallback` when passing functions as props to child components, especially if those components are memoized (e.g., using `React.memo`).
*   **Referential Equality:** When a child component relies on referential equality of a function prop to avoid re-rendering, `useCallback` ensures that the function reference remains the same across renders unless its dependencies change.

To sum it up, `useCallback` is a valuable tool for optimizing performance by memoizing function definitions, especially when passing callbacks to child components.
