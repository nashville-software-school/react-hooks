# useReducer

`useReducer` is a React hook that lets you manage state with a reducer function.

## Purpose and Explanation

The main purpose of `useReducer` is to manage complex state logic, especially when the next state depends on the previous state.

## Typical Usage

```javascript
import React, { useReducer } from 'react';

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function MyComponent() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}
```

In this example, `useReducer` is used to manage the `count` state. The `reducer` function updates the state based on the dispatched actions.

## When to Use

*   **Complex State Logic:** Use `useReducer` when you have complex state logic that involves multiple sub-values or when the next state depends on the previous state.
*   **Predictable State Updates:** `useReducer` can help make state updates more predictable by centralizing the state logic in a reducer function.

To sum it up, `useReducer` is a valuable tool for managing complex state logic with a reducer function, especially when the next state depends on the previous state.
