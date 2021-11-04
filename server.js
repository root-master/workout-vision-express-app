const express = require("express");
const cors = require("cors");
const createHttpError = require("http-errors");

const app = express();

// Routes
const movementRouter = require("./routes/movement.routes");

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/movements", movementRouter);

// FILES:
const dbConnect = require("./helpers/db");
const port = process.env.PORT || 5000;

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
