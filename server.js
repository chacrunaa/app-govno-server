const express = require("express");
const { createLogger, transports } = require("winston");
const cors = require("cors");
const app = express();
const PORT = 8080;

app.use(express.json());

app.use((err, req, res, next) => {
  console.error(err.stack);
  logger.error(`Error occurred: ${err.message}`);
  res.status(500).send("Internal Server Error");
});
app.use(cors());

const logger = createLogger({
  transports: [new transports.File({ filename: "logs/server.log" })],
});

app.post("/api/button-click", (req, res) => {
  const { buttonId } = req.body;
  const flag = buttonId === 2 ? false : true;

  logger.info();
  res.json({ flag });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
