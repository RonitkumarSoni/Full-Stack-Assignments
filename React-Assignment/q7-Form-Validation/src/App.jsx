import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))
  }

  const validateForm = () => {
    const nextErrors = {}

    if (!formData.name.trim()) {
      nextErrors.name = 'Name is required.'
    }

    if (!formData.email.includes('@')) {
      nextErrors.email = 'Email must contain @.'
    }

    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const validationErrors = validateForm()
    setErrors(validationErrors)
    setSubmitted(Object.keys(validationErrors).length === 0)
  }

  return (
    <main className="app">
      <div className="form-card">
        <p className="eyebrow">Basic Form Validation</p>
        <h1>Validate Name and Email</h1>
        <p className="description">
          Name is required and email must contain <code>@</code>.
        </p>

        <form className="form" onSubmit={handleSubmit} noValidate>
          <label className="field">
            <span>Name</span>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <small className="error">{errors.name}</small>}
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
            {errors.email && <small className="error">{errors.email}</small>}
          </label>

          <button type="submit">Submit</button>
        </form>

        {submitted && (
          <p className="success">Form submitted successfully.</p>
        )}
      </div>
    </main>
  )
}

export default App
