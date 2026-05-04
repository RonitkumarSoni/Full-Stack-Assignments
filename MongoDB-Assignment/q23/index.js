const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/q23-soft-delete-api");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  isDeleted: { type: Boolean, default: false },
  deletedAt: { type: Date, default: null }
});

const User = mongoose.model("User", userSchema);

app.get("/users", async (req, res) => {
  const users = await User.find({ isDeleted: false });
  res.json(users);
});

app.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true, deletedAt: new Date() },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted from API but data is still in DB" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


app.get("/", (req, res) => {
  res.send("q23 server is running on port 3000");
});

app.listen(3000, () => console.log("Q23 server running on Port 3000"));


