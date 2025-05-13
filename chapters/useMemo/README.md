# useMemo

`useMemo` is a React hook that lets you memoize a calculation. This means it will only re-calculate the value when one of the dependencies has changed.

## Purpose and Explanation

The main purpose of `useMemo` is to optimize performance by preventing unnecessary recalculations of expensive values. It's useful when you have a function that performs a complex calculation and you only want to re-run that calculation when the inputs to the function change.

`useMemo` works by storing the result of the calculation and the dependencies that were used to calculate it. When the component re-renders, `useMemo` checks if any of the dependencies have changed. If they have, it re-runs the calculation and updates the stored result. If none of the dependencies have changed, it returns the stored result without re-running the calculation.

## How to Use It

The `useMemo` hook takes two arguments:

1.  **create:** A function that performs the expensive calculation.
2.  **dependencies:** An array of dependencies. `useMemo` will only re-run the calculation if one of the dependencies has changed since the last render.

**Return Value:**

`useMemo` returns the memoized value.

**Explanation of the Example:**

In this example, the `useMemo` hook is used to memoize the result of an absurdly expensive operation that creates a large array, reverses it, then performs a linear search.

By using `useMemo`, this expensive calculation only runs when the `seed` value changes, not on any other render (eg. when `count` changes). This significantly improves performance for those re-renders.

If you change `index.js` to import from `App2.js` instead, you can see how the function runs unnecessarily each time you increment the count.

## Key Concepts

- useMemo stores the result of expensive calculations. It runs its function only when dependencies have changed. Otherwise, it returns the cached result.

- useMemo has some trade-offs. It introduces more complexity and has its own computational overhead and memory usage, so only use for expensive calculations. Use React DevTools profiler to measure and compare performance.

- Its dependency array works similarly to useEffect. An empty array will cause it to run only once, and omitting the array can introduce bugs and instability. 
