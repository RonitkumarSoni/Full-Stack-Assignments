const express = require("express");

const app = express();
const PORT = 5026;

const users = [
  { id: 1, name: "Ronit", age: 22 },
  { id: 2, name: "Amit", age: 20 },
  { id: 3, name: "Priya", age: 25 }
];

app.get("/users", (req, res) => {
  const order = req.query.order || "asc";

  const sortedUsers = [...users].sort((a, b) => {
    if (order === "desc") {
      return b.age - a.age;
    }

    return a.age - b.age;
  });

  res.json(sortedUsers);
});

app.listen(PORT, () => {
  console.log(`Q26 server running on port ${PORT}`);
});
