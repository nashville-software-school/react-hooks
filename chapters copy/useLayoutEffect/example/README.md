# Tooltip Position Exercise with useLayoutEffect

This exercise demonstrates how to use the `useLayoutEffect` hook to handle DOM measurements and updates that need to happen synchronously before the browser repaints. You'll build a tooltip component that positions itself correctly without any visual flickering.

## Objectives

1. Understand the difference between useEffect and useLayoutEffect
2. Learn when to use useLayoutEffect for DOM measurements
3. Implement smooth visual updates without flickering
4. Handle dynamic DOM updates synchronously

## Starting Point

The starter code provides:
- A Tooltip component using useEffect
- Button components with tooltips
- Position calculation logic
- Visual feedback of the flickering issue

## Tasks

1. **Observe Current Behavior**
   - Run the app with useEffect
   - Toggle tooltips on/off
   - Move buttons around
   - Notice the visual flickering
   - Understand why it happens (async vs sync updates)

2. **Implement useLayoutEffect**
   - Import useLayoutEffect from React
   - Replace useEffect with useLayoutEffect
   - Keep the same dependency array
   - Test the improvement in visual behavior

3. **Test Edge Cases**
   - Move buttons near screen edges
   - Resize the window
   - Toggle tooltips rapidly
   - Verify smooth positioning in all cases

## Understanding the Difference

useEffect vs useLayoutEffect timing:

```javascript
// useEffect (asynchronous)
1. React updates DOM
2. Browser paints
3. Effect runs
4. Screen updates again if effect made changes

// useLayoutEffect (synchronous)
1. React updates DOM
2. Effect runs
3. Browser paints once
```

## Key Concepts

1. **Synchronous Updates**
   - useLayoutEffect runs synchronously after DOM mutations
   - Blocks visual updates until it completes
   - Guarantees DOM measurements are accurate
   - Prevents flickering and visual artifacts

2. **Performance Considerations**
   - useLayoutEffect blocks painting
   - Can cause performance issues if effect is slow
   - Use only when DOM measurements are needed
   - Prefer useEffect when possible

3. **Use Cases**
   - Tooltip positioning
   - Dynamic height measurements
   - DOM-dependent animations
   - Layout calculations

## Tips

- Only use useLayoutEffect when useEffect causes visual problems
- Keep the effect code fast and focused
- Use for DOM measurements and mutations only
- Consider performance impact on slower devices

## Common Mistakes

- Using useLayoutEffect when useEffect would work
- Performing unnecessary work synchronously
- Not cleaning up measurements
- Causing layout thrashing

## When to Use useLayoutEffect

Use useLayoutEffect when you need to:
1. Measure DOM nodes
2. Update layout-dependent state
3. Prevent visual flickering
4. Ensure DOM updates happen before paint

## Why Not useEffect?

useEffect can cause issues when:
- DOM measurements are needed immediately
- Visual updates depend on measurements
- Animations require precise timing
- Layout calculations affect initial render

## Solution

Check the completed version in the `completed` folder to see the working implementation.