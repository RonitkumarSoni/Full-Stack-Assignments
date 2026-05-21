const express = require("express");

const app = express();

const PORT = 5000;

let users= [
    {id:1, name:"Ronit"},
    {id:2, name:"Aman"},
    {id:3, name:"Rahul"},
]

app.delete("/users/:id",(req,res)=>{
    const userId = parseInt(req.params.id);

    const user = users.find((u)=>u.id === userId)

    if(!user){
        return res.status(404).json({
            sucess:false,
            message:"User not found"
        })
    }

    users = users.filter((u)=>u.id !== userId)

    res.status(200).json({
        sucess:true,
        message:"User deleted sucessfully"
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`);
    
})