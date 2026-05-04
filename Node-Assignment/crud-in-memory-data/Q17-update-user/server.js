const express = require("express");

const app = express();
const PORT = 5017;

app.use(express.json());

const users = [
  { id: 1, name: "Ronit" },
  { id: 2, name: "Amit" }
];

app.put("/users/:id", (req, res) => {
  const user = users.find((item) => item.id === Number(req.params.id));

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.name = req.body.name;
  res.json(user);
});

app.listen(PORT, () => {
  console.log(`Q17 server running on port ${PORT}`);
});
