const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/q30-large-data");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, index: true },
    email: String,
    city: { type: String, index: true },
    age: Number
  },
  { timestamps: true }
);

userSchema.index({ createdAt: -1 });

const User = mongoose.model("User", userSchema);

app.get("/users", async (req, res) => {
  try {
    const limit = Number(req.query.limit) || 20;

    const users = await User.find()
      .select("name email city age createdAt")
      .sort({ createdAt: -1 })
      .limit(limit)
      .lean();

    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/users/cursor", async (req, res) => {
  try {
    const query = {};

    if (req.query.cursor) {
      query._id = { $lt: req.query.cursor };
    }

    const users = await User.find(query)
      .sort({ _id: -1 })
      .limit(20)
      .lean();

    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


app.get("/", (req, res) => {
  res.send("q30 server is running on port 3000");
});

app.listen(3000, () => console.log("Q30 server running on Port 3000"));


