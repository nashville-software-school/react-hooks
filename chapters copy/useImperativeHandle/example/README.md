# Custom Input Controls with useImperativeHandle Exercise

This exercise demonstrates how to use the `useImperativeHandle` hook to customize the ref handle exposed to parent components. You'll build a form with custom input components that expose a controlled set of methods through refs.

## Objectives

1. Understand when and why to use useImperativeHandle
2. Learn how to customize ref handles
3. Implement controlled imperative methods
4. Maintain component encapsulation

## Starting Point

The starter code provides:
- A form with custom input components
- Basic ref forwarding setup
- UI for form controls
- Placeholder validation logic

## Tasks

1. **Setup Custom Handle**
   - Import useImperativeHandle from React
   - Create internal inputRef for the input element
   - Implement useImperativeHandle with custom methods
   - Replace direct ref forwarding with inputRef

2. **Implement Custom Methods**
   - focus(): Focuses the input element
   - clear(): Clears input value and error state
   - validate(): Validates input based on type
   - Ensure methods use inputRef.current safely

3. **Update Form Logic**
   - Use custom validate() method in form submission
   - Implement clear() for resetting inputs
   - Use focus() for button controls
   - Handle error states appropriately

## Understanding the Pattern

```javascript
// Before: Exposing entire input element
const CustomInput = forwardRef((props, ref) => (
  <input ref={ref} />
))

// After: Exposing only specific methods
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef(null)
  
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    clear: () => { /* ... */ },
    validate: () => { /* ... */ }
  }))

  return <input ref={inputRef} />
})
```

## Key Concepts

1. **Ref Customization**
   - Control what parent can access
   - Hide internal implementation
   - Expose only necessary methods
   - Maintain component encapsulation

2. **Method Implementation**
   - Safe DOM access through refs
   - Error handling and validation
   - State management
   - Clean method interfaces

3. **Parent Component Usage**
   - Accessing custom methods
   - Error handling
   - Ref type safety
   - Method availability checks

## Tips

- Always check if ref.current exists
- Keep exposed methods minimal
- Document exposed methods
- Consider TypeScript for better type safety

## Common Mistakes

- Exposing too much functionality
- Not handling null refs
- Forgetting to use forwardRef
- Inconsistent method behavior

## When to Use useImperativeHandle

Use useImperativeHandle when:
1. Parent needs limited access to child methods
2. Component internals should be hidden
3. Custom validation or control is needed
4. DOM manipulation needs to be controlled

## Why Not Just Forward Refs?

Direct ref forwarding can:
- Expose too much functionality
- Break component encapsulation
- Make refactoring difficult
- Lead to misuse of internal elements

## Best Practices

1. **Method Naming**
   ```javascript
   useImperativeHandle(ref, () => ({
     // Clear names that indicate purpose
     focus: () => { /* ... */ },
     reset: () => { /* ... */ },
     validate: () => { /* ... */ }
   }))
   ```

2. **Safety Checks**
   ```javascript
   validate: () => {
     if (!inputRef.current) return false
     // Validation logic
   }
   ```

3. **Documentation**
   ```javascript
   // Document the exposed methods in comments
   // focus(): Focuses the input element
   // clear(): Resets the input value and errors
   // validate(): Returns true if input is valid
   ```

## Solution

Check the completed version in the `completed` folder to see the working implementation.