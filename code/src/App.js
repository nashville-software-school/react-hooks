import { useState, useCallback, memo } from 'react'
import './App.css'

// Memoized child component that receives a callback
const TodoItem = memo(function TodoItem({ todo, onToggle }) {
  console.log(`TodoItem rendered: ${todo.text}`)
  
  return (
    <li
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  )
})

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn useCallback', completed: false },
    { id: 2, text: 'Build a project', completed: false },
    { id: 3, text: 'Write documentation', completed: false }
  ])
  const [count, setCount] = useState(0)

  // Memoized callback that only changes when todos changes
  const handleToggle = useCallback((todoId) => {
    setTodos(currentTodos =>
      currentTodos.map(todo =>
        todo.id === todoId
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    )
  }, []) // Empty dependency array because we use functional update

  // This button update demonstrates that other state changes 
  // don't cause TodoItem to re-render
  const handleCountClick = () => {
    setCount(c => c + 1)
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      
      {/* This count update won't cause TodoItems to re-render */}
      <div>
        <button onClick={handleCountClick}>
          Count: {count}
        </button>
        <p>
          (Click count to verify TodoItems don't re-render)
        </p>
      </div>

      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggle}
          />
        ))}
      </ul>

      <div className="info-section">
        <p>Open console to see render logs</p>
        <p>Notice that TodoItems don't re-render when count changes</p>
      </div>
    </div>
  )
}

export default App
