const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/q26-errors");

app.get("/error", (req, res, next) => {
  const error = new Error("Something went wrong");
  error.statusCode = 400;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Server error"
  });
});


app.get("/", (req, res) => {
  res.send("q26 server is running on port 3000");
});

app.listen(3000, () => console.log("Q26 server running on Port 3000"));


