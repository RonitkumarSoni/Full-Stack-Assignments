const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/q24-duplicate-request");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  name: String
});

const User = mongoose.model("User", userSchema);

app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ message: "User already exists" });
    }

    res.status(500).json({ message: "Server error" });
  }
});


app.get("/", (req, res) => {
  res.send("q24 server is running on port 3000");
});

app.listen(3000, () => console.log("Q24 server running on Port 3000"));


