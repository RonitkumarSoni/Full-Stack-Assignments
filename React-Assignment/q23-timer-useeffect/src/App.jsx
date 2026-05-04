import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="question-box">
      <h2>Timer using useEffect</h2>
      <p>Timer: {count}</p>
    </div>
  )
}

export default App
