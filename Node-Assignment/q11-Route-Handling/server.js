const express = require("express")

const app = express();
const PORT = 5000;

app.get("/user/:id",(req,res)=>{
    const userId = req.params.id;

    res.json({
        message:"User ID received successfully",
        id:userId
    })
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    
})