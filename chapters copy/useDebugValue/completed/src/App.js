import { useState, useEffect, useDebugValue } from 'react'

// Custom hook for managing online status
function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  
  useDebugValue(isOnline ? 'Online 🟢' : 'Offline 🔴')

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

  useDebugValue(key, key => `Storage: ${key} = ${JSON.stringify(value)}`)

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

  useDebugValue(
    { value, isTouched, error },
    state => `Field: ${state.value} ${state.isTouched ? '(touched)' : ''} ${state.error ? `(error: ${state.error})` : ''}`
  )

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
        <h3>Understanding useDebugValue in this example:</h3>
        <ul>
          <li>Open React DevTools to see custom debug values</li>
          <li>Each custom hook shows relevant debug information</li>
          <li>Debug values help understand hook state at a glance</li>
          <li>Format function optimizes performance</li>
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
        <p>👉 Open React DevTools and inspect the hooks to see debug values!</p>
      </div>
    </div>
  )
}

export default App
