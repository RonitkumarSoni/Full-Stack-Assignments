const express = require("express");

const app = express();
const PORT = 5002;

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log(`Q02 server running on port ${PORT}`);
});
