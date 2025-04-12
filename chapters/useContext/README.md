# useContext

`useContext` is a React hook that allows you to access data from a context.

## Purpose and Explanation

The main purpose of `useContext` is to avoid prop drilling by providing a way to share data between components at different levels of the component tree.

## Typical Usage

```javascript
import React, { useContext } from 'react';

// Create a context
const MyContext = React.createContext(null);

function MyComponent() {
  // Access the context value
  const value = useContext(MyContext);

  return (
    <div>
      {value}
    </div>
  );
}

function App() {
  return (
    <MyContext.Provider value="Hello from context!">
      <MyComponent />
    </MyContext.Provider>
  );
}
```

In this example, `MyComponent` can access the value provided by `MyContext.Provider` without needing to receive it as a prop.

## When to Use

*   **Avoiding Prop Drilling:** Use `useContext` when you have data that needs to be accessed by many components within your application.
*   **Global State Management:** `useContext` can be used to manage global state within a React application, especially when combined with `useReducer`.

To sum it up, `useContext` is a valuable tool for accessing context values, avoiding prop drilling, and managing global state in React applications.
