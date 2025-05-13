# Hooks

React Hooks revolutionize how we write components by enabling function components to manage state and side effects. Instead of using class components with complex lifecycle methods, hooks provide simple, reusable functions that "hook into" React features. For example, useState manages component state, useEffect handles side effects like API calls and DOM updates, and useContext accesses React's context system for sharing data.

What makes hooks powerful is their composability - they can be combined and reused across components, leading to cleaner, more maintainable code. You can even create custom hooks to encapsulate your own stateful logic and share it between components. This modular approach helps separate concerns and reduces code duplication, making your React applications more scalable and easier to test.

In these lessons, we'll cover the most essential hooks, followed by a number of common and useful hooks that are well worth understanding and being able to use for optimization and other specific circumstances.

Note: Each of these includes a simple example to demonstrate how the hook works, as well as a challenge to practice using the hook, and a completed version of that challenge. Each of these is located in an appropriately named folder. To see the app running, copy the *src* folder into the *code* folder at the root of this repository, then run that app. All of these should work in that context, and are even hot-swappable, so you don't have to even restart that app when you change.

## Chapters

- [useState](./chapters/useState/README.md)
- [useEffect](./chapters/useEffect/README.md)
- [useContext](./chapters/useContext/README.md)
- [useReducer](./chapters/useReducer/README.md)
- [useMemo](./chapters/useMemo/README.md)
- [useCallback](./chapters/useCallback/README.md)
- [useTransition](./chapters/useTransition/README.md)
- [useDeferredValue](./chapters/useDeferredValue/README.md)
- [useRef](./chapters/useRef/README.md) 