import { useState } from 'react'
import './App.css'

function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'Learn React', completed: false },
    { id: 2, name: 'Practice state', completed: false },
    { id: 3, name: 'Build small project', completed: false },
  ])

  const handleToggle = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item,
    )

    setItems(updatedItems)
  }

  return (
    <div className="question-box">
      <h2>Mark Item as Completed</h2>
      {items.map((item) => (
        <div key={item.id} className="row-item">
          <span
            style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
          >
            {item.name}
          </span>
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => handleToggle(item.id)}
          />
        </div>
      ))}
    </div>
  )
}

export default App
