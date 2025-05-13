
# useCallback

`useCallback` is a React hook that lets you memoize a function definition. This means it will return a memoized version of the callback function that only changes if one of the dependencies has changed. It's especially useful when using [React.memo](./react-memo.md).

## Purpose and Explanation

The main purpose of `useCallback` is to optimize performance by preventing unnecessary re-renders of child components. It's particularly useful when passing callbacks as props to child components that are optimized with `React.memo` or `shouldComponentUpdate`, and rely on referential equality to avoid re-rendering. Without `useCallback`, a new function instance would be created on every render, causing these optimizations to fail.

`useCallback` helps ensure that the function reference remains the same across renders unless its dependencies change. This is crucial for preventing unnecessary updates in child components, leading to improved performance, especially in complex applications with frequent re-renders.

## How to Use It

The `useCallback` hook takes two arguments:

1.  **callback:** The function you want to memoize. This function contains the logic you want to execute.
2.  **dependencies:** An array of dependencies. `useCallback` will only return a new memoized function if one of the dependencies has changed since the last render.

**Return Value:**

`useCallback` returns a memoized version of the callback function. This function is guaranteed to have the same reference unless one of the dependencies has changed.

**Explanation of the Example:**

In this example:

1. We have a `Button` component wrapped with `React.memo` to prevent unnecessary re-renders.
2. The `Counter` component has two state variables: `count` and `otherState`.
3. The `increment` function is memoized with `useCallback` with an empty dependency array, meaning it will only be created once.
4. The `updateOtherState` function is not memoized and will be recreated on every render.

When the `Counter` component re-renders (e.g., when `otherState` changes):
- The `Increment` button won't re-render because its `onClick` prop (the memoized `increment` function) hasn't changed.
- The `Update Other` button will re-render because its `onClick` prop (the non-memoized `updateOtherState` function) is recreated with each render.

This demonstrates how `useCallback` combined with `React.memo` can prevent unnecessary re-renders of child components.

## When to Use

*   **Optimizing Performance:** Use `useCallback` when passing functions as props to child components, especially if those components are memoized (e.g., using `React.memo`) or use `shouldComponentUpdate`.
*   **Referential Equality:** When a child component relies on referential equality of a function prop to avoid re-rendering, `useCallback` ensures that the function reference remains the same across renders unless its dependencies change.
*   **Complex Calculations:** If the callback function performs complex calculations, memoizing it with `useCallback` can prevent these calculations from being re-executed unnecessarily.
*   **Avoiding Unnecessary Effects:** If a function is used within a `useEffect` hook's dependency array, using `useCallback` can prevent the effect from running unnecessarily if the function reference hasn't changed.

To sum it up, `useCallback` is a valuable tool for optimizing performance by memoizing function definitions, especially when passing callbacks to child components. When used in conjunction with `React.memo`, it helps ensure that the function reference remains the same across renders unless its dependencies change, preventing unnecessary re-renders and improving overall application performance.
