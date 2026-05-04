const express = require("express");
const app = express();

app.delete("/user/delete", (req, res) => {
  res.status(200).json({ message: "User Deleted" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});