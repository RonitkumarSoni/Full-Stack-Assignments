const express = require("express");
const bcrypt = require("bcryptjs");

const app = express();
const PORT = 5000;

app.use(express.json());

app.post("/hash-password", async (req, res) => {
  const { password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  res.json({ hashedPassword });
});

app.listen(PORT, () => {
  console.log(`Q27 server is running on port ${PORT}`);
});
