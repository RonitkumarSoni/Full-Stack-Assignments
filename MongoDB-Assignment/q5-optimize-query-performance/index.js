const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/q05-performance");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, index: true },
    email: { type: String, index: true },
    city: { type: String, index: true },
    age: Number,
    isDeleted: { type: Boolean, default: false, index: true }
  },
  { timestamps: true }
);

userSchema.index({ isDeleted: 1, createdAt: -1 });

const User = mongoose.model("User", userSchema);

app.get("/users", async (req, res) => {
  try {
    const users = await User.find({ isDeleted: false })
      .select("name email city age createdAt")
      .sort({ createdAt: -1 })
      .limit(20)
      .lean();

    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


app.get("/", (req, res) => {
  res.send("q05 server is running on port 3000");
});

app.listen(3000, () => console.log("Q5 server running on Port 3000"));


