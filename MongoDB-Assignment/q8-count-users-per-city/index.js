const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/q08-city-count");

const userSchema = new mongoose.Schema({
  name: String,
  city: String,
  isDeleted: { type: Boolean, default: false }
});

const User = mongoose.model("User", userSchema);

app.get("/users/count-by-city", async (req, res) => {
  try {
    const result = await User.aggregate([
      { $match: { isDeleted: false } },
      { $group: { _id: "$city", totalUsers: { $sum: 1 } } },
      { $sort: { totalUsers: -1 } }
    ]);

    res.json(result);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


app.get("/", (req, res) => {
  res.send("q08 server is running on port 3000");
});

app.listen(3000, () => console.log("Q8 server running on Port 3000"));


