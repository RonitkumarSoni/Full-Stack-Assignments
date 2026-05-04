import { useState } from 'react'
import Child from './Child'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  const handleMessage = (data) => {
    setMessage(data)
  }

  return (
    <div className="question-box">
      <h2>Child to Parent Communication</h2>
      <Child sendDataToParent={handleMessage} />
      <p>Message: {message}</p>
    </div>
  )
}

export default App
