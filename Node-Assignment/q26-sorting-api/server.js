const express = require("express");

const app = express();

const PORT = 5000;

const users = [
    {id:1, name:"Ronit",age:22},
    {id:2, name:"Aman",age:19},
    {id:3, name:"Rahul",age:25},
]

app.get("/users",(req,res)=>{
    const order = req.query.order;

    let sortedUsers = [...users];

    if(order === "asc"){
        sortedUsers.sort((a,b)=>a.age-b.age);
    }
    else if(order === "desc"){
        sortedUsers.sort((a,b)=>b.age-a.age)
    }

    res.status(200).json({
        sucess:true,
        data:sortedUsers
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`);
    
})