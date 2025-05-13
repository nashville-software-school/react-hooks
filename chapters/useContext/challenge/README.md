# Theme Context Exercise

This exercise demonstrates how to use the `useContext` hook to share state across multiple components without prop drilling. You'll build a theme switcher that affects multiple components in different parts of the component tree.

## Objectives

1. Create and provide a Context
2. Use Context in multiple components
3. Share state and functions through Context
4. Understand Context consumption patterns

## Starting Point

The starter code provides:
- Basic component structure (App, ThemeToggle, Content, Sidebar)
- Styling that responds to theme changes
- Placeholder theme state and toggle function
- Component layout and structure

## Tasks

1. **Create the Theme Context**
   - Import createContext from React
   - Create a new context called ThemeContext
   - The context will hold theme state and toggle function

2. **Create the Theme Provider**
   - Create a ThemeProvider component
   - Use useState to manage theme state ('light' or 'dark')
   - Create a toggleTheme function
   - Provide both through context value
   - Wrap the provider around children prop

3. **Implement Context Consumers**
   - Import useContext in each component
   - Access theme in Content and Sidebar components
   - Access theme and toggleTheme in ThemeToggle component
   - Remove hardcoded theme values

4. **Wire Everything Together**
   - Wrap App content with ThemeProvider
   - Test theme switching functionality
   - Verify all components update together
   - Check styling changes

## Component Structure

```
App
├── ThemeProvider (provides theme context)
    ├── ThemeToggle (consumes theme and toggleTheme)
    ├── Sidebar (consumes theme)
    └── Content (consumes theme)
```

## Tips

- Remember that Context is designed for values that are considered "global" for a tree of components
- The Provider component should be placed high enough in the tree to cover all components that need the context
- useContext always looks for the closest Provider above it in the tree
- Components using useContext will re-render whenever the context value changes

## Common Pitfalls to Avoid

- Don't create the context inside a component
- Don't forget to wrap components with the Provider
- Remember that all components that use the context will re-render when the context value changes
- Avoid nesting multiple providers of the same context

## Understanding the Flow

1. **Context Creation**
   ```javascript
   const ThemeContext = createContext()
   ```

2. **Provider Setup**
   ```javascript
   function ThemeProvider({ children }) {
     const [theme, setTheme] = useState('light')
     const value = { theme, toggleTheme }
     return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
   }
   ```

3. **Context Consumption**
   ```javascript
   function ThemeToggle() {
     const { theme, toggleTheme } = useContext(ThemeContext)
     // Use theme and toggleTheme
   }
   ```

## Why Context?

Without Context, you would need to:
1. Keep theme state in App component
2. Pass theme and toggleTheme as props to ThemeToggle
3. Pass theme as a prop to Content
4. Pass theme as a prop to Sidebar
5. Update all components manually when adding new theme consumers

With Context:
1. Create context once
2. Provide it at the top level
3. Consume it directly in any component
4. Add new consumers without changing existing code

## Solution

Check the completed version in the `completed` folder to see the working implementation.