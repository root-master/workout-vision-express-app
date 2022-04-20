const { userFitnessStateGoalSchemaValidation } = require("../helpers/userFitnessStateGoalSchemaValidation");
const userFitnessStateGoalModel = require("../models/UserFitnessStateGoal.model");
const createHttpError = require("http-errors");
const omit = require("lodash/omit");

exports.userFitnessStateGoalController = {
  getUserFitnessStateGoals: async (req, res, next) => {
    try {
      const allUserFitnessStateGoals = await userFitnessStateGoalModel.findAllUserFitnessStateGoals();
      res.status(202).json({ allUserFitnessStateGoals });
    } catch (error) {
      next(error);
    }
  },
  getUserFitnessStateGoalsByUserId: async (req, res, next) => {
    try {
      const { userId } = req.params;
      if (!userId)
        throw createHttpError.BadRequest("userID is required");
      const allUserFitnessStateGoals = await userFitnessStateGoalModel.findUserFitnessStateGoalByUserId(userId);
      if (!userId) throw createHttpError.NotFound("userId Not Found");
      res.status(202).json({ allUserFitnessStateGoals });
    } catch (error) {
      next(error);
    }
  },
  postUserFitnessStateGoal: async (req, res, next) => {
    try {
      const userFitnessStateGoalData = await userFitnessStateGoalSchemaValidation().validateAsync(
        req.body,
        {
          abortEarly: true,
        }
      );
      const newUserFitnessStateGoal = await userFitnessStateGoalModel.postUserFitnessStateGoal(userFitnessStateGoalData);
      res.status(201).json({ newUerSessionData: newUserFitnessStateGoal });
    } catch (error) {
      if (error.isJoi) {
        next(createHttpError.BadRequest(error.message));
      } else {
        next(error);
      }
    }
  },
  getUserFitnessStateGoal: async (req, res, next) => {
    try {
      const { userFitnessStateGoalId } = req.params;
      if (!userFitnessStateGoalId)
        throw createHttpError.BadRequest("userFitnessStateGoal ID not found");
      const userFitnessStateGoal = await userFitnessStateGoalModel.findUserFitnessStateGoalById(userFitnessStateGoalId);
      if (!userFitnessStateGoal) throw createHttpError.NotFound("userFitnessStateGoal Not Found");
      res.status(200).json({ success: true, userFitnessStateGoal });
    } catch (error) {
      next(error);
    }
  },
  deleteUserFitnessStateGoal: async (req, res, next) => {
    try {
      const { userFitnessStateGoalId } = req.params;
      if (!userFitnessStateGoalId)
        throw createHttpError.BadRequest("userFitnessStateGoal ID not found");
      const deletedUserFitnessStateGoal = await userFitnessStateGoalModel.deleteUserFitnessStateGoalById(userFitnessStateGoalId);
      res.status(200).json({ deletedUserFitnessStateGoal });
      s;
    } catch (error) {
      next(error);
    }
  },
  updateUserFitnessStateGoal: async (req, res, next) => {
    try {
      const { userFitnessStateGoal: formUserFitnessStateGoal, userFitnessStateGoalId } = req.body;
      const userFitnessStateGoal = await userFitnessStateGoalSchemaValidation().validateAsync(
        omit(formUserFitnessStateGoal, ["createdAt", "updatedAt"])
      );
      const updatedUserFitnessStateGoal = await userFitnessStateGoalModel.updateUserFitnessStateGoalById(
        userFitnessStateGoal,
        userFitnessStateGoalId
      );
      if (!updatedUserFitnessStateGoal)
        throw createHttpError.NotFound("userFitnessStateGoal Not Found");
      res.status(200).json({ updatedUserFitnessStateGoal });
    } catch (error) {
      next(error);
    }
  },
};
