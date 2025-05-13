# useRef Example Exercise

This exercise demonstrates three common use cases for the `useRef` hook in React:
1. Storing previous values
2. Accessing DOM elements
3. Persisting values between renders

## Exercise Requirements

1. Track Previous Value
   - Create a ref to store the previous value of the name input
   - Use useEffect to update this ref whenever name changes
   - Display the previous value below the current value

2. DOM Element Access
   - Create a ref for the input element
   - Add a "Focus Input" button that uses the ref to focus the input
   - Attach the ref to the input element using the ref attribute

3. Measure Element Dimensions
   - Create a ref to store the input's dimensions (width and height)
   - Use useEffect to measure the dimensions when the component mounts
   - Display the dimensions below the input

## Implementation Steps
   - Create the necessary refs:
   - Add useEffect hooks for Updating previous name value and measuring input dimensions
   - Create a function to focus the input:
   - Add the ref to the input element
   - Add the focus button
   - Display previous value and dimensions

There are //TODO comments in the starter code, each with a number that corresponds to the task(s) it relates to.

## Tips

- Remember to access ref values through the `.current` property
- The ref for DOM elements will be null until the element mounts
- useEffect with an empty dependency array (`[]`) runs only on mount
- useEffect with `[name]` runs whenever name changes

## Testing Your Implementation

Your implementation should:
1. Show both current and previous values updating correctly
2. Successfully focus the input when the button is clicked
3. Display accurate input dimensions
4. Maintain all values correctly between re-renders
