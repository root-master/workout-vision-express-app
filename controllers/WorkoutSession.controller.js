const { WorkoutSessionSchemaValidation } = require("../validations/WorkoutSessionSchemaValidation");
const WorkoutSessionModel = require("../models/WorkoutSession.model");
const createHttpError = require("http-errors");
const omit = require("lodash/omit");

exports.WorkoutSessionController = {
  getWorkoutSessions: async (req, res, next) => {
    try {
      const allWorkoutSessions = await WorkoutSessionModel.findAllWorkoutSessions();
      res.status(202).json({ allWorkoutSessions });
    } catch (error) {
      next(error);
    }
  },
  postWorkoutSession: async (req, res, next) => {
    try {
      const WorkoutSessionData = await WorkoutSessionSchemaValidation().validateAsync(
        req.body,
        {
          abortEarly: true,
        }
      );
      const newWorkoutSession = await WorkoutSessionModel.postWorkoutSession(WorkoutSessionData);
      res.status(201).json({ newWorkoutSessionData: newWorkoutSession });
    } catch (error) {
      if (error.isJoi) {
        next(createHttpError.BadRequest(error.message));
      } else {
        next(error);
      }
    }
  },
  getWorkoutSession: async (req, res, next) => {
    try {
      const { workoutSessionId } = req.params;
      if (!workoutSessionId)
        throw createHttpError.BadRequest("WorkoutSession ID not found");
      const WorkoutSession = await WorkoutSessionModel.findWorkoutSessionById(workoutSessionId);
      if (!WorkoutSession) throw createHttpError.NotFound("WorkoutSession Not Found");
      res.status(200).json({ success: true, WorkoutSession });
    } catch (error) {
      next(error);
    }
  },
  deleteWorkoutSession: async (req, res, next) => {
    try {
      const { workoutSessionId } = req.params;
      if (!workoutSessionId)
        throw createHttpError.BadRequest("WorkoutSession ID not found");
      const deletedWorkoutSession = await WorkoutSessionModel.deleteWorkoutSessionById(workoutSessionId);
      res.status(200).json({ deletedWorkoutSession });
    } catch (error) {
      next(error);
    }
  },
  updateWorkoutSession: async (req, res, next) => {
    try {
      const { WorkoutSession: formWorkoutSession, WorkoutSessiontId } = req.body;
      const WorkoutSession = await WorkoutSessionSchemaValidation().validateAsync(
        omit(formWorkoutSession, ["createdAt", "updatedAt"])
      );
      const updatedWorkoutSession = await WorkoutSessionModel.updateWorkoutSessionById(
        WorkoutSession,
        WorkoutSessiontId
      );
      if (!updatedWorkoutSession)
        throw createHttpError.NotFound("WorkoutSession Not Found");
      res.status(200).json({ updatedWorkoutSession });
    } catch (error) {
      next(error);
    }
  },
};
