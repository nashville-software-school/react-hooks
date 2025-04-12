# useRef

`useRef` is a React hook that allows us to persist data without causing rerenders. It holds that data in its `.current` property.

## Purpose and Explanation

The primary use cases for `useRef` are:

*   **Persisting values between renders:** Unlike regular variables declared within a component, `useRef`'s value persists across renders. This is useful for storing things like timers, previous prop values, or other data that shouldn't trigger a re-render when it changes.
*   **Accessing DOM elements:** `useRef` can be used to hold a reference to a DOM element, allowing you to directly interact with it.

## Typical Usage

### Persisting Data

```javascript
import React, { useRef } from 'react';

function MyComponent() {
  const intervalId = useRef(0);

  const startInterval = () => {
    intervalId.current = setInterval(() => {
      // Do something
    }, 1000);
  };

  const stopInterval = () => {
    clearInterval(intervalId.current);
  };

  return (
    <div>
      <button onClick={startInterval}>Start</button>
      <button onClick={stopInterval}>Stop</button>
    </div>
  );
}
```

In this example, we store `intervalId` with useRef because we won't need to re-render if that value changes.

### Manipulating DOM Elements

```javascript
import React, { useRef, useEffect } from 'react';

function MyComponent() {
  const inputElement = useRef(null);

  const focusOnField = () => {
    inputElement.current.focus();
  }

  return (
    <input type="text" ref={inputElement} />
    <button onClick={focusOnField}>Focus</button>
  );
}
```

Here, `inputElement` is used to get direct access to the `<input>` DOM element, which we use to put the focus when the user clicks the button.

## Caution: Avoid Overuse

`useRef` is very powerful, and it is often overused.

*   **State Management:** Don't use `useRef` for managing component state that needs to trigger re-renders. Use `useState` for that purpose. `useRef` is specifically for persisting values *without* causing re-renders.
*   **Direct DOM Manipulation:** Excessive direct DOM manipulation can make your components harder to understand and maintain.  Use it sparingly and only when necessary (e.g., focusing an element, integrating with third-party libraries).

To sum it up, `useRef` is a valuable tool for persisting data and accessing DOM elements, but you should try to use useState and React-based DOM manipulation unless that won't work or you're deliberately optimizing re-renders.