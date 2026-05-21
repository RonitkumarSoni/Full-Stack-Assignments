const express = require("express");

const app = express();
const PORT = 5000;

app.get("/async-data", async (req, res) => {
  const result = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: "Async data fetched successfully" });
    }, 300);
  });

  res.json(result);
});

app.listen(PORT, () => {
  console.log(`Q19 server is running on port ${PORT}`);
});
