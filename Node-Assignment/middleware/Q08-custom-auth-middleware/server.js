const express = require("express");

const app = express();
const PORT = 5000;

const checkToken = (req, res, next) => {
  if (req.query.token !== "123") {
    return res.status(401).send("Access denied");
  }

  next();
};

app.get("/secure-data", checkToken, (req, res) => {
  res.send("Secure data");
});

app.listen(PORT, () => {
  console.log(`Q08 server is running on port ${PORT}`);
});
