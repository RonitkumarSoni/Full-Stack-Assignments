const express = require("express");

const app = express();
const PORT = 5000;

app.use((req, res, next) => {
  console.log(`Time: ${new Date().toISOString()}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Time logger middleware is working");
});

app.listen(PORT, () => {
  console.log(`Q07 server is running on port ${PORT}`);
});
