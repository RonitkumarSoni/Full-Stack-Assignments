import React from 'react';

function Child(props){
  return <h2>Hello {props.name}</h2>
}

function App(){
  const name = "Ronit";

  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>
      <h1>Parent to Child</h1>

      <Child name={name}/>
    </div>
  )
}

export default App;