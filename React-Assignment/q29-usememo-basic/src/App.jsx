import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState(0)
  const [text, setText] = useState('')

  const result = useMemo(() => {
    let total = 0

    for (let i = 0; i < 10000000; i += 1) {
      total += number
    }

    return total
  }, [number])

  return (
    <div className="question-box">
      <h2>useMemo Basic Example</h2>
      <button onClick={() => setNumber(number + 1)}>Increase Number</button>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Type here"
      />
      <p>Number: {number}</p>
      <p>Text: {text}</p>
      <p>Result: {result}</p>
    </div>
  )
}

export default App
