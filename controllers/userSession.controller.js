const { userSessionSchemaValidation } = require("../helpers/userSessionSchemaValidation");
const userSessionModel = require("../models/userSession.model");
const createHttpError = require("http-errors");
const omit = require("lodash/omit");

exports.userSessionController = {
  getUserSessions: async (req, res, next) => {
    try {
      const allUserSessions = await userSessionModel.findAlluserSessions();
      res.status(202).json({ allUserSessions });
    } catch (error) {
      next(error);
    }
  },
  postuserSession: async (req, res, next) => {
    try {
      const userSessionData = await userSessionSchemaValidation().validateAsync(
        req.body,
        {
          abortEarly: true,
        }
      );
      const newUserSession = await userSessionModel.postuserSession(userSessionData);
      res.status(201).json({ newuserSessionData: newUserSession });
    } catch (error) {
      if (error.isJoi) {
        next(createHttpError.BadRequest(error.message));
      } else {
        next(error);
      }
    }
  },
  getuserSession: async (req, res, next) => {
    try {
      const { userSessionId } = req.params;
      if (!userSessionId)
        throw createHttpError.BadRequest("userSession ID not found");
      const userSession = await userSessionModel.finduserSessionById(userSessionId);
      if (!userSession) throw createHttpError.NotFound("userSession Not Found");
      res.status(200).json({ success: true, userSession });
    } catch (error) {
      next(error);
    }
  },
  deleteuserSession: async (req, res, next) => {
    try {
      const { userSessionId } = req.params;
      if (!userSessionId)
        throw createHttpError.BadRequest("userSession ID not found");
      const deletedUserSession = await userSessionModel.deleteuserSessionById(userSessionId);
      res.status(200).json({ deletedUserSession });
      s;
    } catch (error) {
      next(error);
    }
  },
  updateuserSession: async (req, res, next) => {
    try {
      const { userSession: formUserSession, userSessiontId } = req.body;
      const userSession = await userSessionSchemaValidation().validateAsync(
        omit(formUserSession, ["createdAt", "updatedAt"])
      );
      const updatedUserSession = await userSessionModel.updateuserSessionById(
        userSession,
        userSessiontId
      );
      if (!updatedUserSession)
        throw createHttpError.NotFound("userSession Not Found");
      res.status(200).json({ updatedUserSession });
    } catch (error) {
      next(error);
    }
  },
};
