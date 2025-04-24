import { useRef, useState, forwardRef } from 'react'
// TODO: Import useImperativeHandle from 'react'

const CustomInput = forwardRef(function CustomInput(props, ref) {
  const inputRef = useRef(null)
  const [error, setError] = useState("")

  // TODO: Implement useImperativeHandle to expose:
  // 1. focus() - focuses the input
  // 2. clear() - clears input value and error
  // 3. validate() - validates input and returns boolean

  // Currently, the ref just forwards to the input element
  // This exposes ALL input methods, which isn't ideal
  return (
    <div style={{ marginBottom: '1rem' }}>
      <input
        ref={ref} // TODO: Change this to use inputRef
        type={props.type || "text"}
        placeholder={props.placeholder}
        style={{
          padding: '0.5rem',
          borderColor: error ? 'red' : '#ccc',
          borderStyle: 'solid',
          borderWidth: '1px',
          borderRadius: '4px',
          width: '100%',
          boxSizing: 'border-box'
        }}
      />
      {error && (
        <div style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
          {error}
        </div>
      )}
    </div>
  )
})

function Form() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage("")

    // TODO: Use exposed validate() method
    // Currently can't validate because method isn't exposed
    const isValid = true

    if (isValid) {
      setMessage("Form submitted successfully!")
      // TODO: Use exposed clear() method
      // Currently can't clear because method isn't exposed
    }
  }

  const handleClearAll = () => {
    // TODO: Use exposed clear() method
    // Currently can't clear because method isn't exposed
    setMessage("")
  }

  const focusEmail = () => {
    // TODO: Use exposed focus() method
    // Currently using default focus which might not be ideal
    emailRef.current?.focus()
  }

  const focusPassword = () => {
    // TODO: Use exposed focus() method
    // Currently using default focus which might not be ideal
    passwordRef.current?.focus()
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>
          Email:
        </label>
        <CustomInput
          ref={emailRef}
          type="email"
          placeholder="Enter email"
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>
          Password:
        </label>
        <CustomInput
          ref={passwordRef}
          type="password"
          placeholder="Enter password"
        />
      </div>

      <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
        <button type="submit" style={{
          backgroundColor: '#007bff',
          color: 'white',
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Submit
        </button>
        <button
          type="button"
          onClick={handleClearAll}
          style={{
            backgroundColor: '#6c757d',
            color: 'white',
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Clear All
        </button>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <button
          type="button"
          onClick={focusEmail}
          style={{
            marginRight: '0.5rem',
            padding: '0.5rem 1rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Focus Email
        </button>
        <button
          type="button"
          onClick={focusPassword}
          style={{
            padding: '0.5rem 1rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Focus Password
        </button>
      </div>

      {message && (
        <div style={{
          padding: '0.5rem',
          backgroundColor: '#d4edda',
          color: '#155724',
          borderRadius: '4px'
        }}>
          {message}
        </div>
      )}
    </form>
  )
}

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>useImperativeHandle Demo</h1>
      
      <div style={{ marginBottom: '2rem' }}>
        <h3>Tasks to complete:</h3>
        <ul>
          <li>Import useImperativeHandle</li>
          <li>Implement custom ref methods (focus, clear, validate)</li>
          <li>Use inputRef instead of forwarding ref directly</li>
          <li>Update form to use new custom methods</li>
        </ul>
      </div>

      <Form />
    </div>
  )
}

export default App
