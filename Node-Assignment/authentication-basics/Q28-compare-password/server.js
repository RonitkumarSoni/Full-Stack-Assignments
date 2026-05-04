const express = require("express");
const bcrypt = require("bcryptjs");

const app = express();
const PORT = 5028;

app.use(express.json());

app.post("/compare-password", async (req, res) => {
  const { password, hashedPassword } = req.body;

  const isMatch = await bcrypt.compare(password, hashedPassword);

  res.json({ isMatch });
});

app.listen(PORT, () => {
  console.log(`Q28 server running on port ${PORT}`);
});
