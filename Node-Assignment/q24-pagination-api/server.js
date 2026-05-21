const express = require("express");

const app = express();
const PORT = 5000;

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
  { id: 5, name: "Eva" },
  { id: 6, name: "Frank" },
];

app.get("/users", (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 2;
  const startIndex = (page - 1) * limit;
  const paginatedUsers = users.slice(startIndex, startIndex + limit);

  res.json({
    page,
    limit,
    data: paginatedUsers,
  });
});

app.listen(PORT, () => {
  console.log(`Q24 server is running on port ${PORT}`);
});
