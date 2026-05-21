const express = require("express");

const app = express();
const PORT = 5000;

app.get("/search", (req, res) => {
  const { name } = req.query;
  res.json({ name });
});

app.listen(PORT, () => {
  console.log(`Q10 server is running on port ${PORT}`);
});
