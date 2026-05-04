const express = require("express");

const app = express();
const PORT = 5005;

app.delete("/api/user", (req, res) => {
  res.json({ message: "User deleted" });
});

app.listen(PORT, () => {
  console.log(`Q05 server running on port ${PORT}`);
});
