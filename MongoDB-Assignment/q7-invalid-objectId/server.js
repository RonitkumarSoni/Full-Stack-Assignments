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

const User = mongoose.model("objectidusers", userSchema);

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
        }
    ]);

    res.status(200).json({
        success: true,
        message: "Dummy Users Added"
    });

});

app.get("/users/:id", async (req, res) => {

    const userId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({
            success: false,
            message: "Invalid MongoDB ObjectId"
        });
    }

    const foundUser = await User.findById(userId);

    if (!foundUser) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    res.status(200).json({
        success: true,
        data: foundUser
    });

});

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});