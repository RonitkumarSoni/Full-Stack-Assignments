import { useState } from 'react'
import './App.css'

function App() {
  const [items] = useState([])

  return (
    <div className="question-box">
      <h2>Empty State Handling</h2>
      {items.length > 0 ? (
        <ul className="simple-list">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No Data Found</p>
      )}
    </div>
  )
}

export default App
