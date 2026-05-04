import React ,{useState} from 'react';

function App(){
  const [text, setText] = useState("");

  const handleChange = (e) =>{
    setText(e.target.value);
  }

  return(
    <div style={{textAlign:"center", marginTop:"50px"}}>
      <h1>Character Counter</h1>

    <textarea placeholder='Type Something...' value={text} onChange={handleChange}/>

    <p>Total Characters:{text.length}</p>
    </div>
  )
}

export default App;