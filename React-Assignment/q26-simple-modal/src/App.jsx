import { useState } from 'react'
import './App.css'

function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="question-box">
      <h2>Simple Modal</h2>
      <button onClick={() => setShowModal(true)}>Open Modal</button>

      {showModal && (
        <div className="modal-backdrop">
          <div className="modal-box">
            <p>This is a simple modal.</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
