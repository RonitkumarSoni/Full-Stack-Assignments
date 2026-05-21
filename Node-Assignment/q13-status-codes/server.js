const express = require("express");

const app = express();

app.use(express.json());

const PORT = 5000;

app.post("/user",(req,res)=>{
    const {name} = req.body || {};

    if(!name){
        return res.status(400).json({
            sucess:false,
            message:"name is required"
        })
    }
    res.status(200).json({
        sucess:true,
        message:"User created sucessfully"
    })
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    
})
