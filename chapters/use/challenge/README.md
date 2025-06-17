# Data Fetching with the use Hook Exercise

This exercise demonstrates how to use the `use` hook to handle data fetching and context in React. You'll build a simple application that fetches and displays data from an API using the `use` hook.

## Objectives

1. Use the `use` hook to consume Context
2. Use the `use` hook to handle Promises
3. Implement conditional resource usage
4. Work with React Suspense for loading states

## Starting Point

The starter code provides:
- Basic component structure (App, UserProfile, PostList)
- Styling that responds to theme changes
- Placeholder functions for data fetching
- Component layout and structure

## Tasks

1. **Complete the Context Setup**
   - Import the necessary hooks and functions
   - Complete the ThemeContext setup
   - Implement the theme toggle functionality

2. **Implement the Data Fetching Functions**
   - Complete the `fetchUserData` function to return a Promise
   - Complete the `fetchUserPosts` function to return a Promise

3. **Use the `use` Hook with Context**
   - In the UserProfile component, use the `use` hook to access the theme context
   - Apply the theme class to the component based on the current theme

4. **Use the `use` Hook with Promises**
   - In the UserProfile component, use the `use` hook to access the user data
   - In the PostList component, use the `use` hook to access the posts data
   - Display the fetched data in the components

5. **Implement Conditional Resource Usage**
   - In the PostList component, conditionally fetch and display posts based on whether the user is logged in
   - Use the `use` hook inside a conditional statement

## Component Structure

```
App
├── ThemeProvider (provides theme context)
    ├── Header (displays title and theme toggle)
    ├── UserProfile (uses theme context and user data promise)
    └── PostList (conditionally uses posts promise)
```

## Tips

- Remember that the `use` hook can be called conditionally, unlike other React hooks
- The `use` hook works with React Suspense for handling loading states
- When using `use` with Promises, your component might suspend while waiting for the Promise to resolve
- The `use` hook is part of React's newer features and requires React 18.3 or higher

## Common Pitfalls to Avoid

- Don't forget to wrap Promise-consuming components with Suspense
- Remember that the `use` hook can cause your component to suspend
- Be careful with error handling when working with Promises
- Don't confuse `use` with `useContext` - they have similar functionality for context but different capabilities

## Understanding the Flow

1. **Context Creation and Usage**
   ```javascript
   const ThemeContext = createContext('light');
   
   function Component() {
     const theme = use(ThemeContext);
     // Use theme value
   }
   ```

2. **Promise Usage**
   ```javascript
   function Component({ dataPromise }) {
     const data = use(dataPromise);
     // Use resolved data
   }
   ```

3. **Conditional Usage**
   ```javascript
   function Component({ condition, dataPromise }) {
     // This is valid with use (but not with useContext or other hooks)
     if (condition) {
       const data = use(dataPromise);
       return <div>{data.value}</div>;
     }
     return <div>Condition not met</div>;
   }
   ```

## Why use?

Without the `use` hook, you would need to:
1. Use `useContext` for context, which cannot be called conditionally
2. Use `useEffect` and state for handling Promises, which adds complexity
3. Create separate components for conditional logic

With the `use` hook:
1. Access context values directly and conditionally
2. Handle Promises more directly in your component
3. Write more straightforward, less boilerplate code
4. Implement conditional resource usage within a single component

## Solution

Check the completed version in the `completed` folder to see the working implementation.