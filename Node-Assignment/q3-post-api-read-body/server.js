const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.json());

app.post("/api/user", (req, res) => {
  const { name } = req.body;
  res.send(`Hello ${name}`);
});

app.listen(PORT, () => {
  console.log(`Q03 server is running on port ${PORT}`);
});
