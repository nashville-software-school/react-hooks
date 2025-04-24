import { useState } from 'react'
// TODO: Import useId from 'react'

function CustomInput({ label, type = "text" }) {
  // TODO: Generate unique IDs using useId
  // We need two IDs:
  // 1. For connecting label and input
  // 2. For connecting input with error message
  const id = `input-${Math.random()}` // Not stable across renders!
  const errorId = `error-${Math.random()}` // Not stable across renders!
  
  const [value, setValue] = useState("")
  const [error, setError] = useState("")

  const handleChange = (e) => {
    const newValue = e.target.value
    setValue(newValue)
    
    // Simple validation for demo purposes
    if (type === "email" && !newValue.includes("@")) {
      setError("Please enter a valid email")
    } else if (newValue.length < 3) {
      setError("Must be at least 3 characters")
    } else {
      setError("")
    }
  }

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label 
        htmlFor={id} // TODO: Use generated ID
        style={{ display: 'block', marginBottom: '0.5rem' }}
      >
        {label}
      </label>
      <input
        id={id} // TODO: Use generated ID
        type={type}
        value={value}
        onChange={handleChange}
        aria-describedby={error ? errorId : undefined} // TODO: Use generated error ID
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
        <div
          id={errorId} // TODO: Use generated error ID
          role="alert"
          style={{
            color: 'red',
            fontSize: '0.875rem',
            marginTop: '0.25rem'
          }}
        >
          {error}
        </div>
      )}
    </div>
  )
}

function Form() {
  // TODO: Generate unique ID for form
  const formId = `form-${Math.random()}` // Not stable across renders!
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 2000)
  }

  return (
    <form 
      id={formId} // TODO: Use generated ID
      onSubmit={handleSubmit}
      style={{ maxWidth: '400px', margin: '0 auto', padding: '1rem' }}
    >
      <h2>Registration Form</h2>
      <CustomInput label="Username" />
      <CustomInput label="Email" type="email" />
      <CustomInput label="Password" type="password" />
      
      <button 
        type="submit"
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Submit
      </button>

      {submitted && (
        <div
          role="alert"
          style={{
            marginTop: '1rem',
            padding: '0.5rem',
            backgroundColor: '#d4edda',
            color: '#155724',
            borderRadius: '4px'
          }}
        >
          Form submitted successfully!
        </div>
      )}
    </form>
  )
}

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>useId Demo</h1>
      
      <div style={{ marginBottom: '2rem' }}>
        <h3>Tasks to complete:</h3>
        <ul>
          <li>Import useId from React</li>
          <li>Replace random IDs with useId-generated IDs</li>
          <li>Connect labels with inputs using the generated IDs</li>
          <li>Connect error messages with inputs using aria-describedby</li>
        </ul>
      </div>

      <Form />
      
      <div style={{ marginTop: '2rem' }}>
        <p>Current implementation uses random IDs which change on every render!</p>
        <p>This breaks accessibility and causes hydration errors.</p>
        <p>Use useId to generate stable, unique IDs.</p>
      </div>
    </div>
  )
}

export default App
