const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = 5000;

mongoose.connect("mongodb://localhost:27017/testdb")
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const User = mongoose.model("searchusers", userSchema);

app.get("/add-users", async (req, res) => {
    await User.insertMany([
        {
            name: "Ronit",
            age: 19
        },
        {
            name: "Aman",
            age: 21
        },
        {
            name: "Rahul",
            age: 22
        },
    ]);

    res.json({
        success: true,
        message: "Dummy Users Added"
    });
});

app.get("/users/search/:name", async (req, res) => {
    const userName = req.params.name;

    const users = await User.find({
        name: userName
    });

    res.status(200).json({
        success: true,
        data: users
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});