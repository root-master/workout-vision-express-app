const { sessionSchemaValidation } = require("../helpers/sessionSchemaValidation");
const sessionModel = require("../models/Session.model");
const createHttpError = require("http-errors");
const omit = require("lodash/omit");

exports.sessionController = {
  getSessions: async (req, res, next) => {
    try {
      const allSessions = await sessionModel.findAllSessions();
      res.status(202).json({ allSessions });
    } catch (error) {
      next(error);
    }
  },
  postSession: async (req, res, next) => {
    try {
      const sessionData = await sessionSchemaValidation().validateAsync(
        req.body,
        {
          abortEarly: true,
        }
      );
      const newSession = await sessionModel.postSession(sessionData);
      res.status(201).json({ newSessionData: newSession });
    } catch (error) {
      if (error.isJoi) {
        next(createHttpError.BadRequest(error.message));
      } else {
        next(error);
      }
    }
  },
  getSession: async (req, res, next) => {
    try {
      const { sessionId } = req.params;
      if (!sessionId)
        throw createHttpError.BadRequest("Session ID not found");
      const session = await sessionModel.findSessionById(sessionId);
      if (!session) throw createHttpError.NotFound("Session Not Found");
      res.status(200).json({ success: true, session });
    } catch (error) {
      next(error);
    }
  },
  deleteSession: async (req, res, next) => {
    try {
      const { sessionId } = req.params;
      if (!sessionId)
        throw createHttpError.BadRequest("Session ID not found");
      const deletedSession = await sessionModel.deleteSessionById(sessionId);
      res.status(200).json({ deletedSession });
      s;
    } catch (error) {
      next(error);
    }
  },
  updateSession: async (req, res, next) => {
    try {
      const { session: formSession, sessiontId } = req.body;
      const session = await sessionSchemaValidation().validateAsync(
        omit(formSession, ["createdAt", "updatedAt"])
      );
      const updatedSession = await sessionModel.updateSessionById(
        session,
        sessiontId
      );
      if (!updatedSession)
        throw createHttpError.NotFound("Session Not Found");
      res.status(200).json({ updatedSession });
    } catch (error) {
      next(error);
    }
  },
};
