const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/testdb")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  }
});

const User = mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.send("Q01 MongoDB server is running");
});

app.get("/register", (req, res) => {
  res.json({
    message: "Use POST /register with email in body",
    sampleBody: { email: "Test@gmail.com" }
  });
});

app.post("/register", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const user = new User({ email });
    await user.save();

    res.status(201).json({
      message: "User registered successfully",
      user
    });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ message: "Email already exists" });
    }
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

