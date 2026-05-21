const express = require("express");

const app = express();
const PORT = 5000;

app.get("/error-demo", (req, res, next) => {
  next(new Error("Global error handler test"));
});

app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Q21 server is running on port ${PORT}`);
});
