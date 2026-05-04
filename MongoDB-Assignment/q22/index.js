const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/q22-age-range");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const User = mongoose.model("User", userSchema);

app.get("/users", async (req, res) => {
  try {
    const minAge = Number(req.query.minAge) || 20;
    const maxAge = Number(req.query.maxAge) || 30;

    const users = await User.find({
      age: { $gte: minAge, $lte: maxAge }
    });

    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


app.get("/", (req, res) => {
  res.send("q22 server is running on port 3000");
});

app.listen(3000, () => console.log("Q22 server running on Port 3000"));


