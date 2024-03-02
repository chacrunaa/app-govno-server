const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.post('/api/button-click', (req, res) => {
  const { buttonId } = req.body;
  const flag = buttonId === 2 ? false : true;
  res.json({ flag });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});