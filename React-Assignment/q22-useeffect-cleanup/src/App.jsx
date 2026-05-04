import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    const handleResize = () => {
      console.log('Window resized')
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      console.log('Cleanup done')
    }
  }, [])

  return (
    <div className="question-box">
      <h2>useEffect Cleanup</h2>
      <p>Resize the window and check the console.</p>
    </div>
  )
}

export default App
