const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = 5000;

mongoose.connect("mongodb://localhost:27017/testdb")
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model("employeeUsers", userSchema);

app.get("/add-users", async (req, res) => {
    await User.insertMany([
        {
            name: "Ronit",
            email: "ronit@gmail.com",
            password: "12345"
        },
        {
            name: "Aman",
            email: "aman@gmail.com",
            password: "54321"
        },
    ]);

    res.json({
        success: true,
        message: "Dummy Users Added"
    });
});

app.get("/users", async (req, res) => {
    const users = await User.find({}, "name email");

    res.status(200).json({
        success: true,
        data: users
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});