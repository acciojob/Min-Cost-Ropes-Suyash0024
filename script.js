const express = require("express");
const app = express();
app.use(express.json());

app.post("/mincost", (req, res) => {
  const arr = req.body.arr;
  if (!Array.isArray(arr)) {
    return res.status(400).json({ message: null });
  }

  // Min cost using a for loop and sort
  arr.sort((a, b) => a - b);
  let totalCost = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    const first = arr.shift();
    const second = arr.shift();
    const cost = first + second;
    totalCost += cost;
    arr.push(cost);
    arr.sort((a, b) => a - b);
  }

  res.json({ message: totalCost });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
