import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))
    setSubmitted(false)
  }

  const isNameValid = formData.name.trim() !== ''
  const isEmailValid = formData.email.includes('@')
  const isFormValid = isNameValid && isEmailValid

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!isFormValid) {
      return
    }

    setSubmitted(true)
  }

  return (
    <main className="app">
      <div className="form-card">
        <p className="eyebrow">Disable Submit Until Valid</p>
        <h1>Submit only when valid</h1>
        <p className="description">
          The submit button is enabled only when the name is filled and the
          email contains <code>@</code>.
        </p>

        <form className="form" onSubmit={handleSubmit}>
          <label className="field">
            <span>Name</span>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
            {!isNameValid && formData.name !== '' && (
              <small className="error">Name cannot be empty.</small>
            )}
          </label>

          <label className="field">
            <span>Email</span>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            {!isEmailValid && formData.email !== '' && (
              <small className="error">Email must contain @.</small>
            )}
          </label>

          <button type="submit" disabled={!isFormValid}>
            Submit
          </button>
        </form>

        <p className={`status ${isFormValid ? 'valid' : 'invalid'}`}>
          {isFormValid
            ? 'All fields are valid. You can submit now.'
            : 'Fill all valid details to enable the submit button.'}
        </p>

        {submitted && (
          <p className="success">Form submitted successfully.</p>
        )}
      </div>
    </main>
  )
}

export default App
