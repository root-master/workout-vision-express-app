const express = require("express");
const cors = require("cors");
const createHttpError = require("http-errors");
const dotenv = require('dotenv');

const app = express();
const http = require('http');
const server = http.createServer(app);
dotenv.config();
// Middlewares
app.use(express.json());
app.use(cors());


// Routes
const movementRouter = require("./routes/movement.routes");
const movementVideoRouter = require("./routes/MovementVideo.routes")
const sessionRouter = require("./routes/session.routes");
const userSessionRouter = require("./routes/userSession.routes")
const userFeatureRouter = require("./routes/userFeature.routes")
const userFitnessStateGoal = require("./routes/userFitnessStateGoal.routes")
const WorkoutSessionRouter = require("./routes/WorkoutSession.routes")
app.get("/", (req, res) => {
	res.send("Server is running");
});
app.use("/movement_videos", movementVideoRouter);
app.use("/movements", movementRouter);
app.use("/sessions", sessionRouter);
app.use("/workout_sessions", WorkoutSessionRouter);
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

const io = require("socket.io")(server, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"],
	},
});

io.on("connection", (socket) => {
  console.log('a user connected: ' + socket.id);
	socket.emit("me", socket.id);

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded");
	});

	socket.on("callUser", ({ userToCall, signalData, from, name }) => {
		io.to(userToCall).emit("callUser", { signal: signalData, from, name });
	});

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal);
	});
});

app.listen(port, async () => {
  console.log(`Server is up and running on : 🚀 http://localhost:${port}`);
  await dbConnect();
});
