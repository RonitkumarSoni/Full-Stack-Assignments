const express = require("express");

const app = express();
const PORT = 5016;

const users = [
  { id: 1, name: "Ronit" },
  { id: 2, name: "Amit" }
];

app.get("/users/:id", (req, res) => {
  const user = users.find((item) => item.id === Number(req.params.id));

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

app.listen(PORT, () => {
  console.log(`Q16 server running on port ${PORT}`);
});
