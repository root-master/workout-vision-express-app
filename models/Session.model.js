const SessionDB = require("../schema/Session.schema");

module.exports = class sessionModel {
  static async findAllSessions() {
    return await SessionDB.find({}).sort({"sessionMetadata.sessionName": 1});
  }

  static async postSession(newSession) {
    return await SessionDB.create(newSession);
  }

  static async findSessionById(sessionId) {
    return await SessionDB.findById(sessionId, { _id: 0, __v: 0 });
  }

  static async deleteSessionById(sessionId) {
    return await SessionDB.findByIdAndDelete(sessionId);
  }

  static async updateSessionById(session, sessionId) {
    return await SessionDB.findByIdAndUpdate(sessionId, session, {
      strict: true,
      returnOriginal: false,
    });
  }
};
