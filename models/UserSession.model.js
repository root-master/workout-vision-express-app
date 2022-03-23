const userSessionDB = require("../schema/UserSession.schema");

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

  static async findUserSessionByUserId(userId) {
    return await userSessionDB.find( {"user.sub": userId} ).sort( {"createdAt": -1} );
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
