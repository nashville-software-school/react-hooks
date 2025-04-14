import { useRef, useImperativeHandle, forwardRef, useState } from 'react'

const CustomInput = forwardRef(function CustomInput(props, ref) {
  const inputRef = useRef(null)
  const [error, setError] = useState("")

  // Expose custom methods via useImperativeHandle
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus()
    },
    clear: () => {
      if (inputRef.current) {
        inputRef.current.value = ""
        setError("")
      }
    },
    validate: () => {
      if (inputRef.current) {
        const value = inputRef.current.value
        if (!value) {
          setError("Field is required")
          return false
        }
        if (props.type === "email" && !value.includes("@")) {
          setError("Invalid email format")
          return false
        }
        setError("")
        return true
      }
      return false
    }
  }))

  return (
    <div style={{ marginBottom: '1rem' }}>
      <input
        ref={inputRef}
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

    // Use exposed methods to validate fields
    const isEmailValid = emailRef.current?.validate()
    const isPasswordValid = passwordRef.current?.validate()

    if (isEmailValid && isPasswordValid) {
      setMessage("Form submitted successfully!")
      // Clear fields using exposed method
      emailRef.current?.clear()
      passwordRef.current?.clear()
    }
  }

  const handleClearAll = () => {
    emailRef.current?.clear()
    passwordRef.current?.clear()
    setMessage("")
  }

  const focusEmail = () => {
    emailRef.current?.focus()
  }

  const focusPassword = () => {
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
        <h3>Understanding useImperativeHandle in this example:</h3>
        <ul>
          <li>Customizes the ref handle exposed to parent components</li>
          <li>Provides controlled access to internal methods</li>
          <li>Enables imperative actions like focus and validation</li>
          <li>Maintains component encapsulation</li>
        </ul>
      </div>

      <Form />
    </div>
  )
}

export default App
