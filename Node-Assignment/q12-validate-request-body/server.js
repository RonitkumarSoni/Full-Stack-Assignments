const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.json());

app.post("/api/user", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  res.json({ message: `Hello ${name}` });
});

app.listen(PORT, () => {
  console.log(`Q12 server is running on port ${PORT}`);
});
