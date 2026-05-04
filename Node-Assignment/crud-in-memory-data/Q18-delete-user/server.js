const express = require("express");

const app = express();
const PORT = 5018;

let users = [
  { id: 1, name: "Ronit" },
  { id: 2, name: "Amit" }
];

app.delete("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  users = users.filter((user) => user.id !== id);

  res.json({ message: "User deleted", users });
});

app.listen(PORT, () => {
  console.log(`Q18 server running on port ${PORT}`);
});
