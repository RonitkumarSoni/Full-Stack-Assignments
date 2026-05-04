const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.json());

const users = [];

app.post("/users", (req, res) => {
  const { name } = req.body;
  const user = {
    id: users.length + 1,
    name,
  };

  users.push(user);
  res.status(201).json(user);
});

app.listen(PORT, () => {
  console.log(`Q14 server is running on port ${PORT}`);
});
