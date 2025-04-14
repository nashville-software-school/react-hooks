import { useState } from 'react'
// TODO: Import useReducer from 'react'

// TODO: Define action types as constants
// Example: const ADD_TASK = 'ADD_TASK'

// TODO: Implement the reducer function
// It should handle:
// 1. Adding a task
// 2. Toggling a task's completion
// 3. Deleting a task
// 4. Setting the filter

function App() {
  // Currently using useState for everything
  // TODO: Replace these with useReducer
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn useReducer', completed: false },
    { id: 2, text: 'Build a todo app', completed: true },
    { id: 3, text: 'Master React', completed: false }
  ])
  const [filter, setFilter] = useState('all')

  // TODO: Replace these individual handlers with dispatch calls
  const handleAddTask = (e) => {
    e.preventDefault()
    const text = e.target.task.value.trim()
    if (text) {
      setTasks(prevTasks => [
        ...prevTasks,
        {
          id: Date.now(),
          text,
          completed: false
        }
      ])
      e.target.task.value = ''
    }
  }

  const handleToggleTask = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  const handleDeleteTask = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.filter(task => task.id !== taskId)
    )
  }

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter)
  }

  // Filter tasks
  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h1>Todo List with useReducer</h1>

      {/* Add task form */}
      <form onSubmit={handleAddTask} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          name="task"
          placeholder="Add new task"
          style={{ padding: '8px', marginRight: '8px', width: '60%' }}
        />
        <button type="submit" style={{ padding: '8px 16px' }}>
          Add Task
        </button>
      </form>

      {/* Filter buttons */}
      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={() => handleFilterChange('all')}
          style={{
            padding: '8px 16px',
            marginRight: '8px',
            backgroundColor: filter === 'all' ? '#007bff' : '#fff',
            color: filter === 'all' ? '#fff' : '#000'
          }}
        >
          All
        </button>
        <button
          onClick={() => handleFilterChange('active')}
          style={{
            padding: '8px 16px',
            marginRight: '8px',
            backgroundColor: filter === 'active' ? '#007bff' : '#fff',
            color: filter === 'active' ? '#fff' : '#000'
          }}
        >
          Active
        </button>
        <button
          onClick={() => handleFilterChange('completed')}
          style={{
            padding: '8px 16px',
            backgroundColor: filter === 'completed' ? '#007bff' : '#fff',
            color: filter === 'completed' ? '#fff' : '#000'
          }}
        >
          Completed
        </button>
      </div>

      {/* Task list */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredTasks.map(task => (
          <li
            key={task.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '8px',
              marginBottom: '8px',
              backgroundColor: '#f0f0f0',
              borderRadius: '4px'
            }}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
              style={{ marginRight: '8px' }}
            />
            <span style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              flex: 1
            }}>
              {task.text}
            </span>
            <button
              onClick={() => handleDeleteTask(task.id)}
              style={{
                padding: '4px 8px',
                backgroundColor: '#dc3545',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Task count */}
      <div style={{ marginTop: '20px' }}>
        <p>Total tasks: {tasks.length}</p>
        <p>Completed: {tasks.filter(task => task.completed).length}</p>
        <p>Active: {tasks.filter(task => !task.completed).length}</p>
      </div>
    </div>
  )
}

export default App
