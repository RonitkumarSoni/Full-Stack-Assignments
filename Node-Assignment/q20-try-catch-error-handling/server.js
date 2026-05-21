const express = require("express");

const app = express();
const PORT = 5000;

app.get("/error-demo", (req, res) => {
  try {
    throw new Error("This is a test error");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Q20 server is running on port ${PORT}`);
});
