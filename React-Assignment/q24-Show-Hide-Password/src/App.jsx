import React, { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Show/Hide Password</h1>

      <input type={show ? "text" : "password"} />
      <br /><br />

      <button onClick={handleToggle}>
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default App;