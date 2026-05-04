import React from 'react';

function CustomButton({label, onClick}){
  return (
    <button onClick={onClick} style={{margin:"10px"}}>
      {label}
    </button>
  )
}

const handleClick1 = () =>{
  alert("Button 1 Clicked");
}

const handleClick2 = () =>{
  alert("Button 2 Clicked");
}

function App(){


return(
  <div style={{textAlign:"center",marginTop:"50px"}}>
    <h1>Reusable Button</h1>

    <CustomButton label="Button 1" onClick={handleClick1} />
    <CustomButton label="Button 2" onClick={handleClick2} />
  </div>

)
}
export default App;