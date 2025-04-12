# useMemo

`useMemo` is a React hook that lets you memoize a calculation.

## Purpose and Explanation

The main purpose of `useMemo` is to optimize performance by preventing unnecessary recalculations of expensive values.

## Typical Usage

```javascript
import React, { useMemo } from 'react';

function MyComponent({ a, b }) {
  // Memoize the result of the expensive calculation
  const result = useMemo(() => {
    // Do something expensive with a and b
    return a + b;
  }, [a, b]); // Only re-calculate if a or b changes

  return (
    <div>
      Result: {result}
    </div>
  );
}
```

In this example, the expensive calculation is only re-calculated if `a` or `b` prop changes. This ensures that the component doesn't re-calculate the result unless it's necessary.

## When to Use

*   **Expensive Calculations:** Use `useMemo` when you have a calculation that is expensive and doesn't need to be re-calculated on every render.
*   **Referential Equality:** When passing values to child components that rely on referential equality to avoid re-rendering, `useMemo` ensures that the value reference remains the same across renders unless its dependencies change.

To sum it up, `useMemo` is a valuable tool for optimizing performance by memoizing expensive calculations, especially when passing values to child components.
