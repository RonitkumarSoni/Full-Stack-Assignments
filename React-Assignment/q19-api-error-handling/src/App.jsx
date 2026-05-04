import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/invalid-url')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }

        return response.json()
      })
      .then((data) => {
        setUsers(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <div className="question-box">
      <h2>API Error Handling</h2>
      {loading && <p>Loading...</p>}
      {!loading && error && <p>Error: {error}</p>}
      {!loading && !error && <p>Data fetched: {users.length}</p>}
    </div>
  )
}

export default App
