import { useState } from 'react'
import './App.css'

function App() {
  const [openId, setOpenId] = useState(null)

  const sections = [
    { id: 1, title: 'Section 1', content: 'Content for section 1' },
    { id: 2, title: 'Section 2', content: 'Content for section 2' },
    { id: 3, title: 'Section 3', content: 'Content for section 3' },
  ]

  const handleToggle = (id) => {
    if (openId === id) {
      setOpenId(null)
    } else {
      setOpenId(id)
    }
  }

  return (
    <div className="question-box">
      <h2>Accordion</h2>
      {sections.map((section) => (
        <div key={section.id} className="accordion-item">
          <button
            className="accordion-title"
            onClick={() => handleToggle(section.id)}
          >
            {section.title}
          </button>
          {openId === section.id && (
            <div className="accordion-content">{section.content}</div>
          )}
        </div>
      ))}
    </div>
  )
}

export default App
