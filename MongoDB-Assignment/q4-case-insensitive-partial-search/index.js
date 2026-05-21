const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/q04-search");

const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

const User = mongoose.model("User", userSchema);

app.get("/users/search", async (req, res) => {
  try {
    const name = req.query.name || "";

    const users = await User.find({
      name: { $regex: name, $options: "i" }
    });

    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


app.get("/", (req, res) => {
  res.send("q04 server is running on port 3000");
});

app.listen(3000, () => console.log("Q4 server running on Port 3000"));


