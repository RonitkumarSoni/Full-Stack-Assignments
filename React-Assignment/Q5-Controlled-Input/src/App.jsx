import React,{useState} from 'react';

function App(){
  const [name, setName] = useState("");

  return(
    <div style={{textAlign:"center", marginTop:"50px"}}>
      <h1>Controlled input</h1>

      <input type="text" placeholder='Enter Your Name' value={name} onChange={(e)=>{
        setName(e.target.value)
      }} />
      <p>You Typed : {name}</p>
    </div>
  )
}

export default App;