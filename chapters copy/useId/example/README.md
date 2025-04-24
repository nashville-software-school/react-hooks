# Form Accessibility with useId Exercise

This exercise demonstrates how to use the `useId` hook to generate unique, stable IDs for accessibility attributes. You'll build a form with proper label associations and ARIA attributes using useId instead of random or hardcoded IDs.

## Objectives

1. Understand why stable IDs are important for accessibility
2. Learn how to use useId for generating unique identifiers
3. Implement proper label and input associations
4. Connect error messages using aria-describedby

## Starting Point

The starter code provides:
- A form with multiple input components
- Random ID generation (problematic approach)
- Basic form validation
- Error message display

## Tasks

1. **Replace Random IDs**
   - Import useId from React
   - Replace Math.random() calls with useId()
   - Ensure IDs are stable across renders
   - Verify form functionality remains the same

2. **Implement Label Associations**
   - Use generated IDs to connect labels with inputs
   - Test with a screen reader
   - Verify clicking labels focuses inputs
   - Ensure associations persist across renders

3. **Connect Error Messages**
   - Use separate IDs for error messages
   - Implement aria-describedby connections
   - Test error state announcements
   - Verify accessibility in different states

## Understanding ID Requirements

```javascript
// Problem: Random IDs
const id = `input-${Math.random()}`  // Changes every render!

// Solution: Stable IDs with useId
const id = useId()  // Same ID across renders
```

## Key Concepts

1. **Stable IDs**
   - Important for server-side rendering
   - Prevents hydration mismatches
   - Maintains accessibility connections
   - Works across component instances

2. **Accessibility Connections**
   - label[for] -> input[id]
   - input[aria-describedby] -> error[id]
   - Stable across renders
   - Screen reader friendly

3. **Multiple IDs per Component**
   - Generate base ID with useId
   - Append suffixes for related elements
   - Keep connections stable
   - Avoid ID collisions

## Tips

- Use useId once per component
- Add suffixes for multiple elements
- Test with screen readers
- Verify hydration works correctly

## Common Mistakes

- Using random or increment-based IDs
- Sharing IDs across instances
- Missing label associations
- Incorrect aria-describedby usage

## When to Use useId

Use useId when you need:
1. Stable IDs for accessibility
2. Server-side rendering compatibility
3. Multiple instances of a component
4. Connected element relationships

## Why Not Manual IDs?

Manual IDs can cause issues:
- Potential duplicates
- Hydration errors
- Maintenance overhead
- Scaling problems

## Best Practices

1. **ID Generation**
   ```javascript
   const id = useId()
   const inputId = `${id}-input`
   const errorId = `${id}-error`
   ```

2. **Label Association**
   ```javascript
   <label htmlFor={inputId}>
   <input id={inputId} />
   ```

3. **Error Connection**
   ```javascript
   <input aria-describedby={errorId} />
   <div id={errorId} role="alert" />
   ```

## Solution

Check the completed version in the `completed` folder to see the working implementation.