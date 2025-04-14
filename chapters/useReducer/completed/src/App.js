import { useReducer } from 'react'

// Action types
const ADD_TASK = 'ADD_TASK'
const TOGGLE_TASK = 'TOGGLE_TASK'
const DELETE_TASK = 'DELETE_TASK'
const SET_FILTER = 'SET_FILTER'

// Reducer function
function todoReducer(state, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: Date.now(),
            text: action.payload,
            completed: false
          }
        ]
      }
    
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        )
      }
    
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      }
    
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload
      }
    
    default:
      return state
  }
}

function App() {
  // Initial state
  const initialState = {
    tasks: [
      { id: 1, text: 'Learn useReducer', completed: false },
      { id: 2, text: 'Build a todo app', completed: true },
      { id: 3, text: 'Master React', completed: false }
    ],
    filter: 'all'
  }

  // Initialize useReducer
  const [state, dispatch] = useReducer(todoReducer, initialState)

  // Event handlers
  const handleAddTask = (e) => {
    e.preventDefault()
    const text = e.target.task.value.trim()
    if (text) {
      dispatch({ type: ADD_TASK, payload: text })
      e.target.task.value = ''
    }
  }

  const handleToggleTask = (taskId) => {
    dispatch({ type: TOGGLE_TASK, payload: taskId })
  }

  const handleDeleteTask = (taskId) => {
    dispatch({ type: DELETE_TASK, payload: taskId })
  }

  const handleFilterChange = (filter) => {
    dispatch({ type: SET_FILTER, payload: filter })
  }

  // Filter tasks
  const filteredTasks = state.tasks.filter(task => {
    if (state.filter === 'active') return !task.completed
    if (state.filter === 'completed') return task.completed
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
            backgroundColor: state.filter === 'all' ? '#007bff' : '#fff',
            color: state.filter === 'all' ? '#fff' : '#000'
          }}
        >
          All
        </button>
        <button
          onClick={() => handleFilterChange('active')}
          style={{
            padding: '8px 16px',
            marginRight: '8px',
            backgroundColor: state.filter === 'active' ? '#007bff' : '#fff',
            color: state.filter === 'active' ? '#fff' : '#000'
          }}
        >
          Active
        </button>
        <button
          onClick={() => handleFilterChange('completed')}
          style={{
            padding: '8px 16px',
            backgroundColor: state.filter === 'completed' ? '#007bff' : '#fff',
            color: state.filter === 'completed' ? '#fff' : '#000'
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
        <p>Total tasks: {state.tasks.length}</p>
        <p>Completed: {state.tasks.filter(task => task.completed).length}</p>
        <p>Active: {state.tasks.filter(task => !task.completed).length}</p>
      </div>
    </div>
  )
}

export default App
