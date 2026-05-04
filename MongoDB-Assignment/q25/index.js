// Example project structure for Express and MongoDB

/*
project
  models
    User.js
    Post.js
  controllers
    userController.js
    postController.js
  routes
    userRoutes.js
    postRoutes.js
  middleware
    authMiddleware.js
    errorMiddleware.js
  config
    db.js
  server.js
*/

// server.js
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/q25-structure");

app.get("/", (req, res) => {
  res.json({ message: "Routes, controllers and models should be separated" });
});

app.listen(3000, () => console.log("Q25 server running on Port 3000"));

