# Todo List Performance Exercise

This exercise demonstrates how to use the `useCallback` hook to optimize performance by preventing unnecessary re-renders of child components. You'll work with a todo list where each item is a memoized component that should only re-render when necessary.

## Objectives

1. Understand when and why to use useCallback
2. Learn how useCallback works with memo
3. Implement performance optimization in a real-world scenario
4. Observe and verify render behavior

## Starting Point

The starter code provides:
- A todo list application with memoized TodoItem components
- A counter to demonstrate state updates
- Console logs to track component renders
- A handleToggle function that needs optimization

## Tasks

1. **Analyze Current Behavior**
   - Run the app and open the console
   - Click the count button and observe TodoItem re-renders
   - Notice that TodoItems re-render unnecessarily when count changes

2. **Implement useCallback**
   - Import useCallback from React
   - Wrap the handleToggle function with useCallback
   - Choose appropriate dependencies for the useCallback hook
   - Verify that the function's logic remains the same

3. **Test the Optimization**
   - Click the count button again
   - Verify TodoItems no longer re-render
   - Verify todo toggling still works correctly
   - Check console logs to confirm reduced renders

## Understanding the Problem

Without useCallback:
```javascript
// This creates a new function every render
const handleToggle = (todoId) => {
  setTodos(currentTodos => /* ... */)
}
```

With useCallback:
```javascript
// This keeps the same function reference
const handleToggle = useCallback((todoId) => {
  setTodos(currentTodos => /* ... */)
}, []) // Empty array because we use functional update
```

## Key Concepts

1. **Function References**
   - In JavaScript, functions are objects
   - Each render creates a new function instance
   - New function references break memo optimization

2. **Memoization**
   - memo prevents re-renders if props haven't changed
   - New function references count as changed props
   - useCallback preserves function references

3. **Dependencies**
   - Empty array = function never changes
   - Including dependencies = function updates when dependencies change
   - Using functional updates can reduce dependencies

## Tips

- Only use useCallback when passing callbacks to memoized child components
- Consider whether the performance benefit outweighs the complexity
- Use the React DevTools Profiler to measure performance impact
- Remember that useCallback itself has a performance cost

## Common Mistakes

- Adding unnecessary dependencies
- Using useCallback for every function
- Forgetting to memoize the receiving component
- Not considering the cost-benefit trade-off

## Solution

Check the completed version in the `completed` folder to see the working implementation.