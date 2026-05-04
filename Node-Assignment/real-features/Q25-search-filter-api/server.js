const express = require("express");

const app = express();
const PORT = 5000;

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
  { id: 5, name: "Eva" }
];

app.get("/users", (req, res) => {
  const search = (req.query.name || "").toLowerCase();
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search)
  );

  res.json(filteredUsers);
});

app.listen(PORT, () => {
  console.log(`Q25 server is running on port ${PORT}`);
});
