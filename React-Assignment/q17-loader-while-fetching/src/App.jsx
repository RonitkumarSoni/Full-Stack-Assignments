import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      setData('Data loaded')
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="question-box">
      <h2>Show Loader While Fetching</h2>
      {loading ? <p>Loading...</p> : <p>{data}</p>}
    </div>
  )
}

export default App
