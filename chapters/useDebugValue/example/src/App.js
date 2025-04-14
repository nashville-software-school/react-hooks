import { useState, useEffect } from 'react'
// TODO: Import useDebugValue from 'react'

// Custom hook for managing online status
function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  
  // TODO: Add useDebugValue to show online/offline status
  // Hint: Use emoji for better visibility in DevTools

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return isOnline
}

// Custom hook for managing local storage
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  })

  // TODO: Add useDebugValue to show key and value
  // Hint: Use format function for lazy evaluation

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(error)
    }
  }, [key, value])

  return [value, setValue]
}

// Custom hook for managing form field
function useFormField(initialValue = '') {
  const [value, setValue] = useState(initialValue)
  const [isTouched, setIsTouched] = useState(false)
  const [error, setError] = useState('')

  // TODO: Add useDebugValue to show field state
  // Hint: Show value, touched state, and error in one debug value

  const handleChange = (e) => {
    setValue(e.target.value)
    validate(e.target.value)
  }

  const handleBlur = () => {
    setIsTouched(true)
    validate(value)
  }

  const validate = (val) => {
    if (!val) {
      setError('Field is required')
    } else if (val.length < 3) {
      setError('Must be at least 3 characters')
    } else {
      setError('')
    }
  }

  return {
    value,
    isTouched,
    error,
    onChange: handleChange,
    onBlur: handleBlur
  }
}

function App() {
  const isOnline = useOnlineStatus()
  const [theme, setTheme] = useLocalStorage('theme', 'light')
  const nameField = useFormField()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const styles = {
    container: {
      padding: '20px',
      backgroundColor: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#333' : '#fff',
      minHeight: '100vh'
    },
    status: {
      display: 'inline-block',
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      backgroundColor: isOnline ? '#d4edda' : '#f8d7da',
      color: isOnline ? '#155724' : '#721c24',
      marginBottom: '1rem'
    },
    input: {
      padding: '0.5rem',
      borderColor: nameField.error ? 'red' : '#ccc',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderRadius: '4px',
      backgroundColor: theme === 'light' ? '#fff' : '#444',
      color: theme === 'light' ? '#333' : '#fff'
    },
    error: {
      color: 'red',
      fontSize: '0.875rem',
      marginTop: '0.25rem'
    }
  }

  return (
    <div style={styles.container}>
      <h1>useDebugValue Demo</h1>
      
      <div style={{ marginBottom: '2rem' }}>
        <h3>Tasks to complete:</h3>
        <ul>
          <li>Import useDebugValue from React</li>
          <li>Add debug values to useOnlineStatus hook</li>
          <li>Add debug values to useLocalStorage hook</li>
          <li>Add debug values to useFormField hook</li>
          <li>Open React DevTools to verify debug values</li>
        </ul>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <div style={styles.status}>
          Status: {isOnline ? 'Online' : 'Offline'}
        </div>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <button
          onClick={toggleTheme}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: theme === 'light' ? '#007bff' : '#17a2b8',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Toggle Theme
        </button>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>
          Name:
        </label>
        <input
          type="text"
          value={nameField.value}
          onChange={nameField.onChange}
          onBlur={nameField.onBlur}
          style={styles.input}
        />
        {nameField.error && (
          <div style={styles.error}>{nameField.error}</div>
        )}
      </div>

      <div style={{ marginTop: '2rem' }}>
        <p>👉 Debug values will appear in React DevTools after implementation!</p>
      </div>
    </div>
  )
}

export default App
