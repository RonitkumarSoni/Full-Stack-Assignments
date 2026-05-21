const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/q12-create-post");

const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

app.post("/posts", async (req, res) => {
  try {
    const { title, content, userId } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const post = await Post.create({
      title,
      content,
      user: user._id
    });

    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


app.get("/", (req, res) => {
  res.send("q12 server is running on port 3000");
});

app.listen(3000, () => console.log("Q12 server running on Port 3000"));


