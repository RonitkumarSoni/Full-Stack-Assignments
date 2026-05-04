import React, {useState}  from "react";

function App(){
  const [formData, setFormData] = useState({
    name:"",
    email:""
  });

  const handleChange = (e) =>{
    const {name,value} = e.target;

    setFormData({
      ...FormData,
      [name]:value
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    console.log(formData);
    
  }
  return(
    <div style={{textAlign:"center", marginTop:"50px"}}>
      <h1>Form with Multiple Inputs</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter your Name" value={formData.name} onChange={handleChange} />

        <br /><br />

        <input type="email" name="email" placeholder="Enter your Email" value={formData.email} onChange={handleChange}/>

        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )

}

export default App;

