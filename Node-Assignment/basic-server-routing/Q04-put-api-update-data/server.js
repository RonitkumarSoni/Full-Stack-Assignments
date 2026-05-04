const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.json());

let user = {
  id: 1,
  name: "John",
};

app.put("/api/user", (req, res) => {
  const { name } = req.body;
  user.name = name;
  res.json(user);
});

app.listen(PORT, () => {
  console.log(`Q04 server is running on port ${PORT}`);
});
