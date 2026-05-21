const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = 5000;

mongoose.connect("mongodb://localhost:27017/testdb")
    .then(()=>console.log("MongoDb Connected"))
    .catch((err)=>console.log(err));


const userSchema = new mongoose.Schema({
    name:String,
    age:Number
})    

const User = mongoose.model("User",userSchema);


app.get("/users",async(req,res)=>{
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    
    const skip = (page - 1) * limit;
    
    const users = await User.find().skip(skip).limit(limit);
    
    res.status(200).json({
        sucess:true,
        currentPage:page,
        totalResults:users.length,
        data:users
    });
});

app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`);
    
});
