const jwt = require("jsonwebtoken");

const user = {
    id:1,
    name:"Ronit",
    email:"ronit@example.com"
}

const secretKey = "mysecretKey";

const token = jwt.sign(user,secretKey,{
    expiresIn:"1h"
})

console.log("Generated Token :",token);




