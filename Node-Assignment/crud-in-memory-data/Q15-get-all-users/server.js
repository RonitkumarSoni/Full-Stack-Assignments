const express = require("express");

const app = express();
const PORT = 5015;

const users = [
  { id: 1, name: "Ronit" },
  { id: 2, name: "Amit" },
  { id: 3, name: "Priya" }
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Q15 server running on port ${PORT}`);
});
