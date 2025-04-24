# Hooks

React Hooks revolutionize how we write components by enabling function components to manage state and side effects. Instead of using class components with complex lifecycle methods, hooks provide simple, reusable functions that "hook into" React features. For example, useState manages component state, useEffect handles side effects like API calls and DOM updates, and useContext accesses React's context system for sharing data.

What makes hooks powerful is their composability - they can be combined and reused across components, leading to cleaner, more maintainable code. You can even create custom hooks to encapsulate your own stateful logic and share it between components. This modular approach helps separate concerns and reduces code duplication, making your React applications more scalable and easier to test.

In these lessons, we'll cover the most essential hooks, followed by a number of common and useful hooks that are well worth understanding and being able to use, then some more specialized hooks that are worth knowing about. Finally, we'll cover a few experimental hooks that are not fully supported but will likely be stable and important in the near future.

## Essentials

- [useState](./chapters/useState/README.md)
- [useEffect](./chapters/useEffect/README.md) <--TODO
- [useContext](./chapters/useContext/README.md) <--TODO

## Useful

- [useRef](./chapters/useRef/README.md) <--TODO
- [useMemo](./chapters/useMemo/README.md) <--TODO
- [useCallback](./chapters/useCallback/README.md) <--TODO
- [useReducer](./chapters/useReducer/README.md) <--TODO
- [useTransition](./chapters/useTransition/README.md) <--TODO
- [useDeferredValue](./chapters/useDeferredValue/README.md) <--TODO

## Uncommon

- [useLayoutEffect](./chapters/useLayoutEffect/README.md) <--TODO
- [useDebugValue](./chapters/useDebugValue/README.md) <--TODO
- [useImperativeHandle](./chapters/useImperativeHandle/README.md) <--TODO
- [useId](./chapters/useId/README.md) <--TODO

## Experimental

- [use](./chapters/use/README.md) <--TODO



NOTES: 
useState - Done
useEffect - Done
useContext - Done
useRef - Done

useMemo
    readme - note that this calculation isn't actually expensive. 
    example/completed - move styles to CSS
    discuss referential issue (not running a useEffect if an object is updated to identical value)
