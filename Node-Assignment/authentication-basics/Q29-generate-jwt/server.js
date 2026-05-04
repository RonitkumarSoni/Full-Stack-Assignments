const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 5029;

app.use(express.json());

app.post("/login", (req, res) => {
  const { email } = req.body;

  const token = jwt.sign({ email }, "mysecretkey", { expiresIn: "1h" });

  res.json({ token });
});

app.listen(PORT, () => {
  console.log(`Q29 server running on port ${PORT}`);
});
