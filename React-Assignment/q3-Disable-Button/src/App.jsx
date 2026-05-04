import React, {useState} from 'react';

function App(){
  const [disabled, setDisabled] = useState(false);

  const handleClick = () =>{
    setDisabled(true);
  }
  return(
    <div style={{textAlign:"center", marginTop:"50px"}}>
      <h1>Disable Button</h1>

      <button onClick={handleClick} disabled={disabled}>Click Me</button>
    </div>
  )
}

export default App;