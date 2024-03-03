const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.post("/api/button-click", (req, res) => {
  const { buttonId } = req.body;
  const flag = buttonId === 2 ? false : true;
  res.json({ flag });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
