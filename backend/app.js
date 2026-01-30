const express = require("express");
const cors = require("cors");
const alertRoutes = require("./routes/alertRoutes");
const logger = require("./middlewares/logger");

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/alerts", alertRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
