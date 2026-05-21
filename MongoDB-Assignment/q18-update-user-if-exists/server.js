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

const User = mongoose.model("deleteusers", userSchema);

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
            name: "Rohan",
            age: 22
        },
    ]);

    res.json({
        success: true,
        message: "Dummy Users Added"
    });
});

app.delete("/users/:id", async (req, res) => {
    const userId = req.params.id;

    await User.findByIdAndDelete(userId);

    res.status(200).json({
        success: true,
        message: "User Deleted Successfully"
    });
});

app.listen(PORT, () => {
    console.log(`Server is Running on Port ${PORT}`);
});