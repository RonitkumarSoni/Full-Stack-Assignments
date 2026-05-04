const express = require("express")

const app = express();

const PORT = 5000;

app.get("/api/message",(req,res)=>{
    res.json({message:"Hello world"})
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    
});