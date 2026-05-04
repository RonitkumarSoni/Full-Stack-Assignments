const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/q20-last-five");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

app.get("/users/last-five", async (req, res) => {
  try {
    const users = await User.find()
      .sort({ createdAt: -1 })
      .limit(5);

    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


app.get("/", (req, res) => {
  res.send("q20 server is running on port 3000");
});

app.listen(3000, () => console.log("Q20 server running on Port 3000"));


