const express = require("express");
const cors = require("cors");
const createHttpError = require("http-errors");
const dotenv = require('dotenv');

const app = express();
dotenv.config();

// Routes
const movementRouter = require("./routes/movement.routes");
const sessionRouter = require("./routes/session.routes");
// Middlewares
app.use(express.json());
app.use(cors());
app.use("/movements", movementRouter);
app.use("/sessions", sessionRouter);
// FILES:
const dbConnect = require("./helpers/db");
const port = process.env.PORT || 5001;

app.use("*", (req, res, next) => {
  next(createHttpError.NotFound());
});

app.use((err, req, res, next) => {
  res.statusCode = err.statusCode || 500;
  res.send({
    error: {
      status: err.status,
      message: err.message,
    },
  });
});

app.listen(port, async () => {
  console.log(`Server is up and running on : 🚀 http://localhost:${port}`);
  await dbConnect();
});
