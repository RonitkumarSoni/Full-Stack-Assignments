const express = require("express");

const app = express();
const PORT = 5011;

app.get("/user/:id", (req, res) => {
  res.json({ id: req.params.id });
});

app.listen(PORT, () => {
  console.log(`Q11 server running on port ${PORT}`);
});
