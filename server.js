const express = require("express");
const cors = require("cors");
const createHttpError = require("http-errors");
const dotenv = require('dotenv');

const app = express();
dotenv.config();

// Routes
const movementRouter = require("./routes/movement.routes");
const movementVideoRouter = require("./routes/MovementVideo.routes")
const sessionRouter = require("./routes/session.routes");
const userSessionRouter = require("./routes/userSession.routes")
const userFeatureRouter = require("./routes/userFeature.routes")
const userFitnessStateGoal = require("./routes/userFitnessStateGoal.routes")

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/movement_videos", movementVideoRouter);
app.use("/movements", movementRouter);
app.use("/sessions", sessionRouter);
app.use("/user_sessions", userSessionRouter);
app.use("/user_features", userFeatureRouter);
app.use("/user_fitness_state_goal", userFitnessStateGoal);
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
