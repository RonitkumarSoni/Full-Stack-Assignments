import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleAdd = () => {
    if (input.trim() === "") return;

    setItems([...items, input]);
    setInput("");
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Dynamic List</h1>

      <input type="text" placeholder='Enter item' value={input} onChange={handleChange}/>

      <button onClick={handleAdd}>Add</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;