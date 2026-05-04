const express = require("express");

const app = express();
const PORT = 5023;

app.get("/api/users", (req, res) => {
  res.json({
    success: true,
    data: [{ id: 1, name: "Ronit" }],
    message: "Users fetched successfully"
  });
});

app.listen(PORT, () => {
  console.log(`Q23 server running on port ${PORT}`);
});
