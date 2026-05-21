const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/q28-validation-middleware");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const User = mongoose.model("User", userSchema);

function validateUser(req, res, next) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Name, email and password are required" });
  }

  next();
}

app.post("/users", validateUser, async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
});


app.get("/", (req, res) => {
  res.send("q28 server is running on port 3000");
});

app.listen(3000, () => console.log("Q28 server running on Port 3000"));


