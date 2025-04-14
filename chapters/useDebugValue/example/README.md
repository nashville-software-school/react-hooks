# Custom Hook Debugging with useDebugValue Exercise

This exercise demonstrates how to use the `useDebugValue` hook to add custom debugging information to your custom hooks in React DevTools. You'll enhance several custom hooks with meaningful debug labels that make development and debugging easier.

## Objectives

1. Understand when and why to use useDebugValue
2. Learn how to add custom labels to hooks
3. Implement performance optimizations with format functions
4. Improve development experience with meaningful debug info

## Starting Point

The starter code provides:
- Three custom hooks with different purposes
- Basic functionality without debug values
- UI components using the hooks
- Placeholder comments for debug values

## Tasks

1. **Add Basic Debug Value**
   - Import useDebugValue from React
   - Add simple debug value to useOnlineStatus
   - Use emoji for better visibility
   - Test in React DevTools

2. **Implement Formatted Debug Value**
   - Add debug value to useLocalStorage
   - Use format function for lazy evaluation
   - Include both key and value in debug info
   - Verify performance optimization

3. **Create Complex Debug Value**
   - Add debug value to useFormField
   - Combine multiple states into one debug message
   - Show validation state clearly
   - Make debugging form state easier

## Understanding Debug Values

```javascript
// Basic usage
useDebugValue(isOnline ? 'Online 🟢' : 'Offline 🔴')

// With format function
useDebugValue(value, value => `Storage: ${key} = ${JSON.stringify(value)}`)

// Complex state
useDebugValue(
  { value, touched, error },
  state => `Field: ${state.value} (${state.touched ? 'touched' : 'untouched'})`
)
```

## Key Concepts

1. **Debug Value Basics**
   - Only shown in React DevTools
   - Doesn't affect production code
   - Helps during development
   - Makes hook state visible

2. **Format Functions**
   - Lazy evaluation
   - Only called when inspecting
   - Prevents unnecessary work
   - Better performance

3. **Use Cases**
   - Custom hook state
   - Complex calculations
   - Important flags
   - State combinations

## Tips

- Keep debug values concise
- Use emojis for visual distinction
- Include relevant state only
- Consider performance impact

## Common Mistakes

- Too much information
- Missing format functions
- Unnecessary calculations
- Unclear labels

## When to Use useDebugValue

Use useDebugValue when:
1. Custom hooks have complex state
2. Debugging would benefit from custom labels
3. Hook state needs quick inspection
4. Multiple instances need differentiation

## Why Use Format Functions?

Format functions are important when:
- Debug value needs computation
- Formatting is expensive
- Multiple hooks are used
- Performance matters

## Best Practices

1. **Clear Labels**
   ```javascript
   // Good
   useDebugValue(isOnline ? 'Online 🟢' : 'Offline 🔴')
   
   // Bad
   useDebugValue(isOnline ? '1' : '0')
   ```

2. **Lazy Formatting**
   ```javascript
   // Good
   useDebugValue(value, v => expensiveFormat(v))
   
   // Bad
   useDebugValue(expensiveFormat(value))
   ```

3. **Relevant Information**
   ```javascript
   // Good
   useDebugValue(state => `${state.value} (${state.error || 'valid'})`)
   
   // Bad
   useDebugValue(state => JSON.stringify(state))
   ```

## Solution

Check the completed version in the `completed` folder to see the working implementation.