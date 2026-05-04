import React, {useState} from 'react';

function App(){
  const [show, setShow] = useState(false);

  const handleToggle = () =>{
    setShow(!show);
  }

  return(
    <div style={{textAlign:"center", marginTop:"px"}}>
      <h1>Toggle Example</h1>
      <button onClick={handleToggle}>Toggle Text</button>

      {show && <p>This is a paragraph </p>}
    </div>
  )
}

export default App;