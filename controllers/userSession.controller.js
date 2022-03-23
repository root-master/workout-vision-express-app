const { userSessionSchemaValidation } = require("../helpers/userSessionSchemaValidation");
const userSessionModel = require("../models/UserSession.model");
const createHttpError = require("http-errors");
const omit = require("lodash/omit");

exports.userSessionController = {
  getUserSessions: async (req, res, next) => {
    try {
      const allUserSessions = await userSessionModel.findAllUserSessions();
      res.status(202).json({ allUserSessions });
    } catch (error) {
      next(error);
    }
  },
  getUserSessionsByUserId: async (req, res, next) => {
    try {
      const { userId } = req.params;
      if (!userId)
        throw createHttpError.BadRequest("userID is required");
      const allUserSessions = await userSessionModel.findUserSessionByUserId(userId);
      if (!userId) throw createHttpError.NotFound("userId Not Found");
      res.status(202).json({ allUserSessions });
    } catch (error) {
      next(error);
    }
  },
  postUserSession: async (req, res, next) => {
    try {
      const userSessionData = await userSessionSchemaValidation().validateAsync(
        req.body,
        {
          abortEarly: true,
        }
      );
      const newUserSession = await userSessionModel.postUserSession(userSessionData);
      res.status(201).json({ newUerSessionData: newUserSession });
    } catch (error) {
      if (error.isJoi) {
        next(createHttpError.BadRequest(error.message));
      } else {
        next(error);
      }
    }
  },
  getUserSession: async (req, res, next) => {
    try {
      const { userSessionId } = req.params;
      if (!userSessionId)
        throw createHttpError.BadRequest("userSession ID not found");
      const userSession = await userSessionModel.findUserSessionById(userSessionId);
      if (!userSession) throw createHttpError.NotFound("userSession Not Found");
      res.status(200).json({ success: true, userSession });
    } catch (error) {
      next(error);
    }
  },
  deleteUserSession: async (req, res, next) => {
    try {
      const { userSessionId } = req.params;
      if (!userSessionId)
        throw createHttpError.BadRequest("userSession ID not found");
      const deletedUserSession = await userSessionModel.deleteUserSessionById(userSessionId);
      res.status(200).json({ deletedUserSession });
      s;
    } catch (error) {
      next(error);
    }
  },
  updateUserSession: async (req, res, next) => {
    try {
      const { userSession: formUserSession, userSessionId } = req.body;
      const userSession = await userSessionSchemaValidation().validateAsync(
        omit(formUserSession, ["createdAt", "updatedAt"])
      );
      const updatedUserSession = await userSessionModel.updateUserSessionById(
        userSession,
        userSessionId
      );
      if (!updatedUserSession)
        throw createHttpError.NotFound("userSession Not Found");
      res.status(200).json({ updatedUserSession });
    } catch (error) {
      next(error);
    }
  },
};
