import { useState } from 'react'
import Child from './Child'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="question-box">
      <h2>React.memo Basic Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <Child />
    </div>
  )
}

export default App
