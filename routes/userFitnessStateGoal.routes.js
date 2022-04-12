const express = require("express");
const { userFitnessStateGoalController } = require("../controllers/userFitnessStateGoal.controller");
const router = express.Router();

router.get("/", userFitnessStateGoalController.getUserFitnessStateGoals);

router.get("/:userFitnessStateGoalId", userFitnessStateGoalController.getUserFitnessStateGoal);

router.get("/user_id/:userId", userFitnessStateGoalController.getUserFitnessStateGoalsByUserId);

router.post("/", userFitnessStateGoalController.postUserFitnessStateGoal);

router.delete("/:userFitnessStateGoalId", userFitnessStateGoalController.deleteUserFitnessStateGoal);

router.put("/", userFitnessStateGoalController.updateUserFitnessStateGoal);

module.exports = router;
