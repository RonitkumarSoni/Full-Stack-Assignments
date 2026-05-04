const express = require("express");

const app = express();
const PORT = 5013;

app.use(express.json());

app.post("/api/user", (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ message: "Name is required" });
  }

  res.status(200).json({ message: "Success", name: req.body.name });
});

app.listen(PORT, () => {
  console.log(`Q13 server running on port ${PORT}`);
});
