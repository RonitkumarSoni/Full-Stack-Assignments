const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

function auth(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Token required" });
  }

  try {
    const decoded = jwt.verify(token, "mysecretkey");
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
}

app.get("/profile", auth, (req, res) => {
  res.json({ message: "Protected route", user: req.user });
});


app.get("/", (req, res) => {
  res.send("q27 server is running on port 3000");
});

app.listen(3000, () => console.log("Q27 server running on Port 3000"));


