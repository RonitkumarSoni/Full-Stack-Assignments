const express = require("express");

const app = express();

const PORT = 5000;

app.get("/user",(req,res)=>{
    res.status(200).json({
        sucess:true,
        message:"User fetched sucessfully",
        data:{
            id:1,
            name:"Ronit",
            age:21
        }
    })
})
app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`);
    
})




