const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/q15-username");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  usernameLower: { type: String, unique: true },
  email: String
});

userSchema.pre("save", function (next) {
  this.usernameLower = this.username.toLowerCase();
  next();
});

const User = mongoose.model("User", userSchema);

app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ message: "Username already exists" });
    }
    res.status(500).json({ message: "Server error" });
  }
});


app.get("/", (req, res) => {
  res.send("q15 server is running on port 3000");
});

app.listen(3000, () => console.log("Q15 server running on Port 3000"));


