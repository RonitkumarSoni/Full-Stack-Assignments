const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/q10-dynamic-query");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  city: String
});

const User = mongoose.model("User", userSchema);

app.get("/users", async (req, res) => {
  try {
    const query = {};

    if (req.query.name) {
      query.name = { $regex: req.query.name, $options: "i" };
    }

    if (req.query.age) {
      query.age = Number(req.query.age);
    }

    if (req.query.city) {
      query.city = req.query.city;
    }

    const users = await User.find(query);
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


app.get("/", (req, res) => {
  res.send("q10 server is running on port 3000");
});

app.listen(3000, () => console.log("Q10 server running on Port 3000"));


