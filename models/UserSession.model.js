const userSessionDB = require("../schema/userSession.schema");

module.exports = class userSessionModel {
  static async findAllUserSessions() {
    return await userSessionDB.find({});
  }

  static async postUserSession(newUserSession) {
    return await userSessionDB.create(newUserSession);
  }

  static async findUserSessionById(userSessionId) {
    return await userSessionDB.findById(userSessionId, { _id: 0, __v: 0 });
  }

  static async deleteUserSessionById(userSessionId) {
    return await userSessionDB.findByIdAndDelete(userSessionId);
  }

  static async updateUserSessionById(userSession, userSessionId) {
    return await userSessionDB.findByIdAndUpdate(userSessionId, userSession, {
      strict: true,
      returnOriginal: false,
    });
  }
};
