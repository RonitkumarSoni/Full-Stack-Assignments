import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data)
        setLoading(false)
      })
  }, [])

  return (
    <div className="question-box">
      <h2>Fetch and Display Data</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="simple-list">
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
