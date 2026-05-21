const express = require("express");

const app = express();

const PORT = 5000;

const users = [
    {id:1, name:"Ronit"},
    {id:2, name:"Aman"},
    {id:3, name:"Rahul"},
]

app.get("/users/:id",(req,res)=>{
    const userId = parseInt(req.params.id);

    const user = users.find((u)=> u.id === userId)

    if(!user){
        return res.status(404).json({
            sucess:false,
            message:"User not found"
        })

        
    }
    res.status(200).json({
            sucess:true,
            data:user
        });
    
});


app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`);
    
})