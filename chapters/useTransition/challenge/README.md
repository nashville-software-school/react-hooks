# Tab Switching with useTransition Exercise

This exercise demonstrates how to use the `useTransition` hook to improve UI responsiveness during expensive state updates. You'll build a tabbed interface that handles slow content rendering without blocking user interactions.

## Objectives

1. Understand when and why to use useTransition
2. Learn how to mark updates as non-urgent
3. Implement loading indicators for transitions
4. Improve perceived performance

## Starting Point

The starter code provides:
- A tabbed interface with three content types
- Artificially slow content rendering
- Basic tab switching functionality
- UI that feels sluggish during updates

## Tasks

1. **Setup Transition Hook**
   - Import useTransition from React
   - Initialize the hook in your component
   - Get isPending and startTransition
   - Plan where to use transitions

2. **Implement Non-urgent Updates**
   - Wrap tab state updates in startTransition
   - Keep UI responsive during content switches
   - Handle transition states properly
   - Maintain smooth user experience

3. **Add Loading Indicators**
   - Show loading state during transitions
   - Update button appearance when pending
   - Provide visual feedback to users
   - Maintain UI consistency

## Understanding the Pattern

```javascript
// Before: Blocking updates
const handleTabChange = (newTab) => {
  setTab(newTab) // Blocks UI during slow render
}

// After: Non-blocking updates
const [isPending, startTransition] = useTransition()
const handleTabChange = (newTab) => {
  startTransition(() => {
    setTab(newTab) // UI stays responsive
  })
}
```

## Key Concepts

1. **Transition States**
   - Non-urgent updates
   - Background processing
   - UI responsiveness
   - Loading indicators

2. **Use Cases**
   - Tab switching
   - Search results
   - Filter updates
   - Large list rendering

3. **User Experience**
   - Immediate feedback
   - Smooth transitions
   - Clear loading states
   - Responsive interface

## Tips

- Use transitions for non-urgent updates
- Always provide visual feedback
- Consider user expectations
- Test with different delays

## Common Mistakes

- Using transitions for urgent updates
- Missing loading indicators
- Inconsistent feedback
- Over-using transitions

## When to Use useTransition

Use useTransition when:
1. Updates can be deferred
2. UI should stay responsive
3. Content rendering is slow
4. Background processing is acceptable

## Why Not Use Loading State?

useTransition is better because:
- Managed by React
- Keeps UI responsive
- Provides pending state
- Handles concurrent updates

## Best Practices

1. **Clear Feedback**
   ```javascript
   {isPending && <div>Loading...</div>}
   ```

2. **Visual Updates**
   ```javascript
   <button style={{
     opacity: isPending ? 0.7 : 1
   }}>
   ```

3. **Transition Wrapping**
   ```javascript
   startTransition(() => {
     // Group related updates
     setTab(newTab)
     setContent(newContent)
   })
   ```

## Solution

Check the completed version in the `completed` folder to see the working implementation.