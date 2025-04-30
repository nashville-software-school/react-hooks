# useContext

`useContext` is a React hook that allows you to share data between components without using prop drilling. Prop drilling is when you have to pass props through components into their child components, even if some of those components don't need the data themselves. `useContext` solves this problem by holding some state and giving components a way to access it directly. It's particularly useful for themes, user authentication, and other global data that needs to be accessible in many components.

## How to Use It

The `useContext` hook takes one argument:

1.  **context:** The context object you want to access. This object is created using `React.createContext()`.

**Return Value:**

`useContext` returns the current context value for the given context. The context value is determined by the `value` prop of the nearest `<MyContext.Provider>` above the calling component in the tree.

**Example:**

```javascript
import React, { createContext, useContext } from 'react';

// Create a context with a default value
const ThemeContext = createContext({
  theme: 'light'
});

// Theme provider component that wraps the provider and manages the theme state
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Provide both theme state and toggle function to all children through context
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Component that consumes the theme context
function MyComponent() {
  // Access the context value
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`theme-container ${theme}`}>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <MyComponent />
    </ThemeProvider>
  );
}
```

**Explanation of the Example:**

In this example, we first create `ThemeContext` using `React.createContext()` with a default value. Then we create a dedicated `ThemeProvider` component that manages the theme state and provides both the state and toggle function through context. This pattern encapsulates all theme-related logic within the provider component. `MyComponent` uses `useContext(ThemeContext)` to access the theme values, and the `App` component simply wraps its content with `ThemeProvider`. When the "Toggle Theme" button is clicked, the `toggleTheme` function from the context updates the theme state, causing all consuming components to re-render with the new theme, based on the CSS rules set for the corresponding class in a CSS file.

Note that while this simple example puts all the code together, we usually put context in a separate file and reference it directly from components throughout the app.

## When to Use

*   **Avoiding Prop Drilling:** Use `useContext` when you have data that needs to be accessed by many components within your application, avoiding the need to pass props down through multiple layers of components.
*   **Global State Management:** `useContext` can be used to manage global state within a React application, especially when combined with `useReducer` for more complex state logic.
*   **Theming:** `useContext` is ideal for providing themes to your application, allowing you to easily switch between different themes without modifying individual components.
*   **Authentication:** `useContext` can be used to store and share authentication information, such as the current user's login status and user data.
