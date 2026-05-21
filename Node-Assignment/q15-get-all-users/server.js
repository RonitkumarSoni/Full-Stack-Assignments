const express = require("express")

const app = express();

const PORT = 5000;

const users = [
    {id:1, name:"ROnit"},
    {id:2, name:"Aman"},
    {id:3, name:"Rahul"},
]

app.get("/users",(req,res)=>{
    res.status(200).json({
        sucess:true,
        data:users
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`);
    
})