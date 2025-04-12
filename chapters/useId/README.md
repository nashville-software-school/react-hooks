# useId

`useId` is a React hook that lets you generate unique IDs that are stable across the client and server.

## Purpose and Explanation

The main purpose of `useId` is to avoid ID clashes when rendering components on the server and then hydrating them on the client.

## Typical Usage

```javascript
import React, { useId } from 'react';

function MyComponent() {
  const id = useId();

  return (
    <>
      <label htmlFor={id}>My Input</label>
      <input id={id} type="text" />
    </>
  );
}
```

In this example, `useId` is used to generate a unique ID for the input element, which is then used as the `htmlFor` attribute of the label.

## When to Use

*   **Generating Unique IDs:** Use `useId` when you need to generate unique IDs for elements in your component.
*   **Avoiding ID Clashes:** `useId` can help avoid ID clashes when rendering components on the server and then hydrating them on the client.

To sum it up, `useId` is a valuable tool for generating unique IDs that are stable across the client and server, avoiding ID clashes during hydration.
