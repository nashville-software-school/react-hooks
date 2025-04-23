# Number Multiplier Exercise

This exercise demonstrates how to use the `useMemo` hook to optimize performance by memoizing expensive calculations. You'll work with a number multiplier application that performs intentionally slow calculations to simulate complex computations.

## Objectives

1. Understand when and why to use useMemo
2. Learn how to memoize expensive calculations
3. Optimize performance by preventing unnecessary recalculations
4. Identify which values should be dependencies

## Starting Point

The starter code provides:
- A number multiplier application with artificial processing delays
- Theme toggling to demonstrate unnecessary recalculations
- Console logs to track when calculations occur
- Expensive calculations that need optimization

## Tasks

1. **Analyze Current Performance**
   - Run the app and open the console
   - Toggle the theme and observe unnecessary recalculations
   - Notice the artificial delay when calculations run
   - Understand which calculations are expensive

2. **Implement useMemo for Multiplied Numbers**
   - Import useMemo from React
   - Wrap the multipliedNumbers calculation with useMemo
   - Add appropriate dependencies (numbers and multiplier)
   - Test that theme changes no longer trigger recalculation

3. **Implement useMemo for Sum**
   - Wrap the sum calculation with useMemo
   - Use multipliedNumbers as the dependency
   - Verify that the sum only recalculates when multipliedNumbers changes

4. **Test the Optimization**
   - Toggle the theme (should be instant, no calculations)
   - Change the multiplier (should trigger both calculations)
   - Add/remove numbers (should trigger both calculations)
   - Verify console logs match expected behavior

## Understanding the Problem

Without useMemo:
```javascript
// This runs on every render
const multipliedNumbers = numbers.map(num => {
  // Expensive calculation
  return num * multiplier
})
```

With useMemo:
```javascript
// This only runs when dependencies change
const multipliedNumbers = useMemo(() => {
  return numbers.map(num => num * multiplier)
}, [numbers, multiplier])
```


## Solution

Check the completed version in the `completed` folder to see the working implementation.