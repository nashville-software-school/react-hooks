# Todo List with useReducer Exercise

This exercise demonstrates how to use the `useReducer` hook to manage complex state logic in a todo list application. You'll convert a todo app from using multiple `useState` hooks to using a single `useReducer` for more predictable state updates.

## Objectives

1. Understand when and why to use useReducer
2. Learn how to structure reducer functions and actions
3. Convert useState logic to useReducer
4. Implement complex state management patterns

## Starting Point

The starter code provides:
- A working todo list using multiple useState hooks
- Complete UI implementation
- Event handlers that need to be converted
- Basic filtering functionality

## Tasks

1. **Set Up Action Types**
   - Define constants for each action type:
     - ADD_TASK
     - TOGGLE_TASK
     - DELETE_TASK
     - SET_FILTER

2. **Implement the Reducer Function**
   - Create a reducer function that handles all actions
   - The reducer should maintain the same functionality as the current useState implementation
   - Handle each action type in a switch statement
   - Return new state without mutating the original

3. **Convert to useReducer**
   - Import useReducer from React
   - Create an initial state object combining all current state
   - Replace useState calls with useReducer
   - Update event handlers to use dispatch

4. **Update Event Handlers**
   - Convert handleAddTask to dispatch ADD_TASK
   - Convert handleToggleTask to dispatch TOGGLE_TASK
   - Convert handleDeleteTask to dispatch DELETE_TASK
   - Convert handleFilterChange to dispatch SET_FILTER

## State Structure

The state should look like this:
```javascript
{
  tasks: [
    { id: 1, text: 'Task name', completed: false }
  ],
  filter: 'all' // or 'active' or 'completed'
}
```

## Action Structures

Actions should follow this pattern:
```javascript
// Adding a task
{ type: 'ADD_TASK', payload: 'New task text' }

// Toggling a task
{ type: 'TOGGLE_TASK', payload: taskId }

// Deleting a task
{ type: 'DELETE_TASK', payload: taskId }

// Setting filter
{ type: 'SET_FILTER', payload: 'all' }
```

## Key Concepts

1. **Reducer Pattern**
   - Pure function that takes state and action
   - Returns new state based on action type
   - Never mutates original state
   - Predictable state updates

2. **Actions**
   - Plain objects describing what happened
   - Must have a type property
   - Can include additional data in payload

3. **Dispatch**
   - Function to send actions to the reducer
   - Triggers state updates
   - Similar to setState but with actions

## Tips

- Keep reducer functions pure
- Use switch statements for clarity
- Return existing state for unknown actions
- Use action creators for complex actions
- Consider using TypeScript for better action typing

## Common Mistakes

- Mutating state directly in reducer
- Forgetting to return new state object
- Missing action types
- Putting too much logic in reducers
- Not handling all action types

## Why useReducer?

useReducer is better than useState when:
- State logic is complex
- State updates depend on other state
- You need predictable state updates
- You want to centralize state logic
- You're handling many related state updates

## Solution

Check the completed version in the `completed` folder to see the working implementation.