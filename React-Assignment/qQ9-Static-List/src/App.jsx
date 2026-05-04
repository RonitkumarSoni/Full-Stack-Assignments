import React from "react";

function App() {
  const items = ["Apple", "Banana", "Mango"];

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Render List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
