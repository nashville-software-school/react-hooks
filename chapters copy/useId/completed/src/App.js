import { useState, useId } from 'react'

function CustomInput({ label, type = "text" }) {
  // Generate unique IDs for label-input pairs
  const id = useId()
  const errorId = useId()
  
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
        htmlFor={id}
        style={{ display: 'block', marginBottom: '0.5rem' }}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={handleChange}
        aria-describedby={error ? errorId : undefined}
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
          id={errorId}
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
  const formId = useId()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 2000)
  }

  return (
    <form 
      id={formId}
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
        <h3>Understanding useId in this example:</h3>
        <ul>
          <li>Generates unique IDs for accessibility attributes</li>
          <li>Maintains consistency across server and client rendering</li>
          <li>Properly connects labels with inputs</li>
          <li>Associates error messages with inputs using aria-describedby</li>
        </ul>
      </div>

      <Form />
      
      <div style={{ marginTop: '2rem' }}>
        <p>Try using a screen reader to see how the labels and error messages are properly associated with their inputs.</p>
      </div>
    </div>
  )
}

export default App
