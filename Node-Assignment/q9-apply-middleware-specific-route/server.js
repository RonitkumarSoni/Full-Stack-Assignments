const express = require("express");

const app = express();
const PORT = 5000;

const adminMiddleware = (req, res, next) => {
  console.log("Admin middleware executed");
  next();
};

app.get("/admin", adminMiddleware, (req, res) => {
  res.send("Welcome to admin route");
});

app.get("/", (req, res) => {
  res.send("Home route without admin middleware");
});

app.listen(PORT, () => {
  console.log(`Q09 server is running on port ${PORT}`);
});
