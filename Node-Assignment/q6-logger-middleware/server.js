const express = require("express");

const app = express();
const PORT = 5000;

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Logger middleware is working");
});

app.listen(PORT, () => {
  console.log(`Q06 server is running on port ${PORT}`);
});
