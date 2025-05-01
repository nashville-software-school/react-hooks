# React.memo

`React.memo` is a higher-order component (HOC) that memoizes the rendered output of a component to prevent unnecessary re-renders. It works by performing a shallow comparison of the component's props. If the props haven't changed, React will reuse the previously rendered result instead of re-rendering the component.

### How React.memo Works

1. When a component is wrapped with `React.memo`, React renders the component and memoizes the result.
2. The next time the component renders, React performs a shallow comparison between the previous props and the new props.
3. If the props haven't changed (based on shallow equality), React skips rendering the component and reuses the last rendered result.
4. If the props have changed, React re-renders the component and stores the new result.

### When to Use React.memo

- **Pure Functional Components**: Use `React.memo` for components that are pure (their output is solely determined by their props).
- **Expensive Rendering**: Components that involve complex calculations or render large DOM trees.
- **Frequent Re-renders**: Components that might re-render frequently due to parent updates.
- **Leaf Components**: Components at the bottom of your component tree that receive props but don't have children that change.


### Working Example

See `example/useMemo.js` for a practical example. If you change `index.js` to import this file instead of `App.js`, then you can see it in action. And you can remove the `React.memo` call wrapping `ExpensiveComponent` to see how it would work without memoizing the component.

Here's how it works:

1. `ExpensiveCalculation` performs a simulated expensive calculation, so we've wrapped it with `React.memo` to prevent unnecessary re-renders.

2. The parent component has two state variables:
   - `count`: When this changes, it doesn't affect the props passed to `ExpensiveCalculation`
   - `inputValue`: When this changes, it updates the `value` prop of `ExpensiveCalculation`

3. When you click "Increment Count":
   - The `ParentComponent` re-renders
   - `ExpensiveCalculation` does NOT re-render because its props haven't changed
   - You won't see "Performing expensive calculation..." in the console

4. When you click "Increment Input Value":
   - The `ParentComponent` re-renders
   - `ExpensiveCalculation` DOES re-render because its `value` prop has changed
   - You will see "Performing expensive calculation..." in the console

This demonstrates how `React.memo` prevents re-renders when props haven't changed, improving performance for expensive components.

### Limitations

- `React.memo` only performs a shallow comparison of props. If your props are complex objects, you might need a custom comparison function.
- It doesn't prevent renders caused by internal state changes or context updates.
- Overusing `React.memo` can lead to increased memory usage and potentially more complex code.

### Custom Comparison Function

`React.memo` accepts an optional second argument - a custom comparison function that receives the old and new props. This allows you to implement more complex comparison logic.

Here's a simple example of using a custom comparison function with `React.memo`:

```jsx
import React, { useState } from 'react';

// Component with custom comparison function
const UserProfile = React.memo(
  ({ user }) => {
    console.log('Rendering UserProfile component');
    
    return (
      <div className="user-profile">
        <h3>User Profile</h3>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
      </div>
    );
  },
  (prevProps, nextProps) => {
    // Only re-render if name or age has changed
    return (
      prevProps.user.name === nextProps.user.name &&
      prevProps.user.age === nextProps.user.age
    );
  }
);

function App() {
  const [user, setUser] = useState({
    name: 'John',
    age: 30,
    lastLogin: new Date().toISOString()
  });
  
  // Update only the lastLogin field (won't cause re-render)
  const updateLastLogin = () => {
    setUser({
      ...user,
      lastLogin: new Date().toISOString()
    });
  };
  
  // Update the age field (will cause re-render)
  const incrementAge = () => {
    setUser({
      ...user,
      age: user.age + 1
    });
  };
  
  return (
    <div>
      <button onClick={updateLastLogin}>
        Update Last Login (Won't Re-render)
      </button>
      <button onClick={incrementAge}>
        Increment Age (Will Re-render)
      </button>
      <UserProfile user={user} />
      <p>Last login: {user.lastLogin}</p>
    </div>
  );
}
```

In this example, the custom comparison function only checks the `name` and `age` properties, ignoring changes to `lastLogin`. This allows the component to only rerender when properties we care about change.