const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/q29-all-in-one");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    age: Number,
    city: String
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

app.get("/users", async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const query = {};

    if (req.query.name) {
      query.name = { $regex: req.query.name, $options: "i" };
    }

    if (req.query.city) {
      query.city = req.query.city;
    }

    if (req.query.minAge || req.query.maxAge) {
      query.age = {};
      if (req.query.minAge) query.age.$gte = Number(req.query.minAge);
      if (req.query.maxAge) query.age.$lte = Number(req.query.maxAge);
    }

    const sortBy = req.query.sortBy || "createdAt";
    const order = req.query.order === "asc" ? 1 : -1;

    const users = await User.find(query)
      .sort({ [sortBy]: order })
      .skip(skip)
      .limit(limit);

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
  res.send("q29 server is running on port 3000");
});

app.listen(3000, () => console.log("Q29 server running on Port 3000"));


