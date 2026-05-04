import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    console.log('Component mounted')
  }, [])

  return (
    <div className="question-box">
      <h2>useEffect on Load</h2>
      <p>Check console output.</p>
    </div>
  )
}

export default App
