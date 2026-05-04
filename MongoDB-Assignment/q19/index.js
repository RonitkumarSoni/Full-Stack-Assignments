const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/q19-search-pagination");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

app.get("/users", async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const search = req.query.search || "";
    const skip = (page - 1) * limit;

    const query = {
      name: { $regex: search, $options: "i" }
    };

    const users = await User.find(query).skip(skip).limit(limit);
    const totalUsers = await User.countDocuments(query);

    res.json({
      page,
      limit,
      totalUsers,
      totalPages: Math.ceil(totalUsers / limit),
      users
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


app.get("/", (req, res) => {
  res.send("q19 server is running on port 3000");
});

app.listen(3000, () => console.log("Q19 server running on Port 3000"));


