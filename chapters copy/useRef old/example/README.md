# Video Player with useRef Exercise

This exercise demonstrates how to use the `useRef` hook to interact with DOM elements and persist values between renders. You'll build a video player that uses refs to control the video element and manage intervals.

## Objectives

1. Understand when and why to use useRef
2. Learn how to access DOM elements with refs
3. Use refs to store mutable values
4. Handle cleanup of intervals with refs

## Starting Point

The starter code provides:
- Basic video player UI structure
- State management for play/pause and current time
- Placeholder functions for video controls
- A sample video source

## Tasks

1. **Create and Attach Refs**
   - Import useRef from React
   - Create videoRef for the video element
   - Create intervalRef for the time update interval
   - Attach videoRef to the video element using the ref attribute

2. **Implement Video Controls**
   - Use videoRef to play/pause the video
   - Access video duration through videoRef
   - Implement seeking functionality
   - Update time display using video properties

3. **Handle Time Updates**
   - Use intervalRef to store the setInterval ID
   - Update current time using videoRef
   - Properly clean up interval on component unmount
   - Handle play/pause state changes

4. **Add Error Handling**
   - Check if videoRef.current exists before accessing
   - Handle cases where video fails to load
   - Manage edge cases in time formatting
   - Ensure proper cleanup in all scenarios

## Key Concepts

1. **DOM References**
   ```javascript
   const videoRef = useRef(null)
   // Later: videoRef.current.play()
   ```

2. **Interval Management**
   ```javascript
   intervalRef.current = setInterval(() => {
     // Update time
   }, 1000)
   // Cleanup: clearInterval(intervalRef.current)
   ```

3. **Ref Persistence**
   - Refs persist between renders
   - Updating refs doesn't trigger re-renders
   - Refs can store any value
   - Common for DOM elements and timers

## Tips

- Always check if .current exists before using refs
- Use refs for values that shouldn't trigger re-renders
- Clean up intervals in useEffect cleanup function
- Remember that ref updates are synchronous

## Common Mistakes

- Forgetting to use .current
- Not cleaning up intervals
- Using refs when state is more appropriate
- Overusing refs for values that should be in state

## When to Use useRef

Use useRef when you need to:
1. Access DOM elements directly
2. Store mutable values that shouldn't trigger re-renders
3. Keep track of intervals or timeouts
4. Maintain values between renders without causing updates

## Why Not useState?

Some operations are better with useRef because:
- They don't need to trigger re-renders
- They need to be synchronous
- They're purely imperative
- They deal with DOM elements directly

## Solution

Check the completed version in the `completed` folder to see the working implementation.