const express = require("express");
const { WorkoutSessionController } = require("../controllers/WorkoutSession.controller");
const router = express.Router();

router.get("/", WorkoutSessionController.getWorkoutSessions);

router.get("/:workoutSessionId", WorkoutSessionController.getWorkoutSession);

router.post("/", WorkoutSessionController.postWorkoutSession);

router.delete("/:workoutSessionId", WorkoutSessionController.deleteWorkoutSession);

router.put("/", WorkoutSessionController.updateWorkoutSession);

module.exports = router;
