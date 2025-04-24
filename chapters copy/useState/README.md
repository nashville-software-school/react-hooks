# useState

`useState` is a React hook that lets you add a state variable to your component. It's the most fundamental hook for managing dynamic data in React function components.

## Purpose and Explanation

The main purpose of `useState` is to allow functional components to have state, which can be updated and cause the component to re-render. Before hooks, only class components could have state. `useState` unlocks the power of state for functional components, making them more versatile and easier to use.

`useState` provides a way to declare a state variable and a function to update that variable. When the state variable is updated, React automatically re-renders the component to reflect the new state.

## How to Use It

The `useState` hook takes one argument:

1.  **initialState:** The initial value of the state variable. This can be any JavaScript value, such as a number, string, object, array, or null.

**Return Value:**

`useState` returns an array containing two elements:

1.  **state:** The current value of the state variable.
2.  **setState:** A function that lets you update the state variable.

**Example:**

```javascript
import React, { useState } from 'react';

function MyComponent() {
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
```

**Explanation of the Example:**

In this example, `useState` is used to create a `count` state variable, which is initialized to `0`. The `setCount` function is used to update the `count` state. The `incrementCount` function uses the functional update form (`prevCount => prevCount + 1`) to avoid issues with stale state.

## When to Use

*   **Adding State to Functional Components:** Use `useState` whenever you need to add state to a functional component.
*   **Simple State Management:** `useState` is suitable for managing simple state values that don't require complex logic.
*   **Local Component State:** Use `useState` to manage state that is local to a single component.
*   **Basic UI Updates:** Use `useState` to trigger basic UI updates, such as showing or hiding elements, changing text, or updating styles.

To sum it up, `useState` is the go-to way for managing state in functional components.