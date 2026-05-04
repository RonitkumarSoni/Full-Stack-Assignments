import { useState } from 'react'
import './App.css'

const initialItems = [
  { id: 1, name: 'Buy groceries' },
  { id: 2, name: 'Finish React assignment' },
  { id: 3, name: 'Practice JavaScript array methods' },
  { id: 4, name: 'Review component state' },
]

function App() {
  const [items, setItems] = useState(initialItems)

  const handleDelete = (itemId) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== itemId),
    )
  }

  return (
    <main className="app">
      <section className="list-card">
        <p className="eyebrow">Delete Item from List</p>
        <h1>Task List</h1>
        <p className="description">
          Each item has a delete button. Click the button to remove the item
          from the list.
        </p>

        {items.length > 0 ? (
          <ul className="item-list">
            {items.map((item) => (
              <li key={item.id} className="item-row">
                <span>{item.name}</span>
                <button
                  type="button"
                  className="delete-button"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="empty-state">No items left in the list.</p>
        )}
      </section>
    </main>
  )
}

export default App
